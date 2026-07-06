import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Thermometer, Monitor, EyeOff, Shield, ChevronDown, Check, Star, Phone, ArrowRight } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';

/* ── site DNA colour tokens (from index.css :root) ── */
const C = {
  dark: '#0A2B1E',
  darkCard: 'rgba(255,255,255,0.04)',
  darkBorder: 'rgba(255,255,255,0.08)',
  darkText: 'rgba(255,255,255,0.55)',
  darkTextBright: 'rgba(255,255,255,0.88)',
  accent: '#0C3B2A',
  accentBright: '#0D1117',
  accentDim: 'rgba(12, 59, 42,0.12)',
  white: '#FFFFFF',
  bgPrimary: '#F8F9FB',
  bgSecondary: '#FFFFFF',
  bgTertiary: '#EEF0F5',
  border: 'rgba(0,0,0,0.09)',
  borderSubtle: 'rgba(0,0,0,0.05)',
  borderBright: 'rgba(12, 59, 42,0.20)',
  textPrimary: '#0D1117',
  textSecondary: '#4A5368',
  textMuted: '#8A94A8',
  surface: 'rgba(255,255,255,0.80)',
  glassBlur: 'blur(20px) saturate(160%)',
};

/* ── use-case data (problem-first architecture) ── */
const useCases = [
  {
    id: 'heat',
    icon: Thermometer,
    problem: 'Too much heat',
    headline: 'Building overheating? HVAC running overtime?',
    desc: 'Solar heat through glass accounts for up to 28% of cooling costs. 3M Prestige PR20 rejects 62% of total solar energy — measurably reducing peak HVAC load without darkening the view.',
    film: 'Prestige PR20',
    stats: [
      { label: 'Solar Energy Rejected', value: '62%' },
      { label: 'UV Blocked', value: '99.9%' },
      { label: 'Warranty', value: '15 yr' },
    ],
  },
  {
    id: 'glare',
    icon: Monitor,
    problem: 'Screen glare',
    headline: 'Glare making screens unreadable?',
    desc: 'Ceramic Architectural CA35 cuts glare by 58% while maintaining natural daylight. Employees and customers get comfortable visibility without blinds or blackout.',
    film: 'Ceramic CA35',
    stats: [
      { label: 'Glare Reduced', value: '58%' },
      { label: 'Light Transmitted', value: '37%' },
      { label: 'UV Blocked', value: '99%' },
    ],
  },
  {
    id: 'privacy',
    icon: EyeOff,
    problem: 'Need privacy',
    headline: 'Open plan feels exposed? Need partition privacy?',
    desc: 'CRYSTAL Glass Finishes replicate sandblasted or etched glass at a fraction of the cost. Frosted and dusted options for conference rooms, partitions, and shopfronts — light in, visibility out.',
    film: 'CRYSTAL Frosted',
    stats: [
      { label: 'Light Transmitted', value: '72%' },
      { label: 'Interior Warranty', value: '15 yr' },
      { label: 'Custom Die-Cut', value: 'Yes' },
    ],
  },
  {
    id: 'security',
    icon: Shield,
    problem: 'Smash & grab risk',
    headline: 'Shopfront vulnerable to break-ins?',
    desc: '3M Safety & Security film holds shattered glass in place — slowing forced entry and reducing injury risk from flying shards. Combined with IPA sealant for maximum retention in the frame.',
    film: 'Safety & Security',
    stats: [
      { label: 'Glass Retention', value: 'Yes' },
      { label: 'Blast Tested', value: 'ASTM F1642' },
      { label: 'UV Blocked', value: '99%' },
    ],
  },
];

