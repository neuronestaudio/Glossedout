import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type LenisType from 'lenis';
import FrameSequence from './FrameSequence';
import './about-cinematic.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* Scroll-scrubbed cinematic hero for the "intro" home demo.
   Frames are stitched from /d/glossed out intro.mp4 via ffmpeg and scrubbed
   by scroll progress (Lenis smooth-scroll). Ends by fading to the brand dark
   green so it hands off seamlessly into the page below. */

const FRAMES_DIR = 'intro-frames';
const FRAME_COUNT = 228;
const MAX_FRAME_INDEX = 227;
const SCROLL_VH = 440;

const INTRO_OUT_START = 0.08;
const FOOTAGE_IN = 0.15;
const FOOTAGE_OUT = 0.72;
const END_IN_START = 0.80;
const END_IN_END = 0.94;
const END_TEXT_IN = 0.86;

const CHAPTERS = [
  {
    eyebrow: '01 · Melbourne',
    heading: 'Precision meets\npassion.',
    sub: "Melbourne's prestige mobile detailer — detailing, paint correction and ceramic coating, done properly and never rushed.",
  },
  {
    eyebrow: '02 · The Craft',
    heading: '10+ years\nof it.',
    sub: 'A ceramic coating specialist accredited in Gtechniq, Magnum, Kraken and CarPro — applied to spec, backed to last.',
  },
  {
    eyebrow: '03 · The Proof',
    heading: '113 five-star\nreviews.',
    sub: "From Melbourne drivers who don't leave reviews lightly. The finish speaks for itself.",
  },
];

const CHAPTER_LABELS = ['Melbourne', 'Craft', 'Proof'];
const CHAPTER_TIMINGS = [
  { in: 0.21, out: 0.35 },
  { in: 0.40, out: 0.54 },
  { in: 0.58, out: 0.70 },
];

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const ramp = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));

export default function IntroCineHero() {
  const stageRef = useRef<HTMLDivElement>(null);
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
  const endRef = useRef<HTMLDivElement>(null);
  const endTextRef = useRef<HTMLDivElement>(null);

  const [activeChapter, setActiveChapter] = useState(0);

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
      gsap.set(introMarkRef.current, { opacity: 0, y: 16, scale: 1.04, filter: 'blur(10px)', letterSpacing: '0.12em' });
      gsap.set(introSubRef.current, { opacity: 0, y: 10, letterSpacing: '0.9em' });
      gsap.set(introRuleRef.current, { width: 0, opacity: 0 });

      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .to(introRuleRef.current, { width: 72, opacity: 1, duration: 0.9 }, 0.15)
        .to(introMarkRef.current, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', letterSpacing: '0.02em', duration: 1.5 }, 0.2)
        .to(introSubRef.current, { opacity: 1, y: 0, letterSpacing: '0.55em', duration: 1.4 }, 0.6);

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

          const introOut = 1 - ramp(p, INTRO_OUT_START, FOOTAGE_IN);
          if (introRef.current) introRef.current.style.opacity = String(introOut);
          if (footageLayerRef.current) footageLayerRef.current.style.opacity = String(ramp(p, INTRO_OUT_START, FOOTAGE_IN));

          if (vignetteRef.current) vignetteRef.current.style.opacity = String(ramp(p, FOOTAGE_OUT, END_IN_START));
          if (endRef.current) endRef.current.style.opacity = String(ramp(p, END_IN_START, END_IN_END));
          if (endTextRef.current) endTextRef.current.style.opacity = String(ramp(p, END_TEXT_IN, 0.985));

          if (railWrapRef.current) {
            railWrapRef.current.style.opacity = String(
              ramp(p, FOOTAGE_IN, FOOTAGE_IN + 0.03) * (1 - ramp(p, FOOTAGE_OUT - 0.04, FOOTAGE_OUT)),
            );
          }
          if (cueRef.current) cueRef.current.style.opacity = p < 0.04 ? '1' : '0';

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

        {/* Vignette darkens the footage before the handoff */}
        <div ref={vignetteRef} className="nlp-cine__vignette" />

        {/* Dark-green end overlay — fades in and hands off into the page */}
        <div
          ref={endRef}
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, opacity: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 90% 80% at 50% 40%, #0E4636 0%, #0A2B1E 55%, #061c14 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <div ref={endTextRef} style={{ opacity: 0, textAlign: 'center', padding: '0 24px' }}>
            <p style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--brand-gold-lt)', marginBottom: 18 }}>Glossed Out Detailing</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(34px, 6vw, 76px)', lineHeight: 0.98, color: '#fff' }}>
              Where precision<br /><span style={{ color: 'var(--brand-gold)' }}>meets passion.</span>
            </h2>
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
