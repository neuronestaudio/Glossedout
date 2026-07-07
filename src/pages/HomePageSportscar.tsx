import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Car, Sparkles, Armchair, Instagram } from 'lucide-react';
import GoogleReviews from '../components/GoogleReviews';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';
import heroHome from '../assets/glossed/hero-maserati-mc20.webp';
import { galleryPhotos } from '../data/galleryPhotos';

const services = [
  {
    icon: Car,
    title: 'Car Detailing',
    desc: 'Hand wash, interior steam clean and a full reset — from a light refresh to a showroom-grade Prestige detail.',
    href: '/detailing-packages-melbourne#detailing',
    img: '/glossed/detailing-gen.jpg',
  },
  {
    icon: Sparkles,
    title: 'Paint Correction',
    desc: 'Machine polishing that removes swirls, oxidation and scratches — from a gloss enhancement to a full multi-stage cut.',
    href: '/detailing-packages-melbourne#correction',
    img: '/glossed/paint-correction-altima.jpg',
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    desc: 'Named, professional-grade coatings up to 10 years — deep gloss, UV protection and hydrophobic self-cleaning.',
    href: '/detailing-packages-melbourne#ceramic',
    img: '/glossed/porsche.jpg',
  },
  {
    icon: Armchair,
    title: 'Interior Detailing',
    desc: 'Deep interior clean and protection — leather, fabric and trim refreshed, UV protected and odour neutralised.',
    href: '/detailing-packages-melbourne#detailing',
    img: '/glossed/gallery-3.jpg',
  },
];

// NOTE: sourced from Glossed Out's real Google reviews (110+ five-star).
// Names shown as "Google review" to avoid attributing text to invented people —
// swap in the real reviewer names when convenient.
const reviews = [
  { name: 'Google review', suburb: 'Craigieburn', service: 'Ceramic Coating', text: 'Muhammad was a champion — very happy with what he did. He went above and beyond, and the car looked as new.' },
  { name: 'Google review', suburb: 'Melbourne', service: 'Full Detail', text: 'Amazing outcome — very satisfied with how the car turned out. Highly recommended!' },
  { name: 'Google review', suburb: 'Craigieburn', service: 'Car Detailing', text: 'Excellent car detailing — the car looks like new. Great effort done inside and out.' },
];

