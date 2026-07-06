import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Layers, Eye, Zap, Check } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const comparisonRows = [
  { attribute: 'Chip Protection', ceramic: 'None — chemical resistance only', ppf: 'Full physical impact absorption', combined: 'PPF absorbs chips. Ceramic protects over PPF.' },
  { attribute: 'Chemical Resistance', ceramic: 'High — acid, alkaline, bird drop, sap', ppf: 'Moderate — urethane is resistant but not as hard as ceramic', combined: 'Ceramic over PPF adds hard chemical barrier to the film surface' },
  { attribute: 'Hydrophobic Performance', ceramic: 'High — water sheets off', ppf: 'Moderate — self-healing topcoat has some hydrophobic property', combined: 'Ceramic adds full hydrophobic performance over the entire PPF surface' },
  { attribute: 'Gloss Depth', ceramic: 'High — adds depth and wet look', ppf: 'Preserves original gloss — does not add depth', combined: 'Ceramic over PPF adds gloss depth to protected panels' },
  { attribute: 'Swirl Resistance', ceramic: 'Hard surface — more resistant to fine swirls than uncoated paint', ppf: 'Self-healing topcoat addresses light swirls', combined: 'Ceramic provides additional swirl resistance over the PPF topcoat' },
  { attribute: 'Coverage', ceramic: 'Full exterior — paint, glass, wheels', ppf: 'Selected panels — front end, partial, or full wrap', combined: 'PPF on high-chip zones. Ceramic over PPF and remaining panels.' },
  { attribute: 'Cost', ceramic: 'Contact us for a quote', ppf: 'Contact us for a quote', combined: 'Combined packages — contact for specific quote' },
];

const faqs = [
  { q: 'Should I get PPF, ceramic coating, or both?', a: 'They protect against different threats. PPF stops chips — physical film absorbs impact. Ceramic adds chemical resistance, hydrophobic performance, and gloss depth. For a car where chip damage is a real concern (motorway driving, new car), PPF on the front end is the starting point. Adding ceramic over the whole car then gives the hydrophobic and contamination-resistance benefits across all surfaces including the film.' },
  { q: 'Can you apply ceramic coating over PPF?', a: 'Yes — this is standard practice and the recommended full-protection setup. Ceramic coating bonds to the PPF surface and adds a hard, hydrophobic top layer over the film. The film handles chip impact below; the ceramic handles contamination and hydrophobic performance above. The ceramic does not interfere with the PPF\'s self-healing topcoat function.' },
  { q: 'Which should I do first — PPF or ceramic?', a: 'PPF is always installed first. Ceramic coating is then applied over the PPF and any unfilmed panels. The correct sequence is: decontamination wash, paint correction if needed, PPF installation, followed by ceramic application over the complete exterior. Never install PPF over existing ceramic coating — the adhesive will not bond correctly.' },
  { q: 'Is PPF + ceramic the "best" protection available?', a: 'Yes — for paint preservation, the combination is the most comprehensive option. PPF handles impact. Ceramic handles contamination. The PPF keeps chips from reaching the paint. The ceramic keeps contamination from reaching the PPF surface. Each layer extends the life and performance of the other.' },
  { q: 'What does PPF + ceramic cost?', a: 'Combined packages depend on PPF coverage and ceramic tier. Contact us with your vehicle details and coverage preference for an exact quote.' },
  { q: 'Does ceramic coating on PPF affect the PPF warranty?', a: 'No. Applying ceramic coating over PPF is a standard and endorsed practice. SunTek\'s PPF warranty is not voided by ceramic coating application over the film. The two products are compatible and the warranty terms for each apply independently.' },
];


export default function CeramicPPFComboPage() {
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
        title="Ceramic Coating + PPF Brisbane | Combined Protection"
        description="Combining ceramic coating and PPF in Brisbane for maximum paint protection. Physical barrier plus chemical protection. Glossed Out Detailing."
        canonical="https://glossedoutdetailing.com.au/ceramic-ppf-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "PPF and Ceramic Coating Brisbane — Combined Protection",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "PPF and ceramic coating combined in Brisbane. PPF absorbs chips. Ceramic adds hydrophobic performance and chemical resistance over the film and full exterior. Acacia Ridge studio.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf', 'ceramic']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>PPF + Ceramic Coating Brisbane</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Layer One. Then The Other.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            PPF handles chip impact. Ceramic handles contamination and hydrophobic performance. Combined, they are the most comprehensive paint protection setup available.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Combined Quote</span></Link>
            <Link to="/ppf-brisbane" className="btn-ghost">PPF Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>How They Work Together</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>PPF vs Ceramic vs Combined</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--color-surface)' }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, border: '1px solid var(--color-border)', width: 160 }}>Attribute</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, border: '1px solid var(--color-border)' }}>Ceramic Only</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--color-text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, border: '1px solid var(--color-border)' }}>PPF Only</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, border: '1px solid var(--color-border)', background: 'rgba(var(--color-accent-rgb), 0.05)' }}>PPF + Ceramic</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--color-surface)' }}>
                    <td style={{ padding: '12px 20px', fontWeight: 700, fontSize: 12, border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>{row.attribute}</td>
                    <td style={{ padding: '12px 20px', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', lineHeight: 1.5, fontSize: 12 }}>{row.ceramic}</td>
                    <td style={{ padding: '12px 20px', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', lineHeight: 1.5, fontSize: 12 }}>{row.ppf}</td>
                    <td style={{ padding: '12px 20px', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', lineHeight: 1.5, fontSize: 12, background: 'rgba(0,0,0,0.015)' }}>{row.combined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>The Correct Sequence</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { icon: Shield, step: '01', label: 'Decontamination', desc: 'Full wash, iron fallout, clay bar on all surfaces' },
              { icon: Zap, step: '02', label: 'Paint Correction', desc: 'If defects present — corrected before any protective layer is applied' },
              { icon: Layers, step: '03', label: 'PPF Installation', desc: 'Film applied to specified panels — bonnet, bumper, guards, full front, or complete wrap' },
              { icon: Eye, step: '04', label: 'Ceramic Application', desc: 'Ceramic applied over PPF and all remaining exterior surfaces — paint, glass, wheels' },
              { icon: Check, step: '05', label: 'QC and Handover', desc: 'Post-install inspection, warranty documentation, aftercare guide' },
            ].map((step, i) => (
              <div key={i} className="card" style={{ padding: 24, textAlign: 'center' }}>
                <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 32, color: 'var(--color-accent)', lineHeight: 1, marginBottom: 8 }}>{step.step}</p>
                <step.icon size={20} color="var(--color-text-muted)" style={{ margin: '0 auto 10px' }} />
                <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{step.label}</p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 12, lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>PPF + Ceramic Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="PPF and Ceramic Coating" defaultService="PPF and Ceramic Coating" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Packages</Link>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Packages</Link>
            <Link to="/ppf-cost-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Cost</Link>
          </div>
        </div>
      </section>
    </>
  );
}
