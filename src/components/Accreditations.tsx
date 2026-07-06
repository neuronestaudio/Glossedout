/*
 * Accreditations / certifications strip.
 * Logos live in public/accreditations/ — swap the placeholder SVGs for the
 * official brand files (same filename, .svg or .png) and they appear here.
 */

const brands = [
  { slug: 'magnum', name: 'Magnum Ceramic Coating' },
  { slug: 'kraken', name: 'Kraken Self-Healing Coatings' },
  { slug: 'gtechniq', name: 'Gtechniq Accredited' },
  { slug: 'carpro', name: 'CarPro' },
];

interface AccreditationsProps {
  /** 'light' = for light page sections (default). 'dark' = for the dark footer. */
  variant?: 'light' | 'dark';
  heading?: string;
  subtext?: string;
}

export default function Accreditations({
  variant = 'light',
  heading = 'Certified & Accredited',
  subtext = 'We only apply named, professional-grade coatings — and we\'re certified to install them.',
}: AccreditationsProps) {
  const dark = variant === 'dark';
  return (
    <section
      className="section"
      style={{
        background: dark ? 'transparent' : 'var(--color-bg-secondary)',
        paddingTop: dark ? 0 : 'var(--section-padding-y)',
        paddingBottom: dark ? 0 : 'var(--section-padding-y)',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {heading && (
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.14em', color: dark ? 'var(--brand-gold-lt)' : 'var(--brand-gold-dk)', marginBottom: 12 }}>
            {heading}
          </p>
        )}
        {subtext && (
          <p style={{ color: dark ? 'rgba(255,255,255,0.6)' : 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.7, maxWidth: 560, margin: '0 auto 36px' }}>
            {subtext}
          </p>
        )}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 18,
          }}
        >
          {brands.map(b => (
            <div
              key={b.slug}
              title={b.name}
              style={{
                background: '#fff',
                borderRadius: 12,
                padding: '18px 26px',
                minWidth: 180,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: dark ? '0 6px 20px rgba(0,0,0,0.25)' : '0 4px 18px rgba(0,0,0,0.06)',
                border: '1px solid var(--color-border)',
              }}
            >
              <img
                src={`/accreditations/${b.slug}.svg`}
                alt={b.name}
                loading="lazy"
                style={{ height: 40, width: 'auto', maxWidth: 200, objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
