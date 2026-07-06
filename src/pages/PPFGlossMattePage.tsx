import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Eye, Sun, Shield, Layers } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const comparisons = [
  { attribute: 'Appearance', gloss: 'Optically clear — indistinguishable from unprotected paint at distance', matte: 'Satin-flat finish — transforms gloss paint to a factory matte look' },
  { attribute: 'Paint Compatibility', gloss: 'Suitable over all factory finishes — gloss, satin, metallic', matte: 'Best over gloss factory paint — the film creates the matte look' },
  { attribute: 'Self-Healing', gloss: 'Yes — SunTek Reaction self-healing topcoat standard', matte: 'Yes — SunTek Ultra Matte also carries self-healing topcoat' },
  { attribute: 'Maintenance', gloss: 'pH-neutral wash, standard ceramic if desired', matte: 'pH-neutral wash only — no machine polishing or gloss products on matte film' },
  { attribute: 'Ceramic Coating Compatibility', gloss: 'Yes — ceramic over gloss PPF is standard practice', matte: 'Matte-specific ceramic only — gloss ceramics will alter the matte finish' },
  { attribute: 'Warranty', gloss: '12-year SunTek manufacturer warranty', matte: '10-year SunTek manufacturer warranty' },
  { attribute: 'Typical Use Case', gloss: 'All cars where original paint appearance is to be preserved', matte: 'Gloss cars getting a stealth appearance change without wrap' },
];

const faqs = [
  { q: 'What is the difference between gloss and matte PPF?', a: 'Gloss PPF is optically transparent — when applied over gloss paint, the finish looks identical to the factory surface with no film visible. Matte PPF has a diffused, satin-flat topcoat — when applied over gloss paint, it changes the appearance to a factory matte look. Both use the same urethane film body for chip protection. The difference is entirely in the topcoat finish.' },
  { q: 'Can I apply matte PPF over gloss factory paint?', a: 'Yes — this is the primary use case for matte PPF. A gloss-finished car treated with matte PPF on the exterior will look like a factory matte finish. This is a common alternative to a full vinyl wrap for people who want the matte look with the added benefit of chip protection from the underlying film.' },
  { q: 'Can I apply gloss PPF over matte factory paint?', a: 'Applying gloss PPF over matte factory paint will alter the finish toward satin or semi-gloss — it will not preserve the matte look. For matte factory paint, matte PPF preserves the original appearance. This is an important distinction before booking: confirm your factory finish and desired outcome.' },
  { q: 'Is matte PPF harder to maintain than gloss?', a: 'Yes, it requires more specific product discipline. Machine polishing is incompatible with matte film — it will introduce gloss patches. Only pH-neutral shampoos are used on matte film surfaces. Ceramic coatings over matte PPF must be matte-specific products. None of these restrictions are difficult, but they require awareness before choosing matte.' },
  { q: 'Does matte PPF still provide chip protection?', a: 'Yes — the urethane film body is identical between gloss and matte PPF. Only the topcoat finish differs. Chip protection, stone impact absorption, and self-healing (for light surface scratches) function identically on both.' },
  { q: 'Does matte PPF change the appearance of the paint permanently?', a: 'No. PPF is removable. Removing matte PPF will restore the original gloss factory finish underneath, assuming the paint surface is properly prepared before installation and the film is removed correctly. Incorrect removal on aged or fragile paint can cause paint lift, but this is true of all adhesive film products.' },
  { q: 'Which finish should I choose for a daily driver?', a: 'Gloss PPF is the practical default for most daily drivers. It is invisible, maintenance-straightforward, and compatible with all standard ceramic coating products. Matte PPF is appropriate if you want the stealth matte look — but factor in the maintenance restrictions before deciding. Gloss preserves optionality; matte is a deliberate aesthetic choice.' },
];


export default function PPFGlossMattePage() {
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
        title="Gloss vs Matte PPF Brisbane | SunTek Film Options"
        description="Choosing between gloss and matte PPF in Brisbane. SunTek gloss and matte film options explained. Glossed Out Detailing, Acacia Ridge."
        canonical="https://glossedoutdetailing.com.au/gloss-vs-matte-ppf-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Gloss vs Matte PPF Brisbane — SunTek Paint Protection Film",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "Gloss and matte PPF available in Brisbane. SunTek Reaction gloss PPF is optically clear. SunTek Ultra Matte transforms gloss paint to satin finish. Acacia Ridge studio.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Gloss vs Matte PPF Brisbane</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Same Protection. Different Finish.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            Gloss PPF is invisible over gloss paint. Matte PPF transforms gloss paint to a satin finish. Both use the same SunTek urethane body for full chip protection.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/ppf-brisbane" className="btn-ghost">View All PPF Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Comparison</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Gloss vs Matte — Side by Side</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--color-surface)' }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, border: '1px solid var(--color-border)', width: 180 }}>Attribute</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, border: '1px solid var(--color-border)' }}>Gloss PPF</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--color-text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, border: '1px solid var(--color-border)' }}>Matte PPF</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--color-surface)' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 700, fontSize: 12, border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>{row.attribute}</td>
                    <td style={{ padding: '14px 20px', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{row.gloss}</td>
                    <td style={{ padding: '14px 20px', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{row.matte}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* KEY ICONS */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Both Finishes. Same Core Film.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {[
              { icon: Shield, label: 'Same urethane body — identical chip protection' },
              { icon: Eye, label: 'Both optically clear at adhesive layer' },
              { icon: Layers, label: 'Both carry SunTek self-healing topcoat' },
              { icon: Sun, label: 'SunTek Reaction 12-year, Ultra Matte 10-year warranty' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: 24, textAlign: 'center' }}>
                <item.icon size={28} color="var(--color-accent)" style={{ margin: '0 auto 12px' }} />
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Gloss vs Matte PPF Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="Gloss or Matte PPF" defaultService="Paint Protection Film (PPF)" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All PPF Packages</Link>
            <Link to="/ppf-dark-paint-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF for Dark Paint</Link>
            <Link to="/ppf-self-healing-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Self-Healing PPF</Link>
          </div>
        </div>
      </section>
    </>
  );
}
