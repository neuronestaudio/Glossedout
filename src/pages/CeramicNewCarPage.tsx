import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Sun, Droplets, Clock, TrendingUp, Eye } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Shield, title: 'First Coat Is Easiest', desc: 'Factory paint that has never been exposed to UV or contamination bonds the most effectively with ceramic. The coating fills microscopic imperfections in fresh clear coat for a stronger, longer-lasting bond than on weathered paint.' },
  { icon: Sun, title: 'Block Melbourne UV Before It Starts', desc: 'A new car\'s clear coat is at peak thickness at delivery. UV oxidation begins immediately. Applying ceramic coating in the first 30 days captures that factory condition and holds it for the coating\'s full warranty period.' },
  { icon: Droplets, title: 'Avoid Dealership Products', desc: 'Most dealership paint protection packages use sealant or wax applied over factory paint — not ceramic. They are not comparable in durability or protection. A single-stage ceramic applied by a specialist outperforms any dealership package.' },
  { icon: Clock, title: 'No Paint Correction Cost', desc: 'Paint correction is required when swirl marks or scratches are present before coating. New cars that are ceramic coated within the first few weeks rarely need any correction — avoiding a prep cost that is entirely preventable.' },
  { icon: TrendingUp, title: 'Preserves Resale Value', desc: 'A ceramic-protected car in Melbourne retains paint condition that an unprotected car loses within 2–3 years. At resale, factory-condition paint holds more value and eliminates paint-condition negotiation.' },
  { icon: Eye, title: 'Factory Gloss, Amplified', desc: 'Ceramic coating adds gloss depth beyond the factory finish. On metallic and pearl paints, the ceramic layer reveals colour depth that the standard clear coat alone cannot produce.' },
];

const faqs = [
  { q: 'When should I get ceramic coating on a new car?', a: 'Within the first 30 days is the recommended window. Factory paint is at its cleanest and most receptive state — no contamination, no UV exposure, no swirl marks from early washes. Coating in this window avoids any need for paint correction and gives the coating its strongest possible bond to the clear coat.' },
  { q: 'Should I reject the dealership paint protection and book separately?', a: 'In most cases, yes. Dealership "paint protection" packages are typically sealant or wax products applied by non-specialist staff in non-controlled environments. They do not carry independent manufacturer warranties. A ceramic coating applied by an authorised specialist in a controlled studio environment is not the same product — not in durability, not in bonding chemistry, not in the warranty backing it.' },
  { q: 'Does a new car need paint correction before ceramic coating?', a: 'Usually no — provided the car is coated within the first 1–3 weeks and has not been through an automatic car wash or had poorly-executed early washes. If swirl marks are present from delivery handling or an early wash, a minor correction step is required before coating. We inspect every new car at reception and advise before any work begins.' },
  { q: 'What package do you recommend for a new car?', a: 'The Protection package (exterior paint, glass, and wheels — 3-year warranty) is the most popular starting point for new cars. It covers all exterior surfaces where environmental exposure occurs. The Elite package adds paint correction capacity, which is only needed if the car has existing marks. For prestige and collector vehicles, the Signature package with a 7-year warranty is the appropriate choice. Contact us for a quote tailored to your vehicle.' },
  { q: 'Will ceramic coating affect the manufacturer\'s warranty on my new car?', a: 'No. Ceramic coating is applied to the exterior surface of the paint — it does not interact with any mechanical or structural component that would affect a manufacturer\'s warranty. It is a surface protection product, not a modification.' },
  { q: 'How long after delivery should I wait before washing the car?', a: 'Ideally, bring the car directly to us before any washes. If you must wash before your appointment, use a pH-neutral touchless rinse only — no brushes, no automatic car washes. The first wash method is the most common source of early swirl marks on new paint.' },
  { q: 'What is the aftercare period after ceramic coating a new car?', a: 'The first 7–14 days after application are the critical cure period. During this time, avoid washing, water contact, and parking under trees. We provide a specific aftercare guide at handover covering exactly what to do and avoid in the first two weeks. After curing, maintenance is straightforward — pH-neutral wash with a clean microfibre.' },
];


export default function CeramicNewCarPage() {
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
        title="Ceramic Coating for New Cars Melbourne | Glossed Out Detailing"
        description="Ceramic coating for new cars in Melbourne. Protect your new car's paint before Victoria's UV causes damage. Glossed Out Detailing, Craigieburn."
        canonical="https://glossedoutdetailing.com.au/ceramic-coating-new-car-melbourne"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Ceramic Coating for New Cars Melbourne",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Melbourne",
        "description": "Ceramic coating for new cars in Melbourne. Apply within 30 days of delivery — no paint correction required, strongest bond, full warranty. Craigieburn studio.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ceramic']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Ceramic Coating for New Cars</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Melbourne. First 30 Days.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            Factory paint in its first month bonds most effectively with ceramic. No correction required. Skip the dealership sealant — do it right from day one.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Book a New Car Ceramic</span></Link>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost">View All Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/product-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Why New Cars</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Why the First Month Matters Most</h2>
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

      {/* TIMING TABLE */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Ceramic Timing After Delivery</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {[
              { window: 'Days 1–7', condition: 'Factory paint — no UV exposure, no contamination, no washes', prep: 'Decontamination wash only. No correction needed in most cases.', outcome: 'Ideal' },
              { window: 'Days 8–30', condition: 'Early exposure — likely 1–2 washes, minimal UV oxidation', prep: 'Inspection required. Light correction may apply if early washes left marks.', outcome: 'Recommended' },
              { window: '1–3 months', condition: 'Early-life contamination, possible swirl marks from washes', prep: 'Minor correction likely required. Still early enough to avoid significant prep cost.', outcome: 'Good' },
              { window: '3–12 months', condition: 'UV exposure accumulating. Swirl marks likely from wash events.', prep: 'Correction required before coating. Cost increases with condition.', outcome: 'Later' },
              { window: '12+ months', condition: 'Established UV oxidation, clear coat thinning beginning', prep: 'Multi-stage correction likely. Paint condition assessment at booking.', outcome: 'Correct First' },
            ].map((row, i, arr) => (
              <div key={i} className="card" style={{ padding: '18px 24px', borderRadius: i === 0 ? '4px 4px 0 0' : i === arr.length - 1 ? '0 0 4px 4px' : 0 }}>
                <div className="grid-4col" style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 100px', gap: 20, alignItems: 'center' }}>
                  <p style={{ fontWeight: 700, fontSize: 13, color: 'var(--color-accent)', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>{row.window}</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 12 }}>{row.condition}</p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 12 }}>{row.prep}</p>
                  <p style={{ fontWeight: 700, fontSize: 12, color: i < 2 ? '#22c55e' : i < 3 ? 'var(--color-text-secondary)' : 'var(--color-text-muted)' }}>{row.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>New Car Ceramic Coating Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="New Car Ceramic Coating" defaultService="Ceramic Coating" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All Ceramic Packages</Link>
            <Link to="/ceramic-coating-cost-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Cost</Link>
            <Link to="/detailing-packages-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF for New Cars</Link>
          </div>
        </div>
      </section>
    </>
  );
}
