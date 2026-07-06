import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Zap, TrendingUp, Award, Clock } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Shield, title: 'The chip never reaches your paint', desc: 'Stone chips, gravel, and road debris hit the film first. The urethane absorbs the impact. The paint underneath is undisturbed. No filler, no touch-up, no respray.' },
  { icon: Zap, title: 'Self-healing surface resets the film', desc: 'Light abrasion that would become surface scratches on bare paint? SunTek Reaction PPF heals them with heat. Direct sunlight or a warm water pour resets the topcoat.' },
  { icon: TrendingUp, title: 'Maintained paint = maintained value', desc: 'Paint condition is one of the most visible factors at trade-in or private sale. PPF-protected cars arrive with factory-condition paint. That is a provable point of difference.' },
  { icon: Award, title: 'Brisbane conditions are unusually harsh', desc: 'Gravel roads heading south-west of Brisbane, dusty highway conditions, and UV intensity that accelerates chip oxidation. PPF is not a luxury item here — it is appropriate protection for real-world use.' },
  { icon: Clock, title: 'Cost of chips vs cost of PPF', desc: 'The cost of paint correction or a respray after significant chip damage is substantial. A full front PPF package covers hundreds of impact events over 10 years. The economics are clear over time.' },
  { icon: Shield, title: '12-year SunTek Authorised warranty', desc: 'SunTek Reaction\'s film warranty covers yellowing, peeling, and adhesive failure. Installed by a SunTek Authorised installer, every front end and full wrap package is manufacturer-backed.' },
];

const faqs = [
  { q: 'Does PPF actually stop stone chips?', a: 'Yes. PPF is specifically designed to absorb stone chip impacts. The urethane film has enough thickness and elasticity to take the hit from gravel and road debris without the impact reaching the paint surface. On a properly installed film, stone chips affect the film surface — which self-heals — not the underlying paint.' },
  { q: 'What areas of my car get chips most often?', a: 'The front bumper, bonnet leading edge, front guards, and headlights are the highest chip-risk zones on any road-driven vehicle. These are the panels directly facing oncoming road debris. Our front end package covers all of these. If you drive on gravel or highways regularly, the roof, A-pillars, and rear quarter panels see higher chip rates too.' },
  { q: 'How is PPF different from paint protection products at car washes or dealerships?', a: 'Car wash and dealership "paint protection" products are typically wax coatings or sealants — they provide no physical barrier against chips. A stone chip goes straight through them to the paint. PPF is a physical urethane film with measurable thickness that absorbs the impact before it reaches the surface. They are not comparable products.' },
  { q: 'What happens if the PPF gets a chip — does it still protect my paint?', a: 'Yes. A chip in the PPF film means the chip stopped at the film and did not reach your paint. The film can be repaired or replaced section by section if the damage is significant. The paint under a chipped film is still protected and in original condition.' },
  { q: 'Does PPF self-heal after chips?', a: 'PPF self-heals minor surface scratches and abrasions — the kind caused by light contact, fingernails, or soft debris. Deep impacts from sharp stones may leave a mark in the film surface that requires replacement of that section. But the key point: even a marked PPF film means the paint beneath is undamaged.' },
  { q: 'What coverage do I need to protect against stone chips on Brisbane roads?', a: 'For typical Brisbane suburban and highway driving, a front end package — bonnet, front bumper, guards, headlights, mirrors — covers the primary impact zones. If you drive the Ipswich Motorway, Logan Motorway, or any gravel sections regularly, a track package adding the roof and A-pillars is worth considering. Full wraps are the complete solution for maximum protection.' },
  { q: 'How much does stone chip PPF protection cost in Brisbane?', a: 'Pricing depends on coverage zone and vehicle size. Contact us for a quote.' },
];


export default function PPFStoneChipPage() {
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
        title="Stone Chip Protection Brisbane | PPF | Glossed Out Detailing"
        description="Paint protection film against stone chips and road debris in Brisbane. SunTek Authorised PPF installer. Acacia Ridge."
        canonical="https://glossedoutdetailing.com.au/ppf-stone-chip-protection-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Stone Chip Protection Brisbane — PPF",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "Stop stone chips with paint protection film in Brisbane. SunTek Authorised PPF installer in Acacia Ridge.",
      })}} />

      {/* HERO */}
      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>
              Stop Stone Chips — Brisbane PPF
            </span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>
              The Film Takes the Hit.
            </span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 520 }}>
            SunTek Reaction PPF absorbs stone chips, gravel impacts, and road debris before they reach your paint. A physical urethane barrier — not a coating, not a sealant. SunTek Authorised installer in Acacia Ridge.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/ppf-brisbane" className="btn-ghost">View PPF Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Why PPF</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', lineHeight: 1.05 }}>How the Film Stops Chips</h2>
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

      {/* COVERAGE */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">03</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Coverage</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Where Chips Happen Most</h2>
          <div className="grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { zone: 'Front Bumper', risk: 'Highest', desc: 'Direct exposure to road debris at highway speed. The first panel to take gravel and stone impacts.' },
              { zone: 'Bonnet', risk: 'High', desc: 'Stones deflected upward by the front bumper and from leading wheel arch area. High chip accumulation over time.' },
              { zone: 'Front Guards', risk: 'High', desc: 'Inside the front wheel arch lip — gravel and grit thrown up from the tyres on both sides.' },
              { zone: 'Headlights', risk: 'Medium–High', desc: 'Plastic headlight lenses crack and chip from road impacts, particularly at highway speeds.' },
              { zone: 'Mirrors', risk: 'Medium', desc: 'Wing mirrors cop roadside debris, particularly in narrow streets and highway overtaking.' },
              { zone: 'Roof / A-pillars', risk: 'Medium (highway)', desc: 'Higher risk on highway and open road driving. Stones thrown up by leading vehicles.' },
            ].map((z, i) => (
              <div key={i} className="card" style={{ padding: '24px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 600 }}>{z.zone}</h3>
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: z.risk === 'Highest' ? 'var(--color-accent)' : z.risk === 'High' ? 'var(--color-accent)' : 'var(--color-text-muted)', opacity: z.risk === 'Medium (highway)' ? 0.7 : 1 }}>{z.risk}</span>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Stone Chip Protection Questions</h2>
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
      <CTABlock service="Stone Chip Protection" defaultService="Paint Protection Film (PPF)" />

      {/* Internal links */}
      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All PPF Packages</Link>
            <Link to="/ppf-new-car-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF for New Cars</Link>
            <Link to="/ppf-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Questions Answered</Link>
          </div>
        </div>
      </section>
    </>
  );
}
