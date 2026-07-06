import maserati from '../assets/glossed/hero-maserati-mc20.webp';
import benz from '../assets/glossed/benz.jpg';
import porsche from '../assets/glossed/porsche.jpg';
import correction from '../assets/glossed/paint-correction-altima.jpg';
import detailing from '../assets/glossed/detailing-gen.jpg';
import g1 from '../assets/glossed/gallery-1.jpg';
import g2 from '../assets/glossed/gallery-2.jpg';
import g3 from '../assets/glossed/gallery-3.jpg';
import tesla from '../assets/glossed/gallery-tesla.jpg';

export type GalleryCategory = 'Detailing' | 'Paint Correction' | 'Ceramic';

export interface GalleryPhoto {
  src: string;
  alt: string;
  category: GalleryCategory;
}

// Every image unique — no duplicates.
export const galleryPhotos: GalleryPhoto[] = [
  { src: maserati, alt: 'Maserati MC20 — ceramic coating', category: 'Ceramic' },
  { src: porsche, alt: 'Porsche — ceramic coating & gloss', category: 'Ceramic' },
  { src: g2, alt: 'Deep gloss after ceramic coating', category: 'Ceramic' },
  { src: tesla, alt: 'Tesla Model Y — ceramic coating & mirror gloss', category: 'Ceramic' },
  { src: benz, alt: 'Mercedes-Benz — full exterior detail', category: 'Detailing' },
  { src: detailing, alt: 'Full exterior hand detail', category: 'Detailing' },
  { src: g1, alt: 'Exterior detail — deep gloss finish', category: 'Detailing' },
  { src: g3, alt: 'Interior & exterior detail', category: 'Detailing' },
  { src: correction, alt: 'Paint correction — machine polishing', category: 'Paint Correction' },
];