/* ── film series for the expandable browser ── */
const filmSeries = [
  {
    name: 'Prestige Series',
    tag: 'Most Popular',
    desc: 'Premium non-metallic, 220+ nano-layers. Zero signal interference.',
    films: [
      { name: 'PR20', vlt: '21%', uv: '99.9%', tser: '62%', intRef: '5%' },
      { name: 'PR40', vlt: '39%', uv: '99.9%', tser: '60%', intRef: '7%' },
      { name: 'PR50', vlt: '50%', uv: '99.9%', tser: '56%', intRef: '7%' },
      { name: 'PR60', vlt: '60%', uv: '99.9%', tser: '53%', intRef: '8%' },
      { name: 'PR70', vlt: '69%', uv: '99.9%', tser: '50%', intRef: '9%' },
    ],
    warranty: '15 years',
  },
  {
    name: 'Ceramic Architectural',
    desc: 'High-clarity ceramic particles. Strong glare and heat control.',
    films: [
      { name: 'CA35', vlt: '37%', uv: '99%', tser: '55%', intRef: '6%' },
      { name: 'CA60', vlt: '62%', uv: '99%', tser: '48%', intRef: '7%' },
    ],
    warranty: '3M limited',
  },
  {
    name: 'Night Vision',
    desc: 'Low interior reflectivity — clear views out at night.',
    films: [
      { name: 'NV15', vlt: '15%', uv: '99%', tser: '—', intRef: '11%' },
      { name: 'NV25', vlt: '24%', uv: '99%', tser: '—', intRef: '7%' },
      { name: 'NV35', vlt: '36%', uv: '99%', tser: '—', intRef: '7%' },
    ],
    warranty: '12 years',
  },
  {
    name: 'Sun Control',
    desc: 'Metallized films for maximum heat rejection at scale.',
    films: [
      { name: 'P18 Silver', vlt: '17%', uv: '99%', tser: '—', intRef: '58%' },
      { name: 'Neutral 35', vlt: '36%', uv: '99%', tser: '—', intRef: '18%' },
      { name: 'Neutral 50', vlt: '52%', uv: '98%', tser: '—', intRef: '11%' },
      { name: 'Neutral 70', vlt: '69%', uv: '98%', tser: '—', intRef: '8%' },
    ],
    warranty: '12 years',
  },
  {
    name: 'CRYSTAL Glass Finishes',
    desc: 'Decorative dusted & frosted for privacy and branding.',
    films: [
      { name: 'Dusted Crystal', vlt: '85%', uv: '73% blocked', tser: '—', intRef: '8%' },
      { name: 'Frosted Crystal', vlt: '72%', uv: '80% blocked', tser: '—', intRef: '12%' },
    ],
    warranty: '15 years (interior)',
  },
];

const faqs = [
  { q: 'What is the difference between 3M Prestige and Ceramic Architectural?', a: 'Prestige uses 220+ nano-layers with no metal — delivering 99.9% UV rejection and zero interference with mobile or Wi-Fi signals. Ceramic Architectural uses ceramic particle technology for strong heat rejection and glare control at a different price point. Both are excellent commercial films — the right choice depends on your building\'s priorities.' },
  { q: 'Does 3M Prestige film interfere with mobile or Wi-Fi signals?', a: 'No. Prestige contains no metals. It was engineered specifically to avoid signal interference — making it the preferred choice for offices, medical facilities, and any workplace relying on wireless connectivity.' },
  { q: 'What is the Night Vision series?', a: 'NV films have very low interior reflectivity — as low as 7%. This means occupants can see out clearly at night without the mirror effect common with traditional reflective films. Popular for residential high-rises and hospitality buildings.' },
  { q: 'How much heat does 3M window film reject?', a: 'It depends on the series. Prestige PR20 rejects 62% of total solar energy at normal incidence. Ceramic CA35 rejects 55%. We recommend the right film for each zone based on glazing type, orientation, and your performance goals.' },
  { q: 'Can 3M film be applied to double-pane glass?', a: 'Yes — most 3M commercial films are rated for both single and double pane glass. We assess glazing type during the site survey and only recommend compatible film-to-glass combinations.' },
  { q: 'What warranty does 3M provide on commercial installations?', a: 'Prestige and CRYSTAL carry a 15-year manufacturer warranty. Night Vision and Sun Control carry 12 years. All warranties are backed by 3M when installed by an Authorised Dealer — not just the installer. We provide full documentation at handover.' },
  { q: 'What are CRYSTAL Glass Finishes?', a: 'Decorative films that replicate the look of sandblasted or etched glass. Used for privacy partitions, office branding, conference rooms, and shopfront design. Available in dusted and frosted finishes with a 15-year interior warranty. Can be custom die-cut or inkjet printed.' },
  { q: 'How long does installation take for a commercial building?', a: 'A small office of 10 windows is typically 1–2 days. Larger fitouts are staged per floor or zone to minimise disruption. Out-of-hours and weekend installation is available. We provide a project timeline at quoting stage.' },
];

