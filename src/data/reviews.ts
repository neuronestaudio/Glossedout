/**
 * Google reviews, transcribed verbatim from the Google Business Profile.
 *
 * Do not edit the wording. These are real customers' words — tidying a typo or
 * sharpening a phrase turns a review into marketing copy, which is both
 * dishonest and, for Google reviews, against their terms.
 *
 * Where a review was too long for a card, the excerpt is a contiguous run of
 * whole sentences taken from the start — never a reworded summary. Reviews
 * marked "excerpt" below have more text on Google.
 *
 * `timeAgo` is relative and will drift. Re-transcribe when refreshing the set;
 * these were captured in August 2026.
 */

export interface Review {
  /** Reviewer name exactly as it appears on Google. */
  name: string;
  /** Relative age as Google displays it, e.g. "4 weeks ago". */
  timeAgo: string;
  text: string;
}

export const reviews: Review[] = [
  {
    name: 'Illishia Limited',
    timeAgo: '6 days ago',
    // excerpt — full review continues
    text: 'Mohammed did an amazing job coating my vehicle. It looks brand new!',
  },
  {
    name: 'Afendi Ahmed',
    timeAgo: '3 weeks ago',
    // excerpt — full review continues
    text: 'A huge thank you to Mo at Glossed Out Detailing for the amazing job on my Kia Carnival.',
  },
  {
    name: 'Lisa Haber',
    timeAgo: '4 weeks ago',
    text: 'Great service. Great communication. Very happy with Mohammed\'s work.',
  },
  {
    name: 'arab freestyle',
    timeAgo: '5 weeks ago',
    text: 'Got good advice and recommendation from them. Muhammed was very knowledgeable and professional. He helped me guide through everything. Best car detailer in Melbourne. 100% recommended.',
  },
  {
    name: 'Mankeerat Walia',
    timeAgo: '6 weeks ago',
    text: 'The job was impeccable. Not a spot missed on the vehicle. Shows up at 9am at my place, takes over the garage, and wallah @4pm the damn car is shrinck and glossed out. Interior 10/10, Exterior 10/10. Perfection, professional, attention to detail, no shortcuts.',
  },
  {
    name: 'Bilgz Cengiz',
    timeAgo: '17 weeks ago',
    text: 'My car was in desperate need of a thorough clean inside and out, and Glossed Out Detailing absolutely delivered. I\'m especially impressed with the rims, they were covered in brake dust that I thought was impossible to remove, but now they\'re completely spotless!',
  },
  {
    name: 'Marcus Burton',
    timeAgo: '18 weeks ago',
    // excerpt — full review is several paragraphs
    text: 'I got my Triton ceramic coated and I\'m genuinely blown away. The finish is ridiculous — deep gloss, mirror-like shine, and the level of detail is on another planet.',
  },
];
