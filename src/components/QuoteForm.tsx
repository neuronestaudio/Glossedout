import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';
import { pushGtmEvent } from '../lib/gtm';
import { createSubmissionId, getStoredAttribution } from '../lib/attribution';

const GHL_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/ed6fxFrV8P1iGtkwL7D7/webhook-trigger/I3moCd8GTaDTsQUIdzvF';

/* Without this a hung request never settles, so the button would sit on
   "Processing…" forever and the visitor would never see a way to retry. */
const REQUEST_TIMEOUT_MS = 10_000;

const CONTACT_PHONE = '0481 327 250';

/* Long enough that the visitor sees their choice highlight before the step
   changes — advancing instantly reads as though the click did something else.
   Kept tight because the outgoing step adds its own beat on top. */
const AUTO_ADVANCE_MS = 200;

/* The outgoing step clears before the incoming one is mounted. Short and
   sharply eased — this half is "get out of the way", not a feature. Must stay
   in step with the .qf-step.is-out animation duration in index.css. */
const STEP_OUT_MS = 130;

/**
 * Failure logging, deliberately free of personal information — what went wrong,
 * how long it took, and which page it happened on. Never the name, phone,
 * email, postcode or free-text message.
 */
function logSubmitFailure(detail: {
  reason: 'http_error' | 'timeout' | 'network_error';
  status: number | null;
  durationMs: number;
  page: string;
  service: string;
}) {
  console.warn('[quote] submission failed', detail);
}

// `value` is sent to GHL and MUST match the dropdown option's Value column exactly
// (not its label) or the custom field silently saves blank. `label` is what we show
// on the site and send as *Label for readable notes.
const BUDGET_OPTIONS = [
  { label: 'Entry Level (Under $1000)', value: 'entry_level_under_1000' },
  { label: 'Standard Range ($1000 - $2500)', value: 'standard_range_1000__2500' },
  { label: 'Elite Protection ($2,500+)', value: 'elite_protection_2500' },
];

const SERVICE_OPTIONS = [
  { label: 'Onsite - Drop my car off', value: 'drop_my_car_off' },
  { label: 'Request mobile service at my postcode', value: 'mobile_service' },
];

/* Sent as the `service` field. These three strings are already what GHL receives
   from the page-level defaultService prop, so the mapping is unchanged — do not
   introduce new values without checking whether `service` is a dropdown there. */
const SERVICE_CHOICES = [
  { value: 'Car Detailing', hint: 'Hand wash, interior steam clean, full reset' },
  { value: 'Paint Correction', hint: 'Machine polishing to cut swirls and restore gloss' },
  { value: 'Ceramic Coating', hint: 'Long-term paint protection, up to 10 years' },
];

const MOBILE = 'mobile_service';

/* Kept short deliberately: the quote-page card is ~324px wide on desktop, and
   anything longer wraps the progress labels onto two lines. */
const STEPS = ['Location', 'Service', 'Budget', 'Details'];
const LAST_STEP = STEPS.length - 1;

const labelFor = (opts: { label: string; value: string }[], value: string) =>
  opts.find(o => o.value === value)?.label ?? '';

interface QuoteFormProps {
  defaultService?: string;
}

function FieldError({ msg }: { msg: string }) {
  return <p style={{ color: '#c0392b', fontSize: 12, marginTop: 4 }}>{msg}</p>;
}