const css = `
  .tmc-page * { box-sizing: border-box; }
  .tmc-page { --tmc-ease: cubic-bezier(0.4, 0, 0.2, 1); }

  @media (max-width: 1024px) {
    .tmc-hero-grid { grid-template-columns: 1fr !important; }
    .tmc-usecase-grid { grid-template-columns: 1fr 1fr !important; }
    .tmc-stats-row { flex-direction: column !important; gap: 24px !important; }
    .tmc-process-grid { grid-template-columns: 1fr 1fr !important; }
    .tmc-social-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .tmc-include-grid { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 640px) {
    .tmc-usecase-grid { grid-template-columns: 1fr !important; }
    .tmc-process-grid { grid-template-columns: 1fr !important; }
    .tmc-social-grid { grid-template-columns: 1fr 1fr !important; }
    .tmc-hero-section { min-height: auto !important; padding-top: 120px !important; padding-bottom: 60px !important; }
    .tmc-hero-h1 { font-size: clamp(36px, 10vw, 56px) !important; }
    .tmc-stat-value { font-size: clamp(40px, 12vw, 64px) !important; }
    .tmc-section-pad { padding-left: 20px !important; padding-right: 20px !important; }
    .tmc-mid-cta { flex-direction: column !important; text-align: center !important; }
    .tmc-mid-cta > div:last-child { width: 100% !important; }
    .tmc-mid-cta a { width: 100% !important; justify-content: center !important; }
  }

  .tmc-film-card { transition: transform 0.25s var(--tmc-ease), box-shadow 0.25s var(--tmc-ease); }
  .tmc-film-card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.06); }
  .tmc-series-btn { transition: background 0.2s var(--tmc-ease); }
  .tmc-series-btn:hover { background: ${C.accentDim} !important; }
  .tmc-uc-card { transition: border-color 0.2s var(--tmc-ease), transform 0.2s var(--tmc-ease); cursor: pointer; }
  .tmc-uc-card:hover { border-color: ${C.accent} !important; transform: translateY(-3px); }
`;


