import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type LenisType from 'lenis';
import FrameSequence from './FrameSequence';
import './about-cinematic.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ---- Scene config ----
const FRAMES_DIR = 'about-frames';
const FRAME_COUNT = 240;
const MAX_FRAME_INDEX = 239;
// Total experience length in viewport-heights (1 visible + the rest scrubbed).
const SCROLL_VH = 440;

// ---- Act windows (fractions of pinned scroll progress 0..1) ----
const INTRO_OUT_START = 0.08;
const FOOTAGE_IN = 0.15;
// Vignette begins the instant chapter 3 fades — no extra footage scroll.
const FOOTAGE_OUT = 0.70;
const WHITE_IN_START = 0.76;
const WHITE_IN_END = 0.90;
const TEAM_TEXT_IN = 0.86;

const CHAPTERS = [
  {
    eyebrow: '01 · The Studio',
    heading: 'Based in\nCraigieburn.',
    sub: 'A car detailing, paint correction and ceramic coating studio in Melbourne — mobile across the city, every job done properly and never rushed.',
  },
  {
    eyebrow: '02 · The Standard',
    heading: 'No shortcuts\non prep.',
    sub: 'Ten years of hands-on experience. Every car is decontaminated and corrected before any coating goes on — no coating over contamination or swirl marks.',
  },
  {
    eyebrow: '03 · Accredited',
    heading: 'Coating\nspecialist.',
    sub: 'A ceramic coating specialist accredited in Gtechniq, Magnum, Kraken and CarPro — so your durability comes from the coating, not a self-issued guarantee.',
  },
];

const CHAPTER_LABELS = ['Studio', 'Standard', 'Certified'];

const CHAPTER_TIMINGS = [
  { in: 0.21, out: 0.35 },
  { in: 0.40, out: 0.54 },
  { in: 0.58, out: 0.69 },
];

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const ramp = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));

