import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Award, MapPin, Clock, Phone, Mail, Shield, Star } from 'lucide-react';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';
import AboutHero from './about/AboutHero';
import craftBg from '../assets/team/craft-bg.jpg';

const founderImg = '/glossed/founder.png';

const certifications = [
  { title: 'Gtechniq', desc: 'Applies Gtechniq coatings (including CSL) to manufacturer specification, so the durability and warranty hold.' },
  { title: 'Magnum Certified', desc: 'Certified in the Magnum range — Graphene (7-year) and Borophene (10-year) ceramic coatings.' },
  { title: 'Kraken Certified', desc: 'Certified in Kraken self-healing graphene and graphene-titanium coatings, up to 10 years of protection.' },
  { title: 'CarPro Trained', desc: 'Trained in CarPro professional surface-care products used through the detailing and prep process.' },
];

const values = [
  { icon: Shield, title: 'No shortcuts on prep', desc: 'Prep is where most detailers cut corners. I don\'t. Every car is decontaminated, corrected where needed, and inspected before any coating goes on.' },
  { icon: Star, title: 'Named products, never generic', desc: 'Gtechniq, Magnum, Kraken and CarPro — professional coatings I\'m accredited in. No unbranded bottle, no mystery ceramic.' },
  { icon: Award, title: 'One person, full accountability', desc: 'Your car is worked on by me, start to finish. No handing it to a junior, no conveyor belt — just one detailer who answers for every panel.' },
];

