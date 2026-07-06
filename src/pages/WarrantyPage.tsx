import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Award, Check, ChevronDown, X } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';

const brands = [
  {
    name: 'SunTek',
    desc: 'Manufactured by Eastman Performance Films (NYSE: EMN). Global leader in PPF. Tetrashield technology.',
    status: 'SunTek Authorised Installer — Queensland',
  },
  {
    name: 'NXTZEN',
    desc: 'Australian-developed ceramic coating. Developed and manufactured in Sydney. Proprietary graphene-oxide technology.',
    status: 'NXTZEN Certified Applicator',
  },
  {
    name: '3M',
    desc: 'Fortune 500 (NYSE: MMM). 120+ years, $30B+ revenue. Global leader in window film and surface protection.',
    status: '3M Authorised Window Film Installer — Queensland',
  },
  {
    name: 'Solar Gard',
    desc: 'Part of Saint-Gobain group (Fortune 500). 50+ years in window film. VTX PRO premium ceramic tint.',
    status: 'Solar Gard VTX PRO Certified Installer',
  },
];

const warrantyTable = [
  { category: 'PAINT PROTECTION FILM', items: [
    { product: 'SunTek Reaction PPF', warranty: '12 Years', covers: 'Cracking, bubbling, yellowing, discolouration, wear and tear', backedBy: 'Eastman Performance Films' },
    { product: 'SunTek Ultra Matte PPF', warranty: '10 Years', covers: 'Cracking, bubbling, yellowing, discolouration, wear and tear', backedBy: 'Eastman Performance Films' },
  ]},
  { category: 'CERAMIC COATING', items: [
    { product: 'NXTZEN Ceramic Professional', warranty: '5 Years', covers: 'UV damage, permanent stains (bird/bat droppings, bug splatter)', backedBy: 'NXTZEN (Sydney, AU)' },
    { product: 'NXTZEN Graphene Serum', warranty: '7 Years', covers: 'UV damage, permanent stains', backedBy: 'NXTZEN (Sydney, AU)' },
    { product: 'NXTZEN Elite', warranty: '9 Years', covers: 'UV damage, permanent stains, Self Healing Technology', backedBy: 'NXTZEN (Sydney, AU)' },
    { product: 'NXTZEN Elite GS02 (Graphene + Ceramic)', warranty: '9 Years', covers: 'UV damage, permanent stains, Self Healing Technology', backedBy: 'NXTZEN (Sydney, AU)' },
  ]},
  { category: 'AUTOMOTIVE WINDOW TINTING', items: [
    { product: 'Solar Gard VTX PRO', warranty: 'Lifetime', covers: 'Bubbling, peeling, discolouration, edge lifting', backedBy: 'Solar Gard (Saint-Gobain)' },
  ]},
  { category: 'RESIDENTIAL WINDOW TINTING', items: [
    { product: '3M Night Vision/Frosted', warranty: 'Lifetime', covers: 'Delamination, adhesive failure, discolouration, bubbling, cracking', backedBy: '3M Corporation' },
  ]},
  { category: 'COMMERCIAL WINDOW TINTING', items: [
    { product: '3M Commercial Films', warranty: 'Lifetime', covers: 'Delamination, adhesive failure, discolouration', backedBy: '3M Corporation' },
  ]},
  { category: 'BONUS COATINGS', items: [
    { product: 'NXTZEN L-Coat (Leather/Fabric)', warranty: '5 Years', covers: 'Interior surface protection', backedBy: 'NXTZEN' },
    { product: 'NXTZEN Glass Coat', warranty: '2 Years', covers: 'Glass surface hydrophobic coating', backedBy: 'NXTZEN' },
  ]},
];

const comparisonData = [
  { nlp: 'Manufacturer warranty: 5-12+ years', other: 'No warranty or 1-2yr installer-only' },
  { nlp: 'Backed by Eastman, NXTZEN, 3M, Solar Gard', other: 'Backed by a local ABN' },
  { nlp: 'Genuine manufacturer products — full range', other: 'Generic, unbranded, grey-market film' },
  { nlp: 'Trained, vetted, certified by each manufacturer', other: 'Self-taught, no oversight' },
  { nlp: 'Specs documented per international standards', other: 'No verifiable performance data' },
  { nlp: 'Return to any authorised dealer for claims', other: 'Hope the installer answers their phone' },
  { nlp: 'Performance independently tested', other: 'No third-party testing' },
];

