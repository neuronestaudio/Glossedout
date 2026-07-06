import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Eye, TrendingUp, Award, Zap, Check } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Shield, title: 'Physical chip absorption', desc: 'Dark paint shows chips more clearly than light paint. PPF absorbs stone impacts and road debris before they reach the surface — no white or silver chips visible against black or dark grey.' },
  { icon: Eye, title: 'Swirl marks stopped at the film surface', desc: 'Every wash cycle risks introducing swirl marks into dark paint. PPF\'s self-healing topcoat resets minor surface scratches with heat — the paint underneath stays unmarked.' },
  { icon: TrendingUp, title: 'Gloss depth amplified', desc: 'Gloss PPF adds measurable depth to dark paint. The film\'s optical clarity enhances the wet-look finish that dark colours are chosen for in the first place.' },
  { icon: Zap, title: 'Self-healing that actually matters on dark', desc: 'Light swirl marks are nearly invisible on silver paint. On dark paint they\'re glaring. SunTek Reaction PPF heals these marks with heat — a functional benefit that matters most on the colours where it shows.' },
  { icon: Award, title: '12-year SunTek warranty', desc: 'Film discolouration is covered under SunTek\'s warranty. On dark paint, yellowed or hazed film is particularly visible — SunTek Reaction\'s clarity warranty covers this specifically.' },
  { icon: Shield, title: 'Paint correction before film', desc: 'If your dark car already has swirl marks, we correct the paint before film goes on. Trapping existing defects under film is not something we do — the surface has to be right first.' },
];

const faqs = [
  { q: 'Why is PPF especially important for dark-coloured cars?', a: 'Dark paint — black, dark grey, navy, dark green — shows surface defects significantly more than silver or white. A stone chip on a black car is an immediate white or silver mark that cannot be unseen. Swirl marks from washing appear as visible spider-web patterns under direct light. PPF prevents chips from reaching the surface and its self-healing topcoat addresses light scratches before they become permanent.' },
  { q: 'Can PPF fix swirl marks already on my dark car?', a: 'No — PPF does not repair existing paint defects. If your car already has swirl marks, paint correction is required before film is applied. Installing film over existing swirl marks traps them permanently under the film. At Glossed Out Detailing, we inspect paint condition before every installation and advise on correction requirements first.' },
  { q: 'Does PPF change how dark paint looks?', a: 'Gloss PPF on gloss dark paint adds depth to the finish — many customers say the car looks better after film. The optical clarity of SunTek Reaction PPF is very high. It should not introduce haze, yellowing, or colour shift. If you want to change the finish, matte PPF converts gloss dark paint to a satin look.' },
  { q: 'Can I combine PPF and ceramic coating on a dark car?', a: 'Yes — and this is one of our most popular combinations for dark cars. PPF goes on the high-impact zones (front end, full car, or sections as required), then ceramic coating is applied over the PPF and across the rest of the painted surface. You get physical chip protection from the film and hydrophobic/chemical resistance from the ceramic. The result is a very low-maintenance, very deep-looking dark finish.' },
  { q: 'What PPF coverage do you recommend for a black car?', a: 'For a black or dark grey car that gets daily use, we recommend at minimum a full front end — bonnet, front bumper, guards, headlights, and mirrors. That covers the zones that generate 90% of chip events. If you do highway driving regularly, consider adding the roof and A-pillars (Track Package). Full wraps are worth it on dark prestige or performance cars where the full surface needs protection.' },
  { q: 'How do I wash a dark PPF-covered car without creating swirl marks?', a: 'Use a pH-neutral car shampoo, a clean microfibre wash mitt, and a two-bucket wash method. Rinse thoroughly before contact washing to remove loose grit. Do not use automatic car washes — brushes introduce the swirl marks that PPF is protecting you from. We provide full aftercare instructions at handover.' },
];


export default function PPFDarkPaintPage() {
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
        title="PPF for Dark Paint Brisbane | Black & Dark Cars"
        description="Paint protection film for dark and black paint in Brisbane. Swirl-resistant, self-healing SunTek PPF for dark cars. Acacia Ridge installer."
        canonical="https://glossedoutdetailing.com.au/ppf-dark-paint-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "PPF for Dark Paint Brisbane",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "Paint protection film for black, dark grey and dark-coloured cars in Brisbane. Prevent chips and swirl marks on dark paint. SunTek Authorised installer, Acacia Ridge.",
      })}} />

      {/* HERO */}
      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>
              PPF for Dark Paint — Brisbane
            </span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>
              No Chips. No Swirls.
            </span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 520 }}>
            Dark paint shows every chip, every swirl mark. SunTek Reaction PPF stops both — self-healing film that protects the finish dark-car owners actually care about. Installed in Acacia Ridge, Brisbane.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>The Problem With Dark Paint</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', lineHeight: 1.05, marginBottom: 24 }}>Dark Paint Hides Nothing</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: 16 }}>
                Black, dark grey, dark navy, midnight green — they look outstanding when new. And they show every single imperfection once the damage starts.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: 16 }}>
                A stone chip on black paint is an immediate white or silver mark. Swirl marks from washing — even careful washing — form a visible web pattern under direct sunlight. These are not fixable without paint correction.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                PPF creates a barrier between that surface and everything trying to damage it. The film takes the hit. The paint underneath stays as it was.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { issue: 'Stone chips', impact: 'Immediate white or silver mark visible against dark paint — no fixing without touch-up or respray.' },
                { issue: 'Swirl marks', impact: 'Washing-induced fine scratches create a spider-web pattern visible under direct light on dark surfaces.' },
                { issue: 'Bird droppings / tree sap', impact: 'Chemical etching on dark paint creates permanent dull patches in the clear coat if not removed promptly.' },
                { issue: 'UV oxidation', impact: 'Dark paint oxidises to a hazy, chalky finish under prolonged UV exposure — especially in Queensland.' },
              ].map((r, i) => (
                <div key={i} className="card grid-2col" style={{ padding: '20px 24px', display: 'grid', gridTemplateColumns: '140px 1fr', gap: 16, alignItems: 'start' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-accent)' }}>{r.issue}</span>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{r.impact}</p>
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
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>How PPF Helps</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', lineHeight: 1.05 }}>What the Film Does for Dark Paint</h2>
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

      {/* WHAT'S INCLUDED */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>04</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 16 }}>What's Included on Every Job</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>Dark paint jobs get the same standard as everything else — but with heightened attention to prep, because every imperfection will show.</p>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Paint condition inspection before film — correction advised if needed',
                'Full decontamination wash + iron fallout removal',
                'Clay bar decontamination on all surfaces to be filmed',
                'SunTek Reaction PPF — not a generic substitute',
                'Edge-tucked installation on all covered panels',
                'Post-installation QC under workshop lighting',
                'SunTek warranty documentation',
                'Aftercare guide at handover',
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

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Dark Paint PPF Questions</h2>
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
      <CTABlock service="Dark Paint Protection" defaultService="Paint Protection Film (PPF)" />

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
