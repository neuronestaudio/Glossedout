import { useId, useState, type CSSProperties } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  /** Describes the subject. Becomes the slider's accessible name. */
  alt?: string;
  /** Optional caption under the frame — the part of the car, and the car. */
  area?: string;
  vehicle?: string;
  /** Fixed pixel height. Omit for the default 4:5 box. */
  height?: number;
}

/* The handle is a real <input type="range"> stretched over the whole image and
   made invisible. That buys click-anywhere, drag, touch and full keyboard
   support (arrows, Home/End) from the platform instead of from a pile of
   pointer handlers, and screen readers announce it as the slider it is. The
   previous hand-rolled version had `role="slider"` with nothing focusable
   behind it, so it could not be operated by keyboard at all. */
export default function BeforeAfterSlider({
  before,
  after,
  alt = 'Before and after',
  area,
  vehicle,
  height,
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);
  const id = useId();
  const fixedHeight = typeof height === 'number';

  return (
    <figure className="ba">
      <div
        className={`ba-frame${fixedHeight ? ' ba-frame--fixed' : ''}`}
        style={{ '--ba-pos': `${pos}%`, ...(fixedHeight ? { height } : null) } as CSSProperties}
      >
        <img className="ba-img" src={after} alt={`${alt} — after`} loading="lazy" decoding="async" />
        {/* The same frame, clipped rather than resized, so the two halves always
            line up pixel for pixel. `alt=""` because it is the other half of a
            comparison the slider itself already announces. */}
        <div className="ba-clip">
          <img className="ba-img" src={before} alt="" loading="lazy" decoding="async" />
        </div>

        <span className="ba-tag ba-tag--before" aria-hidden="true">Before</span>
        <span className="ba-tag ba-tag--after" aria-hidden="true">After</span>

        <input
          id={id}
          className="ba-range"
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={pos}
          onChange={e => setPos(Number(e.target.value))}
          aria-label={`Reveal the before and after: ${alt}`}
        />

        <div className="ba-divider" aria-hidden="true">
          <span className="ba-knob">
            <ChevronLeft size={15} strokeWidth={3} />
            <ChevronRight size={15} strokeWidth={3} />
          </span>
        </div>
      </div>

      {(area || vehicle) && (
        <figcaption className="ba-cap">
          {area && <span className="ba-cap__area">{area}</span>}
          {vehicle && <span className="ba-cap__veh">{vehicle}</span>}
        </figcaption>
      )}
    </figure>
  );
}
