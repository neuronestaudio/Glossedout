interface TrustBadgesProps {
  services?: ('ppf' | 'tint' | 'window' | 'ceramic')[];
}

// Ribbon / certified award icon
const RibbonIcon = () => (
  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="7" r="5.5" stroke="#E07B3A" strokeWidth="1.4" fill="none" />
    <circle cx="8" cy="7" r="3" stroke="#E07B3A" strokeWidth="1" fill="none" />
    <path d="M5 11.5L4 17L8 15L12 17L11 11.5" stroke="#E07B3A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function TrustBadges({ services = ['ceramic'] }: TrustBadgesProps) {
  // Glossed Out's ceramic accreditations. All service pages currently request 'ceramic'.
  const badges = [
    { id: 'ceramic', label: 'Gtechniq Accredited' },
    { id: 'ceramic', label: 'Magnum Accredited' },
    { id: 'ceramic', label: 'Kraken Certified' },
    { id: 'ceramic', label: 'CarPro Certified' },
  ].filter(b => services.includes(b.id as any));

  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        paddingBottom: 4,
      }}
    >
      {badges.map(b => (
        <div
          key={b.label}
          style={{
            flexShrink: 0,
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 100,
            padding: '9px 18px 9px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 9,
            background: '#0C3B2A',
          }}
        >
          <RibbonIcon />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: 13,
            color: '#FFFFFF',
            letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
          }}>
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
}
