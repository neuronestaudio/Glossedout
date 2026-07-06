import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FAQAccordion from '../components/FAQAccordion';
import PageMeta from '../components/PageMeta';

const faqs = [
  { q: 'What is residential window tinting?', a: 'Residential window tinting is the application of a professional window film (such as 3M Solar film) to the inside of home or apartment windows. It reduces solar heat gain, UV radiation, and glare while preserving natural light transmission.' },
  { q: 'What is spectrally selective window film?', a: 'Spectrally selective film targets specific wavelengths of light — primarily infrared (heat) — while transmitting visible light. 3M Prestige film uses over 200 micro-layers of nano-optical technology to achieve this. Unlike older metallized films, it contains no metal layers, so there is zero interference with WiFi, mobile, or GPS signals.' },
  { q: 'How does window film reduce electricity bills?', a: 'Window film reduces solar heat gain at the glass before your air conditioning has to respond. In Queensland — where the average electricity bill is $2,143/yr (QLD DMO 2025-26) — reducing cooling load by 15–30% translates to $100–$250 in annual savings for most homes. West-facing rooms see the fastest payback, typically 1–2 years. The film becomes carbon negative within 6 months of installation.' },
  { q: 'How much does residential window tinting cost in Brisbane?', a: 'Pricing is based on the number of windows, glass type, and film selected. 3M window film for a typical Brisbane home costs 5–10x less than double glazing while delivering comparable heat rejection (up to 78% vs 40–60%). No structural modification is required, and installation is typically completed in one day. Contact us for a quote.' },
  { q: 'Does window film really reduce heat in a Brisbane home?', a: 'Yes — measurably. 3M Solar film rejects up to 78% of incoming solar heat. Brisbane has a peak UV index of 15 in summer — the extreme threshold is 6, and Brisbane exceeds it for 6 months of the year (Oct–Mar). In homes with west or north-facing rooms, the temperature difference after installation can be 5–10°C in direct afternoon sun. The reduction in air conditioning run time is also noticeable.' },
  { q: 'What is 3M window film?', a: '3M is one of the world\'s largest manufacturers of window film — a Fortune 500 company with $30B+ in annual revenue and over 120 years of innovation. 3M Solar film uses a multi-layer construction to selectively block infrared (heat) and UV radiation while transmitting visible light. Glossed Out Detailing is a 3M Authorised Window Film Installer.' },
  { q: 'What is the 3M Lifetime Warranty?', a: 'The 3M Limited Lifetime Warranty is backed by 3M Corporation — not a local installer ABN. It covers delamination, adhesive failure, discolouration, bubbling, cracking, and crazing for the lifetime of property ownership. The warranty is transferable if you sell the property. Only installations by a 3M Authorised Installer qualify for the full manufacturer warranty.' },
  { q: 'How long does 3M window film last in a Queensland home?', a: '3M window film in residential applications typically lasts 10–20 years. Longevity depends on aspect (west-facing glass degrades faster under direct afternoon sun), glass type (double-glazed glass generates more heat and can affect some films), and maintenance. The 3M Limited Lifetime Warranty covers defects in film and adhesive for the life of the property.' },
  { q: 'Will window film damage my glass?', a: 'No — correctly installed 3M window film will not damage the glass itself. The film uses a removable adhesive system that does not damage glass when professionally removed. However, some films are not compatible with certain glass types (particularly some double-glazed, heat-absorbing, or tempered glass configurations). We assess glass type before specifying film to ensure compatibility.' },
  { q: 'Can I have window film removed if I change my mind?', a: 'Yes — window film can be professionally removed without damaging the glass. DIY removal often leaves adhesive residue that is difficult to clean without scratching. We offer removal and replacement as a service.' },
  { q: 'Does window film affect the view from inside?', a: 'Modern 3M Solar film transmits 40–70% of visible light depending on the product selected. The view does not become blurry or significantly distorted. Spectrally selective technology targets heat without darkening your windows — you lose the heat, not the light. We carry film samples so you can assess the effect before committing.' },
  { q: 'What about the west-facing problem?', a: 'West-facing windows are the #1 complaint from Brisbane homeowners. Brisbane\'s grid layout means many homes have significant west-facing glass that receives the most intense afternoon sun — exactly when families are home and using living areas. 3M Solar film with high TSER (Total Solar Energy Rejection) is the best choice for these windows. West-facing rooms typically see a 1–2 year payback on the film investment through reduced air conditioning costs alone.' },
  { q: 'What is the difference between privacy film and solar film?', a: 'Privacy film prioritises blocking the view from outside (low VLT, reflective exterior appearance). Solar film prioritises heat and UV rejection at a higher visible light transmission — allowing more natural light while blocking heat. Many installations use privacy film in bedrooms and bathrooms, solar film in living areas.' },
  { q: 'Does window film work on double-glazed windows?', a: '3M has specific film products rated for double-glazed (IGU) glass. Standard residential solar films applied to double-glazed units without compatibility verification can cause thermal stress fractures. We always check before installation.' },
  { q: 'Does window film help with Brisbane storms?', a: '3M Safety film holds shattered glass together in the event of breakage — whether from storm debris, break-in attempts, or accidental impact. It reduces injury risk from flying glass shards and can be combined with solar film properties in a single product. In Brisbane\'s storm season, safety film on ground-floor and large-pane windows provides an additional layer of protection beyond heat and UV rejection.' },
  { q: 'Can renters install window film in Queensland?', a: 'Tenants in Queensland require written approval from the property owner or manager before installing window film. Film is removable without glass damage. We provide documentation — including product specifications and installation details — to support an owner approval request.' },
  { q: 'Will window film make my home look tinted from the outside?', a: 'Some films have a reflective appearance from outside during daylight hours. The degree of external reflectivity depends on the film type and the interior vs. exterior light balance. Solar films designed for residential use are typically low-reflectivity. We can show you samples in both directions before installation.' },
  { q: 'Does window film prevent furniture fading?', a: 'Window film significantly slows UV-related fading by blocking up to 99.9% of UV radiation. UV is the primary cause of fading in carpets, timber floors, upholstery, and artwork. Solar heat is another driver — and solar film addresses both. With Brisbane\'s UV index reaching 15 in summer and remaining at extreme levels for 6 months of the year, unprotected glass lets through significant UVA that standard glass alone does not block.' },
  { q: 'How long after installation before I can clean the windows?', a: 'Wait 30 days before cleaning newly installed window film. During this period, the adhesive is curing. Haze or water pockets visible in the first few weeks are normal and will resolve. After 30 days, clean with an ammonia-free glass cleaner and a soft cloth.' },
  { q: 'Can window film be installed on skylights?', a: 'Yes — 3M window film can be applied to skylight glass. We assess the skylight glass type and access before confirming compatibility and pricing. Skylights are a high-impact location for UV and heat.' },
  { q: 'Is window tinting appropriate for heritage-listed homes?', a: 'Heritage-listed properties may have restrictions on modifications that affect external appearance. We recommend checking with your local council heritage officer before installation. In many cases, low-reflectivity films that preserve the external appearance of the original glass are acceptable.' },
  { q: 'Does window tinting provide privacy at night?', a: 'The one-way privacy effect of window film relies on the light differential — it works when it is brighter outside than inside (daytime). At night, when interior lighting is brighter than the exterior, the effect reverses — and anyone outside can see in. For night privacy, blinds or curtains are still required.' },
  { q: 'Can window film be installed on the outside of glass?', a: 'Some speciality 3M films are rated for exterior installation. Exterior-mounted film is exposed to weathering and typically has a shorter lifespan than interior-mounted film. We specify exterior-rated film where needed (e.g., accessible skylights, specific commercial applications).' },
  { q: 'Where is Glossed Out Detailing and what areas do you service?', a: 'We\'re at Goodrich Ct, Craigieburn VIC 3064 and service all of greater Brisbane for residential window tinting. Call 0481 327 250, email admin@glossedoutdetailing.com.au, or use the quote form to book.' },
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

export default function ResidentialTintQuestionsPage() {
  useEffect(() => {
    document.title = 'Residential Window Tinting Questions — Brisbane | Glossed Out Detailing';
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
        title="Residential Window Tinting Questions | Brisbane"
        description="Common questions about residential window tinting in Brisbane — heat rejection, UV protection, 3M film, electricity savings, warranties. Glossed Out Detailing."
        canonical="https://glossedoutdetailing.com.au/residential-tinting-questions"
      />
    <main style={{ background: 'var(--color-bg-primary)', minHeight: '100dvh' }}>
      <section style={{ padding: '140px var(--section-padding-x) 60px', maxWidth: 780, margin: '0 auto' }}>
        <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', lineHeight: 1, marginBottom: 24 }}>Residential Window Tinting — Brisbane Questions</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.75 }}>
          Brisbane's peak UV index reaches 15 in summer — the extreme threshold is 6. For 6 months of the year (Oct–Mar), standard glass lets through UV radiation that damages interiors, heats rooms, and drives up electricity bills. Queensland households pay an average of $2,143/yr in electricity — the highest in Australia — with air conditioning as the single largest summer expense.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.75, marginTop: 16 }}>
          Below are the questions Brisbane homeowners and renters ask most about 3M residential window film — from how it works and what it costs, to warranties, renter rights, and the west-facing problem.
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
          <Link to="/residential-window-tinting-brisbane" className="btn-primary" style={{ fontSize: 13 }}><span className="btn-slide" /><span>Residential Packages &amp; Pricing</span></Link>
          <Link to="/commercial-tinting-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Commercial Tinting Q&A</Link>
          <Link to="/automotive-tinting-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Automotive Tinting Q&A</Link>
        </div>
      </section>
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90, background: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)', padding: '14px var(--section-padding-x)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>Ready to make your home cooler?</span>
        <Link to="/get-a-quote" className="btn-primary" style={{ fontSize: 13, padding: '10px 20px' }}><span className="btn-slide" /><span>Get a Quote →</span></Link>
      </div>
    </main>
    </>
  );
}
