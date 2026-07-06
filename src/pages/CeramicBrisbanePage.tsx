import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Sun, Droplets, Shield, TrendingUp, Clock, Eye } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Sun, title: 'Brisbane UV Index Is Extreme', desc: 'Brisbane regularly records UV Index 11–13 in summer — the "extreme" band. Clear coat without protection oxidises and thins within 2–3 years in south-east Queensland conditions. Ceramic coating adds a UV-absorbing layer that the factory clear coat alone does not provide.' },
  { icon: Droplets, title: 'Humidity Accelerates Contamination', desc: 'High humidity promotes faster bonding of organic contamination — bird droppings, tree sap, and insect residue etch faster in heat. A ceramic-coated surface resists this bonding, giving a wider treatment window before damage occurs.' },
  { icon: Shield, title: 'Hard Surface Layer vs Wax', desc: 'Wax and sealant degrade rapidly under Brisbane heat — lasting 3–6 months at best. Ceramic coating cures as a semi-permanent hard layer with 1–7 year warranty options. It does not melt, migrate, or require reapplication on the same cycle.' },
  { icon: TrendingUp, title: 'Paint Preservation Over Time', desc: 'A ceramic-coated car in Brisbane at 5 years will have paint condition that an unprotected car reaches after 2 years. The protective layer delays oxidation, retains colour depth, and keeps the clear coat at a consistent thickness over the protection period.' },
  { icon: Eye, title: 'Summer Wash Frequency Drops', desc: 'Brisbane summers mean more dust, pollen, and insect activity. Ceramic-coated cars shed contamination with rain or a simple rinse — reducing the wash frequency and the handling contact that causes swirl accumulation over time.' },
  { icon: Clock, title: 'Long-Term Economics in QLD', desc: 'A professional correction and regrind on oxidised paint in Brisbane can be a significant cost depending on severity. A ceramic coating package applied before degradation reaches that stage is more economical than paying for correction alone.' },
];

const faqs = [
  { q: 'Does ceramic coating hold up in Brisbane\'s heat?', a: 'Yes — professional ceramic coatings are specifically engineered for high-UV environments. The coating\'s UV absorber is integrated at the molecular level and does not degrade from heat exposure the way wax or sealant does. Brisbane\'s climate is one of the stronger arguments for ceramic coating in Australia, not against it.' },
  { q: 'What happens to car paint in Brisbane without protection?', a: 'UV oxidation begins immediately on unprotected clear coat. In a typical Brisbane outdoor-parking scenario, paint starts visibly dulling within 12–18 months. By year 3, oxidation is measurable by thickness gauge. By year 5 on a dark car with no protection, colour fade and surface hazing are often severe enough to require professional correction.' },
  { q: 'Does Brisbane\'s humidity affect ceramic coating performance?', a: 'Application timing is affected by humidity — coating must be applied in controlled, low-humidity conditions for proper curing. This is why studio environments matter. Once cured, humidity does not degrade the coating. A properly cured ceramic layer is impervious to ambient humidity.' },
  { q: 'How long does ceramic coating last in Brisbane?', a: 'Package dependent. Essential (12-month warranty), Protection (3-year), Elite (5-year), Signature (7-year). In Brisbane\'s conditions, the longer-warranty packages use higher-grade professional coatings formulated for high-UV environments. The 12-month product is appropriate as an entry point — the 3-year and 5-year options are more appropriate for vehicles driven and parked outdoors regularly in Brisbane.' },
  { q: 'Is ceramic coating better in Brisbane than cooler climates?', a: 'The benefit case is stronger in Brisbane than in Melbourne or Canberra because UV degradation is faster, contamination bonds more aggressively in heat, and the frequency of wash contact (which causes swirling) is higher due to dust, pollen, and insect load. The ROI of ceramic coating is higher in high-UV, high-UV-index environments like Brisbane.' },
  { q: 'Can I park outside without a cover if my car has ceramic coating?', a: 'Yes — ceramic coating is designed for outdoor exposure. It is not a substitute for a car cover in extreme hail events, but for daily UV exposure, rain, dust, and contamination, a ceramic-coated car parked outside in Brisbane is significantly better protected than an uncoated car. That\'s the scenario the product is designed for.' },
];


export default function CeramicBrisbanePage() {
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
        title="Ceramic Coating UV Protection Brisbane | Glossed Out Detailing"
        description="Ceramic coating UV protection for Brisbane cars. Nano-ceramic layer resists UV oxidation and fading. Precision application, Acacia Ridge studio."
        canonical="https://glossedoutdetailing.com.au/ceramic-coating-uv-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Ceramic Coating Brisbane — UV Protection for QLD Conditions",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "Professional ceramic coating in Brisbane. High-UV environment specialists. Acacia Ridge studio. 3-year to 7-year warranty options.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ceramic']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Ceramic Coating Brisbane</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Built for QLD UV.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            Brisbane's UV index reaches 13 in summer. Paint degrades faster here than almost anywhere in Australia. Ceramic coating is the practical defence — not a luxury.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost">View All Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Why Brisbane</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Why Ceramic Coating Matters Here</h2>
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
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Ceramic Coating in Brisbane — Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="Ceramic Coating" defaultService="Ceramic Coating" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All Ceramic Packages</Link>
            <Link to="/ceramic-coating-cost-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Cost</Link>
            <Link to="/ceramic-coating-new-car-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic for New Cars</Link>
          </div>
        </div>
      </section>
    </>
  );
}