const faqs = [
  { q: 'What does \'Authorised Installer\' actually mean?', a: 'It means the installer has been vetted, trained, and certified by the manufacturer. Only authorised installers can offer the full manufacturer warranty. The manufacturer has verified the installer meets their standards for equipment, technique, and materials. At Glossed Out Detailing, we hold authorised status with SunTek, NXTZEN, 3M, and Solar Gard.' },
  { q: 'Is the warranty transferable if I sell my car?', a: 'SunTek PPF warranty is transferable with documentation — proof of purchase and installation records must be provided. For NXTZEN ceramic coatings, transferability should be confirmed at the time of sale. We keep records of all installations to support warranty transfers.' },
  { q: 'What happens if a defect appears?', a: 'Bring the vehicle back to Glossed Out Detailing or any authorised dealer for the relevant product. The manufacturer covers repair or replacement of the defective product. You will need proof of purchase and installation records.' },
  { q: 'Does the warranty cover stone chips through PPF?', a: 'No. Extreme impacts that exceed the film\'s absorption capacity are not covered. However, the film is designed to absorb the impact and protect the paint underneath — so even if the film is damaged, your paint is preserved.' },
  { q: 'Will ceramic coating lose hydrophobic properties?', a: 'Some reduction in hydrophobic performance over time is normal and is not covered under warranty. Maintain the coating with manufacturer-approved products to extend hydrophobic life. We provide a care guide at handover.' },
  { q: 'What voids the warranty?', a: 'Common warranty exclusions include: use of abrasive compounds or unapproved cleaning products, neglected maintenance, accident damage, application to repainted or vinyl-wrapped surfaces (PPF), and failure to follow aftercare instructions.' },
  { q: 'Is the 3M residential warranty really lifetime?', a: 'Yes. 3M offers a limited lifetime warranty on residential window films — covering defects in materials and workmanship for as long as you own the property. The warranty is backed by 3M Corporation, not by the installer.' },
  { q: 'Do I need to maintain my vehicle to keep warranty valid?', a: 'Yes. All warranties require that you follow the recommended care standards. We provide a written aftercare guide at handover that covers washing, products to avoid, and maintenance intervals. Following this guide keeps your warranty valid.' },
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
        title="Warranties — SunTek, NXTZEN & 3M Coverage"
        description="Full warranty details for SunTek PPF, NXTZEN ceramic coating & 3M tinting installed at Glossed Out Detailing."
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
      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh', background: '#000' }}>
        {/* TODO: drop in Glossed Out hero footage/photo here when assets arrive */}
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 90% 70% at 50% 20%, #0E4636 0%, #072A20 55%, #000 100%)' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf', 'ceramic', 'window']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display" style={{ fontSize: 'var(--size-h1)', color: '#fff', lineHeight: 1, textShadow: '0 1px 6px rgba(0,0,0,0.15)' }}>
              Lifetime Protection — Up to 12 Years Warranty on PPF.
            </span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'clamp(20px,3vw,36px)', color: 'rgba(255,255,255,0.78)', lineHeight: 1.1, marginTop: 12 }}>
              Not a promise from us — a guarantee from them.
            </span>
          </h1>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <a href="#warranty-table" className="btn-ghost">View Warranties</a>
            <Link to="/next-level-protection-tds" className="btn-ghost">View Product TDS</Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: WARRANTY COMPARISON TABLE (Full Picture) */}
      <section id="warranty-table" className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Full Picture</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Warranty Overview — Every Product We Install</h2>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>Product</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>Warranty</th>
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
        </div>
      </section>

      {/* SECTION 3: BRAND TRUST BAR */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Our Partners</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Authorised by the Brands That Matter</h2>
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

      {/* SECTION 4: PPF WARRANTY DEEP-DIVE */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Paint Protection Film</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>SunTek Reaction & Ultra Matte PPF</h2>

          <div style={{ background: '#0C3B2A', borderRadius: 8, padding: '40px 36px', marginBottom: 32, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 20, right: 24, opacity: 0.06 }}>
              <Shield size={120} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>SunTek by Eastman</p>
            <p style={{ color: '#C7A74C', fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(40px, 6vw, 56px)', letterSpacing: '0.02em', lineHeight: 1 }}>12-Year Limited Warranty</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginTop: 12 }}>Reaction PPF with Tetrashield Resin Technology</p>
          </div>

          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Check size={16} color="var(--color-accent)" /> Covered
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Cracking', 'Bubbling', 'Yellowing', 'Discolouration', 'Wear and tear'].map((item, i) => (
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
                {['Improper care or maintenance', 'Abrasive products or non-wax coatings', 'Repainted or vinyl-wrapped surfaces', 'Stone chips exceeding film capacity', 'Hydrophobic degradation over time'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <X size={14} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
            {['Self-healing topcoat', 'Superhydrophobic surface', '25% more stain resistance', 'Tetrashield resin', 'Optically clear'].map((f, i) => (
              <span key={i} style={{ padding: '6px 14px', background: 'rgba(199,167,76,0.08)', border: '1px solid rgba(199,167,76,0.2)', borderRadius: 4, fontSize: 12, color: 'var(--color-accent)', fontWeight: 500 }}>{f}</span>
            ))}
          </div>

          <div style={{ padding: '16px 20px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.7 }}>
              <strong>Conditions:</strong> Must be installed by a SunTek Authorised dealer. Proof of purchase and registration required. Warranty is transferable with documentation.
            </p>
          </div>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.7, marginTop: 20, fontStyle: 'italic' }}>
            This warranty is backed by Eastman Performance Films — not by a local installer who might not exist in 5 years.
          </p>
        </div>
      </section>

      {/* SECTION 5: CERAMIC WARRANTY DEEP-DIVE */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Ceramic Coating</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 32 }}>NXTZEN Ceramic — 5 to 9-Year Protection Guarantee</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            <ExpandableSection title="NXTZEN Ceramic Professional — 5-Year Protection Guarantee">
              <div style={{ display: 'grid', gap: 16 }}>
                <div>
                  <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--color-text-primary)' }}>Covers:</strong> UV damage, permanent stains from bird/bat droppings, bug splatter.
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Silane precursor hybrid ceramic', 'Covalent bond to paint', 'Low/high pH resistance', 'Made in Sydney'].map((f, i) => (
                    <span key={i} style={{ padding: '4px 12px', background: 'rgba(199,167,76,0.08)', borderRadius: 4, fontSize: 12, color: 'var(--color-accent)' }}>{f}</span>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title="NXTZEN Graphene Serum — 7-Year Protection Guarantee">
              <div style={{ display: 'grid', gap: 16 }}>
                <div>
                  <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--color-text-primary)' }}>Covers:</strong> UV damage, permanent stains from bird/bat droppings, bug splatter. Extended to 7 years.
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Graphene nano-particles', '110% greater adhesion (third-party tested)', 'Stronger than steel / harder than diamond'].map((f, i) => (
                    <span key={i} style={{ padding: '4px 12px', background: 'rgba(199,167,76,0.08)', borderRadius: 4, fontSize: 12, color: 'var(--color-accent)' }}>{f}</span>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title="NXTZEN Elite — 9-Year Protection Guarantee (Flagship)">
              <div style={{ display: 'grid', gap: 16 }}>
                <div>
                  <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--color-text-primary)' }}>Covers:</strong> UV damage, permanent stains, Self Healing Technology. Extended to 9 years.
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Multi-Cure layer technology', 'Self-healing memory polymer', 'CSIRO-tested', 'Best UV/bird-dropping resistance'].map((f, i) => (
                    <span key={i} style={{ padding: '4px 12px', background: 'rgba(199,167,76,0.08)', borderRadius: 4, fontSize: 12, color: 'var(--color-accent)' }}>{f}</span>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title="NXTZEN Elite GS02 (Graphene + Ceramic) — 9-Year Protection Guarantee">
              <div style={{ display: 'grid', gap: 16 }}>
                <div>
                  <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--color-text-primary)' }}>Covers:</strong> UV damage, permanent stains, Self Healing Technology. 9-year warranty.
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Graphene + Ceramic hybrid', 'Self Healing Technology', 'CSIRO-tested', 'Made in Sydney'].map((f, i) => (
                    <span key={i} style={{ padding: '4px 12px', background: 'rgba(199,167,76,0.08)', borderRadius: 4, fontSize: 12, color: 'var(--color-accent)' }}>{f}</span>
                  ))}
                </div>
              </div>
            </ExpandableSection>
          </div>

          <div style={{ padding: '16px 20px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)', marginBottom: 16 }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.7 }}>
              <strong>Conditions:</strong> NXTZEN Certified Applicator required. Recommended care standards must be followed. Warranty void if abrasive compounds used.
            </p>
          </div>

          <div style={{ marginBottom: 24 }}>
            <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 10, color: 'var(--color-text-muted)' }}>NOT COVERED</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Hard water spotting', 'Tree sap damage', 'Hydrophobic loss over time', 'Paint overspray', 'Stone chips', 'Clear coat failure'].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <X size={12} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6: WINDOW TINTING WARRANTY */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Window Tinting</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Window Film Warranties</h2>

          <div style={{ display: 'grid', gap: 32 }}>
            {/* Solar Gard */}
            <div className="card" style={{ padding: '32px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
                <div>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: '0.02em' }}>Solar Gard VTX PRO</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 13 }}>Automotive Window Tinting</p>
                </div>
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, color: 'var(--color-accent)' }}>Lifetime Warranty</span>
              </div>
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Covers:</strong> Bubbling, peeling, discolouration, edge lifting. Lifetime of ownership.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Nano-ceramic technology', 'Heat rejection up to 60%', '99% UV rejection', 'Glare reduction', 'Shatter retention', 'QLD-legal VLT options'].map((f, i) => (
                  <span key={i} style={{ padding: '4px 12px', background: 'rgba(199,167,76,0.08)', borderRadius: 4, fontSize: 12, color: 'var(--color-accent)' }}>{f}</span>
                ))}
              </div>
            </div>

            {/* 3M Residential */}
            <div className="card" style={{ padding: '32px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
                <div>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: '0.02em' }}>3M Night Vision/Frosted</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 13 }}>Residential Window Tinting</p>
                </div>
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, color: 'var(--color-accent)' }}>Lifetime Warranty</span>
              </div>
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Covers:</strong> Delamination, adhesive failure, discolouration, bubbling, cracking. Lifetime of property ownership.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Non-metallized multi-layer optical film', 'Up to 97% infrared rejection', '99.9% UV rejection', 'No WiFi interference', 'Skin Cancer Foundation recommended', 'Carbon negative in 6 months'].map((f, i) => (
                  <span key={i} style={{ padding: '4px 12px', background: 'rgba(199,167,76,0.08)', borderRadius: 4, fontSize: 12, color: 'var(--color-accent)' }}>{f}</span>
                ))}
              </div>
            </div>

            {/* 3M Commercial */}
            <div className="card" style={{ padding: '32px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
                <div>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: '0.02em' }}>3M Commercial Films</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 13 }}>Commercial Window Tinting</p>
                </div>
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, color: 'var(--color-accent)' }}>Lifetime Warranty</span>
              </div>
              <div>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Covers:</strong> Delamination, adhesive failure, discolouration. Lifetime warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: AUTHORISED VS NON-AUTHORISED */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Why It Matters</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Authorised vs Non-Authorised Installer</h2>

          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 8, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
            <div style={{ background: '#0C3B2A', padding: '24px 20px' }}>
              <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, color: '#C7A74C', letterSpacing: '0.03em', marginBottom: 20 }}>Glossed Out Detailing (Authorised)</p>
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
              <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, color: 'var(--color-text-muted)', letterSpacing: '0.03em', marginBottom: 20 }}>Non-Authorised Installer</p>
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

      {/* SECTION 8: FAQ */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Warranty Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* SECTION 9: CTA */}
      <section className="section" style={{ background: 'var(--color-bg-primary)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.7, marginBottom: 40 }}>
            Every installation comes with a manufacturer warranty, aftercare guide, and our commitment to getting it right.
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
                View full manufacturer-issued TDS for every product we install — specs, test data, and performance claims all in one place.
              </p>
            </div>
            <Link to="/next-level-protection-tds" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
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
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Brisbane</Link>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Brisbane</Link>
            <Link to="/residential-window-tinting-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Residential Window Tinting</Link>
            <Link to="/automotive-window-tinting-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Automotive Window Tinting</Link>
          </div>
        </div>
      </section>
    </>
  );
}
