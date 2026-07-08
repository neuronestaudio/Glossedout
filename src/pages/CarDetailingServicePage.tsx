import ServicePageLayout from '../components/ServicePageLayout';
import { detailing } from '../components/PackagesKit';

const faqs = [
  { q: 'What\'s included in a car detail?', a: 'It depends on the package. Our Essential Detail covers a full exterior hand wash, wheels and tyres, door jambs, an interior vacuum and a wipe-down of the dash, console and plastics with streak-free glass. The Premium Full Detail adds paint sealant protection, full interior steam cleaning and shampoo extraction, and leather conditioning. The Prestige Detail is a complete transformation — engine bay, full decontamination wash and a paint enhancement polish.' },
  { q: 'Do you come to me, or do I bring the car to you?', a: 'We\'re a mobile detailer across Melbourne, and we also work from our studio in Craigieburn. Send us your location when you enquire and we\'ll confirm what\'s possible for your vehicle and package.' },
  { q: 'How much does a detail cost?', a: 'Detailing packages start from $229 for an Essential Detail. Final pricing depends on the size and condition of your vehicle — send a few photos through the enquiry form and we\'ll put together a tailored quote, no obligation.' },
  { q: 'How long does a detail take?', a: 'A light Essential Detail is a few hours; a Premium or Prestige Detail with steam cleaning, decontamination and polishing can be most of a day. We\'ll give you an accurate time estimate when we confirm your booking.' },
  { q: 'How often should I get my car detailed?', a: 'For most drivers, a full detail every 3–6 months keeps the car looking its best, with lighter maintenance washes in between. If your car is ceramic coated, correct maintenance washing extends the finish and protects the coating.' },
];

export default function CarDetailingServicePage() {
  return (
    <ServicePageLayout
      meta={{
        title: 'Car Detailing Melbourne — Glossed Out Detailing',
        description: 'Premium mobile car detailing in Melbourne — hand wash, interior steam clean, decontamination and paint enhancement. Packages from $229. Craigieburn-based, mobile across Melbourne.',
        canonical: 'https://glossedoutdetailing.com.au/car-detailing-melbourne',
      }}
      eyebrow="Signature Detailing · Melbourne"
      title="Car Detailing"
      lead="Hand-washed, steam-cleaned and finished by hand — from a light maintenance reset to a full showroom transformation. Mobile across Melbourne, never rushed."
      heroImg="/glossed/detailing-gen.jpg"
      tiers={detailing}
      carouselTitle="Detailing Packages"
      carouselIntro="From a light maintenance reset to a full showroom transformation — hand-washed, steam-cleaned and finished by hand, never rushed."
      carouselNote="Every detail is tailored to your car. Send a few photos through the enquiry form and we'll put together a personalised quote."
      faqs={faqs}
      faqTitle="Car Detailing Questions"
      ctaService="Car Detailing"
    />
  );
}
