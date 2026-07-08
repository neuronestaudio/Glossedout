import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, ShieldCheck, Minus, ChevronLeft, ChevronRight } from 'lucide-react';

/* ------------------------------------------------------------------ *
 * Shared package data + carousel + warranty table. Used by the combined
 * packages page and the three dedicated service pages so they stay in sync.
 * Prices are "From $" starting points; final quote confirmed after inspection.
 * ------------------------------------------------------------------ */

export interface Tier {
  name: string;
  price: number;
  blurb: string;
  includes: string[];
  badge?: string;
  featured?: boolean;
}

export const detailing: Tier[] = [
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

export const correction: Tier[] = [
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

export const ceramicUsed: Tier[] = [
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

export function PriceCard({ tier }: { tier: Tier }) {
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

function shortTierName(name: string) {
  // "Level 1 — Paint Enhancement Polish" -> "Level 1"
  if (name.includes(' — ')) return name.split(' — ')[0].trim();
  return name
    .replace('Ceramic Coating', '').replace('Coating', '')
    .replace('(Self-Healing)', '').replace('Graphene', '')
    .replace(/\s+/g, ' ').trim();
}

export function PackageCarousel({ tiers }: { tiers: Tier[] }) {
  const [i, setI] = useState(0);
  const n = tiers.length;
  const touchX = useRef<number | null>(null);
  const go = (d: number) => setI(v => (v + d + n) % n);
  return (
    <div className="pkg-carousel">
      {/* Selectable options — sit directly under the title, above the carousel */}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 34 }}>
        {tiers.map((t, idx) => (
          <button key={idx} className={`pkg-carousel__chip${idx === i ? ' is-active' : ''}`} onClick={() => setI(idx)}>{shortTierName(t.name)}</button>
        ))}
      </div>
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
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 22 }}>
        {tiers.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Package ${idx + 1}`} style={{ width: idx === i ? 24 : 8, height: 8, borderRadius: 100, border: 'none', cursor: 'pointer', background: idx === i ? 'var(--brand-gold)' : 'var(--color-border)', transition: 'all 0.25s ease', padding: 0 }} />
        ))}
      </div>
    </div>
  );
}

/* Coating products & their manufacturer-backed warranties */
interface Warranty {
  product: string;
  brand: string;
  tech: string;
  years: number;
  selfHeal: boolean;
  note: string;
}

const warranties: Warranty[] = [
  { product: 'Gtechniq CSL', brand: 'Gtechniq', tech: 'Ceramic', years: 5, selfHeal: false, note: 'High gloss, UV protection & hydrophobic finish' },
  { product: 'Magnum Graphene', brand: 'Magnum', tech: 'Graphene', years: 7, selfHeal: false, note: 'Enhanced durability & chemical resistance' },
  { product: 'Magnum Borophene', brand: 'Magnum', tech: 'Borophene', years: 10, selfHeal: false, note: 'Maximum protection & longevity' },
  { product: 'Kraken Elite Plus Graphene', brand: 'Kraken Elite', tech: 'Graphene', years: 7, selfHeal: true, note: 'Self-heals light imperfections; superior gloss & chemical resistance' },
  { product: 'Kraken Elite Graphene Titanium', brand: 'Kraken Elite', tech: 'Graphene Titanium', years: 10, selfHeal: true, note: 'Ultimate protection, durability & gloss retention' },
];

export function WarrantyTable() {
  return (
    <section id="warranties" className="section pkg-canvas">
      <div className="container">
        <p style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brand-gold-dk)', marginBottom: 12 }}>
          <ShieldCheck size={15} /> Coating Warranties
        </p>
        <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', color: 'var(--color-text-primary)', marginBottom: 14, lineHeight: 1.05 }}>Products &amp; Warranties</h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.7, maxWidth: 660, marginBottom: 40 }}>
          Every ceramic package uses a named, professional-grade coating with a manufacturer-backed warranty — never a generic bottle. Here's exactly what each product covers and how long it's protected for.
        </p>

        <div className="warranty-table-wrap">
          <table className="warranty-table">
            <thead>
              <tr>
                <th>Coating</th>
                <th>Technology</th>
                <th>Warranty</th>
                <th style={{ textAlign: 'center' }}>Self-Healing</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              {warranties.map(w => (
                <tr key={w.product}>
                  <td>
                    <span className="wt-product">{w.product}</span>
                    <span className="wt-brand">{w.brand}</span>
                  </td>
                  <td>{w.tech}</td>
                  <td><span className="wt-years">{w.years}-Year</span></td>
                  <td style={{ textAlign: 'center' }}>
                    {w.selfHeal
                      ? <Check size={18} strokeWidth={2.5} style={{ color: 'var(--brand-emerald)' }} />
                      : <Minus size={16} style={{ color: 'var(--color-text-muted)' }} />}
                  </td>
                  <td>{w.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ color: 'var(--color-text-muted)', fontSize: 13, lineHeight: 1.7, marginTop: 20 }}>
          Warranty terms are set and backed by the coating manufacturer (Gtechniq, Magnum, Kraken) and are subject to their care &amp; maintenance requirements. We'll walk you through the right coating for your car and how to keep it covered.
        </p>
      </div>
    </section>
  );
}
