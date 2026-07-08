/**
 * Manufacturer accreditation badges — real brand logos on adaptive tiles
 * (dark tile for the silver Magnum badge, light tiles for the rest). Uniform
 * grid, reflows to 2×2 on mobile.
 */
const BADGES = [
  { name: 'Magnum', file: '/accreditations/magnum.png', dark: true, alt: 'Magnum Ceramic Coating' },
  { name: 'Kraken', file: '/accreditations/kraken.png', dark: false, alt: 'Kraken Coatings' },
  { name: 'Gtechniq', file: '/accreditations/gtechniq.jpg', dark: false, alt: 'Gtechniq' },
  { name: 'CarPro', file: '/accreditations/carpro.png', dark: false, alt: 'CarPro' },
];

export default function AccreditationBar({ background = '#0A2B1E' }: { background?: string }) {
  return (
    <div className="acc-bar" style={{ background }}>
      <div className="acc-bar__inner">
        {BADGES.map(b => (
          <div key={b.name} className={`acc-tile${b.dark ? ' acc-tile--dark' : ''}`}>
            <img src={b.file} alt={b.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