export default function AboutPage() {
  const detailerRef = useRef<HTMLElement>(null);

  // Reveal "The Detailer" as it scrolls out of the cinematic — a soft fade/rise
  // so it reads as a reveal rather than scrolling onto a plain section. Class is
  // added in JS so the content is never hidden if scripts don't run (SSR-safe).
  useEffect(() => {
    const el = detailerRef.current;
    if (!el) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    el.classList.add('detailer-reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { el.classList.add('is-in'); io.disconnect(); }
        });
      },
      { threshold: 0.14 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <PageMeta
        title="About Glossed Out Detailing — Melbourne Ceramic Coating Specialist"
        description="Glossed Out Detailing is a one-person Melbourne studio in Craigieburn. 10+ years in car detailing and paint protection, ceramic coating specialist accredited in Gtechniq, Magnum, Kraken and CarPro."
        canonical="https://glossedoutdetailing.com.au/about"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Glossed Out Detailing",
            "url": "https://glossedoutdetailing.com.au/about",
            "about": { "@id": "https://glossedoutdetailing.com.au/#business" },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glossedoutdetailing.com.au/" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://glossedoutdetailing.com.au/about" },
            ],
          },
        ]}
      />

      {/* Cinematic scroll-scrubbed hero — frames stitched from the mp4 via ffmpeg,
          scrubbed by scroll progress (Lenis smooth-scroll active site-wide). */}
      <AboutHero />

      {/* The Detailer — founder feature (flows straight out of the cinematic
          "Meet the Detailer" handoff) */}
      <section ref={detailerRef} className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brand-gold-dk)', marginBottom: 12 }}>The Detailer</p>
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
            <div className="card" style={{ overflow: 'hidden', padding: 0, aspectRatio: '4 / 5', position: 'relative' }}>
              <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: `url(${founderImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(10,43,30,0.85) 100%)' }} />
              <div style={{ position: 'absolute', left: 24, bottom: 22, zIndex: 1 }}>
                <p className="font-display" style={{ fontSize: 30, color: '#fff', letterSpacing: '0.02em', lineHeight: 1 }}>Mohammed</p>
                <p style={{ color: 'var(--brand-gold-lt)', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 6 }}>Founder &amp; Detailer</p>
              </div>
            </div>
            <div>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 20, lineHeight: 1.05 }}>
                From a Craigieburn <span style={{ color: 'var(--brand-gold-dk)' }}>garage.</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.85, marginBottom: 18 }}>
                Glossed Out Detailing started modestly as a small home-based business in Craigieburn, Victoria, operating from a garage with limited space and equipment. Despite our humble beginnings, our commitment to delivering top-quality ceramic coating, paint correction and auto detailing across Craigieburn and greater Victoria has always been unwavering. What truly sets us apart is a genuine dedication to our clients — and as we've grown over the years, one principle has stayed at the core: putting our clients' needs first.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.85, marginBottom: 28 }}>
                Though we now specialise in advanced ceramic coating and paint correction, we stay connected to our roots. We start by understanding each customer's specific needs and craft personalised solutions that exceed expectations. Our Craigieburn-based operation may have transformed over time, but we're far from your typical auto detailers — we go above and beyond to build lasting relationships and provide unparalleled service to every client who trusts us with their vehicle.
              </p>
              <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                <div>
                  <p className="font-display" style={{ fontSize: 34, color: 'var(--brand-green)', lineHeight: 1 }}>10+</p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>Years experience</p>
                </div>
                <div>
                  <p className="font-display" style={{ fontSize: 34, color: 'var(--brand-green)', lineHeight: 1 }}>113</p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>Five-star reviews</p>
                </div>
                <div>
                  <p className="font-display" style={{ fontSize: 22, color: 'var(--brand-green)', lineHeight: 1.1, letterSpacing: '0.01em' }}>Ceramic Coating<br />Specialist</p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 6 }}>Multi-Accreditation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Studio + contact */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 24 }}>The Studio</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
                Glossed Out Detailing runs mobile across Melbourne plus a studio in Craigieburn, covering car detailing, paint correction and ceramic coating for everyday and prestige vehicles alike.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
                The coatings are Gtechniq, Magnum, Kraken and CarPro — named, accredited products, applied to manufacturer spec. That means the durability you're quoted is the durability the coating is rated for, not a number pulled from thin air.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.8 }}>
                Every job starts with prep. No coating over contamination, swirl marks, or compromised paint. It takes longer and costs more. That's how it should be done.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a
                href="https://maps.google.com/?q=Glossed+Out+Detailing+Craigieburn"
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{ padding: '24px 20px', display: 'flex', gap: 16, alignItems: 'flex-start', textDecoration: 'none', color: 'inherit' }}
              >
                <MapPin size={20} color="var(--color-accent)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Location</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>Craigieburn, Melbourne VIC<br />Mobile service across Melbourne</p>
                </div>
              </a>
              <div className="card" style={{ padding: '24px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <Clock size={20} color="var(--color-accent)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Hours</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>Open 7 days · 8am–8pm<br />Mobile + Craigieburn studio</p>
                </div>
              </div>
              <div className="card" style={{ padding: '24px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <Phone size={20} color="var(--color-accent)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Phone</p>
                  <a href="tel:0481327250" style={{ color: 'var(--color-accent)', fontSize: 13 }}>0481 327 250</a>
                </div>
              </div>
              <div className="card" style={{ padding: '24px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <Mail size={20} color="var(--color-accent)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Email</p>
                  <a href="mailto:admin@glossedoutdetailing.com.au" style={{ color: 'var(--color-accent)', fontSize: 13 }}>admin@glossedoutdetailing.com.au</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Accreditations</h2>
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, maxWidth: 880 }}>
            {certifications.map((c, i) => (
              <div key={i} className="card" style={{ padding: '28px 24px' }}>
                <Award size={20} color="var(--color-accent)" strokeWidth={1.5} style={{ marginBottom: 16 }} />
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 10 }}>{c.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section howwework-photo" style={{ background: 'var(--color-bg-primary)' }}>
        <div
          className="howwework-photo__bg"
          aria-hidden
          style={{ backgroundImage: `linear-gradient(180deg, rgba(8,9,13,0.62), rgba(8,9,13,0.68)), url(${craftBg})` }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40, color: '#fff' }}>How I Work</h2>
          <div className="grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {values.map((v, i) => { const Icon = v.icon; return (
              <div key={i} className="card" style={{ padding: '36px 28px' }}>
                <Icon size={22} color="var(--color-accent)" strokeWidth={1.5} style={{ marginBottom: 18 }} />
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: '0.02em', marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
          <h2 className="font-display" style={{ fontSize: 'var(--size-hero)', lineHeight: 0.9 }}>
            <span className="shine-anim-accent" style={{ display: 'block' }}>Detailing is</span>
            <span className="shine-anim-accent" style={{ display: 'block' }}>a craft.</span>
          </h2>
        </div>
      </section>

      <CTABlock service="Next Detail" defaultService="Ceramic Coating" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/detailing-packages-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Our Services</Link>
            <Link to="/gallery" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>View Gallery</Link>
            <Link to="/ceramic-coating-melbourne" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating</Link>
            <Link to="/product-tds" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Coating TDS</Link>
          </div>
        </div>
      </section>
    </>
  );
}
