import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Droplets, Sun, Shield, TrendingUp, Eye, Clock, Check } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import PackageVisualizer from '../components/PackageVisualizer';
import type { PackageTier } from '../components/PackageVisualizer';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';
import heroImg from '../assets/3890152054992272584_3890151831774861643.jpg';

const beforeImg = '/b.jpg';
const afterImg = '/a.jpg';
const beforeImg2 = '/c.jpg';
const afterImg2 = '/d.jpg';


const tiers: PackageTier[] = [
  {
    name: 'Essential',
    subtitle: 'Package 1: NXTZEN Ceramic Professional\n\nRecommended for: Daily drivers seeking long-term protection, enhanced gloss, and easier maintenance.',
    inclusions: [
      '5 Year Protection Coating System',
      'Interior & Exterior Detail (Including Claybar)',
      'Stage 1-3 Paint correction',
      'Very slick finish that repels contamination and road grime'
    ],
    price: '',
  },
  {
    name: 'Protection',
    subtitle: 'Package 2: NXTZEN Graphene Serum Coating\n\nRecommended for: Daily driven vehicles needing stronger protection, superior gloss, and advanced UV and scratch resistance.',
    inclusions: [
      '7 Year warranty',
      'Interior & Exterior Detail (Including Claybar)',
      'Stage 1-3 Paint correction',
      'More durable than standard ceramic, with superior resistance to heat, water spotting, and mineral deposits.'
    ],
    price: '',
    recommended: true,
  },
  {
    name: 'Elite',
    subtitle: 'Package 3: NXTZEN Elite Coating\n\nRecommended for: A professional-grade, multi-layer ceramic coating with heat-activated self-healing, maximum gloss, and best UV and bird-dropping resistance, tested by CSIRO.',
    inclusions: [
      '9 Year warranty',
      'Interior & Exterior Detail (Including Claybar)',
      'Stage 1-3 Paint correction',
      'Self-healing memory polymer helps reduce minor surface imperfections',
      'Longest Durability'
    ],
    price: '',
  },
];

const benefits = [
  { icon: Droplets, title: 'Permanent hydrophobic surface', desc: 'Water, mud, and road grime bead and roll off. Between washes, the car stays cleaner longer.' },
  { icon: Sun, title: 'UV and oxidation resistance', desc: 'Brisbane\'s UV index is relentless. Ceramic coating slows paint oxidation and colour fade significantly.' },
  { icon: Shield, title: 'Chemical and contaminant resistance', desc: 'Bird droppings, tree sap, brake dust, and industrial fallout have less chance of bonding to the paint surface.' },
  { icon: Eye, title: 'Amplified gloss depth', desc: 'Ceramic coating fills microscopic surface imperfections and adds a depth of gloss that wax and sealant can\'t replicate.' },
  { icon: TrendingUp, title: 'Long-term paint preservation', desc: 'A ceramic-coated car in Queensland retains paint condition that an unprotected car loses within 2–3 years of sun exposure.' },
  { icon: Clock, title: 'Reduced maintenance time', desc: 'Coated cars are faster to wash — contamination doesn\'t bond. Less effort per clean, less time in the driveway.' },
];

