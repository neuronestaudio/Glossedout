import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type LenisType from 'lenis';
import FrameSequence from './FrameSequence';
import './about-cinematic.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* Scroll-scrubbed cinematic intro hero.
   The mp4 (stitched to frames via ffmpeg) already carries the "Glossed Out
   Detailing" branding, so the footage scrubs CLEAN — no overlays fighting it.
   At the end it fades to a radial emerald→black frame and cross-fades a couple
   of centred "sayings", settling on the hero tagline. Lenis = smooth scroll. */

const FRAMES_DIR = 'intro-frames';
const FRAME_COUNT = 228;
const MAX_FRAME_INDEX = 227;
const SCROLL_VH = 460;

const FOOTAGE_IN = 0.02;
const FOOTAGE_OUT = 0.64;

const SAYINGS = [
  { eyebrow: 'Ten years · Melbourne', l1: 'Detailing done', l2: 'properly.' },
  { eyebrow: 'Glossed Out Detailing', l1: 'Where precision', l2: 'meets passion.' },
];

// [appearAt, disappearAt] within pinned progress. Last one holds to the end.
const SAYING_WINDOWS: [number, number][] = [
  [0.70, 0.82],
  [0.88, 1.01],
];

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const ramp = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));

export default function IntroCineHero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const footageProgRef = useRef(0);
  const footageLayerRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const sayingRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    let lenis: LenisType | null = null;
    let tickerFn: ((time: number) => void) | null = null;
    let disposed = false;
    if (!prefersReduced) {
      void import('lenis').then(({ default: Lenis }) => {
        if (disposed) return;
        lenis = new Lenis({
          duration: 1.25,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.2,
        });
        lenis.on('scroll', ScrollTrigger.update);
        tickerFn = (time: number) => lenis?.raf(time * 1000);
        gsap.ticker.add(tickerFn);
        gsap.ticker.lagSmoothing(0);
        ScrollTrigger.refresh();
      });
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: stage,
        start: 'top top',
        end: () => '+=' + window.innerHeight * ((SCROLL_VH - 100) / 100),
        pin: true,
        pinSpacing: true,
        scrub: 0.4,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          footageProgRef.current = ramp(p, FOOTAGE_IN, FOOTAGE_OUT);

          if (footageLayerRef.current) footageLayerRef.current.style.opacity = String(ramp(p, 0, 0.03));
          if (vignetteRef.current) vignetteRef.current.style.opacity = String(ramp(p, 0.56, 0.70));
          if (endRef.current) endRef.current.style.opacity = String(ramp(p, 0.66, 0.80));
          if (cueRef.current) cueRef.current.style.opacity = p < 0.05 ? '1' : '0';

          SAYING_WINDOWS.forEach(([a, b], i) => {
            const el = sayingRefs.current[i];
            if (!el) return;
            const appear = ramp(p, a, a + 0.05);
            const disappear = ramp(p, b - 0.05, b);
            el.style.opacity = String(appear * (1 - disappear));
            el.style.transform = `translateY(${(1 - appear) * 26 - disappear * 22}px)`;
          });
        },
      });
    }, stage);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      disposed = true;
      ctx.revert();
      if (tickerFn) gsap.ticker.remove(tickerFn);
      lenis?.destroy();
    };
  }, []);

  return (
    <section className="nlp-cine">
      <div ref={stageRef} className="nlp-cine__stage" style={{ background: '#061c14' }}>
        {/* Footage — scrubbed, clean */}
        <div ref={footageLayerRef} className="nlp-cine__footage" style={{ opacity: 0 }}>
          <FrameSequence
            progressRef={footageProgRef}
            framesDir={FRAMES_DIR}
            frameCount={FRAME_COUNT}
            maxFrameIndex={MAX_FRAME_INDEX}
            scrubEnd={1}
          />
          <div className="nlp-cine__grain" />
        </div>

        {/* Vignette darkens the footage before the handoff */}
        <div ref={vignetteRef} className="nlp-cine__vignette" style={{ opacity: 0 }} />

        {/* Radial emerald → black end frame */}
        <div
          ref={endRef}
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, opacity: 0, zIndex: 20,
            background: 'radial-gradient(ellipse 95% 85% at 50% 42%, #0E4636 0%, #0A2B1E 46%, #04140e 100%)',
          }}
        />

        {/* Cross-fading centred sayings */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 21, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          {SAYINGS.map((s, i) => (
            <div
              key={i}
              ref={(el) => { sayingRefs.current[i] = el; }}
              style={{ position: 'absolute', opacity: 0, textAlign: 'center', padding: '0 24px', maxWidth: 1000 }}
            >
              <p style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--brand-gold-lt)', marginBottom: 18 }}>{s.eyebrow}</p>
              <h2 className="font-display" style={{ fontSize: 'clamp(38px, 7vw, 92px)', lineHeight: 0.96, color: '#fff', margin: 0 }}>
                {s.l1}<br /><span style={{ color: 'var(--brand-gold)' }}>{s.l2}</span>
              </h2>
            </div>
          ))}
        </div>

        {/* Scroll cue (fades out immediately) */}
        <div ref={cueRef} className="nlp-cine__cue"><span>Scroll</span><span className="nlp-cine__cue-line" /></div>
      </div>
    </section>
  );
}
