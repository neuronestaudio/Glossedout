import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Zap, Eye, TrendingUp, Check, Clock } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Shield, title: 'Paint Correction Removes Defects Before Sealing', desc: 'Ceramic coating amplifies what is under it — including scratches. Correction removes swirl marks, light scratches, buffer trails, and oxidation before the coating locks the surface in permanently.' },
  { icon: Zap, title: 'Stage 1 vs Multi-Stage', desc: 'Stage 1 removes light swirls and haze — typically takes 2–4 hours. Multi-stage correction addresses deeper scratches, heavier oxidation, and clear coat damage — 6–12 hours or more depending on vehicle condition and size.' },
  { icon: Eye, title: 'The Inspection Process', desc: 'Every vehicle is inspected under workshop lighting at reception. We identify defect type and depth, advise on what correction is achievable and appropriate, and quote the correction separately before any work begins.' },
  { icon: TrendingUp, title: 'Corrected Paint Holds Ceramic Better', desc: 'A flat, defect-free surface accepts ceramic coating more evenly and bonds more consistently than an uncorrected surface. Correction is preparation — it is not optional on vehicles with significant swirl or oxidation.' },
  { icon: Check, title: 'Not Every Car Needs It', desc: 'New cars coated within 30 days of delivery, or cars that have been maintained exclusively by hand washing with correct technique, may not require correction. We advise honestly — correction is not added to jobs where it adds no value.' },
  { icon: Clock, title: 'Adds to Turnaround Time', desc: 'Stage 1 correction adds approximately 1 day to the job. Multi-stage correction adds 2–3 days. Turnaround is confirmed at the time of inspection and quote — no surprises at the booking stage.' },
];

const faqs = [
  { q: 'What is paint correction?', a: 'Paint correction is a machine polishing process that removes defects from the clear coat layer — swirl marks, light scratches, oxidation, buffer trails, and water spot etching. It uses progressively finer cutting compounds and polishing pads to level the clear coat surface and remove the defect depth. Corrected paint is flat, bright, and free of the light-scattering micro-damage that causes a dull or hazy appearance.' },
  { q: 'Do I need paint correction before ceramic coating?', a: 'If your paint has swirl marks, light scratches, or oxidation, yes. Ceramic coating is transparent and amplifying — it seals whatever is under it. Defects visible before coating will be more visible after coating because the hydrophobic surface reflects light more consistently, making surface imperfections easier to see. Correcting before coating seals a perfect surface.' },
  { q: 'What is the difference between stage 1 and multi-stage correction?', a: 'Stage 1 uses a single compound and pad combination to remove light surface defects — swirls from incorrect washing, light haze, and minor scratches. It removes a small amount of clear coat and is suitable for most daily drivers. Multi-stage correction uses progressively finer combinations — starting with a heavier cut to remove deeper defects, then refining to restore full gloss. Multi-stage is appropriate for neglected paint, heavily swirled cars, or vehicles with oxidation.' },
  { q: 'Can paint correction fix deep scratches?', a: 'Correction removes scratches that are within the clear coat layer. If a scratch has penetrated through the clear coat to the base coat or primer, it cannot be corrected by polishing — it requires touch-up or respray. At inspection, we assess scratch depth and advise what is achievable before correction begins.' },
  { q: 'How much clear coat does paint correction remove?', a: 'Stage 1 removes approximately 1–3 microns of clear coat. Multi-stage may remove 5–10 microns depending on severity. Factory clear coat is typically 50–90 microns. A vehicle that has been corrected multiple times may have reduced clear coat thickness — we check thickness at inspection on vehicles with known previous correction history.' },
  { q: 'Does paint correction come with any guarantee?', a: 'We guarantee the work will be performed to the standard advised at inspection — the advised defect removal percentage is the target. Paint correction results depend on paint condition, clear coat thickness, and defect depth. We do not guarantee removal of defects that were assessed as beyond correction threshold at inspection.' },
  { q: 'How do I know if my car needs correction before booking?', a: 'In direct sunlight or under a work light, rotate around the car and look for fine circular scratches or a general haziness in the panels. If you can see swirl patterns in the light, correction will benefit the finish before ceramic. If the paint looks clean and glossy in direct light, it may not require correction — send us photos and we can give an initial assessment before your booking.' },
];


export default function CeramicCorrectionPage() {
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
        title="Ceramic Coating & Paint Correction Brisbane"
        description="Paint correction before ceramic coating in Brisbane. Remove swirl marks and scratches before sealing under ceramic. Elite and Signature packages available."
        canonical="https://glossedoutdetailing.com.au/ceramic-coating-paint-correction-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Paint Correction Brisbane — Before Ceramic Coating",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "Paint correction in Brisbane before ceramic coating. Stage 1 and multi-stage correction — swirl removal, oxidation, scratches. Quoted separately, assessed at inspection. Acacia Ridge.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ceramic']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Paint Correction Brisbane</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Fix It. Then Seal It.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            Ceramic coating seals whatever is under it. Swirl marks, scratches, and oxidation become permanent if not corrected first. We inspect every car before coating and advise honestly.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Book an Inspection</span></Link>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost">View Ceramic Packages</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Correction</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Paint Correction — The Facts</h2>
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

      {/* STAGE COMPARISON */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Stage 1 vs Multi-Stage</h2>
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              { stage: 'Stage 1 Correction', targets: ['Light swirl marks from wash events', 'Surface haze and oxidation', 'Minor buffer trails', 'Fine water spot etching'], time: '2–4 hours', included: 'Included in Elite package' },
              { stage: 'Multi-Stage Correction', targets: ['Heavier swirling from automatic washes', 'Moderate oxidation and fade', 'Deeper scratches within clear coat', 'Compound buffer trails from prior correction'], time: '6–12+ hours', included: 'Included in Signature package' },
            ].map((stage, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 16, color: 'var(--color-text-primary)' }}>{stage.stage}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                  {stage.targets.map((t, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <Check size={14} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>{t}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Est. time: {stage.time}</p>
                <p style={{ fontSize: 12, color: 'var(--color-accent)', marginTop: 4 }}>{stage.included}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Paint Correction Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="Paint Correction and Ceramic Coating" defaultService="Ceramic Coating" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All Ceramic Packages</Link>
            <Link to="/ceramic-coating-cost-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Cost</Link>
            <Link to="/ceramic-coating-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Q&amp;A</Link>
          </div>
        </div>
      </section>
    </>
  );
}
