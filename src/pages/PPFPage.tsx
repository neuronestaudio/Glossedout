import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Zap, TrendingUp, Clock, Award, Droplets, Check } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import PackageVisualizer from '../components/PackageVisualizer';
import type { PackageTier } from '../components/PackageVisualizer';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';
const heroImg = '/glossed/gallery-2.jpg';


const tiers: PackageTier[] = [
  {
    name: 'Full Front + Side PPF (Excluding Roof & Tailgate)',
    subtitle: '5-7 Days to Complete',
    inclusions: [
      'BONNET / BUMPER / L/R FENDERS / L/R MIRROR CAPS / HEADLIGHTS / 4 X DOORS / L/R REAR QUARTER',
      'SunTek Reaction PPF - 12 Year Warranty (Coating Infused & Self Healing PPF)',
      'Full Interior & Exterior Detail',
      'Claybar Decontamination & Stage 1-3 Paint Correction',
      'We warranty both the PPF film and our installation, giving you peace of mind that if there is any wear or issues, you can bring the vehicle back to us for inspection and repair.'
    ],
    price: '',
    recommended: true,
  },
];

const benefits = [
  { icon: Shield, title: 'Self-healing surface', desc: 'SunTek Reaction PPF heals minor scratches and swirl marks with heat. Leave it in the sun — the film resets.' },
  { icon: Droplets, title: 'Hydrophobic topcoat', desc: 'Water, mud, and road grime bead off the surface. Less washing, cleaner paint between cleans.' },
  { icon: Zap, title: 'Impact absorption', desc: 'Urethane film absorbs rock chips, stone impacts, and road debris before they reach your clear coat.' },
  { icon: TrendingUp, title: 'Preserves resale value', desc: 'A PPF-protected car in Queensland\'s conditions will retain paint integrity that non-protected cars lose within years.' },
  { icon: Award, title: 'SunTek Authorised warranty', desc: 'Our Front End, Track, and Full Wrap packages carry a 12-year SunTek authorised installer warranty — not a generic dealer warranty.' },
  { icon: Clock, title: 'Long-term economics', desc: 'A paint correction or respray costs more than PPF. Protect it once, correctly, from the start.' },
];

const faqs = [
  { q: 'What are the different types of PPF?', a: 'There are two main types: gloss and matte. Gloss PPF is virtually invisible and enhances paint depth, while matte PPF gives a satin finish and can convert gloss paint to matte. Some films also offer hydrophobic or self-healing topcoats for added protection.' },
  { q: 'Is the PPF protection self-healing?', a: 'Yes, SunTek Reaction PPF features a ceramic-infused self-healing topcoat using Eastman Tetrashield\u2122 technology. Minor scratches and swirl marks disappear with heat — either from the sun or warm water — restoring the film\u2019s smooth finish.' },
  { q: 'Can you use Ceramic Coating over PPF?', a: 'Yes, ceramic coating can be applied over PPF. This adds extra hydrophobicity and makes cleaning even easier, but is not a substitute for the impact protection of PPF itself.' },
  { q: 'How much does PPF cost in Brisbane?', a: 'Pricing depends on coverage zone, vehicle size, and film specification. Contact us for a quote.' },
  { q: 'Is PPF worth it for a new car in Brisbane?', a: 'Yes — particularly in Queensland, where UV exposure and dusty highway conditions accelerate paint damage. Applying PPF within the first few months keeps the paint in showroom condition and protects the investment before any chips occur. The cost of quality PPF is significantly less than a future paint correction or respray.' },
  { q: 'How long does PPF last?', a: 'SunTek Reaction PPF is warranted for up to 12 years when installed by an authorised installer. SunTek Ultra Matte PPF carries a 10-year warranty. In Queensland conditions, film performs well across this period. Yellowing and adhesive failure are common with lower-grade film — SunTek\'s clarity warranty covers discolouration specifically.' },
  { q: 'Does PPF change how my car looks?', a: 'High-quality PPF should be virtually invisible once installed. SunTek Reaction has an optically clear finish with intense gloss and no orange peel appearance. No visible edges when properly tucked. Gloss PPF enhances depth; matte PPF converts gloss paint to a satin finish. We\'ll walk you through finish options before installation.' },
  { q: 'Can PPF be applied over existing paint correction?', a: 'Yes — and we recommend it. Film applied over imperfect paint traps existing defects under it. At Glossed Out Detailing, we inspect paint condition before every PPF job. If correction is needed, we\'ll advise before installation.' },
  { q: 'How long does PPF installation take at Acacia Ridge?', a: 'A front bumper kit takes 1–2 hours. A full front end package is typically 1 day. Full wraps require 2–4 days depending on vehicle complexity. We\'ll provide an accurate timeline at quote stage.' },
  { q: 'What is SunTek Authorised status?', a: 'SunTek Authorised Installer is a certification that confirms training, installation standards, and access to SunTek\'s full product range. Only authorised installers can provide SunTek\'s full manufacturer warranty. Glossed Out Detailing is one of a select group of SunTek Authorised installers in Queensland.' },
  { q: 'What voids a PPF warranty?', a: 'SunTek\'s warranty covers film failure — yellowing, peeling, adhesive failure, and cracking under normal use. It does not cover damage from improper washing, abrasive products, or chemical exposure. We provide a full aftercare guide at handover so you know exactly what to avoid.' },
];


