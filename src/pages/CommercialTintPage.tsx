import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Zap, Shield, Eye, BarChart3, Award, Building2, Check } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import PackageVisualizer from '../components/PackageVisualizer';
import type { PackageTier } from '../components/PackageVisualizer';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const tiers: PackageTier[] = [
  {
    name: 'Office Comfort',
    subtitle: 'Heat and glare reduction for office environments — comfort without blackout',
    inclusions: ['Up to 10 windows', '3M Solar film (neutral tone)', 'Heat rejection up to 72%', 'UV rejection: 99%', 'Glare control', '3M limited warranty'],
    price: 'POA',
  },
  {
    name: 'Shopfront Protection',
    subtitle: 'Solar control + security film — ideal for retail shopfronts and street-facing glazing',
    inclusions: ['Up to 20 windows / shopfront panels', '3M Solar + Safety film (dual benefit)', 'Heat rejection up to 78%', 'UV rejection: 99%', 'Shatter retention for security', '3M limited warranty'],
    price: 'POA',
    recommended: true,
  },
  {
    name: 'Full Commercial Fitout',
    subtitle: 'Whole-building specification — mixed film types per zone, minimal disruption',
    inclusions: ['Unlimited windows — whole building', 'Zoned film specification (solar/safety/privacy per area)', 'Out-of-hours or weekend installation available', 'Pre-install consultation and floor-by-floor plan', 'Heat rejection up to 78%', '3M limited warranty', 'NABERS energy impact report (on request)'],
    price: 'POA',
  },
];

const benefits = [
  { icon: Zap, title: 'HVAC load reduction', desc: 'By rejecting up to 78% of incoming solar heat, 3M Solar film reduces the load on air conditioning — lowering energy costs measurably in glazed commercial buildings.' },
  { icon: BarChart3, title: 'NABERS improvement', desc: 'Window film is one of the most cost-effective passive improvements available to commercial tenancies. Ask us about NABERS-relevant data for your building.' },
  { icon: Shield, title: 'Safety film for shopfronts', desc: 'Safety film holds shattered glass in place in the event of breakage — reducing injury risk and slowing smash-and-grab attacks. A popular choice for street-facing retail.' },
  { icon: Eye, title: 'Glare control without blackout', desc: 'Employees and customers benefit from reduced glare on screens without feeling like they\'re working in a bunker. Modern solar film is spectrally selective — light in, heat out.' },
  { icon: Building2, title: 'Minimal business disruption', desc: 'We can work room by room, floor by floor, or schedule weekend/after-hours installation so business operations are not interrupted.' },
  { icon: Award, title: '3M Authorised Commercial Installer', desc: 'Commercial 3M installations are covered by a 3M commercial warranty. As a 3M Authorised Installer, we have access to the full range including specialty commercial films.' },
];

const faqs = [
  { q: 'How much does commercial window tinting cost in Brisbane?', a: 'Commercial window tinting in Brisbane is quoted on application — window count, glazing type, film specification, and installation access all affect pricing. Contact Glossed Out Detailing in Acacia Ridge for a site-specific quote.' },
  { q: 'How long does commercial window film installation take?', a: 'A small office of 10 windows typically takes 1–2 days. Larger commercial fitouts are staged per floor or zone. We provide a project timeline at quoting stage so you can plan around it.' },
  { q: 'Can commercial window film be installed without closing the office?', a: 'Yes — in many cases installation can be staged room by room so adjacent spaces remain operational. For larger fitouts, out-of-hours and weekend installation is available on request.' },
  { q: 'Will 3M window film affect the appearance of our building from the outside?', a: '3M commercial solar films are designed to maintain a consistent appearance from outside while delivering performance inside. We carry sample sets and can advise on aesthetics relative to your existing glazing before installation.' },
  { q: 'Does window film reduce air conditioning costs?', a: 'Yes — measurably in heavily glazed commercial buildings. By rejecting up to 78% of solar heat, 3M Solar film reduces the peak load on HVAC systems, which typically translates to lower energy consumption. The payback period varies by building.' },
  { q: 'Is window film approved for tenant installations?', a: 'In leased commercial premises, you\'ll generally need landlord or building manager approval before making modifications. We can provide technical specifications and product data to support an approval request.' },
  { q: 'Can safety film prevent a shopfront smash-and-grab?', a: 'Safety film is not a guarantee against forced entry, but it significantly delays it. Glass treated with 3M safety film holds together on impact rather than shattering — slowing an attempted smash-and-grab and reducing glass injury risk.' },
  { q: 'What is the commercial warranty on 3M window film?', a: '3M offers a commercial limited warranty on film installations performed by 3M Authorised Installers. Warranty periods vary by film series. We provide full warranty documentation at handover — ask for details at quoting stage.' },
];


