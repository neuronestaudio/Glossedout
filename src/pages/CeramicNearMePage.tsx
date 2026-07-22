import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { MapPin, Shield, Clock, CheckCircle, TrendingUp, Droplets } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: MapPin, title: 'Craigieburn — Central South Melbourne', desc: 'Our studio at Goodrich Ct, Craigieburn is 15 minutes from the CBD. Easy freeway access via the M3 and Logan Motorway. Craigieburn is accessible from Sunnybank, Calamvale, Stretton, Runcorn, Eight Mile Plains, Rochedale, and Carindale without crossing the city.' },
  { icon: Shield, title: 'Gtechniq, Magnum & Kraken Certified — Not a Detail Shop', desc: 'We are a certified applicator and dedicated paint protection studio, not a general detailing operation that upsells ceramic coating as an add-on. Every application is performed using professional-grade Gtechniq, Magnum and Kraken coatings with manufacturer training — not available through retail or grey-market channels.' },
  { icon: Clock, title: 'Same-Week Availability', desc: 'We operate five days per week with a bookings structure that accommodates same-week appointments for most packages. Essential and Protection packages are typically available within 3–5 business days. Elite and Signature packages require scheduling for the full-day or multi-day studio time they require.' },
  { icon: Droplets, title: 'Studio-Controlled Application', desc: 'Temperature, humidity, and airborne contamination are managed in our climate-controlled studio. Ceramic application performed in uncontrolled environments — car parks, driveways, general workshops — produces inconsistent results because the coating cannot cure uniformly. A studio environment is not optional for professional ceramic.' },
  { icon: CheckCircle, title: 'Manufacturer-Backed Warranty', desc: 'All our ceramic packages carry manufacturer warranty from the coating producer — not a dealer-only or installer-only promise. The warranty is registered against your vehicle and the product batch. It is not voided if the studio closes. We provide warranty documentation at collection.' },
  { icon: TrendingUp, title: 'Full Melbourne Region Coverage', desc: 'We service vehicles from across the greater Melbourne region. Clients regularly travel from the northern suburbs (Chermside, Stafford, Kedron) and the eastern suburbs (Wynnum, Manly, Cleveland) — the Craigieburn location is typically a 20–35 minute drive from most Melbourne postcodes.' },
];

const faqs = [
  { q: 'Where is the Glossed Out Detailing studio located?', a: 'Goodrich Ct, Craigieburn VIC 3064. We are in the southern industrial precinct of Melbourne — easy access from the M3 Pacific Motorway, Logan Motorway, and Ipswich Motorway. 15 minutes from the Melbourne CBD. GPS coordinates and exact access instructions are provided with booking confirmation.' },
  { q: 'How far is Craigieburn from the Melbourne CBD?', a: 'Approximately 12–15 km south of the Melbourne CBD. Travel time is 15–20 minutes via the M3 in normal traffic. The location is directly accessible from South Melbourne, Woolloongabba, and Eight Mile Plains without requiring CBD travel.' },
  { q: 'Do you service the North Melbourne suburbs?', a: 'Yes — clients from Chermside, Stafford, Nundah, Windsor, Newmarket, and the northern suburbs regularly book with us. The freeway corridor makes travel time manageable. We do not offer mobile ceramic application as studio conditions are required for correct application.' },
  { q: 'Is there a ceramic coating studio closer to me?', a: 'There are other applicators operating in Melbourne. We would encourage you to ask any applicator about: the specific ceramic product used, whether it carries a manufacturer warranty, what preparation steps are included, and whether the application environment is climate-controlled. These are the baseline standards for professional ceramic. Proximity is less relevant than application quality and warranty backing.' },
  { q: 'How long does the application take and do you offer drop-off service?', a: 'Yes — all our packages are drop-off. The Essential package takes 1 day. Protection takes 1–2 days. Elite takes 2 days (includes stage 1 correction). Signature is 2–3 days (multi-stage correction plus all surfaces). We provide estimated completion time at booking. Most clients drop off in the morning and collect the following day. We provide collection time estimates via SMS.' },
  { q: 'Can I get a quote online without visiting the studio?', a: 'Yes. Use the quote form on our website or call 0481 327 250 to discuss pricing for your vehicle. We quote on vehicle size and condition — for Elite and Signature packages, we may request photos of the paint to assess correction requirements before finalising pricing. Essential and Protection packages have standard pricing by vehicle size.' },
];


export default function CeramicNearMePage() {
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
        title="Ceramic Coating Near Me Melbourne | Craigieburn Studio"
        description="Looking for ceramic coating near you in Melbourne? Glossed Out Detailing is in Craigieburn, serving all southside Melbourne suburbs."
        canonical="https://glossedoutdetailing.com.au/ceramic-coating-near-me-melbourne"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Glossed Out Detailing — Ceramic Coating Melbourne",
        "telephone": "0481327250",
        "url": "https://glossedoutdetailing.com.au",
        "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" },
        "geo": { "@type": "GeoCoordinates", "latitude": -27.5585, "longitude": 153.0197 },
        "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:00" }],
        "areaServed": "Melbourne",
        "description": "Professional ceramic coating studio in Craigieburn, South Melbourne. Studio-controlled application, manufacturer warranty, certified applicators. Serving all Melbourne suburbs.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ceramic']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Ceramic Coating Near Me — Melbourne</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Craigieburn. South Melbourne.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            Professional ceramic coating studio at Goodrich Ct, Craigieburn. 15 minutes from Melbourne CBD. Studio-controlled application with manufacturer warranty.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Book at Our Studio</span></Link>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost">View All Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/product-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* LOCATION CARD */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Studio Location</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Find Us in Craigieburn</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 48 }}>
            {[
              { label: 'Address', value: 'Goodrich Ct\nCraigieburn VIC 3064' },
              { label: 'Phone', value: '0481 327 250' },
              { label: 'Hours', value: 'Mon–Fri 8:00am – 5:00pm' },
              { label: 'Distance from CBD', value: '12–15 km south\n15–20 min drive' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 8 }}>{item.label}</p>
                <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--color-text-primary)', whiteSpace: 'pre-line' }}>{item.value}</p>
              </div>
            ))}
          </div>
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
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Location &amp; Booking Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="Ceramic Coating at Our Studio" defaultService="Ceramic Coating" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All Ceramic Packages</Link>
            <Link to="/ceramic-coating-cost-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Cost</Link>
            <Link to="/detailing-packages-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Near Me</Link>
          </div>
        </div>
      </section>
    </>
  );
}
