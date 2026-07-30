import { useEffect, useState } from 'react';

/* End of day, Melbourne time. August is AEST (UTC+10) — Victoria's DST doesn't
   start until October, so the offset is stable for this offer window. Written
   explicitly so the deadline doesn't drift with the viewer's own timezone: a
   customer in Perth sees the same countdown as one in Craigieburn. */
const OFFER_ENDS = new Date('2026-08-10T23:59:59+10:00').getTime();

const OFFER_ENDS_LABEL = '10 August 2026';

const pad = (n: number) => String(n).padStart(2, '0');

function split(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
  };
}

/**
 * Live countdown to the current promotion.
 *
 * Renders nothing once the deadline passes — an expired offer advertised as
 * "limited time" is worse than no banner, and this way it retires itself
 * instead of relying on someone remembering to take it down.
 */
export default function PromoCountdown() {
  /* Starts null so the pre-rendered HTML and the first client render agree.
     Computing a time during render would bake a stale value into the static
     HTML at build time and then mismatch on hydration. */
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(OFFER_ENDS - Date.now());
    // rAF paints the real numbers on the first frame; the interval keeps them live.
    const raf = requestAnimationFrame(tick);
    const id = window.setInterval(tick, 1000);
    return () => { cancelAnimationFrame(raf); window.clearInterval(id); };
  }, []);

  if (remaining !== null && remaining <= 0) return null;

  const t = split(remaining ?? 0);
  const units: [string, string][] = [
    [pad(t.days), t.days === 1 ? 'Day' : 'Days'],
    [pad(t.hours), 'Hrs'],
    [pad(t.mins), 'Min'],
    [pad(t.secs), 'Sec'],
  ];

  return (
    <div className="promo">
      <p className="promo__eyebrow">Limited time only</p>
      <p className="promo__offer">
        <span className="promo__amount">$200 off</span> ceramic coating packages
      </p>

      {/* The digits change every second; announcing that would make the page
          unusable with a screen reader. One static sentence instead. */}
      <p className="sr-only">This offer ends on {OFFER_ENDS_LABEL}.</p>

      <div className="promo__timer" aria-hidden="true">
        {units.map(([value, label], i) => (
          <div className="promo__unit" key={label}>
            <span className={`promo__value${remaining === null ? ' is-idle' : ''}`}>{value}</span>
            <span className="promo__label">{label}</span>
            {i < units.length - 1 && <span className="promo__sep">:</span>}
          </div>
        ))}
      </div>

      <p className="promo__ends">Ends {OFFER_ENDS_LABEL}</p>
    </div>
  );
}
