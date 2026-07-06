import { Star, Quote, ArrowUpRight } from 'lucide-react';

interface Review {
  name: string;
  suburb: string;
  service: string;
  text: string;
}

interface GoogleReviewsProps {
  reviews: Review[];
  googleUrl: string;
  rating?: string;
  count?: string;
}

function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

export default function GoogleReviews({ reviews, googleUrl, rating = '5.0', count = '113' }: GoogleReviewsProps) {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-bg-secondary)' }}>
      {/* soft warm glow at top */}
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 260, background: 'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(201,162,39,0.08), transparent 70%)', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Aggregate rating hero */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 18px', borderRadius: 100, border: '1px solid rgba(201,162,39,0.4)', background: 'rgba(201,162,39,0.08)', marginBottom: 28 }}>
            <GoogleG size={16} />
            <span style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-gold-dk)', fontWeight: 700 }}>Rated on Google</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(16px, 3vw, 32px)', flexWrap: 'wrap' }}>
            <span
              className="font-display"
              style={{
                fontSize: 'clamp(72px, 12vw, 140px)',
                lineHeight: 0.9,
                background: 'linear-gradient(180deg, #D4AF37 0%, #C9A227 50%, #8a6a14 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {rating}
            </span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={26} fill="#C9A227" color="#C9A227" strokeWidth={0} />
                ))}
              </div>
              <p style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(18px, 2.4vw, 26px)', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.03em', lineHeight: 1.1 }}>
                {count} Five-Star Reviews
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginTop: 4 }}>from Melbourne drivers who don't leave reviews lightly</p>
            </div>
          </div>

          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--color-text-primary)', lineHeight: 1.05, marginTop: 'clamp(28px, 4vw, 40px)', maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
            The kind of finish people <span style={{ color: 'var(--brand-gold-dk)' }}>write home about.</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginBottom: 44, maxWidth: 920, marginLeft: 'auto', marginRight: 'auto' }}>
          {reviews.slice(0, 4).map((r, i) => (
            <div
              key={i}
              className="card"
              style={{
                position: 'relative',
                padding: '34px 28px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'center',
                overflow: 'hidden',
              }}
            >
              {/* Gold top accent */}
              <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(to right, transparent, var(--brand-gold), transparent)' }} />
              <Quote size={30} style={{ color: 'var(--brand-gold)', opacity: 0.55, marginBottom: 14 }} fill="currentColor" />
              <div>
                <div style={{ display: 'flex', gap: 3, marginBottom: 14, justifyContent: 'center' }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={15} fill="#C9A227" color="#C9A227" strokeWidth={0} />
                  ))}
                </div>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 22, fontSize: 16 }}>
                  “{r.text}”
                </p>
              </div>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 16, width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                  <GoogleG size={16} />
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontSize: 14 }}>{r.name}</p>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: 12, marginTop: 1 }}>{r.suburb} · {r.service}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '15px 30px',
              borderRadius: 100,
              background: 'linear-gradient(135deg, #E4C766 0%, #C9A227 50%, #A17E12 100%)',
              color: '#0A2B1E',
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(201,162,39,0.35)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(201,162,39,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(201,162,39,0.35)'; }}
          >
            <GoogleG size={18} />
            Read all {count} reviews on Google
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