export default function HomePageSportscar() {
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const [galleryExpanded, setGalleryExpanded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      const heroEls = heroContentRef.current?.querySelectorAll('.hero-anim');
      if (heroEls) {
        gsap.from(heroEls, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.3 });
      }
      // Hero parallax
      if (heroBgRef.current && heroRef.current) {
        gsap.to(heroBgRef.current, {
          scrollTrigger: { trigger: heroRef.current, scrub: true },
          y: '20%', ease: 'none',
        });
      }
      // Services cards entrance
      if (servicesRef.current) {
        gsap.from(servicesRef.current.querySelectorAll('.service-card'), {
          scrollTrigger: { trigger: servicesRef.current, start: 'top 80%' },
          opacity: 0, duration: 0.6, ease: 'power2.out', stagger: 0.08,
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageMeta
        title="Glossed Out Detailing — Home (Sports-car hero reference)"
        description="Reference version of the home page with the sports-car photo hero."
        canonical="https://glossedoutdetailing.com.au/home-sportscar"
        noindex
      />

      {/* HERO */}
      <section
        ref={heroRef}
        className="home-hero"
        style={{ position: 'relative', height: '85dvh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
        aria-label="Hero — Car Detailing & Ceramic Coating Melbourne"
      >
        {/* Background image */}
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute', inset: '-20% 0 0 0', zIndex: 0,
            backgroundImage: `url(${heroHome})`,
            backgroundSize: 'cover', backgroundPosition: 'center 30%',
          }}
          aria-hidden="true"
        />
        {/* Grain overlay at 50% opacity */}
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 1,
            pointerEvents: 'none',
            opacity: 0.5,
            backgroundImage:
              'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'><filter id=\'noise\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'400\' height=\'400\' filter=\'url(%23noise)\' opacity=\'0.7\'/></svg>")',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
          }}
          aria-hidden="true"
        />
        {/* Gradient overlay — dark cinematic */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.7) 100%)' }} aria-hidden="true" />
        {/* Feathered bottom edge — blends into brand bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, zIndex: 2, background: 'linear-gradient(to bottom, transparent 0%, #0A2B1E 100%)' }} aria-hidden="true" />

        {/* Content */}
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2, maxWidth: 900, padding: '0 24px' }}>
          <h1 style={{ marginTop: 0, marginBottom: 0 }}>
            <span
              className="hero-anim font-display hero-text-mono"
              style={{ fontSize: 'clamp(48px, 8vw, 96px)', letterSpacing: '-0.02em', lineHeight: 0.95, WebkitTextStroke: '0.5px rgba(255,255,255,0.01)' }}
            >
              Glossed Out{' '}<span style={{ color: '#fff' }}>Detailing.</span>
            </span>
          </h1>

          <p className="hero-anim" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 400, margin: 0, marginTop: 20, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Detailing · Paint Correction · Ceramic Coating — Melbourne
          </p>

          <p className="hero-anim" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(15px, 1.8vw, 18px)', margin: '16px auto 0', lineHeight: 1.6, maxWidth: 620 }}>
            Melbourne's <span style={{ color: 'var(--brand-gold-lt)', fontWeight: 600 }}>prestige auto detailer</span> — 10+ years' experience and a ceramic coating specialist. Prestige service, obsessive attention to detail.
          </p>

          <div className="hero-anim hero-cta-group" style={{ display: 'flex', gap: 12, marginTop: 36, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary" style={{ padding: '11px 26px', fontSize: 14, border: '1px solid var(--brand-gold)' }}>
              <span className="btn-slide" />
              <span>Contact Us</span>
            </Link>
            <Link to="/warranties" className="btn-emerald" style={{ padding: '11px 26px', fontSize: 14 }}>Warranties</Link>
          </div>
        </div>
      </section>

      {/* BRAND BAR — accreditations, flush below hero */}
      <div className="brand-bar" style={{ height: 'auto', flexWrap: 'wrap', gap: 14, padding: '22px 6vw' }}>
        {[
          { slug: 'magnum', alt: 'Magnum Ceramic Coating' },
          { slug: 'kraken', alt: 'Kraken Self-Healing Coatings' },
          { slug: 'gtechniq', alt: 'Gtechniq Accredited' },
          { slug: 'carpro', alt: 'CarPro' },
        ].map(logo => (
          <div key={logo.slug} style={{ background: '#fff', borderRadius: 10, padding: '10px 18px', display: 'flex', alignItems: 'center' }}>
            <img
              src={`/accreditations/${logo.slug}.svg`}
              alt={logo.alt}
              style={{ height: 30, width: 'auto', maxWidth: 150, objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>

      {/* SERVICES GRID */}
      <section ref={servicesRef} className="section services-wave-bg" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Carbon-fibre background texture — feathered in from the top */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/carbon-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.22, zIndex: 0, WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 78%, transparent 100%)', maskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 78%, transparent 100%)' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="home-intro-heading" style={{ marginBottom: 'clamp(32px, 4vw, 48px)' }}>
            <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.45)', marginBottom: 12 }}>What We Do</p>
            <h2 className="font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: '#FFFFFF', margin: 0 }}>
              Our Services.
            </h2>
            <p className="home-intro-para" style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.7, margin: '20px 0 0' }}>
              Glossed Out Detailing is Melbourne's specialist studio for car detailing, paint correction and ceramic coating. Certified in Gtechniq, Magnum, Kraken and CarPro — obsessive attention to every panel.
            </p>
          </div>
          <div className="gold-grid">
            {services.map(s => {
              const Icon = s.icon;
              return (
                <Link to={s.href} key={s.title} className="gold-card" aria-label={s.title}>
                  <div className="gold-card__inner">
                    <div className="gold-card__reveal" style={{ backgroundImage: `url("${s.img}")` }} />
                    <div className="gold-card__body">
                      <div className="gold-card__icon">
                        <Icon size={26} color="#E4C766" strokeWidth={1.75} />
                      </div>
                      <h3 className="gold-card__title">{s.title}</h3>
                      <p className="gold-card__desc">{s.desc}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16, marginTop: 'clamp(40px, 6vw, 56px)' }}>
            <Link to="/detailing-packages-melbourne" className="btn-emerald">View Packages</Link>
            <Link to="/product-tds" className="btn-emerald">Coating TDS</Link>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS — moved up: social proof immediately after services */}
      <GoogleReviews
        reviews={reviews}
        googleUrl="https://www.google.com/maps/search/Glossed+Out+Detailing+Craigieburn"
      />

      {/* INSTAGRAM GALLERY */}
      <section className="section" style={{ background: '#0A2B1E', position: 'relative', overflow: 'hidden', paddingTop: 'clamp(40px, 5vw, 64px)' }}>
        {/* Carbon-fibre background texture */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/carbon-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.22, zIndex: 0 }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
            <div>
<h2 className="font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: '#FFFFFF', margin: 0 }}>Gallery.</h2>
            </div>
            <a
              href="https://instagram.com/glossedoutdetailing/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ borderColor: 'rgba(0,0,0,0.16)', color: 'var(--color-accent)', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <Instagram size={15} strokeWidth={1.5} />
              Follow on Instagram
            </a>
          </div>

          <a href="https://instagram.com/glossedoutdetailing/" target="_blank" rel="noopener noreferrer" className={`ig-grid${galleryExpanded ? ' ig-grid-expanded' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, textDecoration: 'none' }}>
            {galleryPhotos.slice(0, 9).map((photo, i) => (
              <div key={i} className={i >= 4 ? 'gallery-extra' : undefined} style={{ overflow: 'hidden', aspectRatio: '1', border: '2px solid #ffffff' }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            ))}
          </a>
          {/* Mobile-only expand toggle — shows 4 photos collapsed */}
          <div className="gallery-toggle-wrap" style={{ textAlign: 'center', marginTop: 20 }}>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => setGalleryExpanded(v => !v)}
              style={{ borderColor: 'rgba(0,0,0,0.16)', color: 'var(--color-accent)' }}
            >
              {galleryExpanded ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS — moved down: the "why us" story after the proof + gallery */}
      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div className="diff-info">
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Why Glossed Out</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h1)', marginBottom: 24, lineHeight: 1.05 }}>
                Certified Product.<br /><span style={{ color: 'var(--color-accent)' }}>Precision Install.</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: 32 }}>
                Any detailer can buy a bottle off the shelf. Gtechniq, Magnum, Kraken and CarPro certified — these accreditations mean we've been trained and vetted by the brands that make the best coatings on the market.
              </p>
              <Link to="/about" className="btn-ghost">About the Studio</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { num: '01', title: 'Named coatings, not generic', desc: 'Gtechniq, Magnum, Kraken and CarPro — professional-grade coatings, not a generic bottle from an unknown supplier.' },
                { num: '02', title: 'Quality over volume', desc: 'Precision work, never a conveyor-belt shop. Every car gets full attention.' },
                { num: '03', title: 'Detailing done properly', desc: 'Car detailing, paint correction and ceramic coating — mobile across Melbourne plus our Craigieburn studio.' },
              ].map(d => (
                <div key={d.num} style={{ display: 'flex', gap: 20 }}>
                  <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 40, color: 'var(--color-accent)', opacity: 0.25, lineHeight: 1, flexShrink: 0 }}>{d.num}</span>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{d.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.65 }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock service="Protection Package" />
    </>
  );
}