const faqs = [
  { q: 'How much does ceramic coating cost in Brisbane?', a: 'Pricing varies based on vehicle size, paint condition, and package selected. Contact us for a personalised quote.' },
  { q: 'How long does ceramic coating last in Brisbane\'s heat?', a: 'Quality ceramic coating installed correctly lasts 1 to 7 years depending on the product and package. Our Protection tier carries a 3-year warranty; our Signature tier is warranted for 7 years. Brisbane\'s UV environment accelerates degradation of budget coatings — product quality matters here.' },
  { q: 'Does my car need paint correction before ceramic coating?', a: 'It depends on paint condition. If your paint has swirl marks, light scratches, or oxidation, those defects will be sealed under the coating permanently. Our Elite and Signature packages include paint correction. We inspect every car before coating and advise honestly on what\'s needed.' },
  { q: 'How long does ceramic coating take to apply?', a: 'Our Essential package typically takes 1 day. Protection takes 1–2 days. Elite and Signature packages include paint correction and take 2–4 days. The curing process continues for 7–14 days after application — we provide specific aftercare instructions for this period.' },
  { q: 'Can ceramic coating be applied to a matte finish?', a: 'Yes — there are ceramic coatings specifically formulated for matte and satin finishes that preserve the texture without adding gloss. Standard gloss ceramic coating should not be applied to matte paint. We use the correct product for each finish type.' },
  { q: 'Is ceramic coating worth it on a new car?', a: 'Yes — particularly in Queensland. Applying ceramic coating within the first few months keeps the paint in showroom condition before Brisbane\'s UV exposure begins degrading it. It\'s significantly more cost-effective to protect early than to correct later.' },
  { q: 'What\'s the difference between ceramic coating and PPF?', a: 'PPF is a physical urethane film that absorbs rock chips and physical impacts. Ceramic coating is a chemical bond that adds a hard, hydrophobic surface layer — it improves gloss and chemical resistance but does not protect against rock chips. For maximum protection, PPF and ceramic coating are often combined.' },
  { q: 'How do I wash my car after ceramic coating?', a: 'Wait at least 7 days after application before washing. Use pH-neutral car shampoo and a soft microfibre wash mitt. Avoid automatic car washes with abrasive brushes. Don\'t apply wax or sealant over a ceramic coating — they don\'t bond properly and can reduce performance.' },
];


