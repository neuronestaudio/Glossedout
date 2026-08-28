/**
 * The ceramic coating process, in four stages.
 *
 * PROVENANCE
 *
 * Recreated from the four-stage carousel built for the Overspray Removalist
 * site, which was pulled from that home page when the client decided not to
 * advertise coating work. The four background clips are Dion's own footage —
 * unbranded process shots (foam, machine correction, a corrected panel, an
 * applicator) with no logo and no identifiable vehicle, greyscale in the source
 * rather than by CSS filter.
 *
 * The stage names and their order are the standard coating process and are not
 * anyone's intellectual property.
 *
 * WHAT CHANGED FOR GLOSSED OUT
 *
 * The original stage three deliberately described what a coating does without
 * naming one, because that client had not signed off a coating range. Glossed
 * Out has: Gtechniq, Magnum and Kraken are accredited and already named across
 * this site, so stage three names them here too.
 *
 * Still NOT carried over are the nanometre and hardness figures from the site
 * that copy originally came from — a graphene coating at 1000nm and 10H, a
 * quartz coating at 800nm. Those are another business's product claims, not
 * ours to repeat.
 */
export interface CoatingStage {
  /** Big ghost word behind the card. */
  word: string;
  /** Short label for the pip's accessible name. */
  label: string;
  heading: string;
  body: string;
  /** 1-4, matching /coating/stage-N.mp4 */
  n: number;
}

export const COATING_STAGES: CoatingStage[] = [
  {
    n: 1,
    word: 'Decontaminate',
    label: 'Decontaminate',
    heading: 'The surface has to be genuinely clean first',
    body:
      'Pressure wash to lift loose dirt, hand wash, rinse, then clay to pull bonded contamination out of the paint. A coating bonds to whatever it is laid on. Sealing fallout, rail dust or overspray under it locks that damage in for the life of the coating.',
  },
  {
    n: 2,
    word: 'Correct',
    label: 'Correct',
    heading: 'Swirls, scratches and dullness, gone',
    body:
      'Machine cut takes out scratches, spider webbing and oxidation, then a machine glaze de-swirls the finish and brings the gloss back. Whatever the paint looks like at this point is what the coating locks in, so correction is not an upsell — it is the step that decides the result.',
  },
  {
    n: 3,
    word: 'Coat',
    label: 'Coat',
    heading: 'Chemically bonded to the clear coat',
    body:
      'A liquid polymer is laid over the corrected finish and chemically bonds to the duco, curing into a hard, semi-permanent layer rather than sitting on top like a wax. Gtechniq, Magnum or Kraken depending on the package. Glass, wheels and interior surfaces take their own coatings, matched to what each one has to survive.',
  },
  {
    n: 4,
    word: 'Protect',
    label: 'Protect',
    heading: 'A barrier between your paint and the road',
    body:
      'The cured layer is hydrophobic: water beads and carries dirt off with it. The car stays cleaner longer, washes and dries far more easily, holds a deeper gloss, and resists wash marks, bird droppings, road film and UV. Maintenance from there is minimal.',
  },
];
