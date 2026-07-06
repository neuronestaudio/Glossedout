import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const automotiveHero = '/glossed/ceramic-coating.jpg';
import { Sun, Shield, Eye, Thermometer, Award, Zap, Check } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import PackageVisualizer from '../components/PackageVisualizer';
import type { PackageTier } from '../components/PackageVisualizer';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const tiers: PackageTier[] = [
  {
    name: 'Rear Privacy',
    subtitle: 'Rear passenger glass — privacy and UV protection',
    inclusions: ['All rear passenger windows', 'Solar Gard VTX PRO film (select VLT)', 'UV rejection: 99%', 'Lifetime warranty (Solar Gard authorised)'],
    price: 'Get a Quote',
  },
  {
    name: 'Full Car Tint',
    subtitle: 'All windows except windscreen — heat, UV, privacy',
    inclusions: ['All rear passenger windows + rear windscreen', 'Solar Gard VTX PRO film (select VLT)', 'Heat rejection up to 60%', 'UV rejection: 99%', 'Glare reduction', 'Lifetime warranty (Solar Gard authorised)'],
    price: 'Get a Quote',
    recommended: true,
  },
  {
    name: 'Full Car + Windscreen',
    subtitle: 'Total glass coverage — maximum heat and UV rejection',
    inclusions: ['All windows including front windscreen (clear/light VLT compliant)', 'Solar Gard VTX PRO film', 'Maximum heat rejection', 'UV rejection: 99%', 'Lifetime warranty (Solar Gard authorised)'],
    price: 'Get a Quote',
  },
];

const benefits = [
  { icon: Thermometer, title: 'Heat rejection up to 60%', desc: 'Solar Gard VTX PRO rejects significantly more heat than standard tint. Cabin temperatures drop measurably in Brisbane\'s summer.' },
  { icon: Sun, title: '99% UV rejection', desc: 'Block 99% of UV rays across all VLT shades — including lighter, Queensland-legal options.' },
  { icon: Eye, title: 'Glare reduction', desc: 'Reduce eye strain on long drives. Lower glare without sacrificing visibility at low VLT limits.' },
  { icon: Shield, title: 'Shatter retention', desc: 'Solar Gard VTX PRO holds broken glass together on impact — a safety benefit beyond heat and UV.' },
  { icon: Award, title: 'Solar Gard VTX PRO Certified', desc: 'We\'re one of a select group of Solar Gard VTX PRO Certified installers in QLD — not a generic tint shop using unbranded film.' },
  { icon: Zap, title: 'Lifetime warranty', desc: 'Solar Gard authorised installer warranty — covers bubbling, peeling, and discolouration for the life of your ownership.' },
];

const faqs = [
  { q: 'What VLT is legal for car tinting in Queensland?', a: 'In Queensland, the legal minimum VLT is 35% for all windows except the windscreen (which must allow 75% or more). Solar Gard VTX PRO is available in multiple VLT options that meet Queensland legal requirements. At Glossed Out Detailing, we only install Queensland-legal VLT unless the vehicle is not registered for road use.' },
  { q: 'How much does car window tinting cost in Brisbane?', a: 'Pricing depends on vehicle size and coverage selected. Contact us for a personalised quote.' },
  { q: 'How long does window tinting take?', a: 'Most standard car tint jobs are completed in 2–4 hours. A full car including windscreen may take up to half a day depending on vehicle complexity. You can wait at our Acacia Ridge studio or we can arrange drop-off.' },
  { q: 'How long do I need to wait before rolling my windows down?', a: 'We recommend waiting at least 3–4 days before rolling windows down. This allows the adhesive to cure fully. Rolling windows down too early can cause the film to lift from the edges. We\'ll confirm cure time at handover.' },
  { q: 'What is Solar Gard VTX PRO film?', a: 'Solar Gard VTX PRO is a premium automotive window film manufactured by Solar Gard — a global film brand with over 50 years of product history. VTX PRO specifically refers to their high-performance nano-ceramic tint series, offering superior heat rejection versus standard dyed film. It\'s the film we use on every automotive tint job at Glossed Out Detailing.' },
  { q: 'Can I get the windscreen tinted in Queensland?', a: 'A windscreen tint must maintain at least 75% VLT in Queensland — which essentially means a very light, almost clear film. We offer clear Solar Gard film for windscreens that rejects UV and reduces glare without visibly darkening the glass. Our Full Car + Windscreen package includes this.' },
  { q: 'Does window tinting make a noticeable difference in Brisbane\'s heat?', a: 'Yes — particularly with a film like Solar Gard VTX PRO that has high solar heat rejection. Standard cabin temperatures in Queensland\'s summer can drop by 5–10°C with quality window film. The difference is most noticeable when entering a parked car on a hot day.' },
  { q: 'What if my window tint bubbles or peels?', a: 'Film failure — bubbling, peeling, or discolouration — is covered by the Solar Gard authorised installer warranty for the life of your vehicle ownership. If you notice any failure, contact us and we\'ll assess and address it under warranty. Bubbling during the initial cure period (first few days) is normal and resolves as the film dries.' },
];


