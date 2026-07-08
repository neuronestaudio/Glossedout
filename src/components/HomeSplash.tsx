import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

/**
 * Landing splash — the gold G reveals, then hands off to the "GLOSSED OUT
 * Detailing" wordmark, then the whole thing fades to reveal the home page.
 * Same intro beat as the About cinematic. Plays once per session, respects
 * reduced-motion, and can be clicked to skip. Renders nothing on the server
 * (decided after mount) so there's no hydration mismatch or block-if-JS-fails.
 */
export default function HomeSplash() {
  const [state, setState] = useState<'idle' | 'play' | 'gone'>('idle');
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLSpanElement>(null);
  const markRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Decide whether to play (once, on mount).
  useEffect(() => {
    try {
      if (sessionStorage.getItem('go-splash-seen')) return;
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    } catch { /* sessionStorage blocked — just play */ }
    setState('play');
  }, []);

  const finish = () => {
    try { sessionStorage.setItem('go-splash-seen', '1'); } catch { /* ignore */ }
    document.body.style.overflow = '';
    setState('gone');
  };

  const skip = () => {
    if (!tlRef.current) return finish();
    tlRef.current.kill();
    gsap.to(rootRef.current, { opacity: 0, duration: 0.4, ease: 'power2.out', onComplete: finish });
  };

  // Run the animation once the overlay is rendered.
  useEffect(() => {
    if (state !== 'play') return;
    document.body.style.overflow = 'hidden';
    const ctx = gsap.context(() => {
      gsap.set(logoRef.current, { opacity: 0, scale: 0.7 });
      gsap.set(markRef.current, { opacity: 0, y: 16, scale: 1.04, filter: 'blur(10px)', letterSpacing: '0.12em' });
      gsap.set(subRef.current, { opacity: 0, y: 10, letterSpacing: '0.9em' });
      gsap.set(ruleRef.current, { width: 0, opacity: 0 });

      tlRef.current = gsap.timeline({ defaults: { ease: 'power3.out' }, onComplete: finish })
        // gold G in
        .to(logoRef.current, { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' }, 0.1)
        // hold, then G out
        .to(logoRef.current, { opacity: 0, scale: 1.16, filter: 'blur(8px)', duration: 0.65, ease: 'power2.in' }, 1.15)
        // wordmark hands in
        .to(ruleRef.current, { width: 72, opacity: 1, duration: 0.8 }, 1.3)
        .to(markRef.current, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', letterSpacing: '0.02em', duration: 1.2 }, 1.4)
        .to(subRef.current, { opacity: 1, y: 0, letterSpacing: '0.55em', duration: 1.1 }, 1.8)
        // hold on the wordmark, then reveal the site
        .to(rootRef.current, { opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 3.1);
    }, rootRef);
    return () => { ctx.revert(); document.body.style.overflow = ''; };
  }, [state]);

  if (state !== 'play') return null;

  return (
    <div ref={rootRef} className="home-splash" onClick={skip} role="presentation">
      <div ref={logoRef} className="home-splash__logo" aria-hidden="true">
        <span className="home-splash__glow" />
        <img src="/glossed-g.png" alt="" />
      </div>
      <span ref={ruleRef} className="home-splash__rule" />
      <h1 ref={markRef} className="home-splash__mark font-display hero-text-mono">Glossed Out</h1>
      <span ref={subRef} className="home-splash__sub">Detailing</span>
      <span className="home-splash__skip">Tap to skip</span>
    </div>
  );
}
