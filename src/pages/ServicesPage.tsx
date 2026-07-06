import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';
import Accreditations from '../components/Accreditations';

/* ------------------------------------------------------------------ *
 * Package data — sourced from Glossed Out Detailing "Updated Packages
 * and Prices". All prices are "From $" starting points; final quote is
 * confirmed after vehicle inspection.
 * ------------------------------------------------------------------ */

interface Tier {
  name: string;
  price: number;
  blurb: string;
  includes: string[];
  badge?: string;
  featured?: boolean;
}

const detailing: Tier[] = [
  {
    name: 'Essential Detail',
    price: 229,
    blurb: 'A premium reset for vehicles needing a light refresh.',
    includes: [
      'Full exterior hand wash',
      'Wheels & tyres cleaned and dressed',
      'Door jambs cleaned',
      'Interior vacuum (seats, carpets & mats)',
      'Dashboard, console & plastics wiped down',
      'Streak-free glass cleaning',
    ],
  },
  {
    name: 'Premium Full Detail',
    price: 350,
    blurb: 'A comprehensive interior and exterior refresh.',
    badge: 'Most Popular',
    featured: true,
    includes: [
      'Exterior hand wash & deep wheel clean',
      'Paint sealant protection (up to 3 months)',
      'Full interior steam cleaning & shampoo extraction',
      'Leather cleaned & conditioned',
      'Plastics rejuvenated & protected',
      'Door jambs detailed',
    ],
  },
  {
    name: 'Prestige Detail',
    price: 699,
    blurb: 'A complete transformation for vehicles needing serious attention.',
    includes: [
      'Full exterior & interior deep clean',
      'Engine bay detail & dressing',
      'Full decontamination wash (iron removal + clay bar)',
      'Paint enhancement polish (removes ~20% of defects)',
      'Interior steam cleaning & shampoo extraction',
    ],
  },
];

const correction: Tier[] = [
  {
    name: 'Level 1 — Paint Enhancement Polish',
    price: 450,
    blurb: 'Ideal for well-maintained or newer vehicles.',
    includes: [
      'Light machine polish to remove minor swirls',
      'Enhances depth, clarity & gloss',
      '~20–30% defect removal',
    ],
  },
  {
    name: 'Level 2 — One-Step Cut & Polish',
    price: 650,
    blurb: 'Ideal for daily drivers needing a significant refresh.',
    badge: 'Best Value',
    featured: true,
    includes: [
      'Single-stage correction removing moderate defects',
      'Improves gloss while reducing swirls & light scratches',
      '~60–70% defect removal',
    ],
  },
  {
    name: 'Level 3 — Two-Step Cut & Polish',
    price: 900,
    blurb: 'Designed for serious paint restoration.',
    includes: [
      'Multi-stage correction for deeper defects',
      'Heavy swirl, oxidation & scratch removal',
      '~80–90% defect removal',
    ],
  },
];

const ceramicNew: Tier[] = [
  {
    name: 'CSL 5-Year Ceramic Coating',
    price: 999,
    blurb: 'Gtechniq CSL — high gloss, UV protection & hydrophobic finish.',
    includes: ['Decontamination & clay bar', 'Machine polishing', 'Gtechniq CSL ceramic coating', 'Interior detailing', 'Wheel coating + glass coating', 'FREE leather & fabric coating'],
  },
  {
    name: 'Magnum Graphene 7-Year Coating',
    price: 1399,
    blurb: 'Enhanced durability & chemical resistance.',
    includes: ['Decontamination & clay bar', 'Machine polishing', 'Magnum Graphene coating', 'Interior detailing', 'Wheel coating + glass coating', 'FREE leather & fabric coating'],
  },
  {
    name: 'Magnum Borophene 10-Year Coating',
    price: 1599,
    blurb: 'Maximum protection & longevity.',
    includes: ['Decontamination & clay bar', 'Machine polishing', 'Magnum Borophene coating', 'Interior detailing', 'Wheel coating + glass coating', 'FREE leather & fabric coating'],
  },
  {
    name: 'Kraken Elite Plus 7-Year Graphene (Self-Healing)',
    price: 2099,
    blurb: 'Self-heals light imperfections. Superior gloss & chemical resistance.',
    badge: 'Premium',
    featured: true,
    includes: ['Decontamination & clay bar', 'Machine polishing', 'Kraken Elite Plus Graphene coating', 'Interior detailing', 'Wheel coating + glass coating', 'FREE leather & fabric coating'],
  },
  {
    name: 'Kraken Elite Graphene Titanium 10-Year (Self-Healing)',
    price: 2299,
    blurb: 'Ultimate protection, durability & gloss retention.',
    includes: ['Decontamination & clay bar', 'Machine polishing', 'Kraken Elite Graphene Titanium coating', 'Interior detailing', 'Wheel coating + glass coating', 'FREE leather & fabric coating'],
  },
];

