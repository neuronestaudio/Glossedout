import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Droplets, Sun, CheckCircle, TrendingUp, Wrench } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Droplets, title: 'Matte Stays Matte', desc: 'Standard ceramic coatings formulated for gloss paint add a wet-look gloss that flattens the depth of matte. Matte-specific ceramic enhances hydrophobic performance without adding gloss — the satin and flat finish is preserved exactly.' },
  { icon: Shield, title: 'Contamination Rejection', desc: 'Matte paint\'s textured surface traps brake dust, industrial fallout, and tar more readily than smooth gloss paint. Ceramic fills the micro-peaks, creating a barrier that repels contamination before it embeds — preserving the tactile finish texture.' },
  { icon: Sun, title: 'UV and Fade Protection', desc: 'Matte wraps and factory matte paint are susceptible to UV-induced colour shift — particularly dark and grey tones. Ceramic blocks UV at the coating level, slowing colour fade and preventing the chalky appearance that develops in untreated matte finish.' },
  { icon: CheckCircle, title: 'Easier Safe Washing', desc: 'Matte paint cannot be machine polished or corrected — swirls are permanent. Ceramic reduces surface friction, meaning correct wash technique produces less surface contact. Contamination that doesn\'t bond cannot introduce wash marring.' },
  { icon: TrendingUp, title: 'Preserves Resale Value', desc: 'Factory matte paint commands a premium on luxury and performance vehicles. A matte-specific ceramic that preserves the finish condition — no gloss spots, no fade, no embedded contamination — maintains the premium the finish commands at resale.' },
  { icon: Wrench, title: 'Compatible With Matte Wraps', desc: 'Applied over quality PPF or vinyl matte wraps, ceramic extends the life of the wrap surface and improves contamination rejection. The coating bonds to the wrap surface, not the paint — making it suitable for both factory and wrapped matte vehicles.' },
];

const faqs = [
  { q: 'Can you put ceramic coating on matte paint?', a: 'Yes — but only with a matte-specific formulation. Standard ceramic coatings designed for gloss paint contain compounds that add gloss sheen. Applied to matte, they create uneven gloss patches that cannot be corrected without repainting. Matte-specific ceramic is formulated to deliver hydrophobic protection and contamination rejection without altering the finish appearance.' },
  { q: 'Will ceramic coating change my matte paint finish?', a: 'A matte-specific ceramic correctly applied will not alter the visual appearance of your matte or satin finish. The surface texture, sheen level, and colour depth remain the same. Applying a standard gloss ceramic to matte will create gloss patches — which is why product selection and applicator experience with matte surfaces is important.' },
  { q: 'How much does ceramic for matte paint cost?', a: 'Pricing for matte-specific ceramic coating varies by vehicle size, surface condition, and whether additional surfaces (glass, wheels) are included. Contact us for an accurate quote — we assess each matte vehicle individually as surface condition varies significantly.' },
  { q: 'Can I wax or polish matte paint after ceramic coating?', a: 'No wax, polish, or gloss-enhancing product should ever be applied to matte paint — coated or not. Wax creates uneven gloss patches. Polish removes material and alters surface texture. After ceramic, use only pH-neutral matte-safe wash products and a matte-specific spray detailer for maintenance. We provide full aftercare instructions with every matte ceramic application.' },
  { q: 'Can matte paint be corrected if it gets scratched?', a: 'Matte paint has very limited correction options — unlike gloss paint, scratches and swirls cannot be polished out. This makes protection critical: preventing contamination and surface marring is the only viable strategy. Ceramic coating reduces the risk of contamination bonding and lowers wash-induced scratch risk, but matte paint requires careful handling throughout its life. Deeper scratches in factory matte typically require panel respray.' },
  { q: 'Does ceramic work on matte vinyl wraps?', a: 'Yes. Matte-specific ceramic coating is suitable for application over quality matte or satin vinyl wraps. It extends wrap life by creating a protective surface barrier, improves hydrophobic performance, and makes the wrap easier to maintain safely. The coating bonds to the vinyl surface. If the wrap is replaced, the ceramic stays with the removed wrap and fresh ceramic is applied to the new wrap.' },
];


export default function CeramicMattePage() {
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
        title="Ceramic Coating for Matte Paint Melbourne"
        description="Ceramic coating for matte and satin paint in Melbourne. Correct product for matte finishes — no gloss, no damage. Glossed Out Detailing."
        canonical="https://glossedoutdetailing.com.au/ceramic-coating-matte-paint-melbourne"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Ceramic Coating for Matte Paint Melbourne",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Melbourne",
        "description": "Ceramic coating for matte and satin paint in Melbourne. Matte-specific formulation preserves finish appearance. Glossed Out Detailing, Craigieburn."
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ceramic']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Ceramic Coating for Matte Paint</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Protect Without the Gloss.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            Matte and satin finishes require a specific ceramic formulation. We apply matte-compatible ceramic that delivers full hydrophobic protection without altering the finish character.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Book Matte Ceramic</span></Link>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost">View All Packages</Link>
            <Link to="/warranties" className="btn-ghost">View Warranties</Link>
            <Link to="/product-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Why Matte Ceramic</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>What Matte-Specific Ceramic Delivers</h2>
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
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 36 }}>Why Matte Paint Needs Special Treatment</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { label: 'Cannot Be Polished', desc: 'Matte paint has no clear coat depth to allow machine polishing. Swirls, scratches, and marring from incorrect washing are permanent without respray.' },
              { label: 'Traps Contamination', desc: 'The micro-textured surface of matte paint physically captures brake dust, tar, and fallout. Standard washing removes surface dirt but leaves embedded contamination.' },
              { label: 'UV Causes Chalking', desc: 'Untreated matte paint absorbs UV, causing colour shift and a chalky appearance — particularly visible on dark grey, black, and military green finishes.' },
              { label: 'Standard Wax Is Incompatible', desc: 'Wax fills the micro-texture and creates uneven gloss patches. Matte-specific ceramic is the correct alternative — hydrophobic protection without surface fill.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, color: 'var(--color-accent)' }}>{item.label}</p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Matte Ceramic Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="Matte Ceramic Coating" defaultService="Ceramic Coating" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All Ceramic Packages</Link>
            <Link to="/detailing-packages-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Gloss vs Matte PPF</Link>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic + PPF Combo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
