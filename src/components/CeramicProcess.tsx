import { Link } from 'react-router-dom';

/**
 * The four stages of a ceramic install, in order, with the reason each one
 * matters. Written to be checkable rather than promotional — a coating seals in
 * whatever is underneath it, which is the honest argument for why preparation
 * costs more than the bottle does.
 */
const STAGES = [
  {
    num: '01',
    title: 'Decontamination',
    body: 'A coating bonds to the top of your clear coat. Anything sitting on that surface — fallout, rail dust, bonded traffic film — gets sealed underneath and stays there for years. It comes off first.',
  },
  {
    num: '02',
    title: 'Correction',
    body: 'Swirls and marring get locked in the same way. Machine polishing cuts them out before anything goes on, never after. This is the stage most of the market rushes.',
  },
  {
    num: '03',
    title: 'Coating',
    body: 'Gtechniq, Magnum or Kraken, applied by an accredited installer. Five to ten years of protection depending on the product you choose.',
  },
  {
    num: '04',
    title: 'Cure',
    body: 'A controlled cure before the car leaves us. Cutting this short is the most common reason a coating underperforms long before its warranty is up.',
  },
];

export default function CeramicProcess() {
  return (
    <section className="section proc" aria-labelledby="proc-heading">
      {/* Warm gold wash, same treatment as the reviews section above */}
      <div aria-hidden="true" className="proc__glow" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(44px, 6vw, 68px)' }}>
          <p className="proc__eyebrow">The ceramic process</p>
          <h2 id="proc-heading" className="font-display proc__heading">
            Four stages.<br /><span className="proc__heading-accent">One finish.</span>
          </h2>
          <p className="proc__lead">
            A coating is only ever as good as the paint underneath it. Three of these four
            stages happen before the bottle is even opened.
          </p>
        </div>

        <ol className="proc__grid">
          {STAGES.map(s => (
            <li className="proc__stage" key={s.num}>
              <span className="proc__num" aria-hidden="true">{s.num}</span>
              <h3 className="proc__title">{s.title}</h3>
              <p className="proc__body">{s.body}</p>
            </li>
          ))}
        </ol>

        {/* The honest counterweight — worth more than another benefit bullet */}
        <div className="proc__caveat">
          <p className="proc__caveat-label">And what it is not</p>
          <p className="proc__caveat-body">
            A coating is not armour. It will not stop a stone chip, a trolley or a key, and it
            does not make a car self-cleaning. What it does is make a good finish easier to keep
            and slower to degrade — which over years of ownership is worth real money.
          </p>
          <Link to="/ceramic-coating-packages-melbourne" className="btn-ghost proc__cta">
            See ceramic packages
          </Link>
        </div>
      </div>
    </section>
  );
}