export default function AutomotiveTintPage() {
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
        title="Car Window Tinting Brisbane — Solar Gard VTX PRO"
        description="Solar Gard VTX PRO Certified car window tinting in Brisbane. QLD-legal VLT. Heat & UV rejection."
        canonical="https://glossedoutdetailing.com.au/automotive-window-tinting-brisbane"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Automotive Window Tinting",
            "provider": { "@id": "https://glossedoutdetailing.com.au/#business" },
            "serviceType": "Automotive Window Tinting Installation",
            "areaServed": { "@type": "City", "name": "Brisbane" },
            "description": "Solar Gard VTX PRO Certified car window tinting in Brisbane. QLD-legal VLT. Heat & UV rejection.",
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
              { "@type": "ListItem", "position": 2, "name": "Car Window Tinting Brisbane", "item": "https://glossedoutdetailing.com.au/automotive-window-tinting-brisbane" },
            ],
          },
        ]}
      />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url("${automotiveHero}")`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 50%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['tint']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span
              className="hero-anim font-display"
              style={{
                fontSize: 'var(--size-h1)',
                color: '#fff',
                lineHeight: 1,
                textShadow: '0 1px 6px rgba(0,0,0,0.15)',
              }}
            >
              Window Tinting — Brisbane
            </span>
            <span className="hero-anim font-display shine-anim-accent" style={{ display: 'block', fontSize: 'var(--size-hero)', lineHeight: 0.95, marginTop: 4 }}>Solar Gard VTX PRO.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 500 }}>
            Premium ceramic automotive window film. Heat rejection up to 60%. 99% UV block. Queensland-legal VLT options. Lifetime warranty.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

        {/* FAQ moved below hero */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)', paddingTop: 48, paddingBottom: 48 }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 24 }}>Common Tinting Questions</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 12, marginBottom: 24, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Last reviewed March 2026</p>
            <FAQAccordion items={faqs} />
            <div style={{ marginTop: 40, padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)' }}>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>Want more detailed answers?{' '}<Link to="/automotive-tinting-questions" style={{ color: 'var(--color-accent)', textDecoration: 'underline', textUnderlineOffset: 3 }}>Read our complete Car Tinting Q&amp;A →</Link></p>
            </div>
          </div>
        </section>

      <section id="packages" className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Choose Your Coverage</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Tint Packages</h2>
          <PackageVisualizer tiers={tiers} diagramType="car" />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">03</span>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', lineHeight: 1.05 }}>Why VTX PRO</h2>
            </div>
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
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>The Workshop Floor</h2>
          <div className="grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { step: '01', title: 'Preparation', desc: 'Every window is cleaned with a specialist glass cleaner to remove grease, silicone, and contamination. The gasket edges are inspected. This stage determines whether edges lift within months.' },
              { step: '02', title: 'Application', desc: 'Solar Gard VTX PRO film is cut precisely to each window, applied with a slip solution, and pressed with professional squeegees. No bubbles, no contamination under the film.' },
              { step: '03', title: 'QC + Handover', desc: 'Every window inspected before the car leaves. You receive cure instructions, a warranty card, and a walkthrough on what to expect in the first 5–7 days.' },
            ].map(c => (
              <div key={c.step} className="card" style={{ padding: '36px 28px' }}>
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 64, color: 'var(--color-accent)', opacity: 0.2, lineHeight: 1, display: 'block', marginBottom: 16 }}>{c.step}</span>
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, letterSpacing: '0.02em', marginBottom: 12 }}>{c.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>05</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 16 }}>What's Included</h2>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {['Solar Gard VTX PRO film — not generic tint', 'Professional glass decontamination prep', 'Precision-cut film for each window', 'Solar Gard authorised installer lifetime warranty', 'Queensland VLT compliance confirmation', 'Post-installation inspection before handover', 'Written cure and aftercare instructions'].map((inc, i) => (
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
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div className="card" style={{ padding: '36px 28px' }}>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: '0.02em', marginBottom: 8 }}>Protection Backed by Solar Gard</h3>
              <p style={{ color: 'var(--color-accent)', fontWeight: 500, fontSize: 14, marginBottom: 16 }}>Lifetime warranty — Solar Gard Authorised Installer</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Bubbling or peeling under normal conditions', 'Film discolouration / purple fade', 'Edge lifting from normal use', 'Coverage: all Solar Gard VTX PRO installations by Glossed Out Detailing'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10 }}>
                    <Check size={14} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ padding: '36px 28px' }}>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: '0.02em', marginBottom: 16 }}>Aftercare</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Wait 3–4 days before rolling windows down — adhesive needs to cure.', 'Avoid washing the car for 7 days after installation.', 'If haze appears in the first few days, this is moisture curing — it resolves on its own.', 'Use an ammonia-free glass cleaner on tinted windows. Standard glass cleaners can degrade the film.', 'Do not use abrasive materials or razors on tinted glass.'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10 }}>
                    <Check size={14} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 4 }} />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative', textAlign: 'center' }}>
        <span className="section-number" aria-hidden="true">07</span>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Gallery</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 24 }}>Real Window Tinting Work</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            See finished tinting installs from our Acacia Ridge studio.
          </p>
          <Link to="/gallery" className="btn-primary"><span className="btn-slide" /><span>Visit the Gallery →</span></Link>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(14px, 2vw, 18px)', marginBottom: 24 }}>Most tint shops use whatever film is cheapest that week.</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-hero)', lineHeight: 0.9 }}>We use <span className="shine-anim-accent">SOLAR GARD VTX PRO.</span> Every time.</h2>
        </div>
      </section>

      <CTABlock service="Window Tinting" defaultService="Automotive Window Tinting" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/residential-window-tinting-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Residential Window Tinting</Link>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Paint Protection Film</Link>
            <Link to="/automotive-tinting-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Tinting Questions Answered</Link>
          </div>
        </div>
      </section>
    </>
  );
}
