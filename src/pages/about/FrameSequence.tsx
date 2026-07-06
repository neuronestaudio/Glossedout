import { useEffect, useRef, useState } from 'react';

interface FrameSequenceProps {
  /** ref whose .current is a 0..1 scroll progress */
  progressRef: React.MutableRefObject<number>;
  /** folder under /public (e.g. "about-frames") */
  framesDir: string;
  frameCount: number;
  /** highest 0-based frame index the scrub should reach */
  maxFrameIndex: number;
  /** fraction of scroll where the scrub stops (last bit holds) */
  scrubEnd?: number;
}

/**
 * Canvas-painted image sequence driven by a scroll progress ref.
 * All browser work happens in effects, so it is safe to server-render
 * (the canvas simply paints once it hydrates on the client).
 */
export default function FrameSequence({
  progressRef,
  framesDir,
  frameCount,
  maxFrameIndex,
  scrubEnd = 1,
}: FrameSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const lastIdxRef = useRef(-1);
  const sizeRef = useRef({ w: 0, h: 0 });
  const [loadedPct, setLoadedPct] = useState(0);
  const [firstFramePainted, setFirstFramePainted] = useState(false);

  const framePath = (i: number) => `/${framesDir}/f${String(i).padStart(3, '0')}.webp`;

  function draw(force: boolean, targetIdx?: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { w, h } = sizeRef.current;
    if (!w || !h) return;

    const idx = targetIdx ?? lastIdxRef.current;
    if (idx < 0) return;

    // Nearest loaded frame so partial loads still draw something.
    let img = framesRef.current[idx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      let found: HTMLImageElement | null = null;
      for (let off = 1; off < frameCount; off++) {
        const a = framesRef.current[idx - off];
        if (a && a.complete && a.naturalWidth > 0) { found = a; break; }
        const b = framesRef.current[idx + off];
        if (b && b.complete && b.naturalWidth > 0) { found = b; break; }
      }
      if (!found) return;
      img = found;
    }

    if (!force && idx === lastIdxRef.current) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // object-cover math
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const ir = iw / ih;
    const cr = w / h;
    let dw: number, dh: number, dx: number, dy: number;
    if (ir > cr) {
      dh = h; dw = h * ir; dx = (w - dw) / 2; dy = 0;
    } else {
      dw = w; dh = w / ir; dx = 0; dy = (h - dh) / 2;
    }
    ctx.drawImage(img, dx, dy, dw, dh);
    lastIdxRef.current = idx;
  }

  // Preload all frames once mounted.
  useEffect(() => {
    let cancelled = false;
    let loaded = 0;
    const images = new Array<HTMLImageElement>(frameCount);

    const order: number[] = [];
    order.push(0, frameCount - 1);
    for (let stride = Math.floor(frameCount / 2); stride >= 1; stride = Math.floor(stride / 2)) {
      for (let i = 0; i < frameCount; i += stride) {
        if (!order.includes(i)) order.push(i);
      }
      if (stride === 1) break;
    }
    for (let i = 0; i < frameCount; i++) {
      if (!order.includes(i)) order.push(i);
    }

    order.forEach((i) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = framePath(i + 1);
      images[i] = img;
      img.onload = () => {
        if (cancelled) return;
        loaded++;
        setLoadedPct(Math.round((loaded / frameCount) * 100));
        if (i === 0) {
          setFirstFramePainted(true);
          requestAnimationFrame(() => draw(true));
        }
      };
      img.onerror = () => {
        if (cancelled) return;
        loaded++;
        setLoadedPct(Math.round((loaded / frameCount) * 100));
      };
    });

    framesRef.current = images;
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameCount, framesDir]);

  // Canvas sizing for crisp rendering on retina screens.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      sizeRef.current = { w: canvas.width, h: canvas.height };
      lastIdxRef.current = -1;
      draw(true);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Per-frame draw loop driven by scroll progress via the shared ref.
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const p = progressRef?.current ?? 0;
      const vp = Math.min(1, p / scrubEnd);
      const idx = Math.min(maxFrameIndex, Math.max(0, Math.round(vp * maxFrameIndex)));
      if (idx !== lastIdxRef.current) draw(false, idx);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressRef, maxFrameIndex, scrubEnd]);

  return (
    <>
      <canvas ref={canvasRef} className="nlp-cine__canvas" aria-hidden="true" />
      {!firstFramePainted && (
        <div className="nlp-cine__loader">
          <span>{loadedPct}%</span>
        </div>
      )}
    </>
  );
}