export default function CommercialTintPage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = heroContentRef.current?.querySelectorAll('.hero-anim');
      if (els) gsap.from(els, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.3 });
      if (heroBgRef.current && heroRef.current)
        gsap.to(heroBgRef.current, { scrollTrigger: { trigger: heroRef.current, scrub: true }, y: '20%', ease: 'none' });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageMeta
        title="Commercial Window Tinting Brisbane — 3M Authorised"
        description="3M Authorised commercial window tinting. Energy savings, glare control & UV protection for Brisbane businesses."
        canonical="https://glossedoutdetailing.com.au/commercial-window-tinting-brisbane"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial Window Tinting",
            "provider": { "@id": "https://glossedoutdetailing.com.au/#business" },
            "serviceType": "Commercial Window Film Installation",
            "areaServed": { "@type": "City", "name": "Brisbane" },
            "description": "3M Authorised commercial window tinting. Energy savings, glare control & UV protection for Brisbane businesses.",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glossedoutdetailing.com.au/" },
              { "@type": "ListItem", "position": 2, "name": "Commercial Window Tinting Brisbane", "item": "https://glossedoutdetailing.com.au/commercial-window-tinting-brisbane" },
            ],
          },
        ]}
      />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 50%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['window']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Commercial Window Tinting — Brisbane</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>3M Commercial.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 540 }}>
            Solar heat rejection, glare control, safety film for shopfronts. Installed around your schedule — minimal disruption.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Request a Commercial Quote</span></Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
          </div>
        </div>
      </section>

      <section id="packages" className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Commercial Packages</h2>
          <PackageVisualizer tiers={tiers} diagramType="building" />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">03</span>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
            <div><h2 className="font-display" style={{ fontSize: 'var(--size-h2)', lineHeight: 1.05 }}>Performance &amp; ROI</h2></div>
            <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {benefits.map((b, i) => { const Icon = b.icon; return (
                <div key={i} className="card" style={{ padding: '24px 20px' }}>
                  <Icon size={20} color="var(--color-accent)" strokeWidth={1.5} style={{ marginBottom: 14 }} />
                  <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{b.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              ); })}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">04</span>
        <div className="container">
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Commercial Installation Process</h2>
          <div className="grid-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { step: '01', title: 'Site Survey', desc: 'We assess glazing type, aspect, building access, and your primary goals. We provide a zone-by-zone film recommendation.' },
              { step: '02', title: 'Proposal', desc: 'Full written quote with film specs, timeline, installation schedule, and warranty details. No surprises on site.' },
              { step: '03', title: 'Installation', desc: 'Staged installation minimises disruption. Each zone is prepped, filmed, and inspected before we move to the next.' },
              { step: '04', title: 'Handover', desc: 'Full QC of every window, warranty documentation issued. We provide a project completion record for your facility management.' },
            ].map(c => (
              <div key={c.step} className="card" style={{ padding: '28px 22px' }}>
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 56, color: 'var(--color-accent)', opacity: 0.2, lineHeight: 1, display: 'block', marginBottom: 14 }}>{c.step}</span>
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: '0.02em', marginBottom: 10 }}>{c.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 16 }}>What's Included</h2>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {['3M Commercial Window Film — full product range access', 'Pre-installation site survey and film specification', 'Zone-by-zone installation plan', 'Glazing prep and surface clean', 'Precision-cut film per panel', 'Post-installation QC — every window', 'Out-of-hours/weekend installation available', '3M commercial limited warranty documentation', 'Project completion record for facility management'].map((inc, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Check size={16} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Commercial Tinting Questions</h2>
          <FAQAccordion items={faqs} />
          <div style={{ marginTop: 40, padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>Want more detailed answers?{' '}<Link to="/commercial-tinting-questions" style={{ color: 'var(--color-accent)', textDecoration: 'underline', textUnderlineOffset: 3 }}>Read our complete Commercial Tinting Q&amp;A →</Link></p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(14px, 2vw, 18px)', marginBottom: 24 }}>Commercial jobs require precision, project management, and minimal disruption. That\'s the only way we take them on.</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-hero)', lineHeight: 0.9 }}>3M Authorised. <span style={{ color: 'var(--color-accent)' }}>Commercially Proven.</span></h2>
        </div>
      </section>

      <CTABlock service="Commercial Window Tinting" defaultService="Commercial Window Tinting" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/residential-window-tinting-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Residential Window Tinting</Link>
            <Link to="/automotive-window-tinting-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Automotive Window Tinting</Link>
            <Link to="/commercial-tinting-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Commercial Tinting Q&A</Link>
          </div>
        </div>
      </section>
    </>
  );
}
