import { Link } from 'react-router-dom';
import CTABlock from './CTABlock';
import PageMeta from './PageMeta';
import FAQAccordion from './FAQAccordion';
import { type Tier, PackageCarousel, WarrantyTable } from './PackagesKit';

interface Props {
  meta: { title: string; description: string; canonical: string };
  eyebrow: string;
  title: string;
  lead: string;
  heroImg: string;
  tiers: Tier[];
  carouselTitle: string;
  carouselIntro: string;
  carouselNote?: string;
  faqs: { q: string; a: string }[];
  faqTitle: string;
  showWarranty?: boolean;
  ctaService: string;
}

export default function ServicePageLayout({
  meta, eyebrow, title, lead, heroImg, tiers,
  carouselTitle, carouselIntro, carouselNote, faqs, faqTitle, showWarranty, ctaService,
}: Props) {
  return (
    <>
      <PageMeta title={meta.title} description={meta.description} canonical={meta.canonical} />

      {/* HERO — photo fades to white, green wordmark on the faded base */}
      <section style={{ position: 'relative', height: '84dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: `url('${heroImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.88) 24%, rgba(248,249,251,0.4) 46%, transparent 80%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 840 }}>
          <p style={{ color: 'var(--brand-gold-dk)', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14 }}>{eyebrow}</p>
          <h1 className="font-display title-green-grad" style={{ fontSize: 'var(--size-h1)', lineHeight: 0.95, marginBottom: 18 }}>{title}</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 1.9vw, 18px)', lineHeight: 1.65, maxWidth: 600, marginBottom: 28 }}>{lead}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary" style={{ padding: '11px 26px', fontSize: 14, border: '1px solid var(--brand-gold)' }}>
              <span className="btn-slide" /><span>Get a Quote</span>
            </Link>
            <Link to="/detailing-packages-melbourne" className="btn-ghost">All Packages</Link>
            <Link to="/warranties" className="btn-ghost">Warranties</Link>
          </div>
        </div>
      </section>

      {/* PACKAGES CAROUSEL */}
      <section className="section pkg-canvas">
        <div className="container">
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', color: 'var(--color-text-primary)', marginBottom: 14, lineHeight: 1.05 }}>{carouselTitle}</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 44 }}>{carouselIntro}</p>
          <PackageCarousel tiers={tiers} />
          {carouselNote && (
            <p style={{ color: 'var(--color-text-muted)', fontSize: 13, lineHeight: 1.7, marginTop: 28 }}>{carouselNote}</p>
          )}
        </div>
      </section>

      {showWarranty && <WarrantyTable />}

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>{faqTitle}</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service={ctaService} defaultService={ctaService} />
    </>
  );
}
