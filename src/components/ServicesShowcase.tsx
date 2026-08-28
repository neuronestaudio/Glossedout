import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, type LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  img: string;
}

const AUTO_MS = 6000;

/**
 * The services as a selectable carousel: one service shown large, with the
 * other three named on the tabs beneath it.
 *
 * The tabs are the point. A plain dot carousel hides three of the four things
 * this business sells behind an unlabelled dot, and these are the entry points
 * to the money pages — so the names stay on screen and stay clickable, and the
 * carousel is what changes behind them.
 *
 * Follows the ARIA tabs pattern rather than a carousel one: roving tabindex,
 * left/right (and Home/End) move the selection, and each panel is a tabpanel
 * labelled by its tab. Inactive panels are `visibility: hidden`, which takes
 * them out of both the tab order and the accessibility tree on its own, so
 * nothing inside them needs hiding by hand.
 */
export default function ServicesShowcase({ services }: { services: ServiceItem[] }) {
  const [active, setActive] = useState(0);
  const uid = useId();
  const timer = useRef<number | undefined>(undefined);
  const interacted = useRef(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const go = useCallback(
    (i: number, byUser = false) => {
      if (byUser) interacted.current = true;
      setActive(((i % services.length) + services.length) % services.length);
    },
    [services.length],
  );

  /* Advances on its own until the visitor takes over, then never again — an
     element that keeps moving under someone who is reading it is worse than
     one that sits still. */
  useEffect(() => {
    if (interacted.current) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer.current = window.setTimeout(() => go(active + 1), AUTO_MS);
    return () => window.clearTimeout(timer.current);
  }, [active, go]);

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

  return (
    <div className="svc-car">
      <div className="svc-stage">
        {services.map((s, i) => {
          const Icon = s.icon;
          const on = i === active;
          return (
            <article
              key={s.title}
              className="svc-slide"
              data-on={on}
              role="tabpanel"
              id={`${uid}-panel-${i}`}
              aria-labelledby={`${uid}-tab-${i}`}
            >
              <div className="svc-slide__img" style={{ backgroundImage: `url("${s.img}")` }} aria-hidden="true" />
              <div className="svc-slide__scrim" aria-hidden="true" />
              <div className="svc-slide__body">
                <span className="svc-slide__icon" aria-hidden="true">
                  <Icon size={24} color="#E4C766" strokeWidth={1.75} />
                </span>
                <h3 className="svc-slide__title font-display">{s.title}</h3>
                <p className="svc-slide__desc">{s.desc}</p>
                <Link to={s.href} className="svc-slide__cta">
                  Explore {s.title} <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          );
        })}

        <button type="button" className="svc-arrow svc-arrow--prev" onClick={() => go(active - 1, true)} aria-label="Previous service">
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>
        <button type="button" className="svc-arrow svc-arrow--next" onClick={() => go(active + 1, true)} aria-label="Next service">
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>
      </div>

      <div className="svc-tabs" role="tablist" aria-label="Our services" onKeyDown={onKeyDown}>
        {services.map((s, i) => {
          const Icon = s.icon;
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
              <Icon size={17} strokeWidth={2} aria-hidden="true" />
              <span>{s.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
