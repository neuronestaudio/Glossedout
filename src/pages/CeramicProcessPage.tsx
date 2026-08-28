import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import CoatingProcess from '../components/CoatingProcess';
import CTABlock from '../components/CTABlock';
import AccreditationBar from '../components/AccreditationBar';
import { COATING_STAGES } from '../data/coatingStages';

const CANONICAL = 'https://glossedoutdetailing.com.au/ceramic-coating-process';

export default function CeramicProcessPage() {
  return (
    <>
      <PageMeta
        title="The Ceramic Coating Process — Glossed Out Detailing Melbourne"
        description="How a ceramic coating is actually applied, stage by stage: decontamination, paint correction, coating and protection. Gtechniq, Magnum and Kraken accredited, Melbourne."
        canonical={CANONICAL}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'The ceramic coating process',
            description:
              'The four stages of a professional ceramic coating application: decontamination, paint correction, coating and protection.',
            step: COATING_STAGES.map(s => ({
              '@type': 'HowToStep',
              position: s.n,
              name: s.label,
              text: s.body,
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glossedoutdetailing.com.au/' },
              { '@type': 'ListItem', position: 2, name: 'Ceramic Coating Process', item: CANONICAL },
            ],
          },
        ]}
      />

      {/* Intro — sets up the carousel rather than repeating it */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--brand-gold-dk)', fontWeight: 700, marginBottom: 16 }}>
            Melbourne · Craigieburn studio &amp; mobile
          </p>
          <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', lineHeight: 1.02, marginBottom: 20 }}>
            What actually happens<br />
            <span style={{ color: 'var(--brand-gold-dk)' }}>to your paint.</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 17, lineHeight: 1.75 }}>
            Most of the cost of a ceramic coating is not the bottle. It is the days of preparation
            that happen before it, because a coating permanently locks in whatever it is laid over.
            Here is the whole process, stage by stage.
          </p>
        </div>
      </section>

      <CoatingProcess />

      {/* The honest counterweight, same as the home page carries */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 18 }}>
            And what a coating is not
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>
            A coating is not armour. It will not stop a stone chip, a trolley or a key, and it does
            not make a car self-cleaning. What it does is make a good finish easier to keep and
            slower to degrade — which over years of ownership is worth real money. Anyone telling
            you otherwise is selling something.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-packages-melbourne" className="btn-primary">
              <span className="btn-slide" /><span>See ceramic packages</span>
            </Link>
            <Link to="/warranties" className="btn-ghost">Warranties</Link>
          </div>
        </div>
      </section>

      <AccreditationBar />

      <CTABlock service="Ceramic Coating" defaultService="Ceramic Coating" />
    </>
  );
}
