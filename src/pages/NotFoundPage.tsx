import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found — Glossed Out Detailing Melbourne"
        description="The page you're looking for doesn't exist. Return to Glossed Out Detailing for PPF, ceramic coating and window tinting in Melbourne."
        canonical="https://glossedoutdetailing.com.au/404"
        noindex
      />
      <section style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 var(--section-padding-x)', textAlign: 'center' }}>
        <div>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(80px, 20vw, 180px)', color: 'var(--color-accent)', opacity: 0.08, lineHeight: 1, display: 'block' }}>404</span>
          <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', marginTop: -20, marginBottom: 16 }}>Page Not Found</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, marginBottom: 40, maxWidth: 420, margin: '0 auto 40px' }}>
            The page you're looking for doesn't exist. Head back to our homepage or browse our services.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn-primary">
              <span className="btn-slide" />
              <span>Back to Home</span>
            </Link>
            <Link to="/get-a-quote" className="btn-ghost">Get a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
