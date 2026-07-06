import { Phone } from 'lucide-react';
import QuoteForm from './QuoteForm';

interface CTABlockProps {
  service: string;
  defaultService?: string;
}

export default function CTABlock({ defaultService }: CTABlockProps) {
  return (
    <section
      className="section"
      style={{ position: 'relative', overflow: 'hidden', background: '#0A2B1E' }}
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/carbon-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.22,
          zIndex: 0,
          WebkitMaskImage: 'linear-gradient(to top, transparent 0%, #000 14%)',
          maskImage: 'linear-gradient(to top, transparent 0%, #000 14%)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="cta-grid grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div className="cta-info">
            <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              Craigieburn · Melbourne
            </p>
            <h2 className="font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', marginBottom: 16, lineHeight: 1.05, color: '#fff' }}>
              Get Your Glossed Out Detailing Quote Today
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 36, fontSize: 15, lineHeight: 1.75, maxWidth: 420 }}>
              Over 10 years in car detailing and paint protection — a ceramic coating specialist accredited in every product we use, and a car enthusiast for life. Any questions? Call directly and let's talk.
            </p>
            <a
              href="tel:0481327250"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 14,
                background: 'linear-gradient(135deg, #c7a74c 0%, #e8cc7a 40%, #9d7f2e 100%)',
                color: '#fff',
                textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                padding: '16px 28px',
                borderRadius: 4,
                textDecoration: 'none',
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(22px, 3vw, 32px)',
                letterSpacing: '0.05em',
                lineHeight: 1,
                boxShadow: '0 4px 20px rgba(199,167,76,0.35)',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 28px rgba(199,167,76,0.5)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(199,167,76,0.35)'; }}
            >
              <Phone size={22} strokeWidth={2.5} />
              0481 327 250
            </a>
            <p style={{ marginTop: 12, fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Open 7 days · 8am–8pm · Craigieburn, Melbourne</p>
          </div>

          <div className="card" style={{ padding: 'clamp(20px, 4vw, 36px)' }}>
            <QuoteForm defaultService={defaultService} />
          </div>
        </div>
      </div>
    </section>
  );
}
