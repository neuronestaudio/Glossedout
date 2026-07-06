import { useState } from 'react';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';
import { galleryPhotos, type GalleryCategory } from '../data/galleryPhotos';

type Filter = 'All' | GalleryCategory;

const CATEGORIES: Filter[] = ['All', 'Detailing', 'Paint Correction', 'Ceramic'];

export default function GalleryPage() {
  const [active, setActive] = useState<Filter>('All');
  const filtered = active === 'All' ? galleryPhotos : galleryPhotos.filter(g => g.category === active);

  return (
    <>
      <PageMeta
        title="Gallery — Detailing, Paint Correction & Ceramic Coating Melbourne"
        description="Real work from Glossed Out Detailing in Craigieburn, Melbourne — car detailing, paint correction and ceramic coating."
        canonical="https://glossedoutdetailing.com.au/gallery"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Glossed Out Detailing — Gallery",
            "description": "Real work from Glossed Out Detailing in Craigieburn, Melbourne — detailing, paint correction and ceramic coating.",
            "url": "https://glossedoutdetailing.com.au/gallery",
            "provider": { "@id": "https://glossedoutdetailing.com.au/#business" },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glossedoutdetailing.com.au/" },
              { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://glossedoutdetailing.com.au/gallery" },
            ],
          },
        ]}
      />
      <section style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: 'var(--section-padding-x)', paddingRight: 'var(--section-padding-x)', background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ color: 'var(--color-accent)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Our Work</p>
          <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', lineHeight: 1, marginBottom: 24 }}>Gallery</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.75, maxWidth: 600, marginBottom: 40 }}>
            Real work from our Craigieburn studio — detailing, paint correction, and ceramic coating. Filter by service below.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 0 }}>
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setActive(c)} style={{ padding: '8px 18px', fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, borderRadius: 2, cursor: 'pointer', transition: 'all 0.2s', background: active === c ? 'var(--color-accent)' : 'transparent', color: active === c ? '#FFFFFF' : 'var(--color-text-secondary)', border: `1px solid ${active === c ? 'var(--color-accent)' : 'var(--color-border)'}` }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '20px var(--section-padding-x) 80px', background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 1fr))', gap: 20 }}>
            {filtered.map((item, i) => (
              <div key={i} className="card" style={{ overflow: 'hidden' }}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: '16px 20px 18px' }}>
                  <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: 600 }}>{item.category}</span>
                  <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 6, lineHeight: 1.5 }}>{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', padding: '60px 0' }}>No gallery items found for this category.</p>
          )}
        </div>
      </section>

      <CTABlock service="Protection Package" defaultService="Other" />
    </>
  );
}
