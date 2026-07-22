import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Droplets, Shield, Clock, TrendingUp, Sun, Eye } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Droplets, title: 'Hydrophobic Glass — Real-World Benefit', desc: 'Water sheets off ceramic-coated glass instead of beading and sitting. At highway speed above 80km/h, rain effectively clears itself without wipers. Night driving in rain on coated glass is noticeably clearer than uncoated.' },
  { icon: Shield, title: 'Contamination Resistance', desc: 'Insects, bird droppings, and road film bond less aggressively to coated glass. Removal requires less effort and less contact — reducing the chance of pressure-induced scratching during cleaning.' },
  { icon: Clock, title: 'Wiper Blade Life Extended', desc: 'Coated glass requires wiper blades less frequently — and when blades do run, they run across a smoother surface. Water clearing happens partially through the sheeting action before wipers engage.' },
  { icon: TrendingUp, title: 'Permanent vs Spray Products', desc: 'Rain-X and similar spray hydrophobic products last 4–8 weeks under Australian conditions. Ceramic glass coating is warranted for years — not weeks. The chemistry bonds permanently to the glass surface.' },
  { icon: Sun, title: 'UV Filtering Maintained', desc: 'Ceramic coating on glass does not interfere with the glass\'s existing UV properties. If the vehicle has factory UV-filtering glass, the coating sits on the surface and does not reduce filtering capacity.' },
  { icon: Eye, title: 'Optical Clarity — No Distortion', desc: 'Professional ceramic glass coating is applied and levelled to zero distortion. There is no fish-eye or rainbow effect visible in daylight. Optically, the glass is indistinguishable from uncoated at all angles.' },
];

const faqs = [
  { q: 'Is ceramic coating on car glass worth it?', a: 'Yes — glass is one of the highest-value surfaces for ceramic coating. The hydrophobic effect on glass has an immediate daily benefit: rain sheets off at speed, reducing wiper dependency and improving visibility in wet conditions. The coating also makes glass significantly easier to clean — contamination doesn\'t bond to the surface the same way as on uncoated glass.' },
  { q: 'How long does ceramic glass coating last?', a: 'Our Protection package glass coating is warranted for 3 years. Elite is warranted for 5 years. Unlike spray products that last 4–8 weeks, a properly applied professional ceramic glass coating maintains its hydrophobic performance for years under normal Victoria driving conditions.' },
  { q: 'Does ceramic glass coating interfere with defrost or embedded antennas?', a: 'No. The coating is applied to the outer surface of all glass — windscreen, side windows, and rear glass. It does not contact heated rear window elements or embedded antenna wires on the inner surface. The coating is exterior only.' },
  { q: 'Can I still use wiper blades after ceramic glass coating?', a: 'Yes — blades operate normally on coated glass. The hydrophobic surface means blades operate across a smoother, cleaner surface. Some customers find they use wipers less frequently at highway speeds because water sheets off without blade assistance.' },
  { q: 'Does ceramic coating replace Rain-X or similar products?', a: 'Yes — and outperforms them significantly in durability. Rain-X is a spray sealant that lasts 4–8 weeks. Ceramic glass coating is a permanently bonded hydrophobic layer warranted for 3–5 years. The upfront cost is higher; the cost per year of protection is significantly lower.' },
  { q: 'Is the windscreen included in all ceramic coating packages?', a: 'Glass (including windscreen, all side windows, and rear glass) is included from the Protection package up. The Essential package covers exterior paint only. If you want glass coating as a standalone service or with the Essential package, contact us for an add-on quote.' },
  { q: 'Can ceramic coating be applied to tinted windows?', a: 'Yes — ceramic coating is applied to the outer glass surface. Factory tint and aftermarket window film are on the inner surface. The coating does not interact with tint and is compatible with all window tinting. We recommend ceramic glass coating after window film installation, not before.' },
];


export default function CeramicGlassPage() {
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
        title="Ceramic Glass Coating Melbourne | Hydrophobic Glass"
        description="Ceramic coating for glass in Melbourne. Hydrophobic glass coating improves rain visibility and reduces cleaning. Glossed Out Detailing."
        canonical="https://glossedoutdetailing.com.au/ceramic-glass-coating-melbourne"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Ceramic Coating for Car Glass Melbourne",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Melbourne",
        "description": "Ceramic coating for car glass in Melbourne. Hydrophobic windscreen, side windows, and rear glass. Rain sheets off at speed. 3-year warranty. Craigieburn studio.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ceramic']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Ceramic Glass Coating Melbourne</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Rain Sheets Off. Wipers Optional.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            Ceramic-coated glass is hydrophobic, contamination-resistant, and optically clear. The visibility improvement in Melbourne rain is immediately noticeable. Warranted for 3–5 years.
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
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Glass Coating</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Why Coat the Glass</h2>
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
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Ceramic Glass Coating Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="Ceramic Glass Coating" defaultService="Ceramic Coating" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All Ceramic Packages</Link>
            <Link to="/ceramic-coating-wheels-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating for Wheels</Link>
            <Link to="/detailing-packages-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Automotive Window Tinting</Link>
          </div>
        </div>
      </section>
    </>
  );
}
