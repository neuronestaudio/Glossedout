import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Clock, Shield, Eye, TrendingUp, Sun, Droplets } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Shield, title: 'Warranty Is the Key Differentiator', desc: '12-month, 3-year, 5-year, and 7-year options correspond to different product tiers and preparation levels. The warranty period is set by the manufacturer of the coating product, not arbitrarily — it reflects the tested durability of that product under Australian conditions.' },
  { icon: Sun, title: 'Brisbane Degrades Budget Coatings Faster', desc: 'Budget spray ceramics and dealership sealants degrade under Brisbane\'s UV within months. Professional coatings with 3–7 year warranties use higher-concentration SiO₂ formulations and catalysts that resist UV degradation — the product chemistry is fundamentally different.' },
  { icon: Eye, title: 'Preparation Matters as Much as Product', desc: 'A high-grade coating applied over contaminated or swirled paint will underperform a mid-grade coating applied over correctly prepared paint. Our decontamination and clay bar prep is standard on every package — the product\'s rated durability assumes correct preparation.' },
  { icon: Clock, title: 'Top-Up Services Extend the Life', desc: 'Annual maintenance ceramic top-up services can extend performance beyond the original warranty period for customers who maintain their car correctly. Contact us about maintenance coating services if your original ceramic is approaching its warranty anniversary.' },
  { icon: TrendingUp, title: 'Longer Warranty = Better Economics Per Year', desc: 'The per-year cost of protection decreases as you move up tiers — a longer warranty period means better value over your ownership. Contact us to compare packages.' },
  { icon: Droplets, title: 'What Voids the Warranty', desc: 'Using alkaline or acidic cleaning products on the coating surface. Machine polishing without specialist guidance. Applying wax or sealant products over ceramic. Failure to follow the aftercare guide in the first 14 days post-application.' },
];

const faqs = [
  { q: 'How long does ceramic coating last in Brisbane?', a: 'Package-dependent: Essential 12 months, Protection 3 years, Elite 5 years, Signature 7 years. These are manufacturer warranty periods. In Brisbane\'s high-UV environment, the 3-year and above packages use coatings specifically formulated for high-UV performance. Budget spray ceramics from car parts stores are not comparable products.' },
  { q: 'What affects ceramic coating longevity?', a: 'Four factors determine how long a ceramic coating performs: (1) Product quality — professional-grade vs spray product. (2) Preparation — a correctly decontaminated surface bonds and holds longer. (3) Maintenance — pH-neutral washing, no wax or sealant on top, no automatic car washes. (4) Environment — outdoor parking in Brisbane UV vs covered parking. All four matter.' },
  { q: 'Can ceramic coating be reapplied when it starts to fail?', a: 'Yes. When a coating begins to lose hydrophobic performance, a maintenance ceramic can be applied over the existing coating to extend protection. For coatings that have fully failed, the surface is stripped and recoated from fresh. We offer maintenance services — contact us with your coating age and current condition.' },
  { q: 'Does ceramic coating fade or peel?', a: 'Professional ceramic coatings do not peel — they don\'t have an edge to lift. They degrade gradually from UV exposure and wash contact, losing hydrophobic performance first, then chemical resistance. This is a slow process over years on a quality product. Peel and flake is a sign of a non-ceramic film product (vinyl) being misrepresented as ceramic.' },
  { q: 'What maintenance is required to maximise ceramic coating lifespan?', a: 'pH-neutral shampoo only — alkaline or acidic products break down the coating chemistry. Clean microfibre — abrasive cloths scratch the coating surface. Avoid automatic car washes with brushes. No wax, sealant, or spray detailer on top of ceramic (these products coat the ceramic surface, not the paint, and degrade the coating\'s hydrophobic performance). Rinse after driving through heavy contamination.' },
  { q: 'Will ceramic coating last longer on a garaged car?', a: 'Yes — UV exposure is the primary accelerant of coating degradation. A car garaged overnight and parked undercover during the day will extend coating life significantly beyond the warranty period. A car parked fully outdoors in Brisbane all day will use the full warranty term as its practical lifespan.' },
];


export default function CeramicLongevityPage() {
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
        title="How Long Does Ceramic Coating Last? Brisbane Guide"
        description="Ceramic coating longevity in Brisbane's climate. Warranties from 1 to 7 years depending on package. Glossed Out Detailing, Acacia Ridge."
        canonical="https://glossedoutdetailing.com.au/ceramic-coating-longevity-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "How Long Does Ceramic Coating Last Brisbane",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "Ceramic coating durability in Brisbane. 12-month to 7-year warranty options. How long ceramic coating lasts in Queensland UV conditions. Acacia Ridge studio.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ceramic']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>How Long Does Ceramic Coating Last?</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>1 to 7 Years. Warranted.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            Ceramic coating durability depends on product tier, preparation quality, and maintenance. We explain the real numbers — not marketing averages.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost">View All Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* WARRANTY TIER TABLE */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Warranty by Package</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Durability by Tier</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {[
              { package: 'Essential', duration: '12 Months', costPerYear: 'Contact us', typical: 'Entry ceramic. Daily driver, covered parking, or short-term ownership.' },
              { package: 'Protection', duration: '3 Years', costPerYear: 'Contact us', typical: 'Full exterior. Most popular for Brisbane daily drivers parked outdoors.', recommended: true },
              { package: 'Elite', duration: '5 Years', costPerYear: 'Contact us', typical: 'With paint correction. Best value per year for cars with existing marks.' },
              { package: 'Signature', duration: '7 Years', costPerYear: 'Contact us', typical: 'Full vehicle. Prestige and long-term ownership — lowest cost per year at scale.' },
            ].map((row, i) => (
              <div key={i} className="card" style={{ padding: '20px 28px', borderRadius: i === 0 ? '4px 4px 0 0' : i === 3 ? '0 0 4px 4px' : 0, border: row.recommended ? '1.5px solid var(--color-accent)' : undefined, position: 'relative' }}>
                {row.recommended && <span style={{ position: 'absolute', top: -12, left: 24, background: 'var(--color-accent)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100 }}>Most Popular</span>}
                <div className="grid-4col" style={{ display: 'grid', gridTemplateColumns: '160px 120px 120px 1fr', gap: 24, alignItems: 'center' }}>
                  <p style={{ fontWeight: 700, fontSize: 14 }}>{row.package}</p>
                  <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 20, color: 'var(--color-accent)', letterSpacing: '0.02em' }}>{row.duration}</p>
                  <p style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>{row.costPerYear}</p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 13 }}>{row.typical}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>What Affects Longevity</h2>
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
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Ceramic Coating Longevity Questions</h2>
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
            <Link to="/ceramic-coating-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Q&amp;A</Link>
          </div>
        </div>
      </section>
    </>
  );
}
