/**
 * Before/after pairs shown on the home page.
 *
 * PROVENANCE: these are Glossed Out's own job photos, from the client Drive
 * archive (`Drive Archive/01_Raw_From_Drive`) by way of the before-after
 * montage project, where each pair was matched, EXIF-corrected and cropped to
 * a common 4:5. Only 7 of the 33 vehicles in that archive were shot before and
 * after at all, so this set is picked from 14 usable pairs — not from the whole
 * archive. If more are wanted, Moe has to shoot befores on new jobs.
 *
 * Chosen for the most instantly readable difference, one from each kind of
 * work: a whole car, a wheel, a boot, an interior.
 *
 * The Audi is the censored variant, with the plate already masked by the
 * client. It is the only full-car exterior pair that can be published — the
 * BMW front three-quarter is the other one, and its plate is legible in both
 * frames.
 *
 * `area` and `vehicle` are the real subject of each photo. Don't relabel them
 * to something more flattering — the wheel pair is the one the Google review
 * about brake dust is describing.
 */

export interface BeforeAfterPair {
  slug: string;
  /** The car, as it is recorded in the archive. */
  vehicle: string;
  /** What part of the car the photo shows. */
  area: string;
  before: string;
  after: string;
}

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    slug: 'audi-front',
    vehicle: '2016 Audi Q7',
    area: 'Front end',
    before: '/before-after/audi-front-before.jpg',
    after: '/before-after/audi-front-after.jpg',
  },
  {
    slug: 'hsv-wheel',
    vehicle: '2010 HSV VE GTS',
    area: 'Wheel & caliper',
    before: '/before-after/hsv-wheel-before.jpg',
    after: '/before-after/hsv-wheel-after.jpg',
  },
  {
    slug: 'celica-boot',
    vehicle: '2002 Toyota Celica',
    area: 'Boot & spare well',
    before: '/before-after/celica-boot-before.jpg',
    after: '/before-after/celica-boot-after.jpg',
  },
  {
    slug: 'subaru-cc',
    vehicle: 'Subaru Tribeca',
    area: 'Centre console',
    before: '/before-after/subaru-cc-before.jpg',
    after: '/before-after/subaru-cc-after.jpg',
  },
];
