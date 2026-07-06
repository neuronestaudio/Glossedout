import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, DollarSign, Layers, Zap } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const partialZones = [
  { zone: 'Bonnet Leading Edge (30cm)', why: 'The single highest chip-frequency zone on any car. Deflects 70%+ of all road debris.', price: 'Included in Impact Shield' },
  { zone: 'Front Bumper', why: 'Full lower bumper coverage catches stone spray from vehicles ahead.', price: 'Included in Impact Shield' },
  { zone: 'Front Guards', why: 'High exposure to rear spray from the front wheels on wet roads.', price: 'Included in Impact Shield' },
  { zone: 'Full Bonnet', why: 'Upgrade from leading-edge for vehicles with wide-opening bonnets or open highway use.', price: 'Part of Front End Package' },
  { zone: 'Headlights', why: 'Polycarbonate lenses are unrecoverable once pitted — PPF preserves them permanently.', price: 'Part of Front End Package' },
  { zone: 'Door Cups', why: 'Key and ring scratch zone. One of the highest-ROI partial adds for daily drivers.', price: 'Available as an add-on' },
  { zone: 'Mirrors', why: 'Exposed at all times. Small panels — high value per cm² of protection.', price: 'Available as an add-on' },
  { zone: 'Roof', why: 'Necessary for open-road and highway-heavy driving where debris arcs over the windscreen.', price: 'Part of Track Package' },
  { zone: 'Door Sills', why: 'Foot scuff and chip zone for SUVs and vehicles with deep step-in wells.', price: 'Available as an add-on' },
];

const benefits = [
  { icon: DollarSign, title: 'Lower Entry Cost', desc: 'Partial installs let you prioritise the highest-risk zones on a tighter budget. The Impact Shield package covers the three zones responsible for most chip events.' },
  { icon: Layers, title: 'Add Panels Later', desc: 'PPF panels are independent. You can add door cups, mirrors, or a full bonnet at a later date. There is no penalty for starting small.' },
  { icon: Shield, title: 'Correct Priority Order', desc: 'Front bumper + bonnet leading edge + guards covers the zones where 90% of chips originate. Partial coverage on these zones outperforms full coverage on lower-risk panels.' },
  { icon: Zap, title: 'Same SunTek Film Quality', desc: 'Partial installs use the same SunTek Reaction PPF as full wraps. The only difference is coverage area — not film grade or installation standard.' },
];

const faqs = [
  { q: 'What is partial PPF?', a: 'Partial PPF means applying film to selected panels rather than the full vehicle exterior. The most common partial is the front end — front bumper, bonnet leading edge (30cm), and front guards. This covers the zone responsible for the majority of chip events on any road car.' },
  { q: 'Is partial PPF worth it compared to a full wrap?', a: 'For most daily drivers, yes. Chips and damage concentrate heavily on the front bumper and bonnet leading edge. Protecting these zones prevents the majority of paint damage at a fraction of full-wrap cost. A full wrap is appropriate for prestige, track, or high-kilometre vehicles where rear-quarter and door exposure is also high.' },
  { q: 'Can I add more panels later?', a: 'Yes. PPF panels are applied independently. You can start with an Impact Shield (bumper, leading edge, guards) and add the full bonnet, headlights, or door cups at a later service. There is no penalty or incompatibility in adding coverage later.' },
  { q: 'What is the best partial PPF starting point for a daily driver?', a: 'The Impact Shield — front bumper, bonnet leading edge, and front guards — is the most cost-effective entry point. These three panels collectively receive the majority of chip impact on any road car. Starting here and upgrading later is a rational strategy if budget is a consideration.' },
  { q: 'Is the film the same quality on a partial install as a full wrap?', a: 'Yes. Glossed Out Detailing installs SunTek Reaction PPF on every job regardless of coverage area. The only variable is panel count. Film grade and installation standard are identical across all packages.' },
  { q: 'Do partial installs come with the same warranty?', a: 'Yes. Covered panels carry the same SunTek manufacturer warranty — 5-year or 12-year depending on the film tier chosen. The warranty applies to each installed panel individually.' },
  { q: 'Can I get partial PPF on just the bonnet?', a: 'Yes. Individual panel quotes are available. Common individual-panel requests include the full bonnet, boot lid, or roof. Contact us with your vehicle details and the panel you want covered for a specific quote.' },
];


export default function PPFPartialPage() {
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
        title="Partial PPF Brisbane | Front End Protection"
        description="Partial paint protection film packages for Brisbane cars. Protect the highest-impact zones — bonnet, bumper, guards. SunTek Authorised."
        canonical="https://glossedoutdetailing.com.au/partial-ppf-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Partial PPF Brisbane — Panel-by-Panel Paint Protection Film",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "Partial PPF installations in Brisbane. Cover the highest-risk panels first. Add panels at any time. SunTek Authorised installer, Acacia Ridge.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Partial PPF Brisbane</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Start Where It Matters.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            Protect the highest-chip-frequency zones first. Expand coverage any time. Same SunTek film, same install standard — panel by panel, at your pace.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/ppf-brisbane" className="btn-ghost">View All Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* ZONE MAP */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Coverage Map</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Zones — Priority Order</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {partialZones.map((zone, i) => (
              <div key={i} className="card" style={{ padding: '18px 24px', borderRadius: i === 0 ? '4px 4px 0 0' : i === partialZones.length - 1 ? '0 0 4px 4px' : 0 }}>
                <div className="grid-3col" style={{ display: 'grid', gridTemplateColumns: '240px 1fr 180px', gap: 24, alignItems: 'center' }}>
                  <p style={{ fontWeight: 700, fontSize: 14 }}>{zone.zone}</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>{zone.why}</p>
                  <p style={{ color: 'var(--color-accent)', fontFamily: 'Bebas Neue, sans-serif', fontSize: 14, letterSpacing: '0.05em' }}>{zone.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Why Partial Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
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
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Partial PPF Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="Partial PPF" defaultService="Paint Protection Film (PPF)" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All PPF Packages</Link>
            <Link to="/ppf-cost-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Pricing</Link>
            <Link to="/ppf-new-car-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF for New Cars</Link>
          </div>
        </div>
      </section>
    </>
  );
}