export default function QuoteForm({ defaultService }: QuoteFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState('');

  const [step, setStep] = useState(0);
  /* Which way the content travels. Forward and back reading differently is most
     of what makes a stepper feel considered rather than a series of jump cuts. */
  const [direction, setDirection] = useState<1 | -1>(1);
  const [phase, setPhase] = useState<'in' | 'out'>('in');

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [carModel, setCarModel] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [referral, setReferral] = useState('');
  const [budget, setBudget] = useState('');
  const [serviceLocation, setServiceLocation] = useState('');
  const [postcode, setPostcode] = useState('');
  /* Pre-selected when the page context names a real service, so a visitor on a
     ceramic page just presses Continue. Prop-derived, so it is SSR-safe. */
  const [service, setService] = useState(
    SERVICE_CHOICES.some(s => s.value === defaultService) ? (defaultService as string) : ''
  );

  /* Double-submit guard. This has to be a ref, not `loading` state: state isn't
     visible until the next render, so two submits dispatched in the same tick
     (fast double-click, or Enter held down) would both get past a state check
     and post the lead twice. */
  const inFlightRef = useRef(false);

  const headingRef = useRef<HTMLParagraphElement>(null);
  const steppedRef = useRef(false);
  const advanceTimerRef = useRef<number | null>(null);
  const phaseTimerRef = useRef<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Don't leave a pending step change to fire against an unmounted form.
  useEffect(() => () => {
    if (advanceTimerRef.current !== null) window.clearTimeout(advanceTimerRef.current);
    if (phaseTimerRef.current !== null) window.clearTimeout(phaseTimerRef.current);
  }, []);

  /* Drive the panel's height from its content so it eases between steps of
     different lengths instead of snapping — step 4 is roughly twice the height
     of step 1, and that jump is the jankiest thing about a naive stepper.
     Writes the height straight to the node rather than through state: this
     reacts to layout, and a render pass here would just add a frame of lag.
     The observed element is stable (`key` sits on its child) so the observer
     survives step changes, which also gets the postcode reveal animating free. */
  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner || typeof ResizeObserver === 'undefined') return;
    const sync = () => { wrap.style.height = `${inner.offsetHeight}px`; };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(inner);
    return () => ro.disconnect();
  }, []);

  const wantsMobile = serviceLocation === MOBILE;

  /* Move focus to the new step's heading so keyboard and screen-reader users
     aren't stranded at the top of the page. Skipped on first render so the form
     doesn't steal focus just by existing on the page. */
  useEffect(() => {
    if (!steppedRef.current) { steppedRef.current = true; return; }
    headingRef.current?.focus();
  }, [step]);

  /** Only the rules for the fields visible on `n`, used to gate Continue. */
  const validateStep = (n: number) => {
    const errs: Record<string, string> = {};
    if (n === 0) {
      if (!serviceLocation) errs.serviceLocation = 'Please choose drop-off or mobile service.';
      if (serviceLocation === MOBILE) {
        if (!postcode.trim()) errs.postcode = 'Postcode is required for mobile service.';
        else if (!/^\d{4}$/.test(postcode.trim())) errs.postcode = 'Enter a valid 4-digit postcode.';
      }
    }
    if (n === 1 && !service) errs.service = 'Please choose the service you\'re after.';
    // Step 2 (budget) is optional — nothing gates it.
    if (n === 3) {
      if (!name.trim()) errs.name = 'Name is required.';
      if (!mobile.trim()) errs.mobile = 'Mobile is required.';
      else if (mobile.replace(/\D/g, '').length < 10) errs.mobile = 'Enter a valid Australian mobile number.';
      if (!email.trim()) errs.email = 'Email is required.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email address.';
    }
    return errs;
  };

  /** Every rule, regardless of step — the authoritative check before submitting. */
  const validate = () => ({
    ...validateStep(0),
    ...validateStep(1),
    ...validateStep(3),
  });

  const cancelAdvance = () => {
    if (advanceTimerRef.current !== null) {
      window.clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }
  };

  const goTo = (n: number) => {
    cancelAdvance();
    if (n === step) return;
    if (phaseTimerRef.current !== null) window.clearTimeout(phaseTimerRef.current);

    setDirection(n > step ? 1 : -1);
    setErrors({});
    setSubmitError('');
    // Let the current step clear out before the next one is mounted.
    setPhase('out');
    phaseTimerRef.current = window.setTimeout(() => {
      setStep(n);
      setPhase('in');
      phaseTimerRef.current = null;
    }, STEP_OUT_MS);
  };

  /**
   * Advance after a pointer selection on a step whose only question is the one
   * just answered.
   *
   * Gated on `detail > 0`, which means a real pointer click — keyboard
   * activation reports 0. Arrow keys move *and select* within a radio group, so
   * advancing on those would make it impossible to browse the options: the
   * first Down press would jump you to the next step. Keyboard users use
   * Continue, which stays visible for exactly that reason.
   *
   * Jumps straight to the target step rather than through goNext(): the timer
   * closes over the state from the render where the click happened, in which
   * this selection hasn't flushed yet, so re-validating here would read the old
   * empty value and fail. The click itself is what satisfies the step.
   */
  const autoAdvance = (e: React.MouseEvent, from: number) => {
    if (e.detail === 0) return;
    cancelAdvance();
    advanceTimerRef.current = window.setTimeout(() => goTo(from + 1), AUTO_ADVANCE_MS);
  };

  const goNext = () => {
    const errs = validateStep(step);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    goTo(Math.min(step + 1, LAST_STEP));
  };

  /* Enter inside a text input dispatches a real submit event on every step. Our
     onSubmit catches it, but the event still reaches GTM's built-in Form
     Submission listener, so a step advance would register as a form submit.
     Intercepting on keydown means the event is never dispatched at all. */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key !== 'Enter') return;
    if ((e.target as HTMLElement).tagName === 'TEXTAREA') return; // newline, not navigation
    if (step === LAST_STEP) return;                               // the genuine submit
    e.preventDefault();
    goNext();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    /* Enter inside any text input fires onSubmit, so a stepped form would
       otherwise submit an empty payload from step 1. Continue/Back/Skip are all
       type="button"; this is the second half of that guard. */
    if (step !== LAST_STEP) { goNext(); return; }
    if (inFlightRef.current) return;

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      // Send the visitor back to the earliest step that still has a problem.
      if (Object.keys(validateStep(0)).length) setStep(0);
      else if (Object.keys(validateStep(1)).length) setStep(1);
      return;
    }
    setErrors({});
    setSubmitError('');

    inFlightRef.current = true;
    setLoading(true);

    const page = window.location.pathname;

    /* First-touch attribution, read from storage — never throws, and returns
       empty strings when unavailable, so a storage failure cannot block a lead.
       One id per submission attempt. Neither is sent to the dataLayer. */
    const attribution = getStoredAttribution();
    const submissionId = createSubmissionId();

    const payload = {
      name: name.trim(),
      phone: mobile.trim(),
      email: email.trim(),
      carModel: carModel.trim(),
      inquiry: inquiry.trim(),
      referral: referral || 'Not specified',
      budget,
      budgetLabel: labelFor(BUDGET_OPTIONS, budget),
      serviceLocation,
      serviceLocationLabel: labelFor(SERVICE_OPTIONS, serviceLocation),
      postcode: wantsMobile ? postcode.trim() : '',
      service,
      source: 'Website Quote Form',
      page,
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      utm_content: attribution.utm_content,
      fbclid: attribution.fbclid,
      first_landing_page: attribution.first_landing_page,
      submission_id: submissionId,
    };

    /* Field state is deliberately left untouched on every failure path below,
       so the visitor keeps everything they typed and can just press the button
       again. */
    const failWithRetry = () => {
      setSubmitError(
        `We couldn't send your request just now — your details are still here. ` +
        `Please press “Get My Quote” to try again, or call us on ${CONTACT_PHONE}.`
      );
      inFlightRef.current = false;
      setLoading(false);
    };

    // AbortController rather than AbortSignal.timeout, for wider browser support.
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    const started = Date.now();

    try {
      const res = await fetch(GHL_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!res.ok) {
        logSubmitFailure({
          reason: 'http_error',
          status: res.status,
          durationMs: Date.now() - started,
          page,
          service,
        });
        failWithRetry();
        return;
      }

      // GHL returned 2xx — the lead is captured, so the conversion is real.
      pushGtmEvent('quote_form_submit', {
        form_name: 'get_a_quote',
        service_context: defaultService || 'general',
        page_path: window.location.pathname,
        page_title: document.title,
      });
      pushGtmEvent('generate_lead', { currency: 'AUD', value: 0 });

      /* inFlightRef stays latched and loading stays set. The component is about
         to unmount, and leaving them set is what guarantees the events above
         fire exactly once — a second submit can't slip through the gap before
         navigation completes. */
      navigate('/thank-you', { state: { fromSubmit: true } });
    } catch (err) {
      const timedOut = err instanceof Error && err.name === 'AbortError';
      logSubmitFailure({
        reason: timedOut ? 'timeout' : 'network_error',
        status: null,
        durationMs: Date.now() - started,
        page,
        service,
      });
      failWithRetry();
    } finally {
      clearTimeout(timer);
    }
  };

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} role="form" aria-label="Get a Quote" noValidate>
      {/* Progress — completed steps are clickable so nothing is a dead end. */}
      <ol className="qf-progress">
        {STEPS.map((label, i) => {
          const state = i === step ? 'is-current' : i < step ? 'is-done' : '';
          return (
            <li key={label} className={`qf-progress__item ${state}`}>
              <button
                type="button"
                className="qf-progress__dot"
                onClick={() => i < step && goTo(i)}
                disabled={i >= step}
                aria-current={i === step ? 'step' : undefined}
                aria-label={`Step ${i + 1} of ${STEPS.length}: ${label}`}
              >
                {i < step ? <Check size={13} strokeWidth={3} /> : i + 1}
              </button>
              <span className="qf-progress__label">{label}</span>
            </li>
          );
        })}
      </ol>

      {/* wrap = animated height · inner = stable observer target · step = keyed content */}
      <div className="qf-step-wrap" ref={wrapRef}>
      <div ref={innerRef}>
      <div
        className={`qf-step${direction === -1 ? ' is-back' : ''}${phase === 'out' ? ' is-out' : ''}`}
        key={step}
        role="group"
        aria-labelledby="qf-step-heading"
      >
        <p className="qf-step__heading" id="qf-step-heading" ref={headingRef} tabIndex={-1}>
          {step === 0 && 'How would you like the work done?'}
          {step === 1 && 'What are you after?'}
          {step === 2 && "What's your budget?"}
          {step === 3 && 'Where can we reach you?'}
        </p>

        {/* STEP 1 — service location */}
        {step === 0 && (
          <>
            <fieldset className="qf-fieldset">
              <legend className="sr-only">Service option</legend>
              <div style={{ display: 'grid', gap: 10 }}>
                {SERVICE_OPTIONS.map(o => (
                  <label key={o.value} className={`qf-radio${serviceLocation === o.value ? ' is-checked' : ''}`}>
                    <input
                      type="radio"
                      name="serviceLocation"
                      value={o.value}
                      checked={serviceLocation === o.value}
                      onChange={() => { setServiceLocation(o.value); if (o.value !== MOBILE) setPostcode(''); }}
                      /* Mobile service still needs a postcode, so it stays put —
                         and cancels an advance already queued by a drop-off click. */
                      onClick={e => (o.value === MOBILE ? cancelAdvance() : autoAdvance(e, 0))}
                      aria-required="true"
                    />
                    <span>{o.label}</span>
                  </label>
                ))}
              </div>
              {errors.serviceLocation && <FieldError msg={errors.serviceLocation} />}
            </fieldset>

            {wantsMobile && (
              <div style={{ marginTop: 16 }}>
                <label htmlFor="postcode">Your postcode *</label>
                <input
                  id="postcode"
                  inputMode="numeric"
                  maxLength={4}
                  value={postcode}
                  onChange={e => setPostcode(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  aria-required="true"
                  aria-invalid={!!errors.postcode}
                  placeholder="e.g. 3064"
                />
                {errors.postcode && <FieldError msg={errors.postcode} />}
              </div>
            )}
          </>
        )}

        {/* STEP 2 — service */}
        {step === 1 && (
          <fieldset className="qf-fieldset">
            <legend className="sr-only">Service</legend>
            <div style={{ display: 'grid', gap: 10 }}>
              {SERVICE_CHOICES.map(o => (
                <label key={o.value} className={`qf-radio qf-radio--stack${service === o.value ? ' is-checked' : ''}`}>
                  <input
                    type="radio"
                    name="service"
                    value={o.value}
                    checked={service === o.value}
                    onChange={() => setService(o.value)}
                    onClick={e => autoAdvance(e, 1)}
                    aria-required="true"
                  />
                  <span>
                    <span className="qf-radio__title">{o.value}</span>
                    <span className="qf-radio__hint">{o.hint}</span>
                  </span>
                </label>
              ))}
            </div>
            {errors.service && <FieldError msg={errors.service} />}
          </fieldset>
        )}

        {/* STEP 3 — budget (optional) */}
        {step === 2 && (
          <fieldset className="qf-fieldset">
            <legend className="sr-only">Budget</legend>
            <div style={{ display: 'grid', gap: 10 }}>
              {BUDGET_OPTIONS.map(o => (
                <label key={o.value} className={`qf-radio${budget === o.value ? ' is-checked' : ''}`}>
                  <input type="radio" name="budget" value={o.value} checked={budget === o.value} onChange={() => setBudget(o.value)} onClick={e => autoAdvance(e, 2)} />
                  <span>{o.label}</span>
                </label>
              ))}
            </div>
            <p className="qf-step__note">Not sure yet? Skip this — we'll talk it through.</p>
          </fieldset>
        )}

        {/* STEP 4 — details */}
        {step === 3 && (
          <div className="qf-step__fields" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label htmlFor="fullName">Name *</label>
                <input id="fullName" value={name} onChange={e => setName(e.target.value)} aria-required="true" aria-invalid={!!errors.name} placeholder="Your name" />
                {errors.name && <FieldError msg={errors.name} />}
              </div>
              <div>
                <label htmlFor="mobile">Mobile *</label>
                <input
                  id="mobile"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={10}
                  value={mobile}
                  onChange={e => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  aria-required="true"
                  aria-invalid={!!errors.mobile}
                  placeholder="0400 123 456"
                />
                {errors.mobile && <FieldError msg={errors.mobile} />}
              </div>
            </div>
            <div>
              <label htmlFor="email">Email *</label>
              <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} aria-required="true" aria-invalid={!!errors.email} placeholder="your@email.com" />
              {errors.email && <FieldError msg={errors.email} />}
            </div>
            <div>
              <label htmlFor="carModel">Car Model</label>
              <input id="carModel" value={carModel} onChange={e => setCarModel(e.target.value)} placeholder="e.g. 2024 Toyota Camry" />
            </div>
            <div>
              <label htmlFor="inquiry">Inquiry</label>
              <textarea id="inquiry" rows={4} value={inquiry} onChange={e => setInquiry(e.target.value)} placeholder="Tell us what you're after — service, coverage, any questions…" style={{ resize: 'vertical' }} />
            </div>
            <div>
              <label htmlFor="referral">How did you hear about us?</label>
              <select id="referral" value={referral} onChange={e => setReferral(e.target.value)} style={{ minHeight: 44 }}>
                <option value="">Select…</option>
                {['Google', 'Instagram', 'Facebook', 'Referral', 'Other'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
        )}
      </div>
      </div>
      </div>

      {submitError && (
        <p style={{ color: '#c0392b', fontSize: 14, marginTop: 16, textAlign: 'center' }}>{submitError}</p>
      )}

      <div className="qf-nav">
        {step > 0 && (
          <button type="button" className="btn-ghost qf-nav__back" onClick={() => goTo(step - 1)} disabled={loading}>
            <ArrowLeft size={16} /> Back
          </button>
        )}

        {/* Distinct keys matter: without them React reuses one DOM node and flips
            type="button" -> "submit" mid-click on the step 3 -> 4 transition, so the
            browser fires a submit on the button that was just clicked. That showed up
            as a phantom GTM form submit and premature validation errors on step 4. */}
        {step < LAST_STEP ? (
          <button key="next" type="button" className="btn-primary btn-gold btn-shine qf-nav__next" onClick={goNext}>
            <span className="btn-slide" />
            <span>{step === 2 && !budget ? 'Skip' : 'Continue'} <ArrowRight size={16} style={{ verticalAlign: 'middle' }} /></span>
          </button>
        ) : (
          <button key="submit" type="submit" className="btn-primary btn-gold btn-shine qf-nav__next" disabled={loading}>
            <span className="btn-slide" />
            {loading ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 1 }}>
                <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Processing…
              </span>
            ) : (
              <span>Get My Quote</span>
            )}
          </button>
        )}
      </div>
    </form>
  );
}
