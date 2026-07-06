import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const sections = [
  {
    heading: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Glossed Out Detailing Brisbane', href: '/next-level-protection-brisbane' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'About', href: '/about' },
      { label: 'Get a Quote', href: '/get-a-quote' },
      { label: 'Warranties', href: '/warranties' },
      { label: 'Product TDS', href: '/next-level-protection-tds' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
  {
    heading: 'Paint Protection Film (PPF)',
    links: [
      { label: 'PPF Brisbane', href: '/ppf-brisbane' },
      { label: 'SunTek PPF Brisbane', href: '/suntek-ppf-brisbane' },
      { label: 'PPF for New Cars', href: '/ppf-new-car-brisbane' },
      { label: 'PPF for Dark Paint', href: '/ppf-dark-paint-brisbane' },
      { label: 'Stone Chip Protection', href: '/ppf-stone-chip-protection-brisbane' },
      { label: 'PPF & Resale Value', href: '/ppf-resale-value-brisbane' },
      { label: 'PPF Cost Brisbane', href: '/ppf-cost-brisbane' },
      { label: 'PPF Warranty Brisbane', href: '/ppf-warranty-brisbane' },
      { label: 'Partial PPF Brisbane', href: '/partial-ppf-brisbane' },
      { label: 'Self-Healing PPF', href: '/ppf-self-healing-brisbane' },
      { label: 'Gloss vs Matte PPF', href: '/gloss-vs-matte-ppf-brisbane' },
      { label: 'PPF Near Me Brisbane', href: '/ppf-near-me-brisbane' },
      { label: 'PPF Questions', href: '/ppf-questions' },
    ],
  },
  {
    heading: 'Ceramic Coating',
    links: [
      { label: 'Ceramic Coating Brisbane', href: '/ceramic-coating-brisbane' },
      { label: 'Ceramic Coating for New Cars', href: '/ceramic-coating-new-car-brisbane' },
      { label: 'Ceramic Coating Cost Brisbane', href: '/ceramic-coating-cost-brisbane' },
      { label: 'Ceramic UV Protection Brisbane', href: '/ceramic-coating-uv-brisbane' },
      { label: 'Paint Correction + Ceramic', href: '/ceramic-coating-paint-correction-brisbane' },
      { label: 'Ceramic Glass Coating', href: '/ceramic-glass-coating-brisbane' },
      { label: 'Ceramic Wheel Coating', href: '/ceramic-coating-wheels-brisbane' },
      { label: 'PPF + Ceramic Combo', href: '/ceramic-ppf-brisbane' },
      { label: 'How Long Does Ceramic Last?', href: '/ceramic-coating-longevity-brisbane' },
      { label: 'Ceramic vs Dealer Paint Protection', href: '/ceramic-vs-dealer-paint-protection-brisbane' },
      { label: 'Ceramic on Matte Paint', href: '/ceramic-coating-matte-paint-brisbane' },
      { label: 'Ceramic Coating Maintenance', href: '/ceramic-coating-maintenance-brisbane' },
      { label: 'Ceramic & Resale Value', href: '/ceramic-coating-resale-brisbane' },
      { label: 'Ceramic Coating Near Me Brisbane', href: '/ceramic-coating-near-me-brisbane' },
      { label: 'Ceramic Coating Questions', href: '/ceramic-coating-questions' },
    ],
  },
  {
    heading: 'Window Tinting',
    links: [
      { label: 'Automotive Window Tinting Brisbane', href: '/automotive-window-tinting-brisbane' },
      { label: 'Residential Window Tinting Brisbane', href: '/residential-window-tinting-brisbane' },
      { label: 'Commercial Window Tinting Brisbane', href: '/commercial-window-tinting-brisbane' },
      { label: '3M Commercial Window Film Brisbane', href: '/3m-commercial-window-film-brisbane' },
      { label: 'Automotive Tinting Questions', href: '/automotive-tinting-questions' },
      { label: 'Residential Tinting Questions', href: '/residential-tinting-questions' },
      { label: 'Commercial Tinting Questions', href: '/commercial-tinting-questions' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageMeta
        title="Sitemap — Glossed Out Detailing Brisbane"
        description="Full sitemap for Glossed Out Detailing — all PPF, ceramic coating, and window tinting pages for Brisbane."
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
