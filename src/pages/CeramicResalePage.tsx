import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, TrendingUp, Eye, Droplets, CheckCircle, Clock } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: TrendingUp, title: 'Buyers Pay More for Preserved Paint', desc: 'Paint condition is the first thing a serious buyer or dealer inspects. A vehicle with original glossy swirl-free paint with a documented ceramic history commands a measurable premium. Buyers accept lower offers when they see heavy swirling, oxidation, or paint defects — because they factor in correction costs.' },
  { icon: Eye, title: 'Interior-Grade Appearance Retention', desc: 'Ceramic-coated vehicles maintain a consistently clean exterior that reads as "well maintained" on inspection. Clean, protected paint combined with glass coating creates a presentation impact that uncared-for paint simply cannot match regardless of mechanical condition.' },
  { icon: Shield, title: 'Documentation Adds Verifiable Value', desc: 'We provide clients with a certificate of ceramic application including the coating product name, date, applicator details, and warranty period. This document is presented at sale — it verifies the protection history and is an asset in negotiation, particularly when selling privately.' },
  { icon: Droplets, title: 'Delays the Need for Pre-Sale Correction', desc: 'Most vehicles require detailing or paint correction before sale to present well. Ceramic protects the paint throughout ownership, reducing or eliminating the need for pre-sale correction spend.' },
  { icon: CheckCircle, title: 'Factory Paint Preservation', desc: 'Verified factory paint is the highest resale value state for any vehicle. Ceramic reduces the risk of UV fade, oxidation, bird dropping etching, and water spot etching that would require respray to correct — each of which significantly reduces resale value when detected.' },
  { icon: Clock, title: 'ROI Over Ownership Duration', desc: 'If maintained correctly, the coating preserves paint condition that would otherwise require pre-sale correction or detailing spend. The ceramic typically returns its cost in preserved resale value — before factoring in the premium it commands from buyers.' },
];

const faqs = [
  { q: 'Does ceramic coating increase resale value?', a: 'Yes — in two ways. First, it prevents the paint degradation (oxidation, swirl marks, etching) that reduces resale value and requires pre-sale correction spend. Second, documented ceramic application history is a positive differentiator with informed buyers — particularly for prestige, performance, and luxury vehicles. The combination of preserved appearance and verifiable documentation supports a higher asking price.' },
  { q: 'How much does ceramic coating add to resale value?', a: 'It varies by vehicle segment. For prestige and performance vehicles (BMW, Mercedes, Porsche, Audi, Toyota Land Cruiser), ceramic history combined with excellent paint condition has been associated with meaningful premiums above equivalent non-coated vehicles in private sale. For volume vehicles, the primary benefit is avoiding correction costs that would otherwise be spent to prepare the car for sale.' },
  { q: 'Do buyers know what ceramic coating is?', a: 'Increasingly yes — particularly buyers of prestige and enthusiast vehicles. Younger buyers are typically more aware of ceramic coating than older buyers. The documentation we provide is useful because it explains the product, duration, and warranty in plain language — a buyer does not need prior knowledge to understand what they are receiving.' },
  { q: 'What documentation do you provide with ceramic application?', a: 'We provide a ceramic application certificate stating: vehicle details, application date, coating product name and manufacturer details, installer name, warranty period, and warranty terms summary. This is a physical or digital document you can present to the buyer or dealer. Some of our clients attach it to the vehicle\'s service history folder.' },
  { q: 'Should I get ceramic before selling my car?', a: 'If the paint is in good condition and the car will not sell immediately, yes — ceramic 12+ months before sale is the correct timing. A coating applied one week before sale has not had time to cure fully and the hydrophobic performance is not yet at peak. If sale is imminent, a professional decontamination and one-step correction is typically the better investment. Contact us with timing and we\'ll advise the right approach.' },
  { q: 'Does ceramic coating matter for trade-in value?', a: 'Less than private sale — dealers assess trade-in mechanically and will apply their own detailing and preparation regardless. Ceramic coating does not typically extract its full resale premium from a dealer trade-in. The primary value at trade-in is the clean paint condition that positions the vehicle in the dealer\'s highest inspection grade. Private sale returns the full resale benefit of documented ceramic history.' },
];


export default function CeramicResalePage() {
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
        title="Ceramic Coating & Resale Value Melbourne"
        description="How ceramic coating protects resale value in Melbourne. Preserved paint condition in Victoria's harsh UV climate. Glossed Out Detailing."
        canonical="https://glossedoutdetailing.com.au/ceramic-coating-resale-melbourne"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Ceramic Coating for Resale Value Melbourne",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Melbourne",
        "description": "Ceramic coating to protect and increase resale value in Melbourne. Documented application history, paint preservation, and buyer-facing certification. Craigieburn.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1583267746897-2cf415887172?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ceramic']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Ceramic Coating and Resale Value</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Sell More. Spend Less to Prepare.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            Ceramic coating preserves paint condition and provides documented protection history — both of which strengthen resale position. Application certificate included.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Book Ceramic Coating</span></Link>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost">View All Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/product-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Resale Impact</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>How Ceramic Protects Resale Value</h2>
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
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 36 }}>Resale ROI by Package</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--color-surface)' }}>
                  {['Package', 'Price', 'Duration', 'Cost/Year', 'Pre-Sale Correction Avoided', 'Net Position'].map((h, i) => (
                    <th key={i} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 10, border: '1px solid var(--color-border)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { pkg: 'Essential', price: 'POA', dur: '12 mo', cpy: 'POA', avoid: 'Moderate saving', net: 'Neutral to slightly positive' },
                  { pkg: 'Protection', price: 'POA', dur: '3 yr', cpy: 'POA', avoid: 'Meaningful saving', net: 'Positive — cost recovered' },
                  { pkg: 'Elite', price: 'POA', dur: '5 yr', cpy: 'POA', avoid: 'Significant saving', net: 'Strongly positive at 3yr+ sale' },
                  { pkg: 'Signature', price: 'POA', dur: '7 yr', cpy: 'Lowest', avoid: 'Maximum saving', net: 'Strongly positive — premium segment' },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--color-surface)' }}>
                    <td style={{ padding: '11px 16px', fontWeight: 700, fontSize: 12, border: '1px solid var(--color-border)', color: 'var(--color-accent)' }}>{row.pkg}</td>
                    <td style={{ padding: '11px 16px', border: '1px solid var(--color-border)', fontSize: 12, color: 'var(--color-text-primary)' }}>{row.price}</td>
                    <td style={{ padding: '11px 16px', border: '1px solid var(--color-border)', fontSize: 12, color: 'var(--color-text-secondary)' }}>{row.dur}</td>
                    <td style={{ padding: '11px 16px', border: '1px solid var(--color-border)', fontSize: 12, color: 'var(--color-text-secondary)' }}>{row.cpy}</td>
                    <td style={{ padding: '11px 16px', border: '1px solid var(--color-border)', fontSize: 12, color: 'var(--color-text-secondary)' }}>{row.avoid}</td>
                    <td style={{ padding: '11px 16px', border: '1px solid var(--color-border)', fontSize: 12, color: 'var(--color-text-primary)', fontWeight: 600 }}>{row.net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Ceramic and Resale Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="Ceramic Coating for Resale" defaultService="Ceramic Coating" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All Ceramic Packages</Link>
            <Link to="/ceramic-coating-longevity-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Coating Longevity</Link>
            <Link to="/detailing-packages-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF for Resale</Link>
          </div>
        </div>
      </section>
    </>
  );
}
