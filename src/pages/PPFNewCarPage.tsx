import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Zap, TrendingUp, Clock, Award, Star, Check } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Shield, title: 'Protect it before the first chip', desc: 'The first stone chip happens before you expect it. PPF applied on delivery means the paint never takes a hit — not at the dealership, not on the drive home.' },
  { icon: Star, title: 'Factory paint condition, preserved', desc: 'New car paint is as good as it will ever be. PPF locks in that condition. Without it, Brisbane highway driving starts degrading your clear coat within months.' },
  { icon: TrendingUp, title: 'Maximum resale protection', desc: 'A car with verified PPF on factory paint commands significantly more at trade-in. The film is visible proof the paint has never been touched.' },
  { icon: Zap, title: 'Self-healing film on a new surface', desc: 'SunTek Reaction PPF heals minor scratches with heat. On new factory paint, the film and the surface work together — the result holds for the life of the film.' },
  { icon: Award, title: 'SunTek Authorised warranty — 12 years', desc: 'Our front end, track, and full wrap packages on new cars carry the full 12-year SunTek Reaction authorised installer warranty. That\'s manufacturer-backed, not self-issued.' },
  { icon: Clock, title: 'Apply within the first 30 days', desc: 'The sooner after delivery, the better. New paint is contaminant-free and has no prior damage to trap under film. The window for a perfect install is short.' },
];

const faqs = [
  { q: 'When is the best time to get PPF on a new car?', a: 'As soon as possible after taking delivery — ideally within the first 2–4 weeks. New paint is in perfect condition: no swirl marks, no chips, no contamination. Applying PPF immediately means the film goes on a perfect surface. The longer you wait, the higher the risk that something happens to the paint first.' },
  { q: 'Does PPF affect the factory warranty on my new car?', a: 'No — PPF applied by a professional installer does not affect your vehicle\'s factory warranty. It\'s a removable film applied to the exterior surface. Car manufacturers do not void warranties for PPF application. If a dealer or manufacturer tells you otherwise, that is incorrect.' },
  { q: 'Should I get PPF before or after ceramic coating on a new car?', a: 'PPF goes on first, then ceramic coating over the top if you want both. PPF protects the paint physically; ceramic coating is applied over the film (and unprotected paint) to add hydrophobic and chemical resistance. At Glossed Out Detailing, we often combine PPF on the high-impact zones with ceramic coating over the full car for a new car delivery package.' },
  { q: 'Is full body PPF worth it on a new car?', a: 'It depends on how you use the car and what you paid for it. For prestige or performance cars, full body PPF is a sound investment — the cost of full wrap is a fraction of a future respray. For everyday cars, a full front end package (bonnet, bumper, guards, headlights, mirrors) covers the areas that get hit 90% of the time and is the most popular choice.' },
  { q: 'How much does PPF for a new car cost in Brisbane?', a: 'PPF pricing for new cars depends on coverage and vehicle size. Contact us for a quote.' },
  { q: 'Will PPF affect how my new car looks?', a: 'Properly installed SunTek Reaction PPF is virtually invisible. Gloss PPF on a gloss paint car adds subtle depth without changing colour or sheen. Matte PPF converts gloss paint to a satin finish — a popular choice for customers wanting a factory matte look. We\'ll walk you through options before we start.' },
  { q: 'Can new car PPF be removed later?', a: 'Yes — PPF is designed to be removable. After several years if you want to sell the car, the film can be removed by a professional installer. Underneath, the paint will be in the same condition as the day the film was applied. That is one of the core value propositions of quality PPF.' },
];


