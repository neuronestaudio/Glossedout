/**
 * Manufacturer accreditation badges — real brand logos on uniform white
 * "cube" tiles, always 4 across (mobile + web), logos scaled to fit.
 */
const BADGES = [
  { name: 'Magnum', file: '/accreditations/magnum.png', alt: 'Magnum Ceramic Coating' },
  { name: 'Kraken', file: '/accreditations/kraken.png', alt: 'Kraken Coatings' },
  { name: 'Gtechniq', file: '/accreditations/gtechniq.jpg', alt: 'Gtechniq' },
  { name: 'CarPro', file: '/accreditations/carpro.png', alt: 'CarPro' },
];

export default function AccreditationBar({ background = '#0A2B1E' }: { background?: string }) {
  return (
    <div className="acc-bar" style={{ background }}>
      <div className="acc-bar__inner">
        {BADGES.map(b => (
          <div key={b.name} className="acc-tile">
            <img src={b.file} alt={b.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
