import { Link } from 'react-router-dom';
import { Shield, Droplets, Car, Award, ArrowRight } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import imgPPF     from '../assets/Website-photos/Screenshot 2026-03-16 181319.jpg';
import imgCeramic from '../assets/Website-photos/Screenshot 2026-03-16 181532.jpg';
import imgWarranty from '../assets/Website-photos/Screenshot 2026-03-16 181647.jpg';
import imgTinting from '../assets/Website-photos/Screenshot 2026-03-16 181728.jpg';

const tiles = [
  {
    icon: Shield,
    label: 'PPF',
    title: 'Paint Protection Film',
    tagline: 'Self-healing film. Stone chips stopped cold.',
    href: '/ppf-brisbane',
    image: imgPPF,
  },
  {
    icon: Droplets,
    label: 'Ceramic',
    title: 'Ceramic Coating',
    tagline: 'Hydrophobic protection backed by up to 10 years warranty.',
    href: '/ceramic-coating-brisbane',
    image: imgCeramic,
  },
  {
    icon: Car,
    label: 'Tinting',
    title: 'Window Tinting',
    tagline: 'Automotive, residential & commercial — all under one roof.',
    href: '/automotive-window-tinting-brisbane',
    image: imgTinting,
  },
  {
    icon: Award,
    label: 'Warranty',
    title: 'View Warranties',
    tagline: 'Manufacturer-backed warranties on every install — SunTek, NXTZEN, Solar Gard, 3M.',
    href: '/warranties',
    image: imgWarranty,
  },
];

