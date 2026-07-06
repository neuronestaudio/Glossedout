import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Sun, TrendingUp, Eye, Droplets, Clock } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Eye, title: 'Dealer "Ceramic" Is Usually a Sealant', desc: 'Most dealership paint protection packages are spray sealant or polymer products applied over factory paint. They are not the same chemistry as a professional cured ceramic coating. They carry no independent manufacturer warranty and typically last 3–6 months.' },
  { icon: Shield, title: 'Independent Warranty Backing', desc: 'Professional ceramic applied by a certified applicator carries a manufacturer warranty backed by the coating company — not just the installer. If the installer closes, the manufacturer warranty still holds. Dealership packages have no such protection.' },
  { icon: Sun, title: 'Preparation Standard', desc: 'Dealership paint protection is applied over factory paint in showroom conditions — often without decontamination, clay bar, or panel inspection. A professional ceramic is applied after full prep in a controlled studio environment. The difference in bonding strength and longevity is significant.' },
  { icon: Droplets, title: 'Hydrophobic Performance Is Not Equal', desc: 'Professional ceramic coatings achieve contact angles of 100°+ — water beads and rolls off the surface. Spray sealants achieve 70–80° — water beads but sits on the surface rather than rolling. The visible hydrophobic performance difference is immediately apparent.' },
  { icon: TrendingUp, title: 'Cost Comparison Per Year', desc: 'A dealership package lasting 12 months requires annual repurchase. A professional-grade 3-year package from Glossed Out costs less per year of protection over time — not more. Longevity is part of the value equation.' },
  { icon: Clock, title: 'No Obligation to Dealership Terms', desc: 'Dealer paint protection packages often come with maintenance conditions tied to dealer servicing. Professional ceramic from an independent specialist has no such obligations — you maintain and service your car where you choose.' },
];

const faqs = [
  { q: 'Is the dealership paint protection package worth buying?', a: 'In most cases, no. The majority of dealership paint protection products are sealant or polymer coatings — not professional ceramic. They do not provide the same level of protection, do not carry independent manufacturer warranties, and typically last 3–12 months. Declining the dealership package and booking a professional ceramic separately gives you better protection, a longer warranty, and typically lower total cost per year of protection.' },
  { q: 'How do I know if the dealership is offering real ceramic coating?', a: 'Ask for the specific product name and the manufacturer\'s warranty documentation. A genuine professional ceramic coating from a reputable manufacturer has published warranty terms and requires certified installer application. If the dealership cannot provide a product name and a manufacturer warranty document, it is not a professional ceramic coating.' },
  { q: 'Can I get ceramic coating after already accepting the dealer package?', a: 'Yes — but the dealer product should be removed or stripped before a professional ceramic is applied. Applying ceramic over sealant results in the ceramic bonding to the sealant, not the paint — the sealant then degrades and takes the ceramic with it. Contact us with your situation and we\'ll advise on the correct prep approach.' },
  { q: 'My new car comes with 3 years dealer paint protection — is it still worth getting ceramic?', a: 'If the dealer is applying a genuine professional-grade coating (ask for the product name and certification), it may have merit. If it is a sealant-based product, the independent ceramic option provides substantially better protection. In most cases with dealer packages, the professional ceramic from an independent specialist will outlast the dealer product even at a similar or lower annual cost.' },
  { q: 'What should I ask the dealership before accepting a paint protection package?', a: 'Ask: (1) What is the specific product name? (2) Who manufactures it? (3) What is the manufacturer warranty period and what does it cover? (4) Is the warranty backed by the manufacturer or just the dealership? (5) Can I see the warranty documentation? If you cannot get clear answers to all five, the product does not have equivalent protection to a professional ceramic with manufacturer backing.' },
];


export default function CeramicVsDealerPage() {
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
        title="Ceramic Coating vs Dealer Paint Protection Brisbane"
        description="How professional ceramic coating compares to dealer-applied paint protection in Brisbane. Independent vs. in-dealership application explained."
        canonical="https://glossedoutdetailing.com.au/ceramic-vs-dealer-paint-protection-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Ceramic Coating vs Dealer Paint Protection Brisbane",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "Ceramic coating vs dealership paint protection in Brisbane. Why most dealer packages are sealants, not ceramic. Professional ceramic with manufacturer warranty. Acacia Ridge.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ceramic']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Ceramic Coating vs Dealer Package</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Not the Same Product.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            Most dealership paint protection is a spray sealant — not ceramic coating. Before you agree to a dealer package, understand what you're actually buying.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Book Professional Ceramic</span></Link>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost">View All Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Comparison</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Professional vs Dealer — The Differences</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--color-surface)' }}>
                  {['Factor', 'Dealership Package', 'Professional Ceramic (Glossed Out)'].map((h, i) => (
                    <th key={i} style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: i === 2 ? 'var(--color-accent)' : 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, border: '1px solid var(--color-border)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Product Type', dealer: 'Typically sealant or polymer coating', pro: 'Professional-grade cured ceramic (SiO₂)' },
                  { factor: 'Durability', dealer: '3–12 months in Brisbane conditions', pro: '1–7 years — manufacturer warranted' },
                  { factor: 'Warranty', dealer: 'Dealer-backed only — no manufacturer', pro: 'Manufacturer warranty (independent of installer)' },
                  { factor: 'Preparation', dealer: 'Applied over factory paint, minimal prep', pro: 'Full decontamination, clay bar, correction if needed' },
                  { factor: 'Environment', dealer: 'Applied in showroom or service bay', pro: 'Controlled studio — humidity and contamination managed' },
                  { factor: 'Hydrophobic Performance', dealer: 'Moderate — beads but doesn\'t sheet', pro: 'High — water sheets off at 100°+ contact angle' },
                  { factor: 'Cost Per Year', dealer: 'Higher — short duration, repeated cost', pro: 'Lower at 3-year+ tiers' },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--color-surface)' }}>
                    <td style={{ padding: '12px 20px', fontWeight: 700, fontSize: 12, border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>{row.factor}</td>
                    <td style={{ padding: '12px 20px', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontSize: 12 }}>{row.dealer}</td>
                    <td style={{ padding: '12px 20px', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontSize: 12 }}>{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Why Professional Ceramic Wins</h2>
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
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Dealer vs Ceramic Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="Professional Ceramic Coating" defaultService="Ceramic Coating" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All Ceramic Packages</Link>
            <Link to="/ceramic-coating-new-car-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic for New Cars</Link>
            <Link to="/ceramic-coating-cost-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Cost</Link>
          </div>
        </div>
      </section>
    </>
  );
}