export default function ThreeMCommercialWindowFilmPage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [activeUseCase, setActiveUseCase] = useState<string | null>(null);
  const [openSeries, setOpenSeries] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = heroContentRef.current?.querySelectorAll('.ha');
      if (els) gsap.from(els, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, delay: 0.2 });
    });
    return () => ctx.revert();
  }, []);

  const activeCase = useCases.find(u => u.id === activeUseCase);

  return (
    <>
      <style>{css}</style>
      <PageMeta
        title="3M Commercial Window Film Brisbane | Full Range"
        description="Complete 3M commercial window film range — Prestige, Ceramic, Night Vision, Sun Control, CRYSTAL. 3M Authorised installer in Brisbane."
        canonical="https://glossedoutdetailing.com.au/3m-commercial-window-film-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        "name": "3M Commercial Window Film Brisbane",
        "provider": { "@type": "LocalBusiness", "name": "Glossed Out Detailing", "telephone": "0481327250", "address": { "@type": "PostalAddress", "streetAddress": "Goodrich Ct", "addressLocality": "Craigieburn", "addressRegion": "VIC", "postalCode": "3064" }},
        "areaServed": "Brisbane",
        "description": "3M Authorised commercial window film installer in Brisbane. Full range: Prestige, Ceramic Architectural, Night Vision, Sun Control, and CRYSTAL Glass Finishes.",
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}} />

      <div className="tmc-page">

        {/* ═══ 01 HERO — dark services-wave style, problem-first ═══ */}
        <section ref={heroRef} className="tmc-hero-section" style={{ background: C.dark, minHeight: '100dvh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-30%', right: '-15%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(12, 59, 42,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="tmc-section-pad" ref={heroContentRef} style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '0 clamp(20px, 6vw, 80px)' }}>
            <div className="tmc-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 80, alignItems: 'center' }}>
              <div>
                <h1 className="ha tmc-hero-h1" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 7vw, 80px)', color: C.white, lineHeight: 0.95, letterSpacing: '-0.01em', margin: 0 }}>
                  Your building has<br />a problem.<br />
                  <span style={{ color: C.textMuted }}>We have the film.</span>
                </h1>
                <p className="ha" style={{ color: C.darkText, fontSize: 17, lineHeight: 1.65, marginTop: 24, maxWidth: 480 }}>
                  Heat. Glare. Privacy. Security. Tell us the problem — we'll specify the right 3M film, install it around your schedule, and back it with up to 15 years of manufacturer warranty.
                </p>
                <div className="ha" style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                  <Link to="/get-a-quote" className="btn-primary" style={{ borderRadius: 8 }}>
                    <span className="btn-slide" /><span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Get a Free Quote <ArrowRight size={16} /></span>
                  </Link>
                  <a href="tel:0481327250" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 24px', borderRadius: 8, background: 'transparent', color: C.darkTextBright, fontWeight: 500, fontSize: 15, textDecoration: 'none', border: `1px solid ${C.darkBorder}` }}>
                    <Phone size={15} /> 0481 327 250
                  </a>
                </div>
              </div>
              {/* hero right — key stats */}
              <div className="ha" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { value: '62%', label: 'solar energy rejected', sub: '3M Prestige PR20' },
                  { value: '99.9%', label: 'UV blocked', sub: 'Prestige Series' },
                  { value: '15yr', label: 'manufacturer warranty', sub: 'Backed by 3M' },
                ].map((s, i) => (
                  <div key={i} style={{ padding: '20px 24px', borderRadius: 12, background: C.darkCard, border: `1px solid ${C.darkBorder}`, backdropFilter: C.glassBlur }}>
                    <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(32px, 5vw, 44px)', color: C.white, lineHeight: 1, letterSpacing: '-0.02em' }}>{s.value}</div>
                    <div style={{ fontSize: 13, color: C.darkTextBright, marginTop: 4 }}>{s.label}</div>
                    <div style={{ fontSize: 11, color: C.darkText, marginTop: 2 }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 02 SOCIAL PROOF BAR ═══ */}
        <section style={{ background: C.bgSecondary, borderBottom: `1px solid ${C.border}`, padding: '28px clamp(20px, 6vw, 80px)' }}>
          <div className="tmc-social-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, alignItems: 'center' }}>
            {[
              { big: '4.9', label: 'Google Rating', sub: '50+ reviews' },
              { big: '3M', label: 'Authorised Dealer', sub: 'Full commercial range' },
              { big: '15yr', label: 'Max Warranty', sub: 'Manufacturer-backed' },
              { big: '500+', label: 'Commercial installs', sub: 'Brisbane & surrounds' },
            ].map((t, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, color: C.textPrimary, lineHeight: 1 }}>{t.big}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.textPrimary, marginTop: 4 }}>{t.label}</div>
                <div style={{ fontSize: 11, color: C.textMuted }}>{t.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 03 PROBLEM-FIRST USE CASES ═══ */}
        <section className="tmc-section-pad" style={{ background: C.bgPrimary, padding: 'clamp(60px, 8vw, 120px) clamp(20px, 6vw, 80px)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ maxWidth: 560, marginBottom: 48 }}>
              <p style={{ fontSize: 'var(--size-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.textMuted, marginBottom: 12 }}>What's the problem?</p>
              <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'var(--size-h2)', color: C.textPrimary, lineHeight: 1, margin: 0 }}>Start with your problem. We'll find the film.</h2>
            </div>

            <div className="tmc-usecase-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
              {useCases.map(uc => {
                const Icon = uc.icon;
                const isActive = activeUseCase === uc.id;
                return (
                  <div
                    key={uc.id}
                    className="tmc-uc-card"
                    onClick={() => setActiveUseCase(isActive ? null : uc.id)}
                    style={{
                      padding: 24, borderRadius: 16,
                      border: `2px solid ${isActive ? C.accent : C.border}`,
                      background: isActive ? C.accentDim : C.bgSecondary,
                      backdropFilter: C.glassBlur,
                    }}
                  >
                    <Icon size={22} color={isActive ? C.accent : C.textSecondary} strokeWidth={1.5} />
                    <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 22, color: C.textPrimary, marginTop: 12, letterSpacing: '0.01em' }}>{uc.problem}</div>
                    <p style={{ fontSize: 13, color: C.textSecondary, marginTop: 6, lineHeight: 1.5 }}>{uc.headline}</p>
                  </div>
                );
              })}
            </div>

            {activeCase && (
              <div style={{ marginTop: 24, padding: 'clamp(24px, 4vw, 40px)', borderRadius: 16, background: C.surface, backdropFilter: C.glassBlur, border: `1px solid ${C.border}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.textMuted }}>Recommended</span>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 100, background: C.accent, color: C.white }}>{activeCase.film}</span>
                </div>
                <p style={{ fontSize: 15, color: C.textSecondary, lineHeight: 1.7, maxWidth: 640, marginBottom: 24 }}>{activeCase.desc}</p>
                <div className="tmc-stats-row" style={{ display: 'flex', gap: 40 }}>
                  {activeCase.stats.map((s, i) => (
                    <div key={i}>
                      <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 32, color: C.textPrimary, lineHeight: 1 }}>{s.value}</div>
                      <div style={{ fontSize: 12, color: C.textMuted, marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                <Link to="/get-a-quote" className="btn-primary" style={{ display: 'inline-flex', marginTop: 28, borderRadius: 8 }}>
                  <span className="btn-slide" /><span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Get a Quote for {activeCase.film} <ArrowRight size={14} /></span>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ═══ 04 STAT INTERRUPT (dark pattern break) ═══ */}
        <section style={{ background: C.dark, padding: 'clamp(48px, 6vw, 80px) clamp(20px, 6vw, 80px)' }}>
          <div className="tmc-stats-row" style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-around', gap: 40, textAlign: 'center' }}>
            {[
              { value: '28%', label: 'of cooling costs caused by solar heat through glass' },
              { value: '9°F', label: 'indoor temperature reduction in direct sunlight' },
              { value: '81%', label: 'of sun\'s heat rejected by 3M films' },
            ].map((s, i) => (
              <div key={i}>
                <div className="tmc-stat-value" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 8vw, 72px)', color: C.white, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: C.darkText, marginTop: 8, maxWidth: 200, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 05 MID-PAGE CTA ═══ */}
        <section className="tmc-section-pad" style={{ background: C.accent, padding: 'clamp(36px, 5vw, 56px) clamp(20px, 6vw, 80px)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }} className="tmc-mid-cta">
            <div>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(24px, 4vw, 36px)', color: C.white, lineHeight: 1 }}>Not sure which film? We'll specify it for you.</div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>Free site survey. No obligation. Response within 2 hours.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
              <Link to="/get-a-quote" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 100, background: C.white, color: C.accent, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                Request a Quote <ArrowRight size={14} />
              </Link>
              <a href="tel:0481327250" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 20px', borderRadius: 100, background: 'rgba(255,255,255,0.1)', color: C.white, fontWeight: 500, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Phone size={14} /> Call Now
              </a>
            </div>
          </div>
        </section>

        {/* ═══ 06 FILM BROWSER (mobile-native accordion cards) ═══ */}
        <section className="tmc-section-pad" style={{ background: C.bgSecondary, padding: 'clamp(60px, 8vw, 120px) clamp(20px, 6vw, 80px)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ maxWidth: 560, marginBottom: 48 }}>
              <p style={{ fontSize: 'var(--size-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.textMuted, marginBottom: 12 }}>Full Product Range</p>
              <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'var(--size-h2)', color: C.textPrimary, lineHeight: 1, margin: 0 }}>Explore Every 3M Film Series</h2>
              <p style={{ fontSize: 14, color: C.textSecondary, marginTop: 12, lineHeight: 1.6 }}>All specifications from 3M Technical Data Sheets. Measured on 1/4" (6mm) clear glass.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {filmSeries.map((series, si) => {
                const isOpen = openSeries === si;
                return (
                  <div key={si} style={{ borderRadius: 16, border: `1px solid ${isOpen ? C.borderBright : C.border}`, background: C.bgSecondary, overflow: 'hidden', transition: 'border-color 0.2s' }}>
                    <button
                      className="tmc-series-btn"
                      onClick={() => setOpenSeries(isOpen ? null : si)}
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', background: 'none', border: 'none', cursor: 'pointer', gap: 16 }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
                        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 20, color: C.textPrimary, letterSpacing: '0.01em', whiteSpace: 'nowrap' }}>{series.name}</span>
                        {series.tag && <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: C.accent, color: C.white, whiteSpace: 'nowrap' }}>{series.tag}</span>}
                      </div>
                      <ChevronDown size={18} color={C.textMuted} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 24px 24px' }}>
                        <p style={{ fontSize: 13, color: C.textSecondary, marginBottom: 4, lineHeight: 1.5 }}>{series.desc}</p>
                        <p style={{ fontSize: 12, color: C.textMuted, marginBottom: 20 }}>Warranty: {series.warranty}</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 10 }}>
                          {series.films.map((f, fi) => (
                            <div key={fi} className="tmc-film-card card" style={{ padding: '16px 20px' }}>
                              <div style={{ fontWeight: 700, fontSize: 15, color: C.textPrimary, marginBottom: 10 }}>{f.name}</div>
                              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px' }}>
                                {[
                                  { l: 'VLT', v: f.vlt },
                                  { l: 'UV', v: f.uv },
                                  { l: 'TSER', v: f.tser },
                                  { l: 'Int. Refl.', v: f.intRef },
                                ].map((spec, si2) => (
                                  <div key={si2}>
                                    <span style={{ fontSize: 10, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{spec.l}</span>
                                    <span style={{ display: 'block', fontSize: 14, fontWeight: 600, color: spec.v === '—' ? C.textMuted : C.textPrimary }}>{spec.v}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ 07 PROCESS ═══ */}
        <section className="tmc-section-pad" style={{ background: C.bgPrimary, padding: 'clamp(60px, 8vw, 120px) clamp(20px, 6vw, 80px)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <p style={{ fontSize: 'var(--size-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.textMuted, marginBottom: 12 }}>How It Works</p>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'var(--size-h2)', color: C.textPrimary, lineHeight: 1, margin: 0, marginBottom: 48 }}>Four Steps. Zero Disruption.</h2>
            <div className="tmc-process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
              {[
                { n: '01', title: 'Site Survey', desc: 'We assess glazing, orientation, and access. Each zone gets a tailored 3M film recommendation.' },
                { n: '02', title: 'Specification', desc: 'Written quote with 3M product codes, performance data, timeline, and warranty details per zone.' },
                { n: '03', title: 'Installation', desc: 'Staged zone-by-zone. Out-of-hours and weekend scheduling available. Minimal disruption.' },
                { n: '04', title: 'Handover', desc: 'Every window QC\'d. 3M warranty docs and project completion record issued.' },
              ].map(s => (
                <div key={s.n} className="card" style={{ padding: 28 }}>
                  <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 48, color: C.accent, opacity: 0.15, lineHeight: 1, display: 'block', marginBottom: 12 }}>{s.n}</span>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 22, color: C.textPrimary, marginBottom: 8, letterSpacing: '0.01em' }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 08 WHAT'S INCLUDED + SOCIAL PROOF ═══ */}
        <section className="tmc-section-pad" style={{ background: C.bgSecondary, padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)' }}>
          <div className="tmc-include-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)' }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.textMuted, marginBottom: 12 }}>Every Install Includes</p>
              <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'var(--size-h2)', color: C.textPrimary, lineHeight: 1, margin: 0, marginBottom: 28 }}>What's Included</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Full 3M commercial film range access', 'Pre-install glazing survey & site assessment', 'Zone-by-zone film specification document', 'Surface preparation & glazing clean', 'Precision-cut film per panel', 'Post-install QC — every window inspected', 'Out-of-hours & weekend install available', '3M manufacturer warranty documentation', 'Project completion record'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Check size={15} color={C.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontSize: 'var(--size-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.textMuted, marginBottom: 0 }}>Client Feedback</p>
              {[
                { name: 'Michael T.', role: 'Building Manager, Fortitude Valley', text: 'Glossed Out did our entire 12-storey commercial fitout with 3M Prestige. Staged floor by floor over weekends — zero disruption to tenants.' },
                { name: 'Sarah K.', role: 'Practice Manager, Southbank', text: 'We needed privacy film for consulting rooms without losing light. CRYSTAL frosted was perfect. Professional install, 15-year warranty.' },
              ].map((r, i) => (
                <div key={i} className="card" style={{ padding: 24 }}>
                  <div style={{ display: 'flex', gap: 4, marginBottom: 10 }}>
                    {[...Array(5)].map((_, si2) => <Star key={si2} size={14} fill="#FBBF24" color="#FBBF24" />)}
                  </div>
                  <p style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.6, fontStyle: 'italic', marginBottom: 12 }}>"{r.text}"</p>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.textPrimary }}>{r.name}</div>
                  <div style={{ fontSize: 11, color: C.textMuted }}>{r.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 09 FAQ ═══ */}
        <section className="tmc-section-pad" style={{ background: C.bgPrimary, padding: 'clamp(60px, 8vw, 120px) clamp(20px, 6vw, 80px)' }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <p style={{ fontSize: 'var(--size-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.textMuted, marginBottom: 12 }}>Common Questions</p>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'var(--size-h2)', color: C.textPrimary, lineHeight: 1, margin: 0, marginBottom: 40 }}>3M Window Film FAQ</h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>

        {/* ═══ 10 HERO STATEMENT ═══ */}
        <section className="tmc-section-pad" style={{ background: C.bgPrimary, textAlign: 'center', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p style={{ color: C.textMuted, fontSize: 'clamp(14px, 2vw, 18px)', marginBottom: 24 }}>Every 3M commercial film series — specified, installed, and warranty-backed.</p>
            <h2 className="font-display" style={{ fontSize: 'var(--size-hero)', lineHeight: 0.9, color: C.textPrimary }}>3M Authorised. <span style={{ color: C.accent }}>Full Range.</span></h2>
          </div>
        </section>

        {/* ═══ 11 CTA ═══ */}
        <CTABlock service="3M Commercial Window Film" defaultService="Commercial Window Tinting" />

        {/* ═══ 12 RELATED ═══ */}
        <section style={{ background: C.bgSecondary, padding: '40px clamp(20px, 6vw, 80px)', borderTop: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { to: '/commercial-window-tinting-brisbane', label: 'Commercial Tinting' },
              { to: '/residential-window-tinting-brisbane', label: 'Residential Tinting' },
              { to: '/commercial-tinting-questions', label: 'Commercial Q&A' },
              { to: '/warranties', label: 'Warranties' },
            ].map(l => (
              <Link key={l.to} to={l.to} className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>{l.label}</Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