const ceramicUsed: Tier[] = [
  {
    name: 'CSL 5-Year Ceramic Coating',
    price: 1299,
    blurb: 'Gtechniq CSL — high gloss, UV protection & hydrophobic finish.',
    includes: ['Decontamination & clay bar', 'One-step paint correction', 'Gtechniq CSL ceramic coating (5-year)', 'High gloss, UV & hydrophobic finish', 'Optional 2-step correction upgrade'],
  },
  {
    name: 'Magnum Graphene 7-Year Coating',
    price: 1699,
    blurb: 'Enhanced durability & chemical resistance.',
    includes: ['Decontamination & clay bar', 'One-step paint correction', 'Magnum Graphene ceramic coating', 'Enhanced durability & chemical resistance', 'Optional 2-step correction upgrade'],
  },
  {
    name: 'Magnum Borophene 10-Year Coating',
    price: 1999,
    blurb: 'Maximum protection & longevity.',
    includes: ['Decontamination & clay bar', 'One-step paint correction', 'Magnum Borophene ceramic coating', 'FREE wheel face ceramic coating', 'FREE glass coating', 'Optional 2-step correction upgrade'],
  },
  {
    name: 'Kraken Elite Plus 7-Year Graphene (Self-Healing)',
    price: 2499,
    blurb: 'Self-heals light surface imperfections.',
    badge: 'Premium',
    featured: true,
    includes: ['Decontamination & clay bar', 'One-step paint correction', 'Kraken Elite Plus Graphene coating', 'Superior gloss & chemical resistance', 'FREE wheel face + glass coating', 'Optional 2-step correction upgrade'],
  },
  {
    name: 'Kraken Elite Graphene Titanium 10-Year (Self-Healing)',
    price: 2699,
    blurb: 'Ultimate protection, durability & gloss retention.',
    includes: ['Decontamination & clay bar', 'One-step paint correction', 'Kraken Elite Graphene Titanium coating', 'Self-heals light surface imperfections', 'FREE wheel face + glass coating', 'Optional 2-step correction upgrade'],
  },
];

function PriceCard({ tier }: { tier: Tier }) {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '28px 26px',
        position: 'relative',
        ...(tier.featured
          ? { border: '1.5px solid var(--brand-gold)', boxShadow: '0 12px 40px rgba(201,162,39,0.18)' }
          : {}),
      }}
    >
      {tier.badge && (
        <span
          style={{
            position: 'absolute',
            top: -12,
            left: 26,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '5px 14px',
            background: 'linear-gradient(135deg, #E4C766 0%, #C9A227 50%, #A17E12 100%)',
            color: '#0A2B1E',
            borderRadius: 100,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            boxShadow: '0 4px 14px rgba(201,162,39,0.4)',
          }}
        >
          <Star size={12} fill="#0A2B1E" /> {tier.badge}
        </span>
      )}
      <h3
        className="font-display"
        style={{ fontSize: 'clamp(20px, 2.4vw, 26px)', letterSpacing: '0.01em', color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: 8, marginTop: tier.badge ? 8 : 0 }}
      >
        {tier.name}
      </h3>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(201,162,39,0.35)', background: 'rgba(201,162,39,0.08)' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-gold-dk)' }}>Tailored to your car</span>
      </div>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{tier.blurb}</p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 26, flex: 1 }}>
        {tier.includes.map((inc, i) => {
          const free = inc.toUpperCase().includes('FREE');
          return (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              <Check size={16} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2, color: free ? 'var(--brand-gold)' : 'var(--brand-emerald)' }} />
              <span style={free ? { color: 'var(--brand-gold-dk)', fontWeight: 600 } : undefined}>{inc}</span>
            </li>
          );
        })}
      </ul>
      <Link
        to="/get-a-quote"
        className={tier.featured ? 'btn-primary' : 'btn-ghost'}
        style={{ justifyContent: 'center', width: '100%' }}
      >
        {tier.featured && <span className="btn-slide" />}
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Enquire Now <ArrowRight size={16} /></span>
      </Link>
    </div>
  );
}

