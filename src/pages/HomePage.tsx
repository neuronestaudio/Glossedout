import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Car, Sparkles, Armchair, Instagram } from 'lucide-react';
import GoogleReviews from '../components/GoogleReviews';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';
import AccreditationBar from '../components/AccreditationBar';
import ServicesShowcase from '../components/ServicesShowcase';
import HomeSplash from '../components/HomeSplash';
import { galleryPhotos } from '../data/galleryPhotos';

const services = [
  {
    icon: Shield,
    title: 'Ceramic Coating',
    desc: 'The best long-term paint protection there is — an ultra-strong, hydrophobic, chemical-resistant layer over your paint, lasting up to 10 years.',
    href: '/ceramic-coating-packages-melbourne',
    img: '/glossed/porsche.jpg',
  },
  {
    icon: Car,
    title: 'Car Detailing',
    desc: 'Hand wash, interior steam clean and a full reset — from a light refresh to a showroom-grade Prestige detail.',
    href: '/car-detailing-melbourne',
    img: '/glossed/detailing-gen.jpg',
  },
  {
    icon: Sparkles,
    title: 'Paint Correction',
    desc: 'Machine polishing that removes swirls, oxidation and scratches — from a gloss enhancement to a full multi-stage cut.',
    href: '/paint-correction-melbourne',
    img: '/glossed/paint-correction-altima.jpg',
  },
  {
    icon: Armchair,
    title: 'Interior Detailing',
    desc: 'Deep interior clean and protection — leather, fabric and trim refreshed, UV protected and odour neutralised.',
    href: '/car-detailing-melbourne',
    img: '/glossed/interior.jpeg',
  },
];

// NOTE: sourced from Glossed Out's real Google reviews (110+ five-star).
// Names shown as "Google review" to avoid attributing text to invented people —
// swap in the real reviewer names when convenient.
const reviews = [
  { name: 'Google review', suburb: 'Craigieburn', service: 'Ceramic Coating', text: 'Muhammad was a champion — very happy with what he did. He went above and beyond, and the car looked as new.' },
  { name: 'Google review', suburb: 'Melbourne', service: 'Full Detail', text: 'Amazing outcome — very satisfied with how the car turned out. Highly recommended!' },
  { name: 'Google review', suburb: 'Craigieburn', service: 'Car Detailing', text: 'Excellent car detailing — the car looks like new. Great effort done inside and out.' },
  { name: 'Google review', suburb: 'Melbourne', service: 'Ceramic Coating', text: 'Booked in for a ceramic coating and couldn\'t be happier — great communication start to finish and the gloss on the paint is unreal. Highly recommend.' },
];

export default function HomePage() {
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
      <HomeSplash />
      <PageMeta
        title="Glossed Out Detailing — Car Detailing, Paint Correction & Ceramic Coating Melbourne"
        description="Melbourne car detailing, paint correction and ceramic coating — based in Craigieburn. Gtechniq, Magnum & Kraken certified. 113 five-star Google reviews."
        canonical="https://glossedoutdetailing.com.au/"
      />

      {/* HERO — Glossed Out banner intro video (white / premium) */}
      <section
        ref={heroRef}
        className="home-hero-premium"
        style={{ position: 'relative', minHeight: '90dvh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#eef1f1' }}
        aria-label="Hero — Car Detailing & Ceramic Coating Melbourne"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/glossed/glossed-intro-poster.jpg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        >
          <source src="/glossed/glossed-intro.mp4" type="video/mp4" />
        </video>
        {/* Soft white scrim — keeps the premium white feel and lifts the text */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(ellipse 74% 64% at 50% 50%, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.3) 46%, rgba(255,255,255,0.08) 100%)' }} />

        {/* Content */}
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2, maxWidth: 980, padding: '0 24px' }}>
          <p className="hero-anim hero-eyebrow" style={{ display: 'inline-block', color: 'var(--brand-gold-dk)', fontSize: 'clamp(12px, 1.6vw, 14px)', fontWeight: 700, margin: '0 0 18px', letterSpacing: '0.2em', textTransform: 'uppercase', lineHeight: 1.6, padding: '10px 24px', borderRadius: 999, background: 'rgba(255,255,255,0.38)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.55)', boxShadow: '0 6px 22px rgba(12,59,42,0.10)' }}>
            Melbourne's Prestige Mobile Detailer<br />10+ Years Experience
          </p>
          <h1 style={{ margin: 0, lineHeight: 0.9 }}>
            <span className="hero-anim font-display title-green-grad" style={{ display: 'block', fontSize: 'clamp(52px, 11vw, 140px)', letterSpacing: '-0.01em' }}>GLOSSED OUT</span>
            <span className="hero-anim font-display title-green-grad" style={{ display: 'block', fontSize: 'clamp(22px, 4vw, 44px)', letterSpacing: '0.34em', marginTop: 10, paddingLeft: '0.34em' }}>DETAILING</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--brand-green)', fontWeight: 600, fontSize: 'clamp(16px, 2vw, 20px)', margin: '24px auto 0', lineHeight: 1.5, maxWidth: 640, letterSpacing: '0.01em' }}>
            Ceramic Coating and Paint Protection Specialist.
          </p>
          <div className="hero-anim hero-cta-group" style={{ display: 'flex', gap: 12, marginTop: 34, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary" style={{ padding: '11px 26px', fontSize: 14, border: '1px solid var(--brand-gold)' }}>
              <span className="btn-slide" />
              <span>Contact Us</span>
            </Link>
            <Link to="/warranties" className="btn-emerald" style={{ padding: '11px 26px', fontSize: 14 }}>Warranties</Link>
          </div>
        </div>
      </section>

      <AccreditationBar />

      {/* SERVICES GRID */}
      <section ref={servicesRef} className="section services-wave-bg" style={{ position: 'relative', overflow: 'hidden', paddingTop: 'clamp(28px, 4vw, 44px)' }}>
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
              Glossed Out Detailing is Melbourne's mobile specialist for car detailing, paint correction and ceramic coating — certified in Gtechniq, Magnum, Kraken and CarPro. Where precision meets passion.
            </p>
          </div>
          <ServicesShowcase services={services} />
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
