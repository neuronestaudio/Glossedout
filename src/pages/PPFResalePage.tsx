import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { TrendingUp, Shield, Award, Clock, Eye, Check } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: TrendingUp, title: 'Provable paint condition at sale time', desc: 'A PPF-protected car arrives at sale with factory-condition paint. That is a verifiable fact — not a claim. Buyers and dealers can see it, touch it, and confirm it.' },
  { icon: Shield, title: 'Every chip prevented is paint that doesn\'t need fixing', desc: 'Paint correction before a trade-in costs money and time. PPF prevents the chips that would require that correction — a net saving at the point of sale.' },
  { icon: Award, title: 'Warranty documentation transfers with the car', desc: 'SunTek\'s 12-year warranty is on the film, not the owner. When you sell, the warranty documentation transfers — it\'s an asset, not just a receipt.' },
  { icon: Eye, title: 'Buyers notice', desc: 'A private buyer or dealer who sees PPF documentation and perfect paint condition recognises the value immediately. It removes the negotiation point of paint condition from the conversation.' },
  { icon: Clock, title: 'Works best applied early', desc: 'PPF applied at delivery means the protection runs for the full ownership period. Applied late, the benefit to resale is limited by whatever happened to the paint in the uncovered period.' },
  { icon: TrendingUp, title: 'The economics make sense over time', desc: 'PPF cost spread over a 3–5 year ownership period is a fraction of the depreciation difference between a car in excellent paint condition and one with chip and scratch damage.' },
];

const faqs = [
  { q: 'Does PPF actually increase resale value?', a: 'PPF directly protects one of the most visible depreciation factors — paint condition. A car with original, undamaged factory paint commands a higher price than one with chips, touch-up marks, or corrected paint. The film doesn\'t add value to the car — it prevents the value loss that would otherwise occur. The net effect at sale time is a meaningful price premium over an unprotected equivalent.' },
  { q: 'How do I prove to a buyer that PPF is installed?', a: 'You\'ll receive SunTek warranty documentation at handover from Glossed Out Detailing — this is the paper trail. In addition, the film itself is visible on close inspection under direct light, and a knowledgeable buyer or dealer will confirm it during inspection. The warranty paperwork is the formal record.' },
  { q: 'Does PPF warranty transfer to a new owner?', a: 'SunTek\'s warranty is on the film installation, not the registered owner. When you sell the vehicle, the remaining warranty period transfers to the new owner. This is a selling point — they\'re buying not just a car with good paint but a film installation with remaining manufacturer warranty.' },
  { q: 'Is partial PPF (front end only) enough to help resale?', a: 'Yes — the front end is where most of the visible chip damage accumulates. A buyer or dealer looking at the bonnet, front bumper, and guards in factory condition reads that as a well-maintained vehicle. A front end package covering these zones provides the most visible protection for resale purposes.' },
  { q: 'Will a dealer pay more for a PPF-protected car at trade-in?', a: 'A dealer\'s pricing is partly based on the reconditioning cost they\'d need to invest. A car in excellent paint condition requires less reconditioning — that margin can work in your favour at trade-in. It\'s not guaranteed, but arriving with factory paint and warranty documentation is objectively a stronger negotiating position.' },
  { q: 'What is the best combination for maximum resale protection in Brisbane?', a: 'For maximum resale value protection: PPF on the front end (or full car for premium vehicles), combined with ceramic coating over the full painted surface. This gives you chip protection on high-impact zones, chemical and UV resistance across the full surface, and a maintained gloss that photographs and presents well at sale time.' },
];


export default function PPFResalePage() {
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
        title="PPF & Resale Value Brisbane | Protect Your Investment"
        description="How PPF protects resale value in Brisbane's climate. Keep your paint in showroom condition with SunTek PPF. Glossed Out Detailing, Acacia Ridge."
        canonical="https://glossedoutdetailing.com.au/ppf-resale-value-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "PPF for Resale Value Brisbane",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "Protect your car's resale value with PPF in Brisbane. SunTek Authorised installer in Acacia Ridge — paint stays factory-condition.",
      })}} />

      {/* HERO */}
      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>
              PPF for Resale Value — Brisbane
            </span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>
              Factory Paint. Full Price.
            </span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 520 }}>
            Paint condition is one of the first things buyers check and dealers discount. PPF protects the paint that protects your sale price — factory-condition paint at trade-in, with transferable SunTek warranty documentation.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/ppf-brisbane" className="btn-ghost">View PPF Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* THE CASE */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>The Resale Case</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', lineHeight: 1.05, marginBottom: 24 }}>What Paint Condition Costs You at Sale</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: 16 }}>
                A dealer or private buyer walks around your car before any conversation about price. The first 60 seconds of that inspection sets the negotiating frame.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: 16 }}>
                Chips on the bonnet. Touch-up marks on the front bumper. Light scratches visible in the guards. Each one is a line item that comes off your asking price — even if they're small, even if they're common.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                PPF prevents those line items from existing. The car sells in the condition it was bought — and the warranty documentation proves it.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <div style={{ padding: '20px 24px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '4px 4px 0 0' }}>
                <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: 8 }}>Without PPF</p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.6 }}>Chips on bonnet and bumper, touch-up visible, swirl marks in guards. Dealer discounts for reconditioning can be significant. Private buyer negotiates same downward.</p>
              </div>
              <div style={{ padding: '20px 24px', background: 'var(--color-accent)', borderRadius: '0 0 4px 4px' }}>
                <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>With PPF</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 14, lineHeight: 1.6 }}>Factory paint condition, no chips, no marks. SunTek warranty documentation on hand. No paint-condition negotiation. Paint is provably correct.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">03</span>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Why It Works</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', lineHeight: 1.05 }}>How PPF Protects Your Sale Price</h2>
            </div>
            <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="card" style={{ padding: '24px 20px' }}>
                    <Icon size={20} color="var(--color-accent)" strokeWidth={1.5} style={{ marginBottom: 14 }} />
                    <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{b.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.65 }}>{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INCLUSIONS */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>04</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 16 }}>What You Get at Handover</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>Everything you need to demonstrate the investment to a future buyer or dealer.</p>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'SunTek Reaction PPF — manufacturer warranty documentation',
                'Warranty transferable to subsequent owner',
                'Installation date and coverage area recorded',
                'Glossed Out Detailing installer certification record',
                'Aftercare and maintenance guide',
                'Guidance on how to present PPF to buyers at sale time',
              ].map((inc, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Check size={16} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>PPF and Resale Value — Questions</h2>
          <FAQAccordion items={faqs} />
          <div style={{ marginTop: 40, padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>
              More PPF questions?{' '}
              <Link to="/ppf-questions" style={{ color: 'var(--color-accent)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Read our complete PPF Q&amp;A →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock service="Paint Protection Film" defaultService="Paint Protection Film (PPF)" />

      {/* Internal links */}
      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All PPF Packages</Link>
            <Link to="/ppf-new-car-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF for New Cars</Link>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Brisbane</Link>
          </div>
        </div>
      </section>
    </>
  );
}
