import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const sections = [
  {
    heading: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Our Services', href: '/detailing-packages-melbourne' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'About', href: '/about' },
      { label: 'Get a Quote', href: '/get-a-quote' },
      { label: 'Warranties', href: '/warranties' },
      { label: 'Product TDS', href: '/product-tds' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Car Detailing', href: '/detailing-packages-melbourne#detailing' },
      { label: 'Paint Correction', href: '/detailing-packages-melbourne#correction' },
      { label: 'Ceramic Coating', href: '/detailing-packages-melbourne#ceramic' },
    ],
  },
  {
    heading: 'Ceramic Coating',
    links: [
      { label: 'Ceramic Coating Melbourne', href: '/ceramic-coating-melbourne' },
      { label: 'Ceramic Coating for New Cars', href: '/ceramic-coating-new-car-melbourne' },
      { label: 'Ceramic Coating Cost Melbourne', href: '/ceramic-coating-cost-melbourne' },
      { label: 'Ceramic UV Protection Melbourne', href: '/ceramic-coating-uv-melbourne' },
      { label: 'Paint Correction + Ceramic', href: '/ceramic-coating-paint-correction-melbourne' },
      { label: 'Ceramic Glass Coating', href: '/ceramic-glass-coating-melbourne' },
      { label: 'Ceramic Wheel Coating', href: '/ceramic-coating-wheels-melbourne' },
      { label: 'How Long Does Ceramic Last?', href: '/ceramic-coating-longevity-melbourne' },
      { label: 'Ceramic vs Dealer Paint Protection', href: '/ceramic-vs-dealer-paint-protection-melbourne' },
      { label: 'Ceramic on Matte Paint', href: '/ceramic-coating-matte-paint-melbourne' },
      { label: 'Ceramic Coating Maintenance', href: '/ceramic-coating-maintenance-melbourne' },
      { label: 'Ceramic & Resale Value', href: '/ceramic-coating-resale-melbourne' },
      { label: 'Ceramic Coating Near Me Melbourne', href: '/ceramic-coating-near-me-melbourne' },
      { label: 'Ceramic Coating Questions', href: '/ceramic-coating-questions' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageMeta
        title="Sitemap — Glossed Out Detailing Melbourne"
        description="Full sitemap for Glossed Out Detailing — car detailing, paint correction and ceramic coating pages for Melbourne."
        canonical="https://glossedoutdetailing.com.au/sitemap"
        noindex
      />
      <section style={{ minHeight: '100dvh', paddingTop: 120, paddingBottom: 80, padding: '120px var(--section-padding-x) 80px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Site</p>
          <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', marginBottom: 48 }}>Sitemap</h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {sections.map(section => (
              <div key={section.heading}>
                <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>{section.heading}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {section.links.map(link => (
                    <li key={link.href}>
                      <Link to={link.href} className="footer-link" style={{ fontSize: 15 }}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
