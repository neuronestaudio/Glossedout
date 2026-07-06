import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FAQAccordion from '../components/FAQAccordion';
import PageMeta from '../components/PageMeta';

const faqs = [
  { q: 'What VLT (Visible Light Transmission) is legal in Queensland?', a: 'In Queensland, the minimum VLT is 35% for all windows in passenger vehicles (including SUVs and utes), except the rear window and rear side windows behind the B-pillar, which have no VLT restriction for vehicles with rear-view mirrors. The windscreen front strip (visor band) is also regulated. Glossed Out Detailing installs compliant VLT levels on all front windows as standard.' },
  { q: 'How much does window tinting cost for a car in Brisbane?', a: 'Window tinting pricing depends on vehicle size and coverage. Contact us for a personalised quote.' },
  { q: 'What is the best window film for cars in Brisbane?', a: 'For Brisbane\'s UV and heat, Solar Gard VTX PRO is one of the highest-performing automotive window films available. It provides 99% UV rejection, significant heat rejection, and maintains clarity without a strong reflective or purple tint over time.' },
  { q: 'Does window tint help with heat in the car?', a: 'Yes — significantly. Solar Gard VTX PRO rejects a substantial portion of solar heat. The difference is most noticeable on cars parked in the sun — the cabin cools faster and the peak temperature is lower. The front windows (driver/passenger) have the most impact on occupant comfort.' },
  { q: 'How long does car window tinting take?', a: 'A rear-only package takes approximately 1.5–2 hours. A full car tint takes 2.5–3.5 hours. Full car + windscreen takes 3–4 hours. We do not release a vehicle until the installation has passed our quality inspection.' },
  { q: 'Can window tint be applied to the front windscreen in Queensland?', a: 'A UV-clear film (visually transparent, not a tint shade) can be applied to the front windscreen for UV protection without affecting VLT compliance. A coloured tint strip along the top (visor band) is also permissible within regulated dimensions. We do not install non-compliant windscreen tint.' },
  { q: 'How long does automotive window tint last?', a: 'Solar Gard VTX PRO carries a lifetime warranty for the original vehicle owner. In practical terms, professionally installed, high-quality film on a garaged or regularly parked vehicle can last 10–15+ years. Low-grade film fades and purples within 3–5 years.' },
  { q: 'Can window tint be removed from a car?', a: 'Yes — window tint can be professionally removed. DIY removal often leaves adhesive residue on the glass and defroster lines (rear window) that is difficult to remove without damage. We offer professional removal and replacement.' },
  { q: 'Does window tinting affect car visibility at night?', a: 'All window tint reduces some light transmission. Lower VLT films (darker tints) have more impact on night visibility. This is why front window VLT regulations exist. With legal front VLT levels (35%+), night vision impact is minimal for most drivers.' },
  { q: 'What is the difference between dyed, carbon, and ceramic window film?', a: 'Dyed film is the lowest grade — cheapest, but prone to fading and purpling. Carbon film is mid-grade — better heat rejection, no fade. Ceramic film is highest grade — best heat rejection, highest clarity, no interference with electronics, does not fade. Solar Gard VTX PRO is a ceramic-based film.' },
  { q: 'Does window tint affect phone signal, GPS, or dashcam?', a: 'Metalised films can interfere with GPS, phone signal, and radar. Ceramic films do not. Solar Gard VTX PRO is a non-metallic ceramic film — no signal interference.' },
  { q: 'Can I tint the windows of my leased car?', a: 'Yes — window tint is removable and does not damage the glass when professionally removed. It\'s advisable to keep receipt of the film removal cost in mind if the lease agreement prohibits modifications. Confirm with your lease provider before installation.' },
  { q: 'How do I care for my tinted windows after installation?', a: 'Wait 3–5 days before cleaning newly tinted windows. Do not wind down windows during this period. Use an ammonia-free glass cleaner and a soft microfibre cloth for cleaning. Avoid sharp objects near window edges.' },
  { q: 'Can window film be applied to curved rear windows?', a: 'Yes — curved rear windows require wet-applied film or a pre-cut pattern. We use vehicle-specific pre-cut patterns for most models, ensuring a clean edge and no patchwork seams. Highly curved windows (some utes, coupes) may require more time.' },
  { q: 'Will window tint make my car hotter to touch on the exterior?', a: 'Window tint affects heat transmittance through the glass — not the exterior surface temperature of the glass itself. The glass may absorb slightly more heat, but the key metric is cabin temperature reduction, which improves significantly with quality film.' },
  { q: 'What is the difference between privacy tint and solar film?', a: 'Privacy tint prioritises darkness (low VLT) for visual privacy. Solar film prioritises heat and UV rejection (often achievable at higher VLT levels). Solar Gard VTX PRO is a solar film that also provides privacy at typical automotive VLT levels.' },
  { q: 'Is Glossed Out Detailing a Solar Gard Authorised Installer?', a: 'Yes — Glossed Out Detailing is a Solar Gard Authorised Installer. This means we use genuine Solar Gard film, install to manufacturer standards, and the Solar Gard lifetime warranty applies to your installation.' },
  { q: 'Can window tint be applied to new cars that already have factory tint?', a: 'Yes — factory tint (privacy glass) is in the glass itself and typically provides privacy without significant heat or UV rejection. Adding Solar Gard VTX PRO over factory privacy glass adds UV protection and heat rejection while deepening the appearance. VLT compliance must be confirmed for front windows.' },
  { q: 'What types of vehicles does Glossed Out Detailing tint?', a: 'We tint all passenger vehicles — sedans, hatchbacks, SUVs, 4WDs, utes, vans, and prestige/luxury vehicles. We also accommodate commercial vehicles on request.' },
  { q: 'Where is Glossed Out Detailing located?', a: 'We\'re at Goodrich Ct, Craigieburn VIC 3064. Open Monday–Friday 9am–5:30pm. Call 0481 327 250 or use the quote form to book.' },
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

export default function AutoTintQuestionsPage() {
  useEffect(() => {
    document.title = 'Automotive Window Tinting Questions — Brisbane | Glossed Out Detailing';
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
        title="Automotive Tinting Questions Answered | Brisbane"
        description="Common questions about automotive window tinting in Brisbane — VLT laws, heat rejection, Solar Gard film. Glossed Out Detailing."
        canonical="https://glossedoutdetailing.com.au/automotive-tinting-questions"
      />
    <main style={{ background: 'var(--color-bg-primary)', minHeight: '100dvh' }}>
      <section style={{ padding: '140px var(--section-padding-x) 60px', maxWidth: 780, margin: '0 auto' }}>
        <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', lineHeight: 1, marginBottom: 24 }}>Automotive Window Tinting — Brisbane Questions</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.75 }}>
          Queensland tint laws, Solar Gard VTX PRO performance, pricing — every question answered. Written by the team at Glossed Out Detailing, Acacia Ridge, QLD.
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
          <Link to="/automotive-window-tinting-brisbane" className="btn-primary" style={{ fontSize: 13 }}><span className="btn-slide" /><span>Tinting Packages &amp; Pricing</span></Link>
          <Link to="/ppf-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Q&A</Link>
          <Link to="/residential-tinting-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Residential Tinting Q&A</Link>
        </div>
      </section>
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90, background: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)', padding: '14px var(--section-padding-x)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>Ready to tint your windows?</span>
        <Link to="/get-a-quote" className="btn-primary" style={{ fontSize: 13, padding: '10px 20px' }}><span className="btn-slide" /><span>Get a Quote →</span></Link>
      </div>
    </main>
    </>
  );
}