function PackageGroup({ id, eyebrow, title, intro, tiers }: { id: string; eyebrow: string; title: string; intro: string; tiers: Tier[] }) {
  return (
    <section id={id} className="section" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brand-gold-dk)', marginBottom: 12 }}>{eyebrow}</p>
        <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', color: 'var(--color-text-primary)', marginBottom: 14, lineHeight: 1.05 }}>{title}</h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 44 }}>{intro}</p>
        <div className="tier-grid">
          {tiers.map((t, i) => <PriceCard key={i} tier={t} />)}
        </div>
      </div>
    </section>
  );
}

function shortTierName(name: string) {
  return name
    .replace('Ceramic Coating', '').replace('Coating', '')
    .replace('(Self-Healing)', '').replace('Graphene', '')
    .replace(/\s+/g, ' ').trim();
}

function PackageCarousel({ tiers }: { tiers: Tier[] }) {
  const [i, setI] = useState(0);
  const n = tiers.length;
  const touchX = useRef<number | null>(null);
  const go = (d: number) => setI(v => (v + d + n) % n);
  return (
    <div className="pkg-carousel">
      <div
        className="pkg-carousel__stage"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (dx > 45) go(-1); else if (dx < -45) go(1);
          touchX.current = null;
        }}
      >
        <button className="pkg-carousel__arrow pkg-carousel__arrow--l" onClick={() => go(-1)} aria-label="Previous package"><ChevronLeft size={22} /></button>
        <div className="pkg-carousel__card">
          <div key={i} className="pkg-carousel__anim"><PriceCard tier={tiers[i]} /></div>
        </div>
        <button className="pkg-carousel__arrow pkg-carousel__arrow--r" onClick={() => go(1)} aria-label="Next package"><ChevronRight size={22} /></button>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginTop: 28 }}>
        {tiers.map((t, idx) => (
          <button key={idx} className={`pkg-carousel__chip${idx === i ? ' is-active' : ''}`} onClick={() => setI(idx)}>{shortTierName(t.name)}</button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 18 }}>
        {tiers.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Package ${idx + 1}`} style={{ width: idx === i ? 24 : 8, height: 8, borderRadius: 100, border: 'none', cursor: 'pointer', background: idx === i ? 'var(--brand-gold)' : 'var(--color-border)', transition: 'all 0.25s ease', padding: 0 }} />
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [ceramicMode, setCeramicMode] = useState<'new' | 'used'>('used');
  const ceramicTiers = ceramicMode === 'new' ? ceramicNew : ceramicUsed;

  return (
    <>
      <PageMeta
        title="Detailing Packages & Pricing — Glossed Out Detailing Melbourne"
        description="Premium mobile car detailing, paint correction and ceramic coating in Melbourne — Gtechniq, Magnum & Kraken certified. Every package tailored to your car. Enquire for a quote."
        canonical="https://glossedoutdetailing.com.au/detailing-packages-melbourne"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Detailing Packages & Pricing — Glossed Out Detailing Melbourne',
            description: 'Detailing, paint correction and ceramic coating packages and pricing in Melbourne.',
            url: 'https://glossedoutdetailing.com.au/detailing-packages-melbourne',
            about: { '@id': 'https://glossedoutdetailing.com.au/#business' },
            inLanguage: 'en-AU',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glossedoutdetailing.com.au/' },
              { '@type': 'ListItem', position: 2, name: 'Packages & Pricing', item: 'https://glossedoutdetailing.com.au/detailing-packages-melbourne' },
            ],
          },
        ]}
      />

      {/* HERO */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '160px var(--section-padding-x) 90px',
          background: 'radial-gradient(ellipse 90% 80% at 50% 0%, #0E4636 0%, #0A2B1E 55%, #061c14 100%)',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <p style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--brand-gold-lt)', marginBottom: 18 }}>
            <Sparkles size={14} /> Glossed Out Detailing — Melbourne
          </p>
          <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', color: '#fff', lineHeight: 1.03, marginBottom: 20 }}>
Our Packages
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 17, lineHeight: 1.75, maxWidth: 620, margin: '0 auto 36px' }}>
            A premium mobile detailing experience across detailing, paint correction and ceramic coating. Every package is tailored to your car — enquire and we'll put together a personalised quote.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'Detailing', href: '#detailing' },
              { label: 'Paint Correction', href: '#correction' },
              { label: 'Ceramic Coating', href: '#ceramic' },
            ].map(a => (
              <a
                key={a.href}
                href={a.href}
                style={{
                  padding: '10px 22px',
                  borderRadius: 100,
                  border: '1px solid rgba(228,199,102,0.35)',
                  color: 'var(--brand-gold-lt)',
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                {a.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILING */}
      <PackageGroup
        id="detailing"
        eyebrow="Signature Detailing"
        title="Detailing Packages"
        intro="From a light maintenance reset to a full showroom transformation — hand-washed, steam-cleaned and finished by hand, never rushed."
        tiers={detailing}
      />

      {/* PAINT CORRECTION */}
      <section style={{ height: 1, background: 'var(--color-border)' }} />
      <PackageGroup
        id="correction"
        eyebrow="Machine Polishing"
        title="Paint Correction Packages"
        intro="Swirls, oxidation and scratches removed with the right level of machine correction for your paint — from a gloss-boosting enhancement to a full multi-stage restoration."
        tiers={correction}
      />

      {/* CERAMIC COATING (toggle) */}
      <section id="ceramic" className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brand-gold-dk)', marginBottom: 12 }}>Gtechniq · Magnum · Kraken Elite</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', color: 'var(--color-text-primary)', marginBottom: 14, lineHeight: 1.05 }}>Ceramic Coating Packages</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 28 }}>
            Long-term gloss, UV protection and hydrophobic self-cleaning, backed by up to a 10-year coating. Choose your vehicle type — used cars include a full one-step paint correction first, so the process differs.
          </p>

          {/* Toggle */}
          <div style={{ display: 'inline-flex', padding: 4, background: 'var(--color-bg-tertiary)', borderRadius: 100, marginBottom: 44, border: '1px solid var(--color-border)' }}>
            {(['used', 'new'] as const).map(mode => (
              <button
                key={mode}
                onClick={() => setCeramicMode(mode)}
                style={{
                  padding: '10px 24px',
                  borderRadius: 100,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 600,
                  width: 'auto',
                  transition: 'all 200ms ease',
                  background: ceramicMode === mode ? 'var(--brand-green)' : 'transparent',
                  color: ceramicMode === mode ? '#fff' : 'var(--color-text-secondary)',
                }}
              >
                {mode === 'used' ? 'Used / Existing Car' : 'New / Near-New Car'}
              </button>
            ))}
          </div>

          <PackageCarousel key={ceramicMode} tiers={ceramicTiers} />
          <p style={{ color: 'var(--color-text-muted)', fontSize: 13, lineHeight: 1.7, marginTop: 28 }}>
            {ceramicMode === 'used'
              ? 'All used-car packages include decontamination and a one-step paint correction. A two-step correction upgrade is available on request.'
              : 'New-car packages are designed for brand-new or near-new vehicles and include interior detailing, wheel + glass coating and a complimentary leather & fabric coating.'}
          </p>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section style={{ background: 'var(--color-bg-secondary)', padding: '0 var(--section-padding-x) 20px' }}>
        <div className="container">
          <div style={{ padding: '20px 24px', background: 'rgba(27,107,74,0.06)', border: '1px solid var(--color-border)', borderRadius: 12 }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--color-text-primary)' }}>Every detail is tailored to your car.</strong> Send a few photos through the enquiry form and we'll put together a personalised quote — no obligation, no pressure. Premium mobile service, brought to you.
            </p>
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <Accreditations heading="The Coatings We're Certified In" subtext="Every ceramic package uses a named, professional-grade coating — Magnum, Kraken, Gtechniq or CarPro — applied to manufacturer spec." />

      {/* CTA */}
      <CTABlock service="Packages & Pricing" defaultService="Ceramic Coating" />
    </>
  );
}
