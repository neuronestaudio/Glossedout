import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Check } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const faqs = [
  { q: 'How much does PPF cost in Brisbane?', a: 'Pricing depends on coverage zone and vehicle size. Contact us for a personalised quote.' },
  { q: 'Why does PPF cost more than a basic paint protection product?', a: 'PPF is a physical urethane film cut and applied panel by panel. It requires specialist training, a controlled environment, and precision tooling. Generic "paint protection" products from dealerships or car washes are wax or sealant coatings — they cost less because they provide no physical chip protection. The comparison is not valid: one stops chips, the other does not.' },
  { q: 'What is included in the price at Glossed Out Detailing?', a: 'Every PPF quote includes: full decontamination wash, clay bar treatment, panel inspection, film application with edge tucks on all panels, post-installation QC under workshop lighting, SunTek warranty documentation, and a written aftercare guide. There are no hidden fees. Paint correction, if required, is quoted separately and advised upfront before any work begins.' },
  { q: 'Is a cheaper PPF installer worth considering?', a: 'The film and the installation are inseparable. Cheaper installers typically use lower-grade film (not SunTek, XPEL, or equivalent tier-one brands), skip edge tucking (leaving exposed edges that lift), and install in uncontrolled environments where contamination under the film is common. These failures are not covered by any warranty. The cost of removal and reinstallation on a failed job typically exceeds the original saving.' },
  { q: 'Can I get a partial PPF install to reduce cost?', a: 'Yes — partial installs are the most common entry point. An Impact Shield kit protects the two highest-chip-risk zones on any car — the front bumper and bonnet leading edge. You can always add panels later. The critical thing is that what is installed is done correctly with quality film the first time.' },
  { q: 'Does PPF add value at resale that offsets the cost?', a: 'It prevents value loss rather than adding value above market. A PPF-protected car at trade-in arrives with factory paint condition — no chip negotiation, no paint correction cost. Dealer discounts for reconditioning on unprotected vehicles can be significant. A front end package applied at delivery is cost-neutral over a typical ownership period in realistic scenarios.' },
  { q: 'How do I get an accurate PPF quote in Brisbane?', a: 'Contact Glossed Out Detailing with your vehicle make, model, year, and colour — and the coverage you\'re interested in. We\'ll provide a specific quote within 2 business hours. For complex vehicles or full wraps, a brief inspection at our Acacia Ridge studio may be required to confirm pricing.' },
];


export default function PPFCostPage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = heroContentRef.current?.querySelectorAll('.hero-anim');
      if (els) gsap.from(els, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.3 });
      if (heroBgRef.current && heroRef.current) {
        gsap.to(heroBgRef.current, { scrollTrigger: { trigger: heroRef.current, scrub: true }, y: '20%', ease: 'none' });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageMeta
        title="PPF Cost Brisbane | Paint Protection Film Pricing"
        description="Paint protection film pricing in Brisbane. Impact Shield, Front End, Track Package, and Full Wrap options. SunTek Authorised installer."
        canonical="https://glossedoutdetailing.com.au/ppf-cost-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "PPF Cost Brisbane — Paint Protection Film Pricing",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "Transparent PPF pricing in Brisbane. SunTek Authorised installer in Acacia Ridge. No hidden fees.",
        "dateModified": "2026-03-19",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>PPF Cost Brisbane</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Transparent Pricing.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 520 }}>
            No "call for a quote" black box. Real pricing, real inclusions — so you can compare properly. SunTek Authorised installer in Acacia Ridge, Brisbane.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/ppf-brisbane" className="btn-ghost">View All Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 12, marginBottom: 24, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Last reviewed March 2026</p>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Pricing</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>What PPF Costs at Glossed Out Detailing</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {[
              { package: 'Impact Shield', coverage: 'Bonnet leading edge (30cm) + front bumper + front guards', price: 'Contact us for a quote', warranty: '5-year SunTek', note: 'Entry point — covers the highest-chip-frequency zones' },
              { package: 'Front End Package', coverage: 'Full bonnet + front bumper + front guards + headlights + mirrors', price: 'Contact us for a quote', warranty: '12-year SunTek', note: 'Most popular — covers 90% of chip events on any road car', recommended: true },
              { package: 'Track Package', coverage: 'Front end + roof + A-pillars', price: 'Contact us for a quote', warranty: '12-year SunTek', note: 'Highway drivers and open road use — additional high-exposure zones covered' },
              { package: 'Full Wrap', coverage: 'Entire exterior painted surface', price: 'Contact us for a quote', warranty: '12-year SunTek', note: 'Prestige and performance vehicles — quoted on application by vehicle' },
            ].map((row, i) => (
              <div key={i} className="card" style={{ padding: '24px 28px', borderRadius: i === 0 ? '4px 4px 0 0' : i === 3 ? '0 0 4px 4px' : 0, border: row.recommended ? '1.5px solid var(--color-accent)' : undefined, position: 'relative' }}>
                {row.recommended && <span style={{ position: 'absolute', top: -12, left: 24, background: 'var(--color-accent)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100 }}>Most Popular</span>}
                <div className="grid-4col" style={{ display: 'grid', gridTemplateColumns: '200px 1fr 120px 160px', gap: 24, alignItems: 'center' }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{row.package}</p>
                    <p style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{row.warranty} warranty</p>
                  </div>
                  <div>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, marginBottom: 4 }}>{row.coverage}</p>
                    <p style={{ fontSize: 12, color: 'var(--color-text-muted)', fontStyle: 'italic' }}>{row.note}</p>
                  </div>
                  <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 22, color: 'var(--color-accent)', letterSpacing: '0.02em' }}>{row.price}</p>
                  <Link to="/get-a-quote" className="btn-primary" style={{ fontSize: 13, padding: '10px 20px', textAlign: 'center' }}><span className="btn-slide" /><span>Get a Quote</span></Link>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, color: 'var(--color-text-muted)', fontSize: 13 }}>All prices are starting points for standard-size vehicles. Larger vehicles (SUVs, utes, prestige) may vary. Paint correction, if required prior to film, is quoted separately and advised upfront.</p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 16 }}>What Every Quote Includes</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>No hidden add-ons. These are standard on every job regardless of package.</p>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Full decontamination wash before installation',
                'Clay bar treatment on all panels to be filmed',
                'Panel inspection — correction advised if needed (upfront, not a surprise)',
                'SunTek Reaction PPF — not an unbranded alternative',
                'Edge-tucked installation on every covered panel',
                'Post-install QC check under workshop lighting',
                'SunTek manufacturer warranty documentation',
                'Written aftercare guide at handover',
              ].map((inc, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Check size={16} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>PPF Pricing Questions</h2>
          <FAQAccordion items={faqs} />
          <div style={{ marginTop: 40, padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>
              More PPF questions?{' '}
              <Link to="/ppf-questions" style={{ color: 'var(--color-accent)', textDecoration: 'underline', textUnderlineOffset: 3 }}>Read our complete PPF Q&amp;A →</Link>
            </p>
          </div>
        </div>
      </section>

      <CTABlock service="PPF Pricing" defaultService="Paint Protection Film (PPF)" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All PPF Packages</Link>
            <Link to="/ppf-new-car-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF for New Cars</Link>
            <Link to="/ppf-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Questions Answered</Link>
          </div>
        </div>
      </section>
    </>
  );
}
