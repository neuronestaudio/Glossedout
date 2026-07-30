import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { pushGtmEvent } from '../lib/gtm';

const GHL_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/ed6fxFrV8P1iGtkwL7D7/webhook-trigger/I3moCd8GTaDTsQUIdzvF';

/* Without this a hung request never settles, so the button would sit on
   "Processing…" forever and the visitor would never see a way to retry. */
const REQUEST_TIMEOUT_MS = 10_000;

const CONTACT_PHONE = '0481 327 250';

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

const MOBILE = 'mobile_service';

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

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [carModel, setCarModel] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [referral, setReferral] = useState('');
  const [budget, setBudget] = useState('');
  const [serviceLocation, setServiceLocation] = useState('');
  const [postcode, setPostcode] = useState('');

  /* Double-submit guard. This has to be a ref, not `loading` state: state isn't
     visible until the next render, so two submits dispatched in the same tick
     (fast double-click, or Enter held down) would both get past a state check
     and post the lead twice. */
  const inFlightRef = useRef(false);

  const wantsMobile = serviceLocation === MOBILE;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Name is required.';
    if (!mobile.trim()) errs.mobile = 'Mobile is required.';
    else if (mobile.replace(/\D/g, '').length < 10) errs.mobile = 'Enter a valid Australian mobile number.';
    if (!email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email address.';
    if (!serviceLocation) errs.serviceLocation = 'Please choose drop-off or mobile service.';
    if (wantsMobile) {
      if (!postcode.trim()) errs.postcode = 'Postcode is required for mobile service.';
      else if (!/^\d{4}$/.test(postcode.trim())) errs.postcode = 'Enter a valid 4-digit postcode.';
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inFlightRef.current) return;

    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitError('');

    inFlightRef.current = true;
    setLoading(true);

    const page = window.location.pathname;
    const service = defaultService || 'General';

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
    <form onSubmit={handleSubmit} role="form" aria-label="Get a Quote" noValidate>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
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
        <fieldset className="qf-fieldset">
          <legend className="qf-legend">Budget</legend>
          <div style={{ display: 'grid', gap: 10 }}>
            {BUDGET_OPTIONS.map(o => (
              <label key={o.value} className={`qf-radio${budget === o.value ? ' is-checked' : ''}`}>
                <input type="radio" name="budget" value={o.value} checked={budget === o.value} onChange={() => setBudget(o.value)} />
                <span>{o.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="qf-fieldset">
          <legend className="qf-legend">Service option *</legend>
          <div style={{ display: 'grid', gap: 10 }}>
            {SERVICE_OPTIONS.map(o => (
              <label key={o.value} className={`qf-radio${serviceLocation === o.value ? ' is-checked' : ''}`}>
                <input
                  type="radio"
                  name="serviceLocation"
                  value={o.value}
                  checked={serviceLocation === o.value}
                  onChange={() => { setServiceLocation(o.value); if (o.value !== MOBILE) setPostcode(''); }}
                  aria-required="true"
                />
                <span>{o.label}</span>
              </label>
            ))}
          </div>
          {errors.serviceLocation && <FieldError msg={errors.serviceLocation} />}
        </fieldset>

        <div>
          <label htmlFor="postcode">Postcode{wantsMobile ? ' *' : ''}</label>
          <input
            id="postcode"
            inputMode="numeric"
            maxLength={4}
            value={postcode}
            onChange={e => setPostcode(e.target.value.replace(/\D/g, '').slice(0, 4))}
            disabled={!wantsMobile}
            aria-required={wantsMobile}
            aria-invalid={!!errors.postcode}
            placeholder={wantsMobile ? 'e.g. 3064' : 'Select mobile service to enter your postcode'}
            style={{ opacity: wantsMobile ? 1 : 0.55, cursor: wantsMobile ? 'text' : 'not-allowed' }}
          />
          {errors.postcode && <FieldError msg={errors.postcode} />}
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

      {submitError && (
        <p style={{ color: '#c0392b', fontSize: 14, marginTop: 16, textAlign: 'center' }}>{submitError}</p>
      )}

      <div style={{ marginTop: 28 }}>
        <button type="submit" className="btn-primary btn-gold btn-shine" disabled={loading} style={{ minWidth: 160, width: '100%', justifyContent: 'center' }}>
          <span className="btn-slide" />
          {loading ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 1 }}>
              <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Processing…
            </span>
          ) : (
            <span>Get My Quote</span>
          )}
        </button>
      </div>
    </form>
  );
}