export default function CeramicCoatingPage() {
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
        title="Ceramic Coating Brisbane — NXTZEN Certified"
        description="NXTZEN Certified ceramic coating in Brisbane. Hydrophobic, UV-resistant nano-ceramic layer. Acacia Ridge studio."
        canonical="https://glossedoutdetailing.com.au/ceramic-coating-brisbane"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Ceramic Coating",
            "provider": { "@id": "https://glossedoutdetailing.com.au/#business" },
            "serviceType": "Ceramic Coating Application",
            "areaServed": { "@type": "City", "name": "Brisbane" },
            "description": "NXTZEN Certified ceramic coating in Brisbane. Hydrophobic, UV-resistant nano-ceramic layer. Acacia Ridge studio.",
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
              { "@type": "ListItem", "position": 2, "name": "Ceramic Coating Brisbane", "item": "https://glossedoutdetailing.com.au/ceramic-coating-brisbane" },
            ],
          },
        ]}
      />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('${heroImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 50%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ceramic']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Ceramic Coating — Brisbane</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Precision Application.</span>
              <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'clamp(20px,3vw,36px)', color: '#0C3B2A', marginTop: 12, letterSpacing: '0.01em' }}>Up to 9 Year Warranty</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 500 }}>
            A nano-ceramic layer chemically bonded to your paint. Hydrophobic, UV-resistant, and built for Brisbane's climate.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      <section id="packages" className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 12, marginBottom: 24, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Last reviewed March 2026</p>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Choose Your Coverage</p>
          <h1 className="font-display" style={{ fontSize: 'clamp(36px,6vw,64px)', marginBottom: 40 }}>Ceramic Packages</h1>
          <PackageVisualizer tiers={tiers} diagramType="car" />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">03</span>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', lineHeight: 1.05 }}>Why Ceramic Coating</h2>
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
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>The Process</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>The Workshop Floor</h2>
          <div className="grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { step: '01', title: 'Preparation', desc: 'Decontamination wash, iron fallout removal, clay bar treatment, and panel inspection. Paint correction where required. This stage determines the quality of everything that follows.' },
              { step: '02', title: 'Application', desc: 'Ceramic coating applied panel by panel under controlled conditions. Precise buffing and levelling ensure even coverage and maximum bonding. No shortcuts, no skipped panels.' },
              { step: '03', title: 'QC + Handover', desc: 'Inspection under workshop lighting before the car leaves. You receive a warranty card, aftercare guide, and a full walkthrough — so you know exactly how to maintain the coating.' },
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
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>Standard across all ceramic coating packages at Glossed Out Detailing.</p>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {['Full decontamination wash prior to coating', 'Iron fallout removal and clay bar treatment', 'Pre-coating paint inspection', 'Ceramic coating applied by experienced installer', 'Post-application quality check under workshop lights', 'Warranty documentation provided at handover', 'Written aftercare instructions', 'Acacia Ridge, Brisbane — precision installation studio'].map((inc, i) => (
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
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: '0.02em', marginBottom: 8 }}>Protection Warranty</h3>
              <p style={{ color: 'var(--color-accent)', fontWeight: 500, fontSize: 14, marginBottom: 16 }}>Up to 7-year protection warranty</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Hydrophobic performance failure', 'UV protection failure', 'Coating delamination under normal use', 'Coverage: all packages installed by Glossed Out Detailing'].map((item, i) => (
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
                {['Wait 7 days before first wash — coating needs time to cure fully.', 'Use pH-neutral car shampoo only. No acidic or alkaline products.', 'Hand wash recommended for best results. Avoid brush-type car washes.', 'Do not apply wax or sealant over ceramic coating.', 'Remove bird droppings and tree sap within 24 hours.', 'Annual maintenance wash or coating booster recommended to extend life.'].map((item, i) => (
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

      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">07</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Gallery</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Before &amp; After</h2>
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            <BeforeAfterSlider before={beforeImg} after={afterImg} alt="Ceramic coating before and after" height={300} />
            <BeforeAfterSlider before={beforeImg2} after={afterImg2} alt="Paint gloss before and after" height={300} />
          </div>
          <Link to="/gallery" style={{ color: 'var(--color-accent)', fontSize: 14 }}>See More Work →</Link>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Ceramic Coating Questions</h2>
          <FAQAccordion items={faqs} />
          <div style={{ marginTop: 40, padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>Want more detailed answers?{' '}<Link to="/ceramic-coating-questions" style={{ color: 'var(--color-accent)', textDecoration: 'underline', textUnderlineOffset: 3 }}>Read our complete Ceramic Coating Q&amp;A →</Link></p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(14px, 2vw, 18px)', marginBottom: 24 }}>Most detailers apply coating and move to the next car. Prep is optional. Correction is rarely offered.</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-hero)', lineHeight: 0.9 }}>We prep like the coating depends on it. <span style={{ color: 'var(--color-accent)' }}>IT DOES.</span></h2>
        </div>
      </section>

      <CTABlock service="Ceramic Coating" defaultService="Ceramic Coating" />

      {/* Explore More — full Ceramic cluster */}
      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Explore More Ceramic</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-new-car-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic for New Cars</Link>
            <Link to="/ceramic-coating-uv-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic UV Protection</Link>
            <Link to="/ceramic-coating-paint-correction-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Paint Correction + Ceramic</Link>
            <Link to="/ceramic-glass-coating-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Glass Coating</Link>
            <Link to="/ceramic-coating-wheels-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Wheel Coating</Link>
            <Link to="/ceramic-ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF + Ceramic Combo</Link>
            <Link to="/ceramic-coating-longevity-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>How Long Does Ceramic Last?</Link>
            <Link to="/ceramic-vs-dealer-paint-protection-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic vs Dealer Pack</Link>
            <Link to="/ceramic-coating-matte-paint-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic on Matte Paint</Link>
            <Link to="/ceramic-coating-maintenance-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Maintenance</Link>
            <Link to="/ceramic-coating-resale-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic & Resale Value</Link>
            <Link to="/ceramic-coating-near-me-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Near Me Brisbane</Link>
            <Link to="/ceramic-coating-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Questions</Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section style={{ background: 'var(--color-bg-primary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related Services</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Paint Protection Film Brisbane</Link>
            <Link to="/automotive-window-tinting-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Automotive Window Tinting</Link>
            <Link to="/warranties" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>View Product TDS</Link>
          </div>
        </div>
      </section>
    </>
  );
}
