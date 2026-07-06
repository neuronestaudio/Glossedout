import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, RefreshCw, Clock, AlertCircle } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Shield, title: '12-Year Manufacturer Warranty', desc: 'SunTek Reaction PPF carries a 12-year manufacturer warranty covering delamination, yellowing, cracking, and hazing — backed directly by SunTek, not just the installer.' },
  { icon: RefreshCw, title: 'Self-Healing Covered', desc: 'The self-healing topcoat that eliminates light swirl marks under heat is part of the SunTek warranty specification — not a separate feature you have to pay extra to protect.' },
  { icon: AlertCircle, title: 'What the Warranty Covers', desc: 'Delamination from the paint surface. Film yellowing or discolouration. Edge lifting from a factory tuck (not post-damage). Film cracking or hazing under normal conditions.' },
  { icon: AlertCircle, title: 'What the Warranty Excludes', desc: 'Damage caused by abrasion (pressure washing the film edge), chemical contamination, physical punctures or cuts, or modification by an unauthorised party. Vandalism is an insurance claim, not a warranty claim.' },
  { icon: Clock, title: '5-Year Option Available', desc: 'Entry-level packages use SunTek\'s 5-year film — mechanically identical protection but with a shorter warranty term. Upgrading to 12-year SunTek Reaction is available on any package.' },
  { icon: Shield, title: 'Warranty Requires Authorised Installer', desc: 'SunTek warranties are only valid when installed by an Authorised Application Centre. Glossed Out Detailing is a SunTek Authorised installer in Brisbane.' },
];

const faqs = [
  { q: 'How long does PPF last in Brisbane?', a: 'SunTek Reaction PPF is warranted for 12 years against delamination, yellowing, cracking, and hazing. SunTek Ultra Matte carries a 10-year warranty. In Brisbane\'s UV environment, the 12-year Reaction warranty film is a practical necessity. The 5-year film is mechanically similar but the warranty period is shorter — for a long-term ownership vehicle, SunTek Reaction is better value.' },
  { q: 'What does the SunTek PPF warranty actually cover?', a: 'The SunTek manufacturer warranty covers: (1) delamination — film separating from the paint surface without a physical cause; (2) yellowing or discolouration from UV or ambient oxidation; (3) edge lifting from a properly installed factory tuck; (4) film cracking or surface hazing under normal driving conditions. It does not cover physical damage, chemical contamination, or abrasion.' },
  { q: 'Does the warranty require me to use the same installer for claims?', a: 'Warranty claims are assessed by SunTek directly. The film carries a serial batch number recorded at installation. You do not need to return to the same installer for a warranty assessment, but the film must have been installed by an Authorised Application Centre — which Glossed Out Detailing is. We document every installation for your records.' },
  { q: 'Does DIY or kit-form PPF come with a warranty?', a: 'No reputable manufacturer warranties film installed by a non-certified party. Kit-form PPF — sold through car parts stores or online — uses lower-grade film and has no manufacturer warranty. If it lifts, yellows, or fails, the remedy cost falls entirely on you.' },
  { q: 'What happens if the film is damaged and it isn\'t covered by warranty?', a: 'Physical damage — chips, cuts, deep abrasions — is not a warranty failure, it\'s the film doing its job. Damaged sections can be replaced panel by panel. The film absorbs the damage instead of the paint. Replacement cost varies by panel — contact us for a re-film quote if a section has taken impact.' },
  { q: 'Does ceramic coating over PPF affect the warranty?', a: 'No — applying a ceramic coating over PPF is a standard and recommended practice. It does not void the film warranty. The ceramic coating is a separate product on the film surface and does not affect the film\'s adhesion or structural properties.' },
  { q: 'How do I register my PPF warranty?', a: 'Glossed Out Detailing provides SunTek warranty documentation at handover. This includes the installer authorisation, film specification, installation date, and covered panels. Keep this document with your vehicle records. We can also provide a digital copy on request.' },
];


export default function PPFWarrantyPage() {
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
        title="PPF Warranty Brisbane | SunTek 12-Year Warranty"
        description="SunTek paint protection film warranty in Brisbane. 12-year manufacturer warranty on SunTek Reaction via authorised installer."
        canonical="https://glossedoutdetailing.com.au/ppf-warranty-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "PPF Warranty Brisbane — SunTek 12-Year Paint Protection Film",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "SunTek Authorised installer in Brisbane — 12-year manufacturer warranty on SunTek Reaction Paint Protection Film. Delamination, yellowing, cracking, and hazing covered.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>PPF Warranty Brisbane</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>12 Years. SunTek.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            SunTek Reaction PPF carries a 12-year manufacturer warranty — backed by SunTek, not just the installer. Know exactly what is covered before you commit.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/ppf-brisbane" className="btn-ghost">View All PPF Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* WARRANTY BREAKDOWN */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Warranty</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>What the 12-Year Warranty Covers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {benefits.map((b, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <b.icon size={22} color="var(--color-accent)" style={{ marginBottom: 12 }} />
                <h3 style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>{b.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERED VS NOT */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Covered vs Not Covered</h2>
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="card" style={{ padding: 28, borderTop: '2px solid #22c55e' }}>
              <p style={{ fontWeight: 700, fontSize: 14, color: '#22c55e', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Covered by Warranty</p>
              {['Film delamination from painted surface', 'Yellowing or UV discolouration', 'Edge lifting from a factory-tucked install', 'Film cracking under normal conditions', 'Surface hazing from ambient exposure'].map((item, i) => (
                <p key={i} style={{ color: 'var(--color-text-secondary)', fontSize: 13, padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>{item}</p>
              ))}
            </div>
            <div className="card" style={{ padding: 28, borderTop: '2px solid #ef4444' }}>
              <p style={{ fontWeight: 700, fontSize: 14, color: '#ef4444', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Not Covered by Warranty</p>
              {['Physical damage from chips, cuts, or abrasion', 'Chemical contamination from incorrect products', 'Damage from pressure-washing film edges', 'Vandalism or intentional damage', 'Film modified by an unauthorised party'].map((item, i) => (
                <p key={i} style={{ color: 'var(--color-text-secondary)', fontSize: 13, padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>PPF Warranty Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="PPF Warranty" defaultService="Paint Protection Film (PPF)" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All PPF Packages</Link>
            <Link to="/ppf-cost-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Cost in Brisbane</Link>
            <Link to="/suntek-ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>SunTek PPF</Link>
          </div>
        </div>
      </section>
    </>
  );
}
