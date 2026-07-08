import ServicePageLayout from '../components/ServicePageLayout';
import { ceramicUsed } from '../components/PackagesKit';

const faqs = [
  { q: 'How long does a ceramic coating last?', a: 'It depends on the coating. Our range runs from a 5-year Gtechniq CSL up to 10-year Magnum Borophene and Kraken Elite Graphene Titanium coatings. The durability figure comes from the manufacturer\'s product — not a number we invented — and holds when the coating is maintained to its care requirements.' },
  { q: 'What\'s the difference between the coatings?', a: 'Entry is Gtechniq CSL (5-year) — high gloss, UV and hydrophobic protection. Magnum Graphene (7-year) adds durability and reduced water spotting; Magnum Borophene (10-year) is maximum longevity. Kraken Elite Plus (7-year) and Graphene Titanium (10-year) are self-healing — light surface marring recovers with heat — with the deepest gloss in the range. The upper tiers include free wheel-face and glass coatings.' },
  { q: 'What\'s included in a ceramic package?', a: 'Every package includes decontamination and clay bar, a one-step paint correction so the coating bonds to flawless paint, and the ceramic coating itself. Premium tiers add free wheel-face ceramic and glass coating; a two-step correction upgrade is available on request.' },
  { q: 'Do you coat both new and used cars?', a: 'Yes. Used and existing cars include a full one-step paint correction first so any swirls are corrected before coating. New or near-new cars can go straight to coating. Tell us your car\'s condition when you enquire and we\'ll confirm the process.' },
  { q: 'How do I maintain a ceramic coating?', a: 'Correct maintenance washing with pH-neutral products keeps the hydrophobic performance strong and protects the warranty. We provide aftercare guidance at handover, and some manufacturers require periodic inspections or registration — we\'ll walk you through anything that applies to your coating.' },
];

export default function CeramicPackagesServicePage() {
  return (
    <ServicePageLayout
      meta={{
        title: 'Ceramic Coating Packages Melbourne — Glossed Out Detailing',
        description: 'Ceramic coating packages in Melbourne — Gtechniq CSL, Magnum Graphene & Borophene, Kraken Elite self-healing. 5–10 year manufacturer-backed durability. Compare coatings & warranties.',
        canonical: 'https://glossedoutdetailing.com.au/ceramic-coating-packages-melbourne',
      }}
      eyebrow="Gtechniq · Magnum · Kraken Elite"
      title="Ceramic Coating"
      lead="Long-term gloss, UV protection and hydrophobic self-cleaning, backed by up to a 10-year manufacturer coating. Every package includes decontamination and a full one-step paint correction."
      heroImg="/covers/ceramic-cover.jpg"
      tiers={ceramicUsed}
      carouselTitle="Ceramic Coating Packages"
      carouselIntro="Named, professional-grade coatings from a 5-year Gtechniq CSL up to 10-year self-healing Kraken Elite — choose the protection and longevity that suits your car."
      carouselNote="All packages include decontamination and a one-step paint correction. A two-step correction upgrade is available on request."
      faqs={faqs}
      faqTitle="Ceramic Coating Questions"
      showWarranty
      ctaService="Ceramic Coating"
    />
  );
}
