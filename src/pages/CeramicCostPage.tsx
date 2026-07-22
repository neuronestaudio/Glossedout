import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Check } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const faqs = [
  { q: 'How much does ceramic coating cost in Melbourne?', a: 'Pricing varies by vehicle size, paint condition, and package selected. Contact us for a personalised quote.' },
  { q: 'Why does ceramic coating pricing vary so much across Melbourne?', a: 'Three variables drive price: (1) Product quality — professional-grade coatings with manufacturer warranties cost more than "ceramic spray" products. (2) Paint preparation — correction adds labour hours. (3) Coverage area — paint only vs paint, glass, and wheels. A budget "ceramic coating" is a spray sealant product, not a cured professional ceramic system. The gap in durability and protection is substantial.' },
  { q: 'What is included in the price at Glossed Out Detailing?', a: 'Every package includes full decontamination wash, iron fallout removal, and clay bar treatment as standard prep. The Essential package does not include glass or wheels. Protection covers all three exterior surfaces. Elite adds stage 1 paint correction. Signature adds multi-stage correction and interior protection. Warranty documentation is included on all packages. No hidden fees.' },
  { q: 'Is ceramic coating cheaper than PPF?', a: 'They protect against different threats and are priced differently. Ceramic does not stop rock chips. PPF does not add the same chemical resistance or hydrophobic performance as ceramic. Most serious protection setups use both: PPF on the high-chip zones, ceramic over the full car including the PPF. Contact us to compare packages.' },
  { q: 'Does paint correction affect the total cost?', a: 'Yes. Paint correction is a separate labour step quoted after inspection. The cost depends on vehicle size and paint condition. Multi-stage correction (for heavier oxidation, scratches, or buffer trails) adds more. We assess every car at reception and advise on what is needed before any work begins — no surprise invoices at pickup.' },
  { q: 'Is there a cheaper ceramic option for a tight budget?', a: 'The Essential package covers exterior paint only. It is a genuine professional-grade ceramic application with a 12-month warranty — not a spray product. If budget is a firm constraint, start with the Essential and add glass and wheels at a later date. The coating products are compatible across service intervals.' },
  { q: 'How do I get an accurate ceramic coating quote?', a: 'Contact Glossed Out Detailing with your vehicle make, model, year, colour, and the package you\'re considering. We\'ll provide a specific quote within 2 business hours. For vehicles where paint condition is uncertain, a brief inspection at our Craigieburn studio allows us to confirm whether correction is needed before committing to a price.' },
];


export default function CeramicCostPage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = heroContentRef.current?.querySelectorAll('.hero-anim');
      if (els?.length) gsap.from(els, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.3 });
      if (heroBgRef.current && heroRef.current) {
        gsap.to(heroBgRef.current, { scrollTrigger: { trigger: heroRef.current, scrub: true }, y: '20%', ease: 'none' });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageMeta
        title="Ceramic Coating Cost Melbourne | Pricing Guide"
        description="Ceramic coating pricing in Melbourne. Essential, Protection, and Elite packages. Glossed Out Detailing, Craigieburn."
        canonical="https://glossedoutdetailing.com.au/ceramic-coating-cost-melbourne"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Ceramic Coating Cost Melbourne — Transparent Pricing",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Melbourne",
        "description": "Ceramic coating pricing in Melbourne. Essential, Protection, and Elite packages. No hidden fees. Craigieburn studio.",
        "dateModified": "2026-03-19",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ceramic']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Ceramic Coating Cost Melbourne</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Transparent Pricing.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 520 }}>
            Full pricing listed — no "call for a quote" gatekeeping. Know exactly what each package covers before you contact us.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost">View All Packages</Link>
          </div>
        </div>
      </section>

      {/* PRICE TABLE */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 12, marginBottom: 24, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Last reviewed March 2026</p>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Pricing</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Ceramic Coating Packages</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {[
              { name: 'Essential', coverage: 'Exterior paint surfaces only', warranty: '12-month', price: 'Contact us', note: 'Entry point — exterior protection, no glass or wheels' },
              { name: 'Protection', coverage: 'Exterior paint + all glass + all wheels', warranty: '3-year', price: 'Contact us', recommended: true, note: 'Most popular — complete exterior coverage' },
              { name: 'Elite', coverage: 'Paint + glass + wheels + stage 1 paint correction', warranty: '5-year', price: 'Contact us', note: 'For cars with existing swirl marks or light scratches' },
              { name: 'Signature', coverage: 'Full vehicle + multi-stage correction + interior protection', warranty: '7-year', price: 'Contact us', note: 'Prestige and collector vehicles — quoted per car' },
            ].map((pkg, i) => (
              <div key={i} className="card" style={{ padding: '24px 28px', borderRadius: i === 0 ? '4px 4px 0 0' : i === 3 ? '0 0 4px 4px' : 0, border: pkg.recommended ? '1.5px solid var(--color-accent)' : undefined, position: 'relative' }}>
                {pkg.recommended && <span style={{ position: 'absolute', top: -12, left: 24, background: 'var(--color-accent)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100 }}>Most Popular</span>}
                <div className="grid-4col" style={{ display: 'grid', gridTemplateColumns: '180px 1fr 120px 140px', gap: 24, alignItems: 'center' }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{pkg.name}</p>
                    <p style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{pkg.warranty} warranty</p>
                  </div>
                  <div>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, marginBottom: 4 }}>{pkg.coverage}</p>
                    <p style={{ fontSize: 12, color: 'var(--color-text-muted)', fontStyle: 'italic' }}>{pkg.note}</p>
                  </div>
                  <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 22, color: 'var(--color-accent)', letterSpacing: '0.02em' }}>{pkg.price}</p>
                  <Link to="/get-a-quote" className="btn-primary" style={{ fontSize: 13, padding: '10px 20px', textAlign: 'center' }}><span className="btn-slide" /><span>Get a Quote</span></Link>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, color: 'var(--color-text-muted)', fontSize: 13 }}>Starting prices for standard-size passenger cars. SUVs, utes, and prestige vehicles may vary. Paint correction, if required, is quoted separately and confirmed before work begins.</p>
        </div>
      </section>

      {/* INCLUSIONS */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 16 }}>What Every Package Includes</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>Standard prep on every job — no add-on fees for basics.</p>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Full decontamination wash',
                'Iron fallout removal',
                'Clay bar treatment on all coated panels',
                'Panel inspection — correction advised upfront if needed',
                'Professional ceramic coating application',
                'Post-application inspection under workshop lighting',
                'Warranty documentation at handover',
                'Written aftercare guide',
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

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Ceramic Coating Pricing Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="Ceramic Coating" defaultService="Ceramic Coating" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All Ceramic Packages</Link>
            <Link to="/ceramic-coating-new-car-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic for New Cars</Link>
            <Link to="/ceramic-coating-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Q&amp;A</Link>
          </div>
        </div>
      </section>
    </>
  );
}
