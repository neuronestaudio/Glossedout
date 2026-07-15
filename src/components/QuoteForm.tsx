import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { pushGtmEvent } from '../lib/gtm';

const GHL_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/ed6fxFrV8P1iGtkwL7D7/webhook-trigger/I3moCd8GTaDTsQUIdzvF';

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
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitError('');
    setLoading(true);

    try {
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
        service: defaultService || 'General',
        source: 'Website Quote Form',
        page: window.location.pathname,
      };

      const res = await fetch(GHL_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Submission failed');

      // Fire tracking only after successful submission
      pushGtmEvent('quote_form_submit', {
        form_name: 'get_a_quote',
        service_context: defaultService || 'general',
        page_path: window.location.pathname,
        page_title: document.title,
      });
      pushGtmEvent('generate_lead', { currency: 'AUD', value: 0 });
      pushGtmEvent('quote_form_click', { page_path: window.location.pathname });

      navigate('/thank-you', { state: { fromSubmit: true } });
    } catch {
      setSubmitError('Something went wrong. Please call us directly or try again.');
    } finally {
      setLoading(false);
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
