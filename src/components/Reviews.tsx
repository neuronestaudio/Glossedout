import { Star } from 'lucide-react';

interface Review {
  name: string;
  suburb: string;
  service: string;
  text: string;
}

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {reviews.map((r, i) => (
            <div key={i} className="card" style={{ padding: '28px 24px' }}>
              <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} fill="var(--color-accent)" color="var(--color-accent)" />
                ))}
              </div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 18, fontSize: 15 }}>
                "{r.text}"
              </p>
              <div>
                <p style={{ fontWeight: 500, color: 'var(--color-text-primary)', fontSize: 14 }}>{r.name}</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 12, marginTop: 2 }}>
                  {r.suburb} · {r.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
