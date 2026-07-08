import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Award, Check, ChevronDown, X } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';

/* Coating range + durability mirror the Product TDS (/product-tds) and are cross-checked
   against each manufacturer's published guarantee:
     - Gtechniq CSL (Crystal Serum Light): 5-year guarantee via Gtechniq Detailer
     - Magnum Graphene: 7-year · Magnum Borophene: 10-year (accredited applicator + annual inspection)
     - Kraken Elite Plus (graphene, self-healing): 7-year · Kraken Graphene Titanium: 10-year
   Formal warranty mechanics (transferability, registration specifics) are noted as
   "confirm at handover" rather than asserted — do not invent terms. */
const brands = [
  {
    name: 'Gtechniq',
    desc: 'British-engineered SiO₂ ceramic coatings. Crystal Serum Light is a benchmark accredited-installer coating, backed by a 5-year guarantee.',
    status: 'Gtechniq Detailer',
  },
  {
    name: 'Magnum',
    desc: 'Advanced graphene and borophene ceramic coatings with manufacturer-backed guarantees up to 10 years when applied by an accredited applicator.',
    status: 'Magnum Accredited Applicator',
  },
  {
    name: 'Kraken Elite',
    desc: 'Graphene and graphene-titanium self-healing coatings — light surface marring recovers with heat. Certified-installer guarantees up to 10 years.',
    status: 'Kraken Certified Installer',
  },
  {
    name: 'CarPro Trained',
    desc: 'Globally recognised coating and detailing chemistry — used through our decontamination, correction and protection process.',
    status: 'CarPro Trained',
  },
];

const warrantyTable = [
  { category: 'CERAMIC COATING', items: [
    { product: 'Gtechniq CSL — Crystal Serum Light', warranty: '5 Years', covers: 'Coating durability, gloss retention, UV protection, hydrophobic performance', backedBy: 'Gtechniq (UK)' },
    { product: 'Magnum Graphene', warranty: '7 Years', covers: 'Coating durability, gloss retention, UV protection, reduced water spotting', backedBy: 'Magnum' },
    { product: 'Magnum Borophene', warranty: '10 Years', covers: 'Coating durability, gloss retention, UV protection, chemical resistance', backedBy: 'Magnum' },
    { product: 'Kraken Elite Plus (Graphene, Self-Healing)', warranty: '7 Years', covers: 'Coating durability, gloss retention, self-healing of light marring', backedBy: 'Kraken Elite' },
    { product: 'Kraken Graphene Titanium (Self-Healing)', warranty: '10 Years', covers: 'Coating durability, gloss retention, self-healing, chemical resistance', backedBy: 'Kraken Elite' },
  ]},
  { category: 'INCLUDED PROTECTION COATINGS', items: [
    { product: 'Wheel Face Ceramic Coating', warranty: 'Coating-dependent', covers: 'Brake-dust and grime resistance on the wheel face', backedBy: 'Included on premium tiers' },
    { product: 'Glass Coating', warranty: 'Coating-dependent', covers: 'Hydrophobic windscreen and side glass', backedBy: 'Included on premium tiers' },
    { product: 'Leather & Fabric Coating', warranty: 'Coating-dependent', covers: 'Interior stain and UV-fade protection', backedBy: 'Included on new-car packages' },
  ]},
  { category: 'GLASS COATING', items: [
    { product: 'Magnum Glass Armour Pro', warranty: '1–2 Years', covers: 'Hydrophobic windscreen & side glass — rain beads and clears at speed', backedBy: 'Magnum' },
    { product: 'CarPro DQUARTZ GForce', warranty: '1–2 Years', covers: 'Hydrophobic glass coating — strong water release', backedBy: 'CarPro' },
  ]},
  { category: 'WHEEL COATING', items: [
    { product: 'Magnum Rim Guard Pro', warranty: '1–2 Years', covers: 'Brake-dust & grime resistance on wheel faces; heat resistant', backedBy: 'Magnum' },
    { product: 'CarPro DLUX', warranty: '1–2 Years', covers: 'Wheel & plastic-trim coating — brake-dust resistance and trim protection', backedBy: 'CarPro' },
  ]},
  { category: 'LEATHER COATING', items: [
    { product: 'Magnum Leather Guard Pro', warranty: '1–2 Years', covers: 'Leather stain, UV-fade and wear protection', backedBy: 'Magnum' },
    { product: 'CarPro CQUARTZ Leather 2.0 — Leather & Vinyl Coating', warranty: '1–2 Years', covers: 'Leather & vinyl stain and UV protection', backedBy: 'CarPro' },
  ]},
  { category: 'FABRIC COATING', items: [
    { product: 'CarPro CQUARTZ Fabric 2.0 — Water & Stain Resistant Coating', warranty: 'Up to 12 Months', covers: 'Water & stain resistance for fabric upholstery and carpets', backedBy: 'CarPro' },
  ]},
];