export default function AboutHero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const progRef = useRef(0);
  const footageProgRef = useRef(0);

  const introRef = useRef<HTMLDivElement>(null);
  const introRuleRef = useRef<HTMLSpanElement>(null);
  const introMarkRef = useRef<HTMLHeadingElement>(null);
  const introSubRef = useRef<HTMLSpanElement>(null);

  const footageLayerRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cueRef = useRef<HTMLDivElement>(null);
  const railWrapRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);
  const whiteRef = useRef<HTMLDivElement>(null);
  const teamTextRef = useRef<HTMLDivElement>(null);

  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    // Smooth scroll (scoped to this page's lifetime). Lenis is loaded
    // dynamically so it never runs during server-side prerender.
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
      // Intro wordmark animate-in on load.
      gsap.set(introMarkRef.current, { opacity: 0, y: 16, scale: 1.04, filter: 'blur(10px)', letterSpacing: '0.12em' });
      gsap.set(introSubRef.current, { opacity: 0, y: 10, letterSpacing: '0.9em' });
      gsap.set(introRuleRef.current, { width: 0, opacity: 0 });

      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .to(introRuleRef.current, { width: 72, opacity: 1, duration: 0.9 }, 0.15)
        .to(introMarkRef.current, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', letterSpacing: '0.02em', duration: 1.5 }, 0.2)
        .to(introSubRef.current, { opacity: 1, y: 0, letterSpacing: '0.55em', duration: 1.4 }, 0.6);

      // Pin the stage and scrub everything off a single trigger. Uses
      // ScrollTrigger pin (not CSS sticky) because the site sets
      // overflow-x:hidden on html/body, which breaks position:sticky.
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
          progRef.current = p;
          footageProgRef.current = ramp(p, FOOTAGE_IN, FOOTAGE_OUT);

          const introOut = 1 - ramp(p, INTRO_OUT_START, FOOTAGE_IN);
          if (introRef.current) introRef.current.style.opacity = String(introOut);
          if (footageLayerRef.current) footageLayerRef.current.style.opacity = String(ramp(p, INTRO_OUT_START, FOOTAGE_IN));

          if (vignetteRef.current) vignetteRef.current.style.opacity = String(ramp(p, FOOTAGE_OUT, WHITE_IN_START));
          if (whiteRef.current) whiteRef.current.style.opacity = String(ramp(p, WHITE_IN_START, WHITE_IN_END));
          if (teamTextRef.current) teamTextRef.current.style.opacity = String(ramp(p, TEAM_TEXT_IN, 0.985));

          if (railWrapRef.current) {
            railWrapRef.current.style.opacity = String(
              ramp(p, FOOTAGE_IN, FOOTAGE_IN + 0.03) * (1 - ramp(p, FOOTAGE_OUT - 0.04, FOOTAGE_OUT)),
            );
          }
          if (cueRef.current) cueRef.current.style.opacity = p < 0.04 ? '1' : '0';

          // Chapter fades (driven directly so they share the pinned range).
          CHAPTER_TIMINGS.forEach((t, i) => {
            const el = chapterRefs.current[i];
            if (!el) return;
            const appear = ramp(p, t.in, t.in + 0.03);
            const disappear = ramp(p, t.out, t.out + 0.03);
            el.style.opacity = String(appear * (1 - disappear));
            el.style.transform = `translateY(${(1 - appear) * 12 - disappear * 10}px)`;
          });

          const local = ramp(p, FOOTAGE_IN, FOOTAGE_OUT);
          const idx = Math.min(CHAPTER_LABELS.length - 1, Math.floor(local * CHAPTER_LABELS.length));
          setActiveChapter((curr) => (curr === idx ? curr : idx));
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
      <div ref={stageRef} className="nlp-cine__stage">
        {/* Footage */}
        <div ref={footageLayerRef} className="nlp-cine__footage">
          <FrameSequence
            progressRef={footageProgRef}
            framesDir={FRAMES_DIR}
            frameCount={FRAME_COUNT}
            maxFrameIndex={MAX_FRAME_INDEX}
            scrubEnd={1}
          />
          <div className="nlp-cine__grad-v" />
          <div className="nlp-cine__grad-h" />
          <div className="nlp-cine__grain" />
        </div>

        {/* Chapters */}
        {CHAPTERS.map((c, i) => (
          <div
            key={c.eyebrow}
            ref={(el) => { chapterRefs.current[i] = el; }}
            className="nlp-cine__chapter"
          >
            <div className="nlp-cine__chapter-inner">
              <span className="nlp-cine__eyebrow">
                <span className="nlp-cine__tick" />
                {c.eyebrow}
              </span>
              <h2 className="nlp-cine__heading">{c.heading}</h2>
              <p className="nlp-cine__sub">{c.sub}</p>
            </div>
          </div>
        ))}

        {/* Scroll cue */}
        <div ref={cueRef} className="nlp-cine__cue">
          <span>Scroll</span>
          <span className="nlp-cine__cue-line" />
        </div>

        {/* Right rail indicator */}
        <div ref={railWrapRef} className="nlp-cine__rail" style={{ opacity: 0 }}>
          <ul>
            {CHAPTER_LABELS.map((label, i) => (
              <li key={label}>
                <span className={`nlp-cine__rail-label${activeChapter === i ? ' is-active' : ''}`}>{label}</span>
                <span className={`nlp-cine__rail-dot${activeChapter === i ? ' is-active' : ''}`} />
              </li>
            ))}
          </ul>
        </div>

        {/* Vignette + white "Meet the Team" */}
        <div ref={vignetteRef} className="nlp-cine__vignette" />
        <div ref={whiteRef} className="nlp-cine__white">
          <div ref={teamTextRef} className="nlp-cine__white-inner">
            <span className="nlp-cine__white-eyebrow">
              <span className="nlp-cine__white-tick" />
              The People
            </span>
            <h2 className="nlp-cine__white-title">Meet the Detailer</h2>
          </div>
        </div>

        {/* Intro wordmark */}
        <div ref={introRef} className="nlp-cine__intro">
          <span ref={introRuleRef} className="nlp-cine__intro-rule" />
          <h1 ref={introMarkRef} className="nlp-cine__intro-mark">Glossed Out</h1>
          <span ref={introSubRef} className="nlp-cine__intro-sub">Detailing</span>
        </div>
      </div>
    </section>
  );
}
