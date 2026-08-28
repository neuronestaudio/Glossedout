import { Link } from 'react-router-dom';
import { ArrowRight, type LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  img: string;
}

/* Each copy is one full pass of the service list. The keyframe shifts the track
   by exactly 1/MARQUEE_COPIES so the next copy lands where the last began and
   the loop is invisible. Four copies keeps the track wider than a large desktop
   even with only a handful of services. Keep this in step with the fraction in
   @keyframes svcScroll. */
const MARQUEE_COPIES = 4;

// Desktop shows the tall gold cards on an infinite marquee; mobile swaps to the
// compact gold bars (visibility handled in index.css via .services-desktop /
// .services-mobile).
export default function ServicesShowcase({ services }: { services: ServiceItem[] }) {
  return (
    <>
      <div className="svc-marquee services-desktop">
        <div className="svc-track">
          {Array.from({ length: MARQUEE_COPIES }).map((_, copy) => (
            <div className="svc-set" key={copy} aria-hidden={copy > 0 || undefined}>
              {services.map(s => {
                const Icon = s.icon;
                return (
                  <Link
                    to={s.href}
                    key={`${copy}-${s.title}`}
                    className="gold-card"
                    aria-label={s.title}
                    /* The duplicate sets are visual only. They must leave the tab
                       order too — a focusable link inside aria-hidden is its own
                       accessibility fault, and it would make the same four
                       services tab four times over. */
                    tabIndex={copy > 0 ? -1 : undefined}
                  >
                    <div className="gold-card__inner">
                      <div className="gold-card__reveal" style={{ backgroundImage: `url("${s.img}")` }} />
                      <div className="gold-card__body">
                        <div className="gold-card__icon">
                          <Icon size={26} color="#E4C766" strokeWidth={1.75} />
                        </div>
                        <h3 className="gold-card__title">{s.title}</h3>
                        <p className="gold-card__desc">{s.desc}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="service-bars services-mobile">
        {services.map(s => {
          const Icon = s.icon;
          return (
            <Link to={s.href} key={s.title} className="gold-bar" aria-label={s.title}>
              <div className="gold-bar__inner">
                <div className="gold-bar__icon">
                  <Icon size={22} color="#E4C766" strokeWidth={1.75} />
                </div>
                <div className="gold-bar__text">
                  <h3 className="gold-bar__title">{s.title}</h3>
                  <p className="gold-bar__desc">{s.desc}</p>
                </div>
                <ArrowRight className="gold-bar__arrow" size={20} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
