import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, ChevronDown, ExternalLink, Award, Download } from 'lucide-react';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';
import bgHeader   from '../assets/Website-photos/Screenshot 2026-03-16 181459.jpg';
import bgCeramic  from '../assets/Website-photos/Screenshot 2026-03-16 181532.jpg';
import bgBonus    from '../assets/Website-photos/Screenshot 2026-03-16 181712.jpg';
import bgWhyTDS   from '../assets/Website-photos/Screenshot 2026-03-16 181647.jpg';

/* NOTE: Performance figures marked "[Confirm from official TDS]" are placeholders —
   pull the exact numbers from each manufacturer's technical data sheet (Gtechniq,
   Magnum, Kraken Elite) before publishing. Durability years and self-healing claims
   are taken from Glossed Out's package sheet. */
const tdsProducts = [
  {
    category: 'CERAMIC COATING SYSTEMS',
    bg: 'var(--color-bg-primary)',
    bgImg: bgCeramic,
    items: [
      {
        brand: 'Gtechniq — UK',
        name: 'Gtechniq CSL — Crystal Serum Light',
        tagline: 'High gloss, UV protection & hydrophobic finish. 5-Year.',
        warranty: '5 Year Durability',
        specs: [
          { label: 'Technology', value: 'SiO₂ (silica) ceramic coating' },
          { label: 'Durability', value: 'Up to 5 years' },
          { label: 'Finish', value: 'High gloss — adds depth and clarity' },
          { label: 'Hydrophobic', value: 'Yes — strong water beading and self-cleaning' },
          { label: 'UV Protection', value: 'Yes — guards against oxidation and fade' },
          { label: 'Chemical Resistance', value: 'High — resists bird droppings, bug acids, road salts' },
          { label: 'Hardness', value: '[Confirm from official TDS]' },
          { label: 'Applied Over', value: 'Decontamination + 1-step paint correction' },
          { label: 'Backed By', value: 'Gtechniq (UK)' },
        ],
        features: ['SiO₂ ceramic', '5-year durability', 'High gloss', 'Hydrophobic', 'UV protection'],
        note: 'Our entry ceramic tier — a proven Gtechniq coating that locks in gloss and makes washing effortless. Ideal for newer vehicles or a certified first step into ceramic protection.',
        link: '/detailing-packages-melbourne',
        linkLabel: 'View Ceramic Packages',
      },
      {
        brand: 'Magnum',
        name: 'Magnum Graphene — 7-Year Coating',
        tagline: 'Enhanced durability & chemical resistance. 7-Year.',
        warranty: '7 Year Durability',
        specs: [
          { label: 'Technology', value: 'Graphene-infused ceramic coating' },
          { label: 'Durability', value: 'Up to 7 years' },
          { label: 'Chemical Resistance', value: 'Enhanced — improved resistance vs standard ceramic' },
          { label: 'Hydrophobic', value: 'Yes — high water contact angle' },
          { label: 'UV Protection', value: 'Yes' },
          { label: 'Thermal Behaviour', value: 'Graphene reduces water spotting from heat' },
          { label: 'Hardness / Contact Angle', value: '[Confirm from official TDS]' },
          { label: 'Applied Over', value: 'Decontamination + 1-step paint correction' },
          { label: 'Backed By', value: 'Magnum' },
        ],
        features: ['Graphene ceramic', '7-year durability', 'Enhanced chemical resistance', 'Hydrophobic', 'Reduced water spotting'],
        note: 'A graphene step-up over CSL — added durability and chemical resistance, with reduced water-spotting in the sun. A strong all-rounder for daily drivers.',
        link: '/detailing-packages-melbourne',
        linkLabel: 'View Ceramic Packages',
      },
      {
        brand: 'Magnum',
        name: 'Magnum Borophene — 10-Year Coating',
        tagline: 'Maximum protection & longevity. 10-Year.',
        warranty: '10 Year Durability',
        specs: [
          { label: 'Technology', value: 'Borophene-enhanced ceramic coating' },
          { label: 'Durability', value: 'Up to 10 years' },
          { label: 'Protection', value: 'Maximum — top of the Magnum range' },
          { label: 'Hydrophobic', value: 'Yes — long-lasting water repellency' },
          { label: 'UV Protection', value: 'Yes' },
          { label: 'Chemical Resistance', value: 'Very high' },
          { label: 'Hardness / Contact Angle', value: '[Confirm from official TDS]' },
          { label: 'Includes', value: 'FREE wheel face ceramic coating + FREE glass coating' },
          { label: 'Backed By', value: 'Magnum' },
        ],
        features: ['Borophene ceramic', '10-year durability', 'Maximum protection', 'Free wheel + glass coating', 'Hydrophobic'],
        note: 'The flagship Magnum coating — maximum longevity with a complimentary wheel-face and glass coating included. Built to keep a car protected for the long haul.',
        link: '/detailing-packages-melbourne',
        linkLabel: 'View Ceramic Packages',
      },
      {
        brand: 'Kraken Elite',
        name: 'Kraken Elite Plus — 7-Year Graphene (Self-Healing)',
        tagline: 'Self-heals light surface imperfections. 7-Year.',
        warranty: '7 Year Durability',
        specs: [
          { label: 'Technology', value: 'Self-healing graphene ceramic coating' },
          { label: 'Durability', value: 'Up to 7 years' },
          { label: 'Self-Healing', value: 'Yes — light surface imperfections self-heal with heat' },
          { label: 'Gloss', value: 'Superior gloss and slickness' },
          { label: 'Chemical Resistance', value: 'Superior' },
          { label: 'Hydrophobic', value: 'Yes — strong hydrophobic protection' },
          { label: 'Hardness / Contact Angle', value: '[Confirm from official TDS]' },
          { label: 'Includes', value: 'FREE wheel face ceramic coating + FREE glass coating' },
          { label: 'Backed By', value: 'Kraken Elite' },
        ],
        features: ['Self-healing graphene', '7-year durability', 'Superior gloss', 'Free wheel + glass coating', 'Hydrophobic'],
        note: 'Self-healing graphene technology — light swirls and marks recover with heat, so the finish stays sharper for longer. Includes wheel and glass coating.',
        link: '/detailing-packages-melbourne',
        linkLabel: 'View Ceramic Packages',
      },
      {
        brand: 'Kraken Elite',
        name: 'Kraken Elite Graphene Titanium — 10-Year (Self-Healing)',
        tagline: 'Ultimate protection, durability & gloss retention. 10-Year.',
        warranty: '10 Year Durability',
        specs: [
          { label: 'Technology', value: 'Graphene + titanium self-healing ceramic coating' },
          { label: 'Durability', value: 'Up to 10 years' },
          { label: 'Self-Healing', value: 'Yes — light surface imperfections self-heal with heat' },
          { label: 'Gloss Retention', value: 'Ultimate — best-in-range gloss and depth' },
          { label: 'Chemical Resistance', value: 'Ultimate' },
          { label: 'Hydrophobic', value: 'Yes — maximum water repellency' },
          { label: 'Hardness / Contact Angle', value: '[Confirm from official TDS]' },
          { label: 'Includes', value: 'FREE wheel face ceramic coating + FREE glass coating' },
          { label: 'Backed By', value: 'Kraken Elite' },
        ],
        features: ['Graphene + titanium', '10-year durability', 'Self-healing', 'Ultimate gloss retention', 'Free wheel + glass coating'],
        note: 'The pinnacle of our ceramic range — graphene-titanium chemistry with self-healing, maximum durability and the deepest gloss we offer. The ultimate protection package.',
        link: '/detailing-packages-melbourne',
        linkLabel: 'View Ceramic Packages',
      },
    ],
  },
  {
    category: 'INCLUDED PROTECTION COATINGS',
    bg: 'var(--color-bg-secondary)',
    bgImg: bgBonus,
    items: [
      {
        brand: 'Glossed Out Detailing',
        name: 'Wheel Face Ceramic Coating',
        tagline: 'Baked-on brake dust becomes an easy rinse-off.',
        warranty: 'Coating-dependent',
        specs: [
          { label: 'Application', value: 'Face of the wheels (barrels on request)' },
          { label: 'Effect', value: 'Repels brake dust and road grime — easier cleaning' },
          { label: 'Heat Resistance', value: 'Formulated for wheel surface temperatures' },
          { label: 'Included With', value: 'Borophene, Kraken Elite Plus & Titanium packages (free)' },
          { label: 'Product / Spec', value: '[Confirm product + official TDS]' },
        ],
        features: ['Brake-dust resistant', 'Easier wheel cleaning', 'Heat resistant', 'Included on premium tiers'],
        note: 'Included free on our upper ceramic tiers, or added to any package. Keeps wheels cleaner between washes and protects the finish from baked-on brake dust.',
        link: '/detailing-packages-melbourne',
        linkLabel: 'View Ceramic Packages',
      },
      {
        brand: 'Glossed Out Detailing',
        name: 'Glass Coating',
        tagline: 'Hydrophobic glass — rain beads and clears at speed.',
        warranty: 'Coating-dependent',
        specs: [
          { label: 'Application', value: 'Windscreen and side glass' },
          { label: 'Effect', value: 'Hydrophobic — rain beads and sheets off at speed' },
          { label: 'Visibility', value: 'Improved wet-weather and night visibility' },
          { label: 'Included With', value: 'Borophene, Kraken Elite Plus & Titanium packages (free)' },
          { label: 'Product / Spec', value: '[Confirm product + official TDS]' },
        ],
        features: ['Hydrophobic glass', 'Rain beading', 'Better wet-weather visibility', 'Included on premium tiers'],
        note: 'A hydrophobic treatment for the glass so water clears fast at speed — often the difference in visibility during heavy rain.',
        link: '/detailing-packages-melbourne',
        linkLabel: 'View Ceramic Packages',
      },
      {
        brand: 'Glossed Out Detailing',
        name: 'Leather & Fabric Coating',
        tagline: 'Interior protection against stains and UV fade.',
        warranty: 'Coating-dependent',
        specs: [
          { label: 'Application', value: 'Leather seats and fabric upholstery' },
          { label: 'Protection', value: 'Stain resistance, UV fade and wear protection' },
          { label: 'Feel', value: 'Preserves natural texture — non-greasy' },
          { label: 'Included With', value: 'All New-Car ceramic packages (free)' },
          { label: 'Product / Spec', value: '[Confirm product + official TDS]' },
        ],
        features: ['Leather & fabric', 'Stain resistant', 'UV protection', 'Free on new-car packages'],
        note: 'Complimentary on our new-car ceramic packages — keeps the interior looking new by resisting stains and UV fade on leather and fabric surfaces.',
        link: '/detailing-packages-melbourne',
        linkLabel: 'View Ceramic Packages',
      },
    ],
  },
];

