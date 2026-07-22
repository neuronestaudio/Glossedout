import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Droplets, Clock, Eye, TrendingUp, Zap } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Shield, title: 'Brake Dust Resistance', desc: 'Brake dust is hot, acidic, and abrasive. On bare alloy, it bonds rapidly and etches the surface. Ceramic-coated wheels resist adhesion — dust sits on the surface rather than bonding to it, and lifts with a basic rinse.' },
  { icon: Droplets, title: 'Faster Wheel Maintenance', desc: 'Coated wheels rinse clean in a fraction of the time of bare alloy. Weekly wheel cleaning drops from a scrubbing job to a 60-second rinse at the hose. This alone changes the practical maintenance frequency.' },
  { icon: Clock, title: 'Corrosion and Road Salt Resistance', desc: 'Victoria conditions — humid heat, occasional coastal driving — accelerate corrosion on bare alloy. Ceramic coating seals the alloy surface against moisture and road contaminants that cause pitting over time.' },
  { icon: Eye, title: 'Deep Gloss on Polished Alloy', desc: 'Ceramic coating on polished or machined alloy adds a depth of gloss and a wet look that clear coat alone cannot achieve. The hydrophobic surface also prevents the dull surface oxidation that makes polished alloy look flat within months of purchase.' },
  { icon: TrendingUp, title: 'Preserves Kerbing Appearance', desc: 'Wheels with existing light kerb rash coated with ceramic still look cleaner for longer — the coated surface around the damage resists further contamination build-up, keeping the rash from looking worse than it is.' },
  { icon: Zap, title: 'Included in Protection Package', desc: 'Ceramic coating for all four wheels is included in the Protection, Elite, and Signature packages. It is not available as a standalone service — wheels are coated as part of a complete ceramic package.' },
];

const faqs = [
  { q: 'Is ceramic coating on wheels worth it?', a: 'Yes — wheels are the single highest-contamination surface on any car. Brake dust accumulates every drive. On bare alloy, it bonds within hours and requires scrubbing to remove. Ceramic-coated wheels shed brake dust significantly more easily — a rinse with a hose removes what previously required a brush and chemical cleaner. The maintenance time saving alone justifies the cost.' },
  { q: 'Will ceramic coating prevent brake dust from appearing on wheels?', a: 'No — brake dust is a by-product of brake pad contact with rotors and will always be present. Ceramic coating prevents the dust from bonding to the alloy surface. The dust still appears, but it sits on the coating rather than adhering to the metal, and rinses off with water rather than requiring agitation.' },
  { q: 'What types of wheels can be ceramic coated?', a: 'Polished alloy, painted alloy, machine-faced alloy, powder-coated wheels, and clear-coated factory wheels. Chrome-plated and bare metal wheels require assessment before coating — the ceramic adhesion chemistry differs across these substrates.' },
  { q: 'Do I need to have my wheels cleaned before the appointment?', a: 'No — full wheel decontamination is included in every ceramic package as part of the prep process. We strip the existing contamination, remove iron deposits, degrease, and prepare the surface before coating. You do not need to do anything in advance.' },
  { q: 'Can ceramic coating fix existing wheel corrosion or pitting?', a: 'No. Ceramic coating is a surface protection product — it seals against future corrosion but cannot reverse existing damage. Corroded or pitted wheels would require machine polishing or refinishing before coating if the surface damage is significant. We assess all four wheels at reception and advise.' },
  { q: 'How long does ceramic wheel coating last?', a: 'Warranted for the same period as the package: 3 years on Protection, 5 years on Elite, 7 years on Signature. In practice, wheel coatings receive more physical wear than paint coatings — brake dust, chemical cleaners, and abrasion from cleaning equipment. Proper maintenance (pH-neutral cleaners, soft brushes) preserves the coating at its full performance level.' },
];


export default function CeramicWheelsPage() {
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
        title="Ceramic Wheels Coating Melbourne | Brake Dust Protection"
        description="Ceramic coating for wheels in Melbourne. Resist brake dust bonding and keep wheels cleaner longer. Glossed Out Detailing, Craigieburn."
        canonical="https://glossedoutdetailing.com.au/ceramic-coating-wheels-melbourne"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Ceramic Coating for Wheels Melbourne",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Melbourne",
        "description": "Ceramic coating for car wheels in Melbourne. Brake dust resistance — rinses clean with water. Included in Protection, Elite, and Signature ceramic packages. Craigieburn studio.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ceramic']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Ceramic Coating for Wheels</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Brake Dust Rinses Off.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            Ceramic-coated wheels resist brake dust adhesion. What previously required scrubbing rinses off with water. Included in all Protection, Elite, and Signature packages.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost">View All Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/product-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Wheel Coating</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Why Coat the Wheels</h2>
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

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Ceramic Wheel Coating Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="Ceramic Wheel Coating" defaultService="Ceramic Coating" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All Ceramic Packages</Link>
            <Link to="/ceramic-glass-coating-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Glass Coating</Link>
            <Link to="/ceramic-coating-cost-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Cost</Link>
          </div>
        </div>
      </section>
    </>
  );
}
