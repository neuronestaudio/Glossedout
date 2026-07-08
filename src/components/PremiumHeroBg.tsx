/**
 * Premium white hero background — soft silver wave panels with elegant gold
 * trim curves and gentle light blooms. Pure SVG so it stays crisp at any size.
 * Mirror-symmetric; the centre is kept clear for the wordmark.
 */
export default function PremiumHeroBg() {
  return (
    <svg
      className="premium-bg"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pb-base" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#f3f5f5" />
          <stop offset="1" stopColor="#e7eaea" />
        </linearGradient>
        <linearGradient id="pb-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e4e7e8" />
        </linearGradient>
        <linearGradient id="pb-panel2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbfcfc" />
          <stop offset="1" stopColor="#dce0e1" />
        </linearGradient>
        <linearGradient id="pb-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7e08c" />
          <stop offset="0.45" stopColor="#c9a227" />
          <stop offset="0.75" stopColor="#e8cc7a" />
          <stop offset="1" stopColor="#9d7f2e" />
        </linearGradient>
        <radialGradient id="pb-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pb-goldglow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffe7a3" stopOpacity="0.85" />
          <stop offset="1" stopColor="#ffe7a3" stopOpacity="0" />
        </radialGradient>
        <filter id="pb-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="18" floodColor="#9aa0a2" floodOpacity="0.25" />
        </filter>
        <filter id="pb-goldsoft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="1600" height="900" fill="url(#pb-base)" />

      {/* ---- Soft wave panels (mirror-symmetric curtains) ---- */}
      <g filter="url(#pb-soft)">
        <path d="M0,0 L 360,0 C 200,240 440,470 250,900 L 0,900 Z" fill="url(#pb-panel)" />
        <path d="M1600,0 L 1240,0 C 1400,240 1160,470 1350,900 L 1600,900 Z" fill="url(#pb-panel)" />
      </g>
      <g filter="url(#pb-soft)" opacity="0.85">
        <path d="M0,0 L 520,0 C 340,260 560,540 360,900 L 190,900 C 300,520 120,260 0,120 Z" fill="url(#pb-panel2)" />
        <path d="M1600,0 L 1080,0 C 1260,260 1040,540 1240,900 L 1410,900 C 1300,520 1480,260 1600,120 Z" fill="url(#pb-panel2)" />
      </g>

      {/* ---- Gold trim curves ---- */}
      <g fill="none" stroke="url(#pb-gold)" strokeLinecap="round" filter="url(#pb-goldsoft)">
        <path d="M300,-30 C 150,250 470,520 250,930" strokeWidth="2.6" opacity="0.95" />
        <path d="M470,-30 C 620,250 300,520 470,930" strokeWidth="1.5" opacity="0.7" />
        <path d="M1300,-30 C 1450,250 1130,520 1350,930" strokeWidth="2.6" opacity="0.95" />
        <path d="M1130,-30 C 980,250 1300,520 1130,930" strokeWidth="1.5" opacity="0.7" />
      </g>

      {/* ---- Light blooms & gold sparkle ---- */}
      <circle cx="250" cy="70" r="120" fill="url(#pb-glow)" />
      <circle cx="1350" cy="70" r="120" fill="url(#pb-glow)" />
      <circle cx="340" cy="470" r="70" fill="url(#pb-goldglow)" />
      <circle cx="1260" cy="470" r="70" fill="url(#pb-goldglow)" />
      <circle cx="250" cy="840" r="90" fill="url(#pb-goldglow)" />
      <circle cx="1350" cy="840" r="90" fill="url(#pb-goldglow)" />
    </svg>
  );
}