const comparisonData = [
  { nlp: 'Manufacturer-backed guarantee: 5–10 years', other: 'No guarantee, or installer-only 1–2yr' },
  { nlp: 'Backed by Gtechniq, Magnum & Kraken', other: 'Backed only by a local ABN' },
  { nlp: 'Genuine, named professional coatings', other: 'Generic, unbranded bottle' },
  { nlp: 'Trained, vetted & certified by each brand', other: 'Self-taught, no oversight' },
  { nlp: 'Correct prep — decontamination + paint correction', other: 'Coating over unprepared paint' },
  { nlp: 'Guarantee honoured through the accredited network', other: 'Hope the installer answers their phone' },
  { nlp: 'Documented application & aftercare records', other: 'No records, no proof' },
];

const faqs = [
  { q: 'What does an \'Accredited Applicator\' actually mean?', a: 'It means the installer has been vetted, trained and certified by the coating manufacturer. Only accredited applicators can register the full manufacturer guarantee — the brand has verified the installer meets their standards for surface prep, application and materials. Glossed Out Detailing holds accredited/certified status with Magnum and Kraken, and works with Gtechniq and CarPro professional coatings.' },
  { q: 'Is the guarantee transferable if I sell my car?', a: 'Transferability varies by coating brand and should be confirmed at handover. We keep records of every application to support a transfer or a future claim — please ask us for the specifics of your coating before you sell.' },
  { q: 'What do I need to do to keep the guarantee valid?', a: 'Follow the written aftercare guide we provide at handover. Some manufacturers (for example Magnum) also require online guarantee registration and periodic inspections during the guarantee period. We\'ll walk you through any registration or inspection requirements that apply to your coating.' },
  { q: 'What is and isn\'t covered?', a: 'The guarantee covers the coating\'s durability — its gloss, hydrophobic performance and UV resistance — for the stated period when properly maintained. It does not cover stone chips, accident or impact damage, neglect, use of abrasive or unapproved products, hard-water spotting, or failure of the underlying clear coat/paint.' },
  { q: 'How does the self-healing on Kraken coatings work?', a: 'Kraken Elite Plus and Graphene Titanium use a self-healing graphene chemistry — light swirls and surface marring recover with heat from the sun or warm water. Deeper scratches that reach the paint are not covered by self-healing.' },
  { q: 'Will the coating lose its water beading over time?', a: 'Some reduction in hydrophobic performance over the years is normal and expected. Maintaining the coating with approved products (and a periodic top-up/maintenance service) keeps beading strong and protects the guarantee.' },
  { q: 'What voids the guarantee?', a: 'Common exclusions: abrasive compounds or unapproved cleaning products, neglected maintenance, missed registration or inspection requirements, accident damage, and application over defective or repainted clear coat. Following the aftercare guide keeps your guarantee valid.' },
];

function ExpandableSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: '1px solid var(--color-border)', borderRadius: 6, overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: 'var(--color-surface)', border: 'none', cursor: 'pointer', color: 'var(--color-text-primary)', fontSize: 15, fontWeight: 600, textAlign: 'left' }}
      >
        {title}
        <ChevronDown size={18} style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s', flexShrink: 0, marginLeft: 12 }} />
      </button>
      {open && <div style={{ padding: '16px 20px', borderTop: '1px solid var(--color-border)' }}>{children}</div>}
    </div>
  );
}

