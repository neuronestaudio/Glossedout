import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, type LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  /** The primary still. Kept for callers that don't supply a set. */
  img: string;
  /** The full set for this service, cycled inside the slide. */
  imgs?: string[];
}

const AUTO_MS = 6000;
const PHOTO_MS = 3200;

const shotsOf = (s: ServiceItem) => (s.imgs?.length ? s.imgs : [s.img]);

/**
 * The services as a selectable carousel: one service shown large, the other
 * three named on the tabs beneath it.
 *
 * The tabs are the point. A dot carousel would hide three of the four things
 * this business sells behind an unlabelled dot, and these are the entry points
 * to the money pages, so the names stay on screen and stay clickable.
 *
 * The layout is split rather than an overlay because Moe's service photos are
 * finished graphics with their own headlines burned in — "GLOSS", "BUG
 * REMOVAL", "CERAMIC COATING". Laying our own title and scrim over them would
 * put two headlines on top of each other, so the photo gets its own frame and
 * the copy sits beside it. For the same reason the photos are contained, never
 * cropped: cropping would cut the very text they were made for.
 *
 * Follows the ARIA tabs pattern rather than a carousel one: roving tabindex,
 * left/right (and Home/End) move the selection, each panel a tabpanel labelled
 * by its tab. Only the active panel is mounted, so no hidden copy is reachable
 * and no unseen service downloads its photos.
 */
export default function ServicesShowcase({ services }: { services: ServiceItem[] }) {
  const [active, setActive] = useState(0);
  const [photo, setPhoto] = useState(0);
  const uid = useId();
  const interacted = useRef(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const go = useCallback(
    (i: number, byUser = false) => {
      if (byUser) interacted.current = true;
      setActive(((i % services.length) + services.length) % services.length);
      // A new service starts at its own first photo, never mid-set.
      setPhoto(0);
    },
    [services.length],
  );

  const service = services[active];
  const shots = shotsOf(service);

  const reduced = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Moves through the services on its own until the visitor takes over, then
     never again — something that keeps moving under someone reading it is
     worse than something that sits still. */
  useEffect(() => {
    if (interacted.current || reduced()) return;
    const t = window.setTimeout(() => go(active + 1), AUTO_MS);
    return () => window.clearTimeout(t);
  }, [active, go]);

  /* Within a service, its own photos cycle. This keeps running after the
     visitor picks a tab — that is the point of choosing one: you stay put and
     see all of its work. */
  useEffect(() => {
    if (shots.length < 2 || reduced()) return;
    const t = window.setTimeout(() => setPhoto(p => (p + 1) % shots.length), PHOTO_MS);
    return () => window.clearTimeout(t);
  }, [photo, shots.length]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const next =
      e.key === 'ArrowRight' ? active + 1
      : e.key === 'ArrowLeft' ? active - 1
      : e.key === 'Home' ? 0
      : e.key === 'End' ? services.length - 1
      : null;
    if (next === null) return;
    e.preventDefault();
    const i = ((next % services.length) + services.length) % services.length;
    go(i, true);
    tabRefs.current[i]?.focus();
  };

  const Icon = service.icon;

  return (
    <div className="svc-car">
      <div className="svc-stage">
        <article
          className="svc-slide"
          key={active}
          role="tabpanel"
          id={`${uid}-panel-${active}`}
          aria-labelledby={`${uid}-tab-${active}`}
        >
          <div className="svc-copy">
            <span className="svc-copy__icon" aria-hidden="true">
              <Icon size={24} color="#E4C766" strokeWidth={1.75} />
            </span>
            <h3 className="svc-copy__title font-display">{service.title}</h3>
            <p className="svc-copy__desc">{service.desc}</p>
            <Link to={service.href} className="svc-copy__cta">
              Explore {service.title} <ArrowRight size={17} />
            </Link>
          </div>

          <div className="svc-shots">
            {shots.map((src, i) => (
              <div className="svc-shot" data-on={i === photo} key={src}>
                {/* A blurred copy of the same frame fills the gap left by
                    containing it, so a square graphic in a 4:5 box doesn't sit
                    on flat bars. */}
                <div className="svc-shot__fill" style={{ backgroundImage: `url("${src}")` }} aria-hidden="true" />
                <img
                  className="svc-shot__img"
                  src={src}
                  alt={i === 0 ? `${service.title} by Glossed Out Detailing` : ''}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}

            {shots.length > 1 && (
              <div className="svc-dots">
                {shots.map((src, i) => (
                  <button
                    type="button"
                    key={src}
                    className="svc-dot"
                    data-on={i === photo}
                    onClick={() => setPhoto(i)}
                    aria-label={`Show photo ${i + 1} of ${shots.length}`}
                  />
                ))}
              </div>
            )}
          </div>
        </article>

        <button type="button" className="svc-arrow svc-arrow--prev" onClick={() => go(active - 1, true)} aria-label="Previous service">
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>
        <button type="button" className="svc-arrow svc-arrow--next" onClick={() => go(active + 1, true)} aria-label="Next service">
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>
      </div>

      <div className="svc-tabs" role="tablist" aria-label="Our services" onKeyDown={onKeyDown}>
        {services.map((s, i) => {
          const TabIcon = s.icon;
          const on = i === active;
          return (
            <button
              type="button"
              key={s.title}
              ref={el => { tabRefs.current[i] = el; }}
              className="svc-tab"
              data-on={on}
              role="tab"
              id={`${uid}-tab-${i}`}
              aria-selected={on}
              aria-controls={`${uid}-panel-${i}`}
              /* Roving tabindex: the strip is one tab stop, arrows move within it. */
              tabIndex={on ? 0 : -1}
              onClick={() => go(i, true)}
            >
              <TabIcon size={17} strokeWidth={2} aria-hidden="true" />
              <span>{s.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
