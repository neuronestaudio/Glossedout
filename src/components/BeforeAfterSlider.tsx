import { useRef, useState, useEffect } from 'react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt?: string;
  height?: number;
}

export default function BeforeAfterSlider({ before, after, alt = 'Before and after', height = 360 }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updatePos = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => { if (dragging.current) updatePos(e.clientX); };
  const onPointerUp = () => { dragging.current = false; };

  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePos(e.clientX); };
  const onMouseUp = () => { dragging.current = false; };

  useEffect(() => {
    if (afterRef.current) afterRef.current.style.width = `${pos}%`;
    if (handleRef.current) handleRef.current.style.left = `${pos}%`;
  }, [pos]);

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      style={{ height, cursor: 'ew-resize' }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      role="slider"
      aria-label={alt}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Before image */}
      <img src={before} alt={`Before — ${alt}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
      <span className="ba-chip" style={{ left: 10 }}>Before</span>

      {/* After image */}
      <div ref={afterRef} className="ba-after" style={{ width: `${pos}%` }}>
        <img src={after} alt={`After — ${alt}`} style={{ width: containerRef.current?.offsetWidth + 'px' || '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
      </div>
      <span className="ba-chip" style={{ right: 10 }}>After</span>

      {/* Handle */}
      <div
        ref={handleRef}
        className="ba-handle"
        style={{ left: `${pos}%` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      />
    </div>
  );
}
