import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FAQAccordion from '../components/FAQAccordion';
import PageMeta from '../components/PageMeta';

const faqs = [
  { q: 'What is commercial window tinting?', a: 'Commercial window tinting is the application of professional window film to the glazing of offices, retail premises, warehouses, and commercial buildings. It reduces solar heat gain, glare, and UV radiation — improving occupant comfort and reducing HVAC energy consumption.' },
  { q: 'How much does commercial window tinting cost in Brisbane?', a: 'Commercial window tinting in Brisbane is quoted on application — pricing depends on window count, glazing type, film specification, access, and installation schedule. Contact Glossed Out Detailing at Acacia Ridge for a site-specific quote.' },
  { q: 'How long does commercial window film installation take?', a: 'A small office (10 windows) typically takes 1–2 days. Larger fitouts are staged per zone or floor. We provide a full project timeline at quoting stage so you can plan around it. Out-of-hours and weekend installation is available.' },
  { q: 'Can commercial window film be installed without closing the office?', a: 'In most cases, yes. We stage installation room by room so adjacent spaces remain operational. For whole-building fitouts, weekend or out-of-hours scheduling is available to minimise disruption to staff and customers.' },
  { q: 'Does 3M commercial window film reduce air conditioning costs?', a: 'Yes — measurably in glazed commercial buildings. By rejecting up to 78% of solar heat, 3M Solar film reduces the peak load on HVAC systems. The energy saving varies by building, but heavily glazed north and west-facing floors typically see the greatest improvement.' },
  { q: 'Can I use commercial window film to improve my NABERS energy rating?', a: '3M window film is recognised as a passive energy improvement and can contribute to NABERS ratings. We can provide technical data on the heat rejection performance of specified films to support a NABERS assessment. Ask at quoting stage.' },
  { q: 'Is 3M safety film required for shopfronts in Queensland?', a: '3M safety film is not legally mandated for shopfronts in Queensland, but it is widely used for security and safety purposes. Safety film holds shattered glass together in the event of breakage — reducing injury risk and slowing smash-and-grab attempts.' },
  { q: 'What is the difference between solar film and safety film for commercial applications?', a: 'Solar film prioritises heat and UV rejection for occupant comfort and energy savings. Safety film prioritises structural integrity — holding broken glass together. Some 3M films combine both properties in a single product. We specify the correct film per application zone during the site survey.' },
  { q: 'Will commercial window film affect the external appearance of the building?', a: '3M commercial solar films are designed to maintain a consistent external appearance. The level of external reflectivity depends on the film series selected. We carry sample sets and can advise on the visual impact relative to your existing glazing before installation.' },
  { q: 'Do I need landlord or body corporate approval for commercial window film?', a: 'In leased commercial premises, you will generally need written approval from the landlord or building manager before making glazing modifications. We can provide full technical documentation to support an approval request.' },
  { q: 'Can 3M window film be removed without damaging the glass?', a: 'Yes — 3M window film can be professionally removed without damaging the glass. If you vacate the premises, film removal is a straightforward process. DIY removal can leave adhesive residue that is difficult to clean without scratching.' },
  { q: 'What types of glazing is 3M commercial film compatible with?', a: '3M commercial film is compatible with most commercial glazing — clear float glass, tinted glass, and some double-glazed units. Compatibility must be confirmed for double-glazed or heat-absorbing glass configurations before installation. We assess glazing type at site survey.' },
  { q: 'Does window film affect signage visibility on shopfront windows?', a: 'Window film applied internally does not cover external signage (vinyl graphics on the glass exterior). Solar film maintains outward visibility — customers can see in. Where signage is on the internal surface, we work around it. We can advise on specific scenarios at site survey.' },
  { q: 'How long does commercial 3M window film last?', a: 'Commercial 3M window film is designed for 10–15+ year service life in commercial applications. Longevity depends on aspect, glass type, and maintenance. The 3M commercial warranty covers film defects during the warranty period.' },
  { q: 'Can 3M film be applied to high-rise buildings?', a: 'Yes — we have experience with multi-storey commercial buildings. Access (internal scaffold, elevated work platform, or rope access) is assessed at site survey and factored into project planning and pricing.' },
  { q: 'What is glare control and why does it matter in offices?', a: 'Glare control refers to reducing the intensity of direct and reflected sunlight on screens, whiteboards, and work surfaces. Excessive glare causes eye strain, reduces productivity, and makes screens difficult to read. Modern solar film reduces glare without a significant reduction in visible light.' },
  { q: 'Can window film replace venetian blinds or external shading?', a: 'Window film is a complementary solution, not a complete replacement for blinds in all scenarios. Film provides always-on heat and UV rejection without the maintenance of blinds. For scenarios requiring complete blackout or full privacy, blinds remain appropriate. Many commercial spaces use both.' },
  { q: 'Do you offer a 3M commercial warranty on installations?', a: 'Yes — Glossed Out Detailing is a 3M Authorised Installer. Commercial installations are backed by the applicable 3M commercial limited warranty. Warranty documentation is provided at handover. Warranty period varies by film series.' },
  { q: 'Can window film be applied to existing tinted commercial glazing?', a: 'Yes — 3M Solar or safety film can be applied to commercial glass that already has a factory tint. VLT must be checked for compliance in applicable areas. Additional tint over existing tinted glass will darken the appearance.' },
  { q: 'Where is Glossed Out Detailing and do you cover all of Brisbane for commercial tinting?', a: 'We\'re based at Goodrich Ct, Craigieburn VIC 3064 and service all of greater Brisbane for commercial window tinting projects. Call 0481 327 250 or use the quote form on this site.' },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "author": { "@type": "Organization", "name": "Glossed Out Detailing" },
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

export default function CommercialTintQuestionsPage() {
  useEffect(() => {
    document.title = 'Commercial Window Tinting Questions — Brisbane | Glossed Out Detailing';
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'faq-schema';
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { const el = document.getElementById('faq-schema'); if (el) el.remove(); };
  }, []);

  return (
    <>
      <PageMeta
        title="Commercial Window Tinting Questions | Brisbane"
        description="Common questions about commercial window tinting in Brisbane — energy savings, glare control, 3M film options. Glossed Out Detailing."
        canonical="https://glossedoutdetailing.com.au/commercial-tinting-questions"
      />
    <main style={{ background: 'var(--color-bg-primary)', minHeight: '100dvh' }}>
      <section style={{ padding: '140px var(--section-padding-x) 60px', maxWidth: 780, margin: '0 auto' }}>
        <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', lineHeight: 1, marginBottom: 24 }}>Commercial Window Tinting — Brisbane Questions</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.75 }}>
          Office, retail, and whole-building commercial window film — every question answered. Written by Glossed Out Detailing — 3M Authorised Installer, Acacia Ridge, QLD.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, marginTop: 12, marginBottom: 24 }}>
          Written by the Glossed Out Detailing installation team · Last reviewed March 2026
        </p>
        <div style={{ display: 'flex', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
          <Link to="/warranties" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>View Warranties</Link>
          <Link to="/next-level-protection-tds" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>View Product TDS</Link>
        </div>
        <FAQAccordion items={faqs} />
      </section>
      <section style={{ padding: '40px var(--section-padding-x)', maxWidth: 780, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/commercial-window-tinting-brisbane" className="btn-primary" style={{ fontSize: 13 }}><span className="btn-slide" /><span>Commercial Packages &amp; Pricing</span></Link>
          <Link to="/residential-tinting-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Residential Tinting Q&A</Link>
          <Link to="/automotive-tinting-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Automotive Tinting Q&A</Link>
        </div>
      </section>
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90, background: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)', padding: '14px var(--section-padding-x)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>Ready to tint your commercial space?</span>
        <Link to="/get-a-quote" className="btn-primary" style={{ fontSize: 13, padding: '10px 20px' }}><span className="btn-slide" /><span>Get a Quote →</span></Link>
      </div>
    </main>
    </>
  );
}
