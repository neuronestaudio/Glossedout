import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { MapPin, Clock, Shield, Star } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const suburbs = [
  { name: 'Sunnybank', distance: '7 min' },
  { name: 'Eight Mile Plains', distance: '8 min' },
  { name: 'Calamvale', distance: '10 min' },
  { name: 'Runcorn', distance: '10 min' },
  { name: 'Algester', distance: '11 min' },
  { name: 'Sunnybank Hills', distance: '9 min' },
  { name: 'Forest Lake', distance: '12 min' },
  { name: 'Rochedale South', distance: '13 min' },
  { name: 'Springwood', distance: '14 min' },
  { name: 'Macgregor', distance: '8 min' },
  { name: 'Robertson', distance: '10 min' },
  { name: 'Moorooka', distance: '8 min' },
  { name: 'Salisbury', distance: '5 min' },
  { name: 'Coopers Plains', distance: '7 min' },
  { name: 'Archerfield', distance: '5 min' },
  { name: 'Oxley', distance: '10 min' },
];

const benefits = [
  { icon: MapPin, title: 'Acacia Ridge — South Brisbane', desc: 'Goodrich Ct, Craigieburn VIC 3064. Easily accessible from the M3 Logan Motorway and Gateway Motorway interchange. On-site parking directly in front of the studio.' },
  { icon: Clock, title: 'Booking Available This Week', desc: 'Most installs are completed within 1–3 business days of enquiry. Contact us with your vehicle and coverage preference for a same-week appointment.' },
  { icon: Shield, title: 'SunTek Authorised in Brisbane', desc: 'Glossed Out Detailing is a SunTek Authorised Application Centre — one of a limited number of certified PPF installers in Brisbane. The manufacturer warranty is valid only through authorised installers.' },
  { icon: Star, title: 'Trusted by Brisbane Car Owners', desc: 'Google reviews from Brisbane customers across PPF, ceramic coating, and window tinting. Every review is unfiltered and publicly visible on our Google Business profile.' },
];

const faqs = [
  { q: 'Where is Glossed Out Detailing located?', a: 'Goodrich Ct, Craigieburn VIC 3064. We are in the industrial precinct of Acacia Ridge, south of Brisbane CBD. The studio is a short drive from the Logan Motorway interchange and is accessible from all south Brisbane suburbs.' },
  { q: 'Is Glossed Out Detailing the closest PPF installer to me?', a: 'We are one of the closest SunTek Authorised PPF installers in south Brisbane. If you are in Sunnybank, Eight Mile Plains, Calamvale, Runcorn, Algester, Sunnybank Hills, Forest Lake, Macgregor, Moorooka, Salisbury, or Coopers Plains, you are within 15 minutes of our studio.' },
  { q: 'Do you offer mobile PPF installation?', a: 'No. PPF installation requires a controlled, climate-managed environment to prevent contamination under the film during application. Mobile installations in open environments are not a valid delivery method for quality PPF. All work is performed at our Acacia Ridge studio.' },
  { q: 'How long does a PPF install take?', a: 'Impact Shield installs (bumper, leading edge, guards) are typically completed in half a day. Front End Packages take a full day. Track Packages and larger installs are typically 1.5–2 days. Full wraps are quoted per vehicle — contact us for a specific time estimate.' },
  { q: 'Can I drop my car off and pick it up the same day?', a: 'For smaller installs (Impact Shield and below), same-day drop-off and pick-up is often possible. For Front End Package and above, we recommend a next-morning pick-up to allow proper post-install settling time. This will be confirmed at booking.' },
  { q: 'Do you install PPF on all car makes and models?', a: 'Yes — we install on all makes and models. Coverage templates exist for most production vehicles. Rare or heavily modified vehicles may require custom-cut film, which is noted at quote stage. We work on everything from daily hatchbacks to prestige European sports cars.' },
  { q: 'How do I book a PPF appointment?', a: 'Use the Get a Quote form or call 0481 327 250. Provide your vehicle make, model, year, colour, and the coverage you\'re considering. We\'ll confirm pricing and availability within 2 business hours.' },
];


export default function PPFNearMePage() {
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
        title="PPF Near Me Brisbane | Paint Protection Film Installer"
        description="Looking for PPF near you in Brisbane? Glossed Out Detailing is at Acacia Ridge, servicing all Brisbane southside suburbs. SunTek Authorised."
        canonical="https://glossedoutdetailing.com.au/ppf-near-me-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "PPF Near Me Brisbane — Glossed Out Detailing Acacia Ridge",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": ["Brisbane", "Acacia Ridge", "Sunnybank", "Eight Mile Plains", "Calamvale", "Runcorn", "Algester", "Forest Lake"],
        "description": "Paint Protection Film installer in Acacia Ridge, south Brisbane. SunTek Authorised. Serving Sunnybank, Eight Mile Plains, Runcorn, Calamvale, and all south Brisbane suburbs.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>PPF Installer Near You</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Acacia Ridge, Brisbane.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            SunTek Authorised PPF installer at Goodrich Ct, Acacia Ridge. Serving all south Brisbane suburbs — 5 to 15 minutes from most southside locations.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Book a Visit</span></Link>
            <Link to="/ppf-brisbane" className="btn-ghost">View All PPF Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* SUBURB GRID */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Location</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Suburbs We Serve</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
            {suburbs.map((suburb, i) => (
              <div key={i} className="card" style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, fontSize: 13 }}>{suburb.name}</span>
                <span style={{ fontSize: 12, color: 'var(--color-accent)', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>{suburb.distance}</span>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: 24, marginTop: 24 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <MapPin size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontWeight: 700, marginBottom: 4 }}>Glossed Out Detailing</p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>Goodrich Ct, Craigieburn VIC 3064</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 12, marginTop: 4 }}>0481 327 250 · Open Mon–Sat by appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY GLOSSED OUT */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Why Glossed Out Detailing</h2>
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
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Location Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="PPF at Our Acacia Ridge Studio" defaultService="Paint Protection Film (PPF)" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All PPF Packages</Link>
            <Link to="/ppf-cost-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Pricing</Link>
            <Link to="/ppf-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Questions Answered</Link>
          </div>
        </div>
      </section>
    </>
  );
}
