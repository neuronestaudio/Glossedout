import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Droplets, Sun, CheckCircle, TrendingUp, Clock } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Droplets, title: 'pH-Neutral Wash Only', desc: 'After ceramic application, only pH-neutral car wash shampoos should be used. Alkaline or acidic products degrade the coating\'s hydrophobic layer from the top. pH-neutral products clean without attacking the Si-O bond that forms the ceramic matrix.' },
  { icon: Shield, title: 'Avoid Automatic Car Washes', desc: 'Rotating brushes in automatic car washes introduce surface marring — micro-scratches in the clear coat that accumulate over repeated washes. Hand washing with ceramic-safe shampoo and a quality wash mitt removes this risk entirely and preserves coating performance.' },
  { icon: Sun, title: 'Annual Coating Inspection', desc: 'We recommend an annual condition check — hydrophobic performance test, visual inspection under studio lighting, and topcoat boost if required. Catching early degradation and applying a maintenance layer extends overall coating life at a fraction of recoat cost.' },
  { icon: CheckCircle, title: 'Ceramic Boost Spray', desc: 'Between full maintenance services, a ceramic spray booster applied after washing every 3–4 months adds a sacrificial hydrophobic layer on top of the base coat. This maintains beading performance and reduces contamination adhesion without requiring studio reapplication.' },
  { icon: TrendingUp, title: 'Decontamination Service', desc: 'Brisbane\'s industrial corridor around the southern suburbs deposits iron and tar contamination that bonds to paint over time. An annual iron fallout treatment and tar removal keeps the surface chemically clean and prevents contamination build-up from degrading the coating from underneath.' },
  { icon: Clock, title: 'Correct Timing Extends Life by Years', desc: 'A coating maintained annually with correct products and a boost layer at 18–24 months will consistently outlast its rated durability by 20–40%. A coating that receives no maintenance, or is washed with incorrect products, often degrades before the warranty period ends.' },
];

const faqs = [
  { q: 'What maintenance does ceramic coating need?', a: 'Ceramic coating requires: pH-neutral hand wash only (no automatic car washes), a ceramic boost spray every 3–4 months, an annual inspection and decontamination, and a maintenance layer application at 18–24 months for coatings with longer warranty periods. These steps cost a small fraction of recoat pricing and consistently extend total protection life beyond the rated duration.' },
  { q: 'Can I take my ceramic coated car through a drive-through car wash?', a: 'We recommend against it. Rotating brush automatic washes introduce swirl marks and surface marring that accumulate over repeat visits — in ceramic coated or uncoated paint. Touchless automatic washes are less damaging but use high-alkalinity detergents that degrade the hydrophobic surface layer. Hand washing with pH-neutral product is the correct approach.' },
  { q: 'How often do I need to come back for a top-up?', a: 'For our Protection package (3-year warranty) and Elite package (5-year warranty), we recommend an inspection and maintenance layer at 18 months. For the Signature package (7-year warranty), a maintenance service at 24–30 months maintains peak performance. Annual decontamination is recommended for all tiers. Between services, ceramic boost spray used at home every 3–4 months maintains surface performance.' },
  { q: 'What products can I use at home to maintain ceramic coating?', a: 'At home, use: pH-neutral ceramic-safe shampoo (Gyeon Q²M Bathe, Koch Chemie GSF, or similar), a quality lambswool or microfibre wash mitt, microfibre drying towels, and a SiO₂-based ceramic spray booster. Avoid waxes, all-in-one polishes, and any product marketed as "gloss enhancing" — these leave residue that interferes with the ceramic surface performance.' },
  { q: 'Does ceramic coating require any special care in Brisbane\'s climate?', a: 'Yes — Brisbane\'s high UV index (11–13) means vehicles parked outdoors accumulate UV exposure faster than southern cities. While ceramic provides UV blocking, parking under cover extends coating life. Brisbane\'s industrial contamination (brake dust, iron fallout, industrial particulate from the southern corridor) means an iron decontamination treatment annually is particularly relevant for Acacia Ridge, Rocklea, and surrounds.' },
  { q: 'What happens if I don\'t maintain the ceramic coating?', a: 'Without maintenance, contamination builds up on and below the coating surface. The coating\'s hydrophobic performance degrades as the surface layer is consumed by contamination and incorrect wash products. Coatings without any maintenance typically perform noticeably below rated duration — water beading reduces, surface appearance dulls, and the protective barrier thins. Correct maintenance is a condition of our warranty.' },
];


export default function CeramicMaintenancePage() {
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
        title="Ceramic Coating Maintenance Brisbane | Aftercare Guide"
        description="How to maintain ceramic coating in Brisbane. Washing tips, maintenance schedule, and aftercare guide. Glossed Out Detailing."
        canonical="https://glossedoutdetailing.com.au/ceramic-coating-maintenance-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Ceramic Coating Maintenance Brisbane",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "Ceramic coating maintenance and top-up services in Brisbane. Annual inspection, decontamination, and maintenance layer services. Acacia Ridge studio.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ceramic']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Ceramic Coating Maintenance</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Keep the Protection Performing.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            Ceramic coating longevity depends on maintenance. Correct wash products, annual decontamination, and a boost layer at 18 months keeps coatings performing beyond their rated duration.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Book Maintenance Service</span></Link>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost">View All Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* MAINTENANCE SCHEDULE */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Maintenance Schedule</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>What to Do and When</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--color-surface)' }}>
                  {['Interval', 'Task', 'Where', 'Impact'].map((h, i) => (
                    <th key={i} style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, border: '1px solid var(--color-border)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { interval: 'Every 2 weeks', task: 'pH-neutral hand wash', where: 'At home', impact: 'Prevents contamination build-up' },
                  { interval: 'Every 3–4 months', task: 'Ceramic boost spray (SiO₂)', where: 'At home post-wash', impact: 'Maintains hydrophobic performance' },
                  { interval: 'Every 12 months', task: 'Iron decontamination + inspection', where: 'Studio service', impact: 'Removes bonded fallout, checks coating condition' },
                  { interval: '18–24 months', task: 'Maintenance layer reapplication', where: 'Studio service', impact: 'Extends total protection life' },
                  { interval: 'At warranty expiry', task: 'Full condition assessment + recoat option', where: 'Studio service', impact: 'Maintain protection continuity' },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--color-surface)' }}>
                    <td style={{ padding: '12px 20px', fontWeight: 700, fontSize: 12, border: '1px solid var(--color-border)', color: 'var(--color-accent)' }}>{row.interval}</td>
                    <td style={{ padding: '12px 20px', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)', fontSize: 12 }}>{row.task}</td>
                    <td style={{ padding: '12px 20px', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontSize: 12 }}>{row.where}</td>
                    <td style={{ padding: '12px 20px', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontSize: 12 }}>{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Maintenance Principles</h2>
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
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Ceramic Maintenance Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="Ceramic Coating Maintenance" defaultService="Ceramic Coating" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-longevity-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Longevity</Link>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All Ceramic Packages</Link>
            <Link to="/ceramic-coating-cost-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Cost</Link>
          </div>
        </div>
      </section>
    </>
  );
}
