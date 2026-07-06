import { useEffect, useRef } from 'react';
import './team-panorama.css';

type Person = {
  name: string;
  role: string;
  sx: number; sy: number;   // shoulder dot (measured off the photo, %)
  lx: number; ly: number;   // label connection edge (%)
  dir: 'left' | 'right';    // which way the label extends
};

// Connector dot sits on each person's SHOULDER; an elbow (vertical riser, then
// a horizontal run) carries the label out to (lx, ly) — a measured clear spot
// over the gaps/car. The label heights are staggered (Loki highest → Lina
// lowest) so nothing overlaps another label or a face, on desktop OR mobile.
const PEOPLE: Person[] = [
  { name: 'Edwin', role: 'PPF & Tint Installer', sx: 16, sy: 35, lx: 18, ly: 27, dir: 'right' },
  { name: 'Lina', role: 'General Manager', sx: 37, sy: 40, lx: 43, ly: 43, dir: 'right' },
  { name: 'Vince', role: 'PPF & Tint Specialist', sx: 66, sy: 36, lx: 64, ly: 24, dir: 'left' },
  { name: 'Loki', role: 'Founder & Lead Installer', sx: 83, sy: 35, lx: 80, ly: 13, dir: 'left' },
];

// Photo parallax travel as a fraction of the layer height. Layer is scaled
// 1.08, giving ~4% headroom each way, so ±2.5% stays safely inside the frame.
const TRAVEL_PCT = 5;

// Per-label vertical parallax amplitude (px). Each pill drifts at its own rate
// so the labels float over the photo with depth, staggered left-to-right.
const LABEL_AMP = [10, 14, 12, 16];

// Scroll-linked reveal: each pill scrubs in over a window of scroll progress,
// staggered left-to-right. Fully revealed a touch before the section is centred.
const REVEAL_BASE = 0.14; // progress at which the first pill starts revealing
const REVEAL_STEP = 0.05; // stagger between consecutive pills
const REVEAL_WIN = 0.18;  // how much scroll progress each pill takes to appear
const smoothstep = (t: number) => t * t * (3 - 2 * t);

type Props = {
  src: string;
  alt: string;
  caption?: string;
  people?: Person[];
  // Tuck the section up under the cinematic "Meet the Team" handoff so there
  // isn't a full empty viewport of white between the title and the photo.
  pullUp?: boolean;
};

export default function TeamPanorama({ src, alt, caption, people = PEOPLE, pullUp }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const layer = layerRef.current;
    if (!viewport || !layer) return;

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    // Cache the pill elements so we can reveal + drift each independently.
    const pillEls = pillsRef.current
      ? Array.from(pillsRef.current.querySelectorAll<HTMLElement>('.nlp-pano__pill'))
      : [];

    // Reduced motion: just show everything, no scroll animation.
    if (prefersReduced) {
      pillEls.forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
      return;
    }

    // Parallax: translate the over-scaled photo layer, AND scrub each label in
    // (opacity + rise) and drift it at its own rate as the section passes
    // through the viewport. rAF-driven so it stays smooth under Lenis.
    let raf = 0;
    const tick = () => {
      raf = 0;
      const rect = viewport.getBoundingClientRect();
      const winH = window.innerHeight || 1;
      const p = Math.max(0, Math.min(1, (winH - rect.top) / (winH + rect.height)));
      const shift = (p - 0.5) * TRAVEL_PCT;
      layer.style.transform = `translate3d(0, ${shift.toFixed(2)}%, 0) scale(1.08)`;
      pillEls.forEach((el, i) => {
        // Scroll-linked reveal, staggered left-to-right.
        const t = smoothstep(Math.max(0, Math.min(1, (p - (REVEAL_BASE + i * REVEAL_STEP)) / REVEAL_WIN)));
        // Parallax drift + reveal rise are both kept <= 0 (upward only), so the
        // label never drops below its anchor and — being offset to the side too
        // — never covers a face at any scroll position.
        const drift = -Math.abs(0.5 - p) * (LABEL_AMP[i] ?? 24);
        const rise = -(1 - t) * 12;
        el.style.opacity = t.toFixed(3);
        el.style.transform = `translateY(${(drift + rise).toFixed(2)}px)`;
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    tick();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className={`nlp-pano${pullUp ? ' nlp-pano--pull' : ''}`} aria-label="The Glossed Out Detailing team">
      <div ref={viewportRef} className="nlp-pano__viewport">
        <div ref={layerRef} className="nlp-pano__layer">
          <img className="nlp-pano__img" src={src} alt={alt} />
          <div ref={pillsRef} className="nlp-pano__pills">
            {people.map((p) => {
              const vTop = Math.min(p.sy, p.ly);
              const vH = Math.abs(p.sy - p.ly);
              const hL = Math.min(p.sx, p.lx);
              const hW = Math.abs(p.sx - p.lx);
              return (
                <div key={p.name} className="nlp-pano__pill">
                  <span className="nlp-pano__pill-dot" style={{ left: `${p.sx}%`, top: `${p.sy}%` }} />
                  <span className="nlp-pano__pill-v" style={{ left: `${p.sx}%`, top: `${vTop}%`, height: `${vH}%` }} />
                  <span className="nlp-pano__pill-h" style={{ left: `${hL}%`, top: `${p.ly}%`, width: `${hW}%` }} />
                  <div
                    className={`nlp-pano__pill-inner nlp-pano__pill-inner--${p.dir}`}
                    style={{ left: `${p.lx}%`, top: `${p.ly}%` }}
                  >
                    <span className="nlp-pano__pill-name">{p.name}</span>
                    <span className="nlp-pano__pill-role">{p.role}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {caption && (
          <div className="nlp-pano__caption">
            <span className="nlp-pano__caption-tick" />
            {caption}
          </div>
        )}
      </div>
    </section>
  );
}