export default function PPFPage() {
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
        title="Paint Protection Film Brisbane — SunTek Authorised"
        description="SunTek Authorised PPF installer in Brisbane. Self-healing urethane film, up to 12-year warranty. Acacia Ridge studio."
        canonical="https://glossedoutdetailing.com.au/ppf-brisbane"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Paint Protection Film",
            "provider": { "@id": "https://glossedoutdetailing.com.au/#business" },
            "serviceType": "Paint Protection Film Installation",
            "areaServed": { "@type": "City", "name": "Brisbane" },
            "description": "SunTek Authorised PPF installer in Brisbane. Self-healing urethane film, up to 12-year warranty. Acacia Ridge studio.",
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
              { "@type": "ListItem", "position": 2, "name": "Paint Protection Film Brisbane", "item": "https://glossedoutdetailing.com.au/ppf-brisbane" },
            ],
          },
        ]}
      />

      {/* HERO */}
      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 50%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf']} /></div>
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
              Paint Protection Film — Brisbane
            </span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>
              SunTek Authorised.
            </span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 500 }}>
            Invisible urethane film that absorbs rock chips and self-heals minor scratches. Installed by a SunTek Authorised installer in Acacia Ridge, Brisbane.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>


      {/* FAQ — moved directly below hero */}
      <section id="faq" className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 12, marginBottom: 24, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Last reviewed March 2026</p>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Common PPF Questions</h2>
          <FAQAccordion items={faqs} />
          <div style={{ marginTop: 40, padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>
              Want more detailed answers?{' '}
              <Link to="/ppf-questions" style={{ color: 'var(--color-accent)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Read our complete PPF Q&amp;A →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Choose Your Coverage</p>
            <h2 className="font-display" style={{ fontSize: 'var(--size-h2)' }}>PPF Packages</h2>
          </div>
          <PackageVisualizer tiers={tiers} diagramType="car" />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">03</span>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', lineHeight: 1.05 }}>Why PPF Is Worth It</h2>
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

      {/* PROCESS */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">04</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>The Process</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>The Workshop Floor</h2>
          <div className="grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { step: '01', title: 'Preparation', desc: 'Full decontamination wash, iron fallout removal, and clay bar treatment. Every panel is chemically clean before film touches it. Preparation is where precision installs are won or lost.' },
              { step: '02', title: 'Application', desc: 'SunTek Reaction PPF cut and installed panel by panel. We use bulk film or pre-cut kits depending on the vehicle. All edges are tucked — no exposed edges, no lifting risk. SunTek Authorised technique throughout.' },
              { step: '03', title: 'QC + Handover', desc: 'Full inspection under workshop lighting — every edge, every corner, every seam. You receive a care guide, warranty documentation, and a walkthrough of the installation before you leave.' },
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

      {/* INCLUSIONS */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>05</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 16 }}>What's Included</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>Every PPF installation at Glossed Out Detailing includes the following as standard — regardless of package.</p>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'SunTek Reaction PPF — not a generic substitute',
                'Full decontamination wash prior to installation',
                'Panel inspection before film application',
                'Edge-tucked installation on all covered panels',
                'Post-installation quality control under workshop lighting',
                'SunTek warranty documentation',
                'Aftercare guide + care instructions at handover',
                'SunTek Authorised installer certification — QLD',
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

      {/* WARRANTY + AFTERCARE */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div className="card" style={{ padding: '36px 28px' }}>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: '0.02em', marginBottom: 8 }}>Protection Backed by SunTek</h3>
              <p style={{ color: 'var(--color-accent)', fontWeight: 500, fontSize: 14, marginBottom: 16 }}>Up to 12-year manufacturer warranty</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Yellowing and discolouration', 'Film peeling or lifting', 'Adhesive failure under normal conditions', 'Cracking or hazing', 'Coverage: all packages installed by Glossed Out Detailing as SunTek Authorised Installer'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Check size={14} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ padding: '36px 28px' }}>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: '0.02em', marginBottom: 16 }}>Aftercare Instructions</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Wait 7 days before washing — film needs time to cure fully to the paint surface.',
                  'Hand wash only for the first 30 days. No automatic car washes, no high-pressure water at edges.',
                  'Use a pH-neutral car shampoo. Avoid citrus-based or solvent-based cleaners on film.',
                  'Do not apply wax or sealant over PPF — the film\'s topcoat doesn\'t need it.',
                  'If bird dropping or tree sap lands on the film, remove within 24 hours to prevent staining.',
                  'Self-healing activates with heat — direct sunlight or a warm water pour over minor scratches will reset the topcoat.',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Check size={14} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 4 }} />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY LINK (formerly Before/After placeholders) */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative', textAlign: 'center' }}>
        <span className="section-number" aria-hidden="true">07</span>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Gallery</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 24 }}>Real PPF Work, Brisbane</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            See finished installations from our Acacia Ridge studio — every car photographed under workshop lighting, no stock images.
          </p>
          <Link to="/gallery" className="btn-primary"><span className="btn-slide" /><span>Visit the Gallery →</span></Link>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(14px, 2vw, 18px)', marginBottom: 24 }}>
            Most PPF installers focus on: volume. More cars. Faster turnaround.
          </p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-hero)', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
            We focus on: <span className="shine-anim-accent">PRECISION.</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: 24, fontSize: 'clamp(14px, 1.8vw, 17px)', maxWidth: 560, margin: '24px auto 0' }}>
            The film is only as good as the prep behind it. No shortcuts, no skipped steps.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTABlock service="Paint Protection Film" defaultService="Paint Protection Film (PPF)" />

      {/* Explore More — full PPF cluster */}
      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Explore More PPF</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/suntek-ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>SunTek PPF Brisbane</Link>
            <Link to="/ppf-new-car-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF for New Cars</Link>
            <Link to="/ppf-dark-paint-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF for Dark Paint</Link>
            <Link to="/ppf-stone-chip-protection-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Stone Chip Protection</Link>
            <Link to="/ppf-resale-value-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF & Resale Value</Link>
            <Link to="/ppf-cost-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Cost Brisbane</Link>
            <Link to="/ppf-warranty-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Warranty Brisbane</Link>
            <Link to="/partial-ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Partial PPF Brisbane</Link>
            <Link to="/ppf-self-healing-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Self-Healing PPF</Link>
            <Link to="/gloss-vs-matte-ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Gloss vs Matte PPF</Link>
            <Link to="/ppf-near-me-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Near Me Brisbane</Link>
            <Link to="/ppf-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Questions Answered</Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section style={{ background: 'var(--color-bg-primary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related Services</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Brisbane</Link>
            <Link to="/automotive-window-tinting-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Automotive Window Tinting</Link>
            <Link to="/warranties" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>View Product TDS</Link>
          </div>
        </div>
      </section>
    </>
  );
}
