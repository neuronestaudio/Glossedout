import PageMeta from '../components/PageMeta';

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageMeta
        title="Privacy Policy — Glossed Out Detailing Brisbane"
        description="Privacy Policy for Glossed Out Detailing. How we collect, use and protect your personal information."
        canonical="https://glossedoutdetailing.com.au/privacy-policy"
      />
      <section style={{ minHeight: '100dvh', paddingTop: 120, paddingBottom: 80, padding: '120px var(--section-padding-x) 80px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Legal</p>
          <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', marginBottom: 8 }}>Privacy Policy</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 13, marginBottom: 48 }}>Glossed Out Detailing — Last updated: January 2025</p>

          {[
            {
              heading: '1. Who We Are',
              body: 'Glossed Out Detailing (ABN [ABN]) operates from Goodrich Ct, Craigieburn VIC 3064. We provide paint protection film, ceramic coating, and window tinting services in Brisbane. This policy explains how we handle your personal information when you interact with our website or contact us.',
            },
            {
              heading: '2. Information We Collect',
              body: 'When you submit a quote request, we collect your name, mobile number, email address, suburb, and details about the service you are enquiring about (vehicle details or property type). We do not collect payment details through this website.',
            },
            {
              heading: '3. How We Use Your Information',
              body: 'We use your information solely to respond to your quote request, schedule appointments, and communicate about your job. We do not sell, rent, or share your information with third parties for marketing purposes.',
            },
            {
              heading: '4. Data Storage',
              body: 'Enquiry data submitted via our quote form is stored securely and retained only as long as necessary to manage your enquiry and any resulting service relationship. We take reasonable steps to protect your information from unauthorised access.',
            },
            {
              heading: '5. Cookies',
              body: 'Our website may use standard browser cookies for analytics purposes (e.g. Google Analytics). These cookies do not identify you personally. You can disable cookies in your browser settings.',
            },
            {
              heading: '6. Your Rights',
              body: 'Under the Australian Privacy Act 1988, you have the right to access and correct personal information we hold about you. To make a request, contact us at admin@glossedoutdetailing.com.au.',
            },
            {
              heading: '7. Contact',
              body: 'For any privacy-related queries, contact: admin@glossedoutdetailing.com.au or call 0481 327 250.',
            },
          ].map(s => (
            <div key={s.heading} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>{s.heading}</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
