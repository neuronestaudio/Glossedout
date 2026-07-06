import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Zap, Thermometer, Shield, Eye } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Zap, title: 'Light Swirls Vanish Under Heat', desc: 'SunTek Reaction\'s ceramic-infused topcoat reflows under warmth — solar heat, warm water, or a heat gun. Light swirl marks from automatic washes or incorrect hand washing disappear without any product or polishing.' },
  { icon: Thermometer, title: 'Brisbane Heat Activates It', desc: 'Brisbane\'s ambient temperature and direct sun are sufficient to trigger the self-healing process in normal parking conditions. You don\'t need to actively apply heat — the climate does the work.' },
  { icon: Shield, title: 'Swirls vs Chips — Different Mechanisms', desc: 'Self-healing addresses surface-level scratches in the film\'s topcoat. It does not repair chip damage that penetrates to the adhesive layer — that\'s what the urethane body of the film handles. Both mechanisms work simultaneously on different threat levels.' },
  { icon: Eye, title: 'Optical Clarity Maintained', desc: 'The self-healing topcoat is optically transparent. It does not add visible texture or colour. After healing, the panel surface returns to a clear, swirl-free finish without polishing or product application.' },
  { icon: Zap, title: 'No Limit on Healing Cycles', desc: 'The topcoat does not "run out" of healing capacity. Light swirls will heal repeatedly across the life of the film — the 12-year SunTek Reaction warranty period.' },
  { icon: Shield, title: 'Available on All Packages', desc: 'Self-healing film is standard on SunTek Reaction PPF — the film used on all Glossed Out Detailing installs. You do not need to select a special upgrade tier to get self-healing capability.' },
];

const faqs = [
  { q: 'What is self-healing PPF?', a: 'Self-healing PPF contains a flexible elastomeric topcoat that reflows under heat to close surface-level scratches. Light swirl marks — the kind left by automatic car washes or poor hand-washing technique — disappear when the film surface warms up. The film body beneath still absorbs chip and impact damage separately.' },
  { q: 'Does self-healing PPF actually work?', a: 'Yes, for light surface scratches in the topcoat. It does not work on deep scratches that penetrate below the topcoat, or on chip damage that reaches the adhesive. The distinction matters: "self-healing" refers specifically to the outermost layer. The main film body handles chip and stone impact — those marks are absorbed, not healed.' },
  { q: 'Does Brisbane weather activate the self-healing?', a: 'Yes. SunTek Reaction\'s healing topcoat activates around 60°C surface temperature, which is reached on a typical Brisbane summer day in direct sun within minutes. Ambient heat during normal parked conditions is sufficient — you do not need to apply external heat deliberately.' },
  { q: 'Does self-healing PPF remove stone chips?', a: 'No. A stone chip is a physical impact that compresses the film body. The chip is absorbed by the urethane layer — the film takes the damage instead of the paint. The crater left in the film is structural, not a surface scratch, and does not self-heal. It remains visible in the film surface but the paint beneath is undamaged. A chipped panel can be re-filmed.' },
  { q: 'Is self-healing the same as ceramic coating?', a: 'No — they are different products with different functions. Ceramic coating is a hard silica layer applied over paint (or over PPF) that repels water and contamination. Self-healing is a topcoat within the PPF film that closes light surface scratches. They can be combined: PPF provides impact protection and swirl healing, ceramic provides hydrophobic performance over the top.' },
  { q: 'Does self-healing PPF require any special maintenance?', a: 'No. Wash with pH-neutral automotive shampoo and a clean microfibre. Avoid automatic car washes with brushes. If light swirls appear after an imperfect wash, parking in direct sun will typically resolve them within 30–60 minutes. The film does not require any activating product or treatment.' },
  { q: 'Is self-healing film covered by the warranty?', a: 'Yes. SunTek Reaction\'s 12-year warranty covers the full film including the topcoat. If the topcoat degrades or fails to perform its healing function under normal conditions within the warranty period, it is a warranty claim. Damage to the topcoat from physical abrasion or incorrect maintenance products is not a warranty defect.' },
];


export default function PPFSelfHealingPage() {
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
        title="Self-Healing PPF Brisbane | SunTek Reaction"
        description="Self-healing paint protection film in Brisbane. SunTek Reaction PPF heals minor scratches with heat. Authorised installer, Acacia Ridge."
        canonical="https://glossedoutdetailing.com.au/ppf-self-healing-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Self-Healing PPF Brisbane — SunTek Reaction Paint Protection Film",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "Self-healing PPF in Brisbane. SunTek Reaction film with ceramic-infused topcoat — light swirls vanish under heat. Activated by Brisbane ambient temperatures. Acacia Ridge studio.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Self-Healing PPF Brisbane</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Swirls Gone. In the Sun.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            SunTek Reaction's ceramic-infused topcoat closes light surface scratches under heat. Brisbane's climate activates it automatically. Standard on every Glossed Out Detailing install.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/ppf-brisbane" className="btn-ghost">View All PPF Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>How It Works</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Self-Healing Film — The Facts</h2>
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

      {/* SWIRL VS CHIP EXPLAINER */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>What Self-Healing Does and Doesn't Fix</h2>
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="card" style={{ padding: 28, borderTop: '2px solid #22c55e' }}>
              <p style={{ fontWeight: 700, fontSize: 14, color: '#22c55e', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Self-Healing Fixes</p>
              {['Light swirl marks from hand washing', 'Fine surface scratches from wiping', 'Automatic car wash brush marks', 'Minor surface abrasion from fabric', 'Environmental micro-scratches'].map((item, i) => (
                <p key={i} style={{ color: 'var(--color-text-secondary)', fontSize: 13, padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>{item}</p>
              ))}
            </div>
            <div className="card" style={{ padding: 28, borderTop: '2px solid var(--color-text-muted)' }}>
              <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--color-text-muted)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Film Body Absorbs (Not Healed)</p>
              {['Stone chip impacts', 'Deep scratches through the film', 'Physical punctures or cuts', 'High-velocity debris strikes', 'Pressure-wash damage to film edge'].map((item, i) => (
                <p key={i} style={{ color: 'var(--color-text-secondary)', fontSize: 13, padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>{item}</p>
              ))}
            </div>
          </div>
          <p style={{ marginTop: 16, color: 'var(--color-text-muted)', fontSize: 13 }}>The film body absorbing a chip is the film working correctly. The paint beneath is protected. The visible crater in the film surface is the film\'s damage record — not a failure.</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Self-Healing PPF Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="Self-Healing PPF" defaultService="Paint Protection Film (PPF)" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All PPF Packages</Link>
            <Link to="/suntek-ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>SunTek PPF</Link>
            <Link to="/ppf-dark-paint-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF for Dark Paint</Link>
          </div>
        </div>
      </section>
    </>
  );
}
