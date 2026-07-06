import QuoteForm from '../components/QuoteForm';
import PageMeta from '../components/PageMeta';

export default function GetAQuotePage() {

  return (
    <main style={{ background: 'var(--color-bg-primary)', minHeight: '100dvh', paddingTop: 100, paddingBottom: 80 }}>
      <PageMeta
        title="Get a Quote — Glossed Out Detailing Brisbane"
        description="Request a quote for PPF, ceramic coating or window tinting in Brisbane. We respond within 2 business hours."
        canonical="https://glossedoutdetailing.com.au/get-a-quote"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Get a Quote — Glossed Out Detailing",
            "url": "https://glossedoutdetailing.com.au/get-a-quote",
            "description": "Request a quote for PPF, ceramic coating or window tinting in Brisbane. We respond within 2 business hours.",
            "about": { "@id": "https://glossedoutdetailing.com.au/#business" },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glossedoutdetailing.com.au/" },
              { "@type": "ListItem", "position": 2, "name": "Get a Quote", "item": "https://glossedoutdetailing.com.au/get-a-quote" },
            ],
          },
        ]}
      />
      <section style={{ padding: '40px var(--section-padding-x) 60px', maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: 'var(--color-accent)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Glossed Out Detailing — Brisbane</p>
        <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', lineHeight: 1, marginBottom: 20 }}>Get a Quote</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.75, maxWidth: 520, margin: '0 auto 0' }}>
          Tell us about your vehicle or property and we'll come back to you with a detailed quote. Usually within one business day.
        </p>
      </section>
      <section style={{ padding: '0 var(--section-padding-x)', maxWidth: 600, margin: '0 auto' }}>
        <div className="card" style={{ padding: 'clamp(24px, 5vw, 40px) clamp(16px, 4vw, 36px)' }}>
          <QuoteForm />
        </div>
        <div className="quote-contact-grid" style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div className="card" style={{ padding: '20px 18px' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 12, marginBottom: 6 }}>Prefer to call?</p>
            <a href="tel:0481327250" style={{ color: 'var(--color-accent)', fontSize: 15, fontWeight: 600, whiteSpace: 'nowrap', display: 'inline-block' }}>0481 327 250</a>
          </div>
          <div className="card" style={{ padding: '20px 18px', minWidth: 0 }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 12, marginBottom: 6 }}>Email us</p>
            <a href="mailto:admin@glossedoutdetailing.com.au" style={{ color: 'var(--color-accent)', fontSize: 14, fontWeight: 500, wordBreak: 'break-all' }}>admin@glossedoutdetailing.com.au</a>
          </div>
        </div>
        <style>{`
          @media (max-width: 480px) {
            .quote-contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
        <div style={{ marginTop: 32, padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 12, lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--color-text-secondary)' }}>Studio:</strong> Goodrich Ct, Craigieburn VIC 3064<br />
            <strong style={{ color: 'var(--color-text-secondary)' }}>Hours:</strong> Mon–Fri 9:00am – 5:30pm
          </p>
        </div>
      </section>
    </main>
  );
}
