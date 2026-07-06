import { useState } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface PackageTier {
  name: string;
  subtitle: string;
  inclusions: string[];
  price: string;
  recommended?: boolean;
}

interface PackageVisualizerProps {
  tiers: PackageTier[];
  diagramType?: 'car' | 'house' | 'building';
}

export default function PackageVisualizer({ tiers }: PackageVisualizerProps) {
  const defaultIndex = tiers.findIndex(t => t.recommended) || 0;
  const [activeIndex, setActiveIndex] = useState(defaultIndex >= 0 ? defaultIndex : 0);
  const active = tiers[activeIndex];

  return (
    <div>
      {/* Tab rail */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
        {tiers.map((tier, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-pressed={activeIndex === i}
            style={{
              position: 'relative',
              padding: '10px 20px',
              borderRadius: 4,
              border: activeIndex === i ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
              background: activeIndex === i ? 'var(--color-surface-raised)' : 'transparent',
              color: activeIndex === i ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: 13, fontWeight: 500,
              transition: 'all 200ms ease',
              boxShadow: activeIndex === i ? `0 0 0 1px var(--color-accent)` : 'none',
            }}
          >
            {tier.recommended && (
              <span style={{
                position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)',
                background: 'var(--color-accent)', color: 'var(--color-bg-primary)',
                fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100,
                whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>Most Popular</span>
            )}
            {tier.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'var(--size-h2)', letterSpacing: '0.02em', marginBottom: 4 }}>
          {active.name}
        </h2>
        {active.subtitle.split(/\n+/).map((line, idx) => (
          <p key={idx} style={{ color: 'var(--color-text-secondary)', fontSize: 14, marginBottom: 8 }}>{line}</p>
        ))}

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {active.inclusions.map((inc, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <Check size={16} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 3 }} />
              <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>{inc}</span>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link to="/get-a-quote" className="btn-primary">
            <span className="btn-slide" />
            <span>Get a Quote</span>
          </Link>
          <a href="tel:0481327250" className="btn-ghost">Call 0481 327 250</a>
        </div>
      </div>

    </div>
  );
}
