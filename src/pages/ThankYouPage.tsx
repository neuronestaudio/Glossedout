import { useLocation, Navigate } from 'react-router-dom';
import { CheckCircle, Phone } from 'lucide-react';
import PageMeta from '../components/PageMeta';

/* Conversion tracking is handled in GTM off the `generate_lead` / `quote_form_submit`
   events that QuoteForm pushes on successful submit — not with a gtag call here. */

export default function ThankYouPage() {
  const location = useLocation();
  const fromSubmit = (location.state as { fromSubmit?: boolean })?.fromSubmit;

  const meta = (
    <PageMeta
      title="Thank You — Glossed Out Detailing Melbourne"
      description="Your quote request has been received. We'll be in touch within 2 business hours."
      canonical="https://glossedoutdetailing.com.au/thank-you"
      noindex
    />
  );

  if (!fromSubmit) return <>{meta}<Navigate to="/get-a-quote" replace /></>;

  return (
    <main style={{ background: 'var(--color-bg-primary)', minHeight: '100dvh', paddingTop: 100, paddingBottom: 80 }}>
      {meta}
      <section style={{ padding: '60px var(--section-padding-x)', maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <CheckCircle size={48} color="var(--color-accent)" style={{ marginBottom: 20 }} />
        <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', lineHeight: 1, marginBottom: 16 }}>We've Got Your Request.</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
          We'll be in touch within 2 business hours. If it's urgent, call us directly.
        </p>
        <a href="tel:0481327250" className="btn-primary" style={{ fontSize: 18, padding: '16px 36px' }}>
          <span className="btn-slide" />
          <Phone size={20} />
          <span>Call Us — 0481 327 250</span>
        </a>
      </section>
    </main>
  );
}