export default function WarrantyPage() {
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
        title="Warranties — Gtechniq, Magnum & Kraken Ceramic Coating Guarantees"
        description="Manufacturer-backed ceramic coating guarantees up to 10 years — Gtechniq, Magnum and Kraken — professionally applied by Glossed Out Detailing in Melbourne."
        canonical="https://glossedoutdetailing.com.au/warranties"
        jsonLd={[
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
              { "@type": "ListItem", "position": 2, "name": "Warranties", "item": "https://glossedoutdetailing.com.au/warranties" },
            ],
          },
        ]}
      />

      {/* SECTION 1: HERO */}
      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh', background: '#0A2B1E' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 90% 80% at 50% 15%, #12543A 0%, #0A2B1E 50%, #061c14 100%)' }} aria-hidden="true" />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundImage: 'url(/carbon-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18 }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, rgba(6,28,20,0.6) 0%, transparent 55%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Gtechniq', 'Magnum Applicator', 'Kraken Certified', 'CarPro Trained'].map(b => (
              <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, padding: '9px 16px', background: '#0C3B2A', color: '#fff', fontSize: 13, fontWeight: 500, letterSpacing: '0.02em' }}>
                <Award size={14} color="var(--color-accent)" /> {b}
              </span>
            ))}
          </div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display" style={{ fontSize: 'var(--size-h1)', color: '#fff', lineHeight: 1, textShadow: '0 1px 6px rgba(0,0,0,0.15)' }}>
              Manufacturer-Backed Ceramic Coating — Up to 10 Years.
            </span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'clamp(20px,3vw,36px)', color: 'rgba(255,255,255,0.78)', lineHeight: 1.1, marginTop: 12 }}>
              Not a promise from us — a guarantee from them.
            </span>
          </h1>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <a href="#warranty-table" className="btn-ghost">View Warranties</a>
            <Link to="/product-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: WARRANTY OVERVIEW TABLE */}
      <section id="warranty-table" className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Full Picture</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Warranty Overview — Every Coating We Apply</h2>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>Product</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>Guarantee</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>Covers</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>Backed By</th>
                </tr>
              </thead>
              <tbody>
                {warrantyTable.map((cat, ci) => (
                  <>{/* eslint-disable-next-line react/jsx-key */}
                    <tr key={`cat-${ci}`}>
                      <td colSpan={4} style={{ padding: '20px 16px 8px', fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, letterSpacing: '0.05em', color: 'var(--color-accent)', borderBottom: '1px solid var(--color-border)' }}>
                        {cat.category}
                      </td>
                    </tr>
                    {cat.items.map((item, ii) => (
                      <tr key={`item-${ci}-${ii}`} style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <td style={{ padding: '14px 16px', fontSize: 14, fontWeight: 500, color: 'var(--color-text-primary)' }}>{item.product}</td>
                        <td style={{ padding: '14px 16px', fontSize: 15, fontWeight: 700, color: 'var(--color-accent)', whiteSpace: 'nowrap' }}>{item.warranty}</td>
                        <td style={{ padding: '14px 16px', fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{item.covers}</td>
                        <td style={{ padding: '14px 16px', fontSize: 13, color: 'var(--color-text-secondary)' }}>{item.backedBy}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 12, lineHeight: 1.6, marginTop: 20, fontStyle: 'italic' }}>
            Guarantee periods reflect each manufacturer's published durability when the coating is applied by an accredited installer and maintained per the aftercare guide. Exact terms, registration and transferability are confirmed at handover.
          </p>
        </div>
      </section>

      {/* SECTION 3: BRAND TRUST BAR */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Our Partners</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Accredited by the Brands That Matter</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 20 }}>
            {brands.map((b, i) => (
              <div key={i} className="card" style={{ padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, letterSpacing: '0.02em', marginBottom: 8 }}>{b.name}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.65, marginBottom: 16 }}>{b.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: 'rgba(199,167,76,0.08)', borderRadius: 4, border: '1px solid rgba(199,167,76,0.2)' }}>
                  <Award size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--color-accent)', fontSize: 12, fontWeight: 600, letterSpacing: '0.02em' }}>{b.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FLAGSHIP HIGHLIGHT */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Flagship Protection</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>10-Year Coatings — Magnum Borophene & Kraken Titanium</h2>

          <div style={{ background: '#0C3B2A', borderRadius: 8, padding: '40px 36px', marginBottom: 32, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 20, right: 24, opacity: 0.06 }}>
              <Shield size={120} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Top of the range</p>
            <p style={{ color: '#C7A74C', fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(40px, 6vw, 56px)', letterSpacing: '0.02em', lineHeight: 1 }}>10-Year Durability Guarantee</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginTop: 12 }}>Borophene &amp; Graphene-Titanium chemistry — free wheel-face and glass coating included</p>
          </div>

          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Check size={16} color="var(--color-accent)" /> Covered
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Coating durability & adhesion', 'Gloss retention', 'UV protection', 'Hydrophobic performance', 'Self-healing of light marring (Kraken)'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <Check size={14} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <X size={16} color="var(--color-text-muted)" /> Not Covered
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Stone chips & impact damage', 'Accident or collision damage', 'Abrasive or unapproved products', 'Hard-water spotting', 'Neglected maintenance', 'Underlying clear-coat failure'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <X size={14} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
            {['Graphene & borophene chemistry', 'Self-healing (Kraken)', 'Deep gloss & slickness', 'Free wheel + glass coating', 'Hydrophobic'].map((f, i) => (
              <span key={i} style={{ padding: '6px 14px', background: 'rgba(199,167,76,0.08)', border: '1px solid rgba(199,167,76,0.2)', borderRadius: 4, fontSize: 12, color: 'var(--color-accent)', fontWeight: 500 }}>{f}</span>
            ))}
          </div>

          <div style={{ padding: '16px 20px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.7 }}>
              <strong>Conditions:</strong> Must be applied by an accredited/certified installer. Guarantee registration and any required periodic inspections must be completed. Recommended aftercare must be followed.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: CERAMIC WARRANTY DEEP-DIVE */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Ceramic Coating</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 32 }}>Our Ceramic Range — 5 to 10-Year Guarantees</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            <ExpandableSection title="Gtechniq CSL (Crystal Serum Light) — 5-Year Guarantee">
              <div style={{ display: 'grid', gap: 16 }}>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Covers:</strong> Coating durability, gloss retention, UV protection and hydrophobic performance. Backed by a 5-year guarantee when applied by a Gtechniq Detailer.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['SiO₂ ceramic', 'High gloss', 'Hydrophobic', 'UV protection', 'Made in the UK'].map((f, i) => (
                    <span key={i} style={{ padding: '4px 12px', background: 'rgba(199,167,76,0.08)', borderRadius: 4, fontSize: 12, color: 'var(--color-accent)' }}>{f}</span>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title="Magnum Graphene — 7-Year Guarantee">
              <div style={{ display: 'grid', gap: 16 }}>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Covers:</strong> Coating durability, gloss retention, UV protection and enhanced chemical resistance with reduced water spotting. 7-year manufacturer guarantee (accredited applicator, registration + annual inspection).
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Graphene ceramic', '7-year durability', 'Enhanced chemical resistance', 'Reduced water spotting'].map((f, i) => (
                    <span key={i} style={{ padding: '4px 12px', background: 'rgba(199,167,76,0.08)', borderRadius: 4, fontSize: 12, color: 'var(--color-accent)' }}>{f}</span>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title="Magnum Borophene — 10-Year Guarantee">
              <div style={{ display: 'grid', gap: 16 }}>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Covers:</strong> Maximum coating durability, gloss retention, UV protection and very high chemical resistance. Top of the Magnum range — includes free wheel-face and glass coating. 10-year guarantee.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Borophene ceramic', '10-year durability', 'Maximum protection', 'Free wheel + glass coating'].map((f, i) => (
                    <span key={i} style={{ padding: '4px 12px', background: 'rgba(199,167,76,0.08)', borderRadius: 4, fontSize: 12, color: 'var(--color-accent)' }}>{f}</span>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title="Kraken Elite Plus (Graphene, Self-Healing) — 7-Year Guarantee">
              <div style={{ display: 'grid', gap: 16 }}>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Covers:</strong> Coating durability, superior gloss and slickness, and self-healing of light surface marring with heat. Includes free wheel-face and glass coating. 7-year guarantee.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Self-healing graphene', '7-year durability', 'Superior gloss', 'Free wheel + glass coating'].map((f, i) => (
                    <span key={i} style={{ padding: '4px 12px', background: 'rgba(199,167,76,0.08)', borderRadius: 4, fontSize: 12, color: 'var(--color-accent)' }}>{f}</span>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title="Kraken Graphene Titanium (Self-Healing) — 10-Year Guarantee">
              <div style={{ display: 'grid', gap: 16 }}>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Covers:</strong> Ultimate coating durability, best-in-range gloss retention, self-healing and ultimate chemical resistance. The pinnacle of our range — includes free wheel-face and glass coating. 10-year guarantee.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Graphene + titanium', '10-year durability', 'Self-healing', 'Ultimate gloss retention', 'Free wheel + glass coating'].map((f, i) => (
                    <span key={i} style={{ padding: '4px 12px', background: 'rgba(199,167,76,0.08)', borderRadius: 4, fontSize: 12, color: 'var(--color-accent)' }}>{f}</span>
                  ))}
                </div>
              </div>
            </ExpandableSection>
          </div>

          <div style={{ padding: '16px 20px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)', marginBottom: 16 }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.7 }}>
              <strong>Conditions:</strong> Accredited/certified applicator required. Recommended care standards must be followed, and any manufacturer registration or inspection requirements completed. Guarantee void if abrasive compounds or unapproved products are used.
            </p>
          </div>

          <div style={{ marginBottom: 24 }}>
            <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 10, color: 'var(--color-text-muted)' }}>NOT COVERED</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Stone chips & impact damage', 'Hard water spotting', 'Tree sap & neglect damage', 'Hydrophobic loss over time', 'Accident / collision damage', 'Clear coat failure'].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <X size={12} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6: AUTHORISED VS NON-AUTHORISED */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Why It Matters</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Accredited vs Non-Accredited Installer</h2>

          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 8, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
            <div style={{ background: '#0C3B2A', padding: '24px 20px' }}>
              <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, color: '#C7A74C', letterSpacing: '0.03em', marginBottom: 20 }}>Glossed Out Detailing (Accredited)</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {comparisonData.map((row, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Check size={14} color="#C7A74C" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, lineHeight: 1.5 }}>{row.nlp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'var(--color-surface)', padding: '24px 20px' }}>
              <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, color: 'var(--color-text-muted)', letterSpacing: '0.03em', marginBottom: 20 }}>Non-Accredited Installer</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {comparisonData.map((row, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <X size={14} color="var(--color-text-muted)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: 'var(--color-text-muted)', fontSize: 13, lineHeight: 1.5 }}>{row.other}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Warranty Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* SECTION 8: CTA */}
      <section className="section" style={{ background: 'var(--color-bg-primary)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.7, marginBottom: 40 }}>
            Every ceramic coating comes with a manufacturer-backed guarantee, a written aftercare guide, and our commitment to getting the prep and application right.
          </p>
        </div>
      </section>
      <CTABlock service="Warranty Information" defaultService="General Enquiry" />

      {/* TDS CTA BLOCK */}
      <section style={{ background: 'var(--color-bg-primary)', padding: '56px var(--section-padding-x)' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ padding: '36px 32px', background: 'var(--color-surface)', borderRadius: 8, border: '1px solid var(--color-border)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
            <div>
              <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 8 }}>Product Documentation</p>
              <h3 className="font-display" style={{ fontSize: 'clamp(22px, 3vw, 32px)', letterSpacing: '0.02em', marginBottom: 8 }}>Product Technical Data Sheets</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.65, maxWidth: 460 }}>
                View the full spec for every coating we apply — Gtechniq, Magnum and Kraken — durability, technology and performance in one place.
              </p>
            </div>
            <Link to="/product-tds" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              <span className="btn-slide" /><span>View All TDS</span>
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related Services</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/detailing-packages-melbourne#ceramic" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating</Link>
            <Link to="/detailing-packages-melbourne#correction" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Paint Correction</Link>
            <Link to="/detailing-packages-melbourne#detailing" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Detailing</Link>
            <Link to="/product-tds" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Product TDS</Link>
          </div>
        </div>
      </section>
    </>
  );
}