export default function NextLevelProtectionPage() {
  return (
    <>
      <PageMeta
        title="Glossed Out Detailing Brisbane | PPF, Ceramic, Tinting"
        description="Glossed Out Detailing — Brisbane's certified PPF, ceramic coating and window tinting studio. Authorised installers based in Acacia Ridge."
        canonical="https://glossedoutdetailing.com.au/next-level-protection-brisbane"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Glossed Out Detailing Brisbane | PPF, Ceramic, Tinting",
            "url": "https://glossedoutdetailing.com.au/next-level-protection-brisbane",
            "about": { "@id": "https://glossedoutdetailing.com.au/#business" },
            "primaryImageOfPage": "https://glossedoutdetailing.com.au/NLP-Shop.jpeg",
            "inLanguage": "en-AU",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Is Glossed Out Detailing the same as Glossed Out Detailing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Glossed Out Detailing is the full name of the business — we operate under the brand Glossed Out Detailing. Same team, same studio, same certifications." } },
              { "@type": "Question", "name": "Where is Glossed Out Detailing located?", "acceptedAnswer": { "@type": "Answer", "text": "Goodrich Ct, Craigieburn VIC 3064 — in Brisbane's south." } },
              { "@type": "Question", "name": "What services does Glossed Out Detailing offer?", "acceptedAnswer": { "@type": "Answer", "text": "Paint protection film (PPF), ceramic coating, and window tinting — for automotive, residential, and commercial applications." } },
              { "@type": "Question", "name": "Is Glossed Out Detailing a certified installer?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. NXTZEN Certified Applicator, SunTek Authorised Installer, Solar Gard VTX PRO Authorised Installer, and 3M Authorised Window Film Installer." } },
              { "@type": "Question", "name": "How do I get a quote from Glossed Out Detailing?", "acceptedAnswer": { "@type": "Answer", "text": "Request a quote online, call 0481 327 250, or email admin@glossedoutdetailing.com.au. We respond within 2 business hours." } },
              { "@type": "Question", "name": "Does Glossed Out Detailing offer warranties?", "acceptedAnswer": { "@type": "Answer", "text": "Every product is covered by a manufacturer warranty — SunTek PPF up to 12 years, NXTZEN ceramics up to 10 years, plus 3M and Solar Gard warranty programs." } },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glossedoutdetailing.com.au/" },
              { "@type": "ListItem", "position": 2, "name": "Glossed Out Detailing Brisbane", "item": "https://glossedoutdetailing.com.au/next-level-protection-brisbane" },
            ],
          },
        ]}
      />

      {/* —— Scoped styles for image-zoom hover + mobile —— */}
      <style>{`
        .nlp-tile-bg {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }
        .nlp-tile:hover .nlp-tile-bg {
          transform: scale(1.07);
        }
        .nlp-tile-hover-gradient {
          position: absolute;
          inset: 0;
          opacity: 0;
          background: linear-gradient(135deg, rgba(99,179,237,0.35) 0%, rgba(159,122,234,0.45) 50%, rgba(236,72,153,0.35) 100%);
          transition: opacity 0.4s ease;
          z-index: 1;
        }
        .nlp-tile:hover .nlp-tile-hover-gradient {
          opacity: 1;
        }
        .nlp-arrow {
          transition: transform 0.2s ease;
          display: inline-flex;
        }
        .nlp-tile:hover .nlp-arrow {
          transform: translateX(5px);
        }
        .nlp-tile-tagline {
          display: block;
        }
        @media (max-width: 480px) {
          .nlp-header { padding: 14px 20px 10px !important; }
          .nlp-tile-tagline { display: none; }
        }
      `}</style>

      {/* —— Full-viewport no-scroll layout —— */}
      <div
        style={{
          height: 'calc(100dvh - 64px)',
          background: '#0A0C10',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          className="nlp-header"
          style={{
            textAlign: 'center',
            padding: 'clamp(14px, 2.5vh, 36px) 24px clamp(10px, 1.5vh, 20px)',
            flexShrink: 0,
          }}
        >
          <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.3)', margin: '0 0 8px' }}>
            Glossed Out Detailing &mdash; Acacia Ridge, Brisbane
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(22px, 3.8vw, 52px)',
              letterSpacing: '-0.025em',
              lineHeight: 1,
              color: '#000',
              margin: '0 0 8px',
            }}
          >
            Glossed Out Detailing
          </h1>
          <p style={{ color: '#000', fontSize: 'clamp(11px, 1.1vw, 14px)', margin: 0 }}>
            PPF &middot; Ceramic Coating &middot; Window Tinting &mdash; Brisbane&apos;s certified protection studio.
          </p>
          <p style={{ marginTop: 8, fontSize: 'clamp(10px, 1vw, 13px)', margin: '8px 0 0' }}>
            <Link to="/next-level-protection-tds" style={{ color: '#000', textDecoration: 'underline', textUnderlineOffset: 3 }}>
              View our product technical data sheets (TDS) &rarr;
            </Link>
          </p>
        </div>

        {/* 2×2 tile grid */}
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: 3,
            padding: '0 3px 3px',
            minHeight: 0,
            height: 0,
          }}
        >
          {tiles.map(({ icon: Icon, label, title, tagline, href, image }) => (
            <Link
              key={href}
              to={href}
              className="nlp-tile"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 'clamp(14px, 2.5vw, 32px)',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background photo */}
              <div
                className="nlp-tile-bg"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {/* 50% black overlay on image */}
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
              {/* Dark gradient — heavier at bottom for legibility */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(160deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.88) 100%)',
                }}
              />
              {/* Hover gradient fill */}
              <div className="nlp-tile-hover-gradient" />

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Service label pill */}
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  padding: '4px 10px',
                  borderRadius: 100,
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  fontSize: 10,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.65)',
                  marginBottom: 10,
                }}>
                  <Icon size={10} strokeWidth={2} />
                  {label}
                </span>

                <h2
                  className="font-display"
                  style={{
                    fontSize: 'clamp(22px, 3.2vw, 43px)',
                    color: 'rgba(255,255,255,0.9)',
                    margin: '0 0 6px',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.1,
                  }}
                >
                  {title}
                </h2>

                <p
                  className="nlp-tile-tagline"
                  style={{
                    color: 'rgba(255,255,255,0.52)',
                    fontSize: 'clamp(11px, 0.95vw, 13px)',
                    lineHeight: 1.55,
                    margin: '0 0 14px',
                  }}
                >
                  {tagline}
                </p>

                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                }}>
                  Explore
                  <span className="nlp-arrow">
                    <ArrowRight size={12} strokeWidth={2} />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