function TDSCard({ item }: { item: typeof tdsProducts[0]['items'][0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
      {/* Card Header */}
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '24px 24px', background: 'var(--color-surface)', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
        aria-expanded={open}
      >
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 6 }}>{item.brand}</p>
          <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(20px, 2.5vw, 26px)', letterSpacing: '0.02em', color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: 6 }}>{item.name}</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>{item.tagline}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10, flexShrink: 0 }}>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, color: 'var(--color-accent)', whiteSpace: 'nowrap' }}>{item.warranty}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-accent)', fontSize: 12, fontWeight: 600 }}>
            <FileText size={14} />
            <span>VIEW TDS</span>
            <ChevronDown size={14} style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      {open && (
        <div style={{ padding: '0 24px 28px', borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-primary)' }}>
          {/* Feature Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '20px 0 20px' }}>
            {item.features.map((f, i) => (
              <span key={i} style={{ padding: '5px 13px', background: 'rgba(199,167,76,0.08)', border: '1px solid rgba(199,167,76,0.2)', borderRadius: 4, fontSize: 12, color: 'var(--color-accent)', fontWeight: 500 }}>{f}</span>
            ))}
          </div>

          {/* Spec Table */}
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: 20 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <th style={{ textAlign: 'left', padding: '10px 14px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', width: '35%' }}>Specification</th>
                  <th style={{ textAlign: 'left', padding: '10px 14px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>Detail</th>
                </tr>
              </thead>
              <tbody>
                {item.specs.map((spec, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '12px 14px', fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', verticalAlign: 'top' }}>{spec.label}</td>
                    <td style={{ padding: '12px 14px', fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div style={{ padding: '14px 18px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)', marginBottom: 20 }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.7 }}>{item.note}</p>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to={item.link} className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
              <ExternalLink size={13} />
              {item.linkLabel}
            </Link>
            <Link to="/get-a-quote" style={{ padding: '10px 20px', fontSize: 13, background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 4, color: 'var(--color-text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <Download size={13} />
              Request Full TDS PDF
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductTDSPage() {
  return (
    <>
      <PageMeta
        title="Ceramic Coating TDS — Glossed Out Detailing Melbourne"
        description="Technical data sheets for the ceramic coatings we apply — Gtechniq CSL, Magnum Graphene & Borophene, and Kraken Elite self-healing coatings. Durability, protection and specs."
        canonical="https://glossedoutdetailing.com.au/next-level-protection-tds"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Glossed Out Detailing — Ceramic Coating Technical Data Sheets Melbourne",
            "description": "Technical data for Gtechniq CSL, Magnum Graphene, Magnum Borophene and Kraken Elite ceramic coatings applied in Melbourne.",
            "url": "https://glossedoutdetailing.com.au/next-level-protection-tds",
            "about": { "@id": "https://glossedoutdetailing.com.au/#business" },
            "dateModified": "2026-04-28",
            "inLanguage": "en-AU",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glossedoutdetailing.com.au/" },
              { "@type": "ListItem", "position": 2, "name": "Product TDS", "item": "https://glossedoutdetailing.com.au/next-level-protection-tds" },
            ],
          },
        ]}
      />

      {/* PAGE HEADER — glassmorphism text box over gallery bg */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '80px var(--section-padding-x) 64px', background: '#000' }}>
        {/* Background image */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${bgHeader})`, backgroundSize: 'cover', backgroundPosition: 'center 35%', opacity: 0.6 }} />
        {/* Directional gradient for legibility */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.92) 100%)' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%)' }} />
        {/* Bottom feather — blends into the next section */}
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to bottom, transparent, #000)', zIndex: 1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
          {/* Glassmorphism card */}
          <div style={{
            background: 'rgba(10,10,10,0.55)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: 12,
            padding: 'clamp(28px, 4vw, 52px)',
            boxShadow: '0 12px 48px rgba(0,0,0,0.6)',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent)', marginBottom: 14 }}>
              Glossed Out Detailing — Melbourne
            </p>
            <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', lineHeight: 1.05, marginBottom: 18, color: '#fff' }}>
              Ceramic Coating Technical Data
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 15, lineHeight: 1.75, maxWidth: 640, margin: '0 auto 36px' }}>
              Every coating we apply is a named, manufacturer-backed product — not an unbranded bottle. Below is the technical data for each ceramic system in our range. Tap any product to expand its full data sheet.
            </p>
            {/* Trust pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              {[
                { icon: Shield, label: 'Gtechniq Coatings' },
                { icon: Award, label: 'Magnum Graphene & Borophene' },
                { icon: Award, label: 'Kraken Elite Self-Healing' },
                { icon: Award, label: 'Up to 10-Year Durability' },
              ].map((badge, i) => (
                <span key={i} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  padding: '9px 18px',
                  background: 'linear-gradient(135deg, #c7a74c 0%, #e8cc7a 40%, #9d7f2e 100%)',
                  borderRadius: 6,
                  fontSize: 12,
                  color: '#fff',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  boxShadow: '0 2px 12px rgba(199,167,76,0.45)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.4)',
                }}>
                  <badge.icon size={13} />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div id="tds-products">
        {tdsProducts.map((cat, ci) => (
          <section key={ci} className="section" style={{ position: 'relative', overflow: 'hidden', background: '#000' }}>
            {/* Per-section gallery background */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${cat.bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5 }} />
            {/* 50% dark overlay */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
            {/* Top feather — blends from previous section */}
            <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 140, background: 'linear-gradient(to bottom, #000, transparent)', zIndex: 1 }} />
            {/* Bottom feather — blends into next section */}
            <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 140, background: 'linear-gradient(to bottom, transparent, #000)', zIndex: 1 }} />
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 32, color: '#fff', textAlign: 'center' }}>{cat.category}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {cat.items.map((item, ii) => (
                  <TDSCard key={ii} item={item} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* SECTION 4: WHY TDS MATTERS — with G63 bg + glassmorphism cards */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', background: '#000' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${bgWhyTDS})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5 }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
        {/* Top feather */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 140, background: 'linear-gradient(to bottom, #000, transparent)', zIndex: 1 }} />
        {/* Bottom feather */}
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 140, background: 'linear-gradient(to bottom, transparent, #000)', zIndex: 1 }} />
        <div className="container" style={{ maxWidth: 820, position: 'relative', zIndex: 2 }}>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 32, color: '#fff', textAlign: 'center' }}>Why We Publish Technical Data</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { heading: 'Most detailers won\'t name their coating.', body: 'Plenty of shops apply an unbranded bottle and call it "ceramic". We name every coating we use and show you its data, because you deserve to know exactly what\'s going on your car.' },
              { heading: 'The data sheet backs the durability claim.', body: 'When we say 5, 7 or 10 years, that figure comes from the manufacturer\'s coating — not a number we invented. The TDS is what stands behind it.' },
              { heading: 'Prep is what makes a coating last.', body: 'A coating is only as good as the decontamination and paint correction underneath it. Every ceramic package includes that prep — which is why our finishes hold up.' },
              { heading: 'Real products, real backing.', body: 'Gtechniq, Magnum and Kraken Elite are established coating brands with their own testing and reputations. We apply their products to their spec so the durability holds.' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '24px 24px',
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.12)',
              }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, color: '#fff' }}>{item.heading}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <CTABlock service="Product TDS" defaultService="General Enquiry" />

      {/* RELATED PAGES */}
      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related Pages</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/detailing-packages-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Packages &amp; Pricing</Link>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating</Link>
            <Link to="/warranties" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Warranties</Link>
            <Link to="/gallery" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Gallery</Link>
            <Link to="/about" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>About</Link>
          </div>
        </div>
      </section>
    </>
  );
}