export default function PPFNewCarPage() {
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
        title="PPF for New Cars Brisbane | Protect From Day One"
        description="Paint protection film for new cars in Brisbane. Protect your new car from rock chips and UV before they cause damage. SunTek Authorised installer."
        canonical="https://glossedoutdetailing.com.au/ppf-new-car-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "PPF for New Cars Brisbane",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "New car paint protection film in Brisbane. SunTek Authorised PPF installer in Acacia Ridge — apply within 30 days of delivery.",
      })}} />

      {/* HERO */}
      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>
              PPF for New Cars — Brisbane
            </span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>
              Protect It First.
            </span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 520 }}>
            The best time to apply PPF is before the first chip. SunTek Authorised installer in Acacia Ridge — book within 30 days of delivery for a perfect install on factory paint.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
          </div>
          <div className="hero-anim" style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating</Link>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Packages</Link>
            <Link to="/ppf-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF FAQ</Link>
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Timing Matters</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', lineHeight: 1.05, marginBottom: 24 }}>Why the First 30 Days Are Critical</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: 16 }}>
                New factory paint has never had a chip, a swirl mark, or a contamination event. It's the single best surface you'll ever have to apply film to.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: 16 }}>
                Every day you drive without protection is a day something can happen — a highway stone chip, a car park door ding, a bird dropping that etches the clear coat. These are not recoverable without paint correction before film goes on.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                Apply PPF on a clean, undamaged surface and it will perform at the highest level for the life of the film. Apply it after damage and you're protecting compromised paint.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Week 1–4', title: 'Ideal window', desc: 'Factory paint, zero contamination, no chips. Perfect install conditions.' },
                { label: 'Month 2–6', title: 'Still good', desc: 'Minor contamination possible. Full decon wash required before film. Minor swirls may need correction first.' },
                { label: '6 months+', title: 'Correction likely needed', desc: 'Most cars have at least light swirl marks from washing. Paint correction before film adds cost and time.' },
              ].map((t, i) => (
                <div key={i} className="card grid-2col" style={{ padding: '20px 24px', display: 'grid', gridTemplateColumns: '100px 1fr', gap: 16, alignItems: 'start' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', paddingTop: 2 }}>{t.label}</span>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{t.title}</p>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{t.desc}</p>
                  </div>
                </div>
              ))}
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
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Why PPF on Delivery</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', lineHeight: 1.05 }}>What You're Protecting</h2>
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

      {/* PACKAGE RECOMMENDATION */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">04</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Coverage Options</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>What We Recommend for New Cars</h2>
          <div className="grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { name: 'Front End Package', price: 'Contact us for a quote', recommended: false, desc: 'The most popular choice for new car owners. Covers the zones that get hit 90% of the time.', includes: ['Full bonnet', 'Front bumper (full)', 'Front guards', 'Headlights', 'Mirrors', '12-year SunTek warranty'] },
              { name: 'Track Package', price: 'Contact us for a quote', recommended: true, desc: 'Front end plus roof and A-pillars. Best for highway drivers and open road use in QLD.', includes: ['Everything in Front End', 'Roof', 'A-pillars', '12-year SunTek warranty'] },
              { name: 'Full Wrap', price: 'Contact us for a quote', recommended: false, desc: 'Complete vehicle coverage. Every painted panel. The definitive option for prestige or performance cars.', includes: ['Entire exterior surface', 'Edge-tucked installation', '12-year SunTek warranty'] },
            ].map((pkg, i) => (
              <div key={i} className="card" style={{ padding: '32px 24px', position: 'relative', border: pkg.recommended ? '1.5px solid var(--color-accent)' : undefined }}>
                {pkg.recommended && (
                  <span style={{ position: 'absolute', top: -12, left: 24, background: 'var(--color-accent)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100 }}>Most Popular</span>
                )}
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: '0.02em', marginBottom: 4 }}>{pkg.name}</h3>
                <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: 15, marginBottom: 12 }}>{pkg.price}</p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>{pkg.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {pkg.includes.map((inc, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <Check size={13} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <Link to="/ppf-brisbane" style={{ color: 'var(--color-accent)', fontSize: 14 }}>See full package details →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>New Car PPF Questions</h2>
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
      <CTABlock service="New Car PPF" defaultService="Paint Protection Film (PPF)" />

      {/* Internal links */}
      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All PPF Packages</Link>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Brisbane</Link>
            <Link to="/ppf-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Questions Answered</Link>
          </div>
        </div>
      </section>
    </>
  );
}
