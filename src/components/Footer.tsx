import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const accreditations = [
  { file: '/accreditations/magnum.png', name: 'Magnum' },
  { file: '/accreditations/kraken.png', name: 'Kraken' },
  { file: '/accreditations/gtechniq.jpg', name: 'Gtechniq' },
  { file: '/accreditations/carpro.png', name: 'CarPro' },
];

const quickLinks = [
  { label: 'Car Detailing', href: '/detailing-packages-melbourne#detailing' },
  { label: 'Paint Correction', href: '/detailing-packages-melbourne#correction' },
  { label: 'Ceramic Coating', href: '/detailing-packages-melbourne#ceramic' },
  { label: 'Our Services', href: '/detailing-packages-melbourne' },
  { label: 'Get a Quote', href: '/get-a-quote' },
];

const popularLinks = [
  { label: 'Coating TDS', href: '/product-tds' },
  { label: 'Ceramic Coating Questions', href: '/ceramic-coating-questions' },
  { label: 'Warranties', href: '/warranties' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
];

const INK = '#0A2B1E';
const INK_SOFT = '#41504734';

export default function Footer() {
  return (
    <footer style={{ position: 'relative', background: '#FFFFFF', borderTop: '1px solid var(--color-border)', overflow: 'hidden', margin: 0 }}>
      {/* Gold hairline top */}
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(to right, transparent, rgba(201,162,39,0.7), transparent)' }} />

      <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(60px, 8vw, 80px) var(--section-padding-x) 0', maxWidth: '100%', width: '100%' }}>
        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.3fr', gap: 48, paddingBottom: 56 }} className="footer-grid">

          {/* Brand column */}
          <div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: '0.05em', color: INK, marginBottom: 12 }}>
              GLOSSED OUT<span style={{ color: 'var(--brand-gold-dk)' }}> DETAILING</span>
            </div>
            <p style={{ color: '#4a564e', fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
              Melbourne's prestige auto detailer — detailing, paint correction &amp; ceramic coating.
            </p>
            <p style={{ color: '#6a746c', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Certified &amp; Accredited</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, maxWidth: 300 }}>
              {accreditations.map(b => (
                <div key={b.name} title={b.name} style={{ background: '#fff', borderRadius: 8, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: 7, border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <img src={b.file} alt={b.name} style={{ maxHeight: '76%', maxWidth: '86%', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, letterSpacing: '0.04em', color: INK, marginBottom: 20 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map(l => (
                <li key={l.href}>
                  <Link to={l.href} style={{ color: '#3a4a42', fontSize: 14, textDecoration: 'none' }} className="footer-link-light">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular */}
          <div>
            <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, letterSpacing: '0.04em', color: INK, marginBottom: 20 }}>Popular</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {popularLinks.map(l => (
                <li key={l.href}>
                  <Link to={l.href} style={{ color: '#3a4a42', fontSize: 14, textDecoration: 'none' }} className="footer-link-light">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, letterSpacing: '0.04em', color: INK, marginBottom: 20 }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a href="tel:0481327250" style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#3a4a42', fontSize: 14, textDecoration: 'none' }} className="footer-link-light">
                <Phone size={16} color={INK} strokeWidth={1.75} />
                0481 327 250
              </a>
              <a href="mailto:admin@glossedoutdetailing.com.au" style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#3a4a42', fontSize: 14, textDecoration: 'none' }} className="footer-link-light footer-email-link">
                <Mail size={16} color={INK} strokeWidth={1.75} />
                admin@glossedoutdetailing.com.au
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: '#3a4a42', fontSize: 14, lineHeight: 1.6 }}>
                <MapPin size={16} color={INK} strokeWidth={1.75} style={{ flexShrink: 0, marginTop: 3 }} />
                <span>Goodrich Ct,<br />Craigieburn VIC 3064</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: INK_SOFT }} />

        {/* Bottom bar */}
        <div style={{ padding: '24px 0 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ color: '#6a746c', fontSize: 13, margin: 0 }}>
            Copyright © {new Date().getFullYear()} Glossed Out Detailing
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="https://www.instagram.com/glossedoutdetailing" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-accent)', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 150ms ease' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/glossedoutdetailing" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-accent)', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 150ms ease' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
