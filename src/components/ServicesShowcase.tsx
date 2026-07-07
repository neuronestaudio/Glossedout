import { Link } from 'react-router-dom';
import { ArrowRight, type LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  img: string;
}

// Desktop shows the tall gold cards; mobile swaps to the compact gold bars
// (visibility handled in index.css via .services-desktop / .services-mobile).
export default function ServicesShowcase({ services }: { services: ServiceItem[] }) {
  return (
    <>
      <div className="gold-grid services-desktop">
        {services.map(s => {
          const Icon = s.icon;
          return (
            <Link to={s.href} key={s.title} className="gold-card" aria-label={s.title}>
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
