import { Sparkles } from 'lucide-react';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';
import Accreditations from '../components/Accreditations';
import { type Tier, detailing, correction, ceramicUsed, PackageCarousel, WarrantyTable } from '../components/PackagesKit';

function PackageGroup({ id, eyebrow, title, intro, tiers }: { id: string; eyebrow: string; title: string; intro: string; tiers: Tier[] }) {
  return (
    <section id={id} className="section pkg-canvas">
      <div className="container">
        <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brand-gold-dk)', marginBottom: 12 }}>{eyebrow}</p>
        <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', color: 'var(--color-text-primary)', marginBottom: 14, lineHeight: 1.05 }}>{title}</h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 44 }}>{intro}</p>
        <PackageCarousel tiers={tiers} />
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const ceramicTiers = ceramicUsed;

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
          background: '#0A2B1E',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/carbon-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.22, zIndex: 0, pointerEvents: 'none' }} />
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
              { label: 'Warranties', href: '#warranties' },
              { label: 'Ceramic Coating', href: '#ceramic' },
              { label: 'Detailing', href: '#detailing' },
              { label: 'Paint Correction', href: '#correction' },
            ].map(a => (
              <a key={a.href} href={a.href} className="gold-pill-3d">{a.label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* COATING WARRANTIES — top billing */}
      <WarrantyTable />

      {/* CERAMIC COATING */}
      <section id="ceramic" className="section pkg-canvas">
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brand-gold-dk)', marginBottom: 12 }}>Gtechniq · Magnum · Kraken Elite</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', color: 'var(--color-text-primary)', marginBottom: 14, lineHeight: 1.05 }}>Ceramic Coating Packages</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 44 }}>
            Long-term gloss, UV protection and hydrophobic self-cleaning, backed by up to a 10-year coating. Every package includes decontamination and a full one-step paint correction so the coating bonds to flawless paint.
          </p>

          <PackageCarousel tiers={ceramicTiers} />
          <p style={{ color: 'var(--color-text-muted)', fontSize: 13, lineHeight: 1.7, marginTop: 28 }}>
            All ceramic packages include decontamination and a one-step paint correction. A two-step correction upgrade is available on request.
          </p>
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

      {/* PRICING NOTE */}
      <section className="pkg-canvas" style={{ padding: 'clamp(40px, 6vw, 64px) var(--section-padding-x) clamp(44px, 6vw, 68px)' }}>
        <div className="container">
          <div className="card" style={{ padding: '24px 26px' }}>
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
