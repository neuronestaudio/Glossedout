/*
 * Accreditations / certifications strip.
 * Logos live in public/accreditations/ — swap the placeholder SVGs for the
 * official brand files (same filename, .svg or .png) and they appear here.
 */

const brands = [
  { file: '/accreditations/magnum.png', name: 'Magnum Ceramic Coating', dark: true },
  { file: '/accreditations/kraken.png', name: 'Kraken Coatings', dark: false },
  { file: '/accreditations/gtechniq.jpg', name: 'Gtechniq', dark: false },
  { file: '/accreditations/carpro.png', name: 'CarPro', dark: false },
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
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(8px, 1.4vw, 16px)',
            maxWidth: 720,
            margin: '0 auto',
          }}
        >
          {brands.map(b => (
            <div
              key={b.name}
              title={b.name}
              style={{
                background: '#fff',
                borderRadius: 14,
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: 'clamp(8px, 1.8vw, 18px)',
                boxShadow: dark ? '0 6px 20px rgba(0,0,0,0.25)' : '0 4px 18px rgba(0,0,0,0.06)',
                border: '1px solid var(--color-border)',
              }}
            >
              <img
                src={b.file}
                alt={b.name}
                loading="lazy"
                style={{ maxHeight: '74%', maxWidth: '86%', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
