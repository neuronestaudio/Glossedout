import ServicePageLayout from '../components/ServicePageLayout';
import { correction } from '../components/PackagesKit';

const faqs = [
  { q: 'What is paint correction?', a: 'Paint correction is the machine polishing process that removes swirl marks, oxidation, water spots and light scratches from your clear coat — restoring depth, clarity and gloss. It physically levels the paint rather than just filling defects, so the results are permanent (until new defects are introduced).' },
  { q: 'What\'s the difference between the levels?', a: 'Level 1 (Paint Enhancement Polish) is a light single polish for well-maintained or newer cars, removing ~20–30% of defects. Level 2 (One-Step Cut & Polish) is a significant refresh for daily drivers, ~60–70% defect removal. Level 3 (Two-Step Cut & Polish) is a multi-stage restoration for serious defects, ~80–90% removal.' },
  { q: 'Will paint correction remove all scratches?', a: 'Correction removes defects that sit within the clear coat — swirls, holograms, light scratches and oxidation. Deep scratches that have gone through the clear coat to the base coat can\'t be safely polished out and may need touch-up or respray. We\'ll assess your paint and tell you honestly what\'s achievable.' },
  { q: 'Do I need paint correction before a ceramic coating?', a: 'Yes — a coating locks in whatever is underneath it, so any swirls or defects get sealed in for years. That\'s why every ceramic package we do includes decontamination and at least a one-step correction first, so the coating goes over flawless paint.' },
  { q: 'How much does paint correction cost?', a: 'Correction packages start from $450 for a Level 1 enhancement. Pricing depends on the size, paint hardness and condition of your vehicle — send a few photos through the enquiry form for an accurate quote.' },
];

export default function PaintCorrectionServicePage() {
  return (
    <ServicePageLayout
      meta={{
        title: 'Paint Correction Melbourne — Glossed Out Detailing',
        description: 'Machine paint correction in Melbourne — swirl, oxidation and scratch removal from a gloss-boosting enhancement to a full multi-stage cut & polish. Packages from $450.',
        canonical: 'https://glossedoutdetailing.com.au/paint-correction-melbourne',
      }}
      eyebrow="Machine Polishing · Melbourne"
      title="Paint Correction"
      lead="Swirls, oxidation and scratches removed with the right level of machine correction for your paint — from a gloss-boosting enhancement to a full multi-stage restoration."
      heroImg="/glossed/paint-correction-altima.jpg"
      tiers={correction}
      carouselTitle="Paint Correction Packages"
      carouselIntro="Choose the level of correction your paint needs — a light enhancement, a one-step cut & polish, or a full multi-stage restoration."
      carouselNote="Paint condition varies car to car. Send a few photos through the enquiry form and we'll recommend the right level and quote it for you."
      faqs={faqs}
      faqTitle="Paint Correction Questions"
      ctaService="Paint Correction"
    />
  );
}
