# Glossed Out Detailing — Website

Premium automotive detailing, paint protection film, ceramic coating and window tinting.
**Stack:** React 19 · Vite 7 · TypeScript (strict) · React Router DOM · GSAP · Lucide React · Vercel

> **Rebrand note:** this site was built from the Next LVL Protection template and rebranded to
> Glossed Out Detailing. Brand name, domain, contact details and colour system have been swapped;
> business details are currently **placeholders** (`[Street address]`, `0400 000 000`,
> `hello@glossedoutdetailing.com.au`, `@glossedoutdetailing`) and analytics is disabled in
> `index.html` until real IDs are added. Service copy, geography ("Brisbane" / suburb names),
> team members, partner certifications and photos are still from the template and need a content pass.

---

## Dev

```bash
npm run dev      # localhost:5173
npm run build    # production build → dist/
npx tsc --noEmit # type-check only (must be clean before commit)
vercel --prod    # deploy to production
```

---

## Design System (`src/index.css`)

### Colour Palette

| Token | Value | Usage |
|---|---|---|
| `--color-bg-primary` | `#F8FAF9` | Page background (near-white) |
| `--color-bg-secondary` | `#FFFFFF` | Section backgrounds |
| `--brand-green` / `--color-accent` | `#0C3B2A` | Deep forest green — headings, buttons, badges |
| `--brand-emerald` | `#1B6B4A` | Mid emerald — gradients, hover |
| `--brand-gold` | `#C9A227` | Metallic gold — accents, dividers, highlights |
| `--brand-gold-lt` | `#E4C766` | Light gold highlight |
| `--brand-dark` | `#0A2B1E` | Very dark green — dark sections, footer |
| `--color-text-primary` | `#0D1613` | Body copy |
| `--color-text-secondary` | `#445048` | Subtext |
| `--gradient-brand` | `135deg #0C3B2A → #1B6B4A → #C9A227` | Green→gold brand gradient |

### Typography

| Token | Value |
|---|---|
| `--font-display` | `'Syne', sans-serif` |
| `--font-body` | `'DM Sans', sans-serif` |
| `--size-hero` | `clamp(72px, 12vw, 160px)` |
| `--size-h1` | `clamp(40px, 6vw, 80px)` |
| `--size-h2` | `clamp(28px, 4vw, 48px)` |

### Utility Classes

| Class | Effect |
|---|---|
| `.hero-text-mono` | `linear-gradient(160deg, #0D1117 0%, #667085 100%)` — monochrome gradient clipped to text |
| `.text-gradient` | Brand gradient clipped to text (defined, currently unused) |
| `.section` | Full-width section with `--section-padding-y` vertical padding + flowing wave SVG `::before` overlay |
| `.container` | `max-width: 1280px`, centred, horizontal padding |
| `.card` | Glassmorphism surface — white 80% + blur + border |
| `.btn-primary` | Dark navy pill button with left-to-right slate wipe on hover (see below) |
| `.btn-ghost` | Frosted white pill button |

---

## Components (`src/components/`)

### `TrustBadges`

Dark navy pill badges with ribbon SVG icon in `#E07B3A` (warm orange).

```tsx
<TrustBadges services={['ppf', 'tint', 'window']} />
// services accepts: 'ppf' | 'tint' | 'window' | 'ceramic'
// defaults to ['ppf', 'tint', 'window'] — 'ceramic' is also valid
```

**Badge labels:**
- `ppf` → SunTek Certified PPF
- `tint` → Solar Gard VTX PRO
- `window` → 3M Window Films
- `ceramic` → Ceramic Pro Certified

### `btn-primary` Hover Effect

The button uses a two-layer wipe mechanic:

1. **Base layer** — `linear-gradient(135deg, #0C3B2A → #14523A)` (deep green)
2. **Slide layer** (`.btn-slide` `<span>`) — `linear-gradient(135deg, #1B6B4A → #2E8560)` (emerald), starts `translateX(-100%)`, animates to `translateX(0)` on hover via `cubic-bezier(0.22, 1, 0.36, 1)` (out-expo)
3. **Text** sits on `z-index: 1` above both layers
4. On hover: `scale(1.03)` + `box-shadow` glow in green with a gold ring

To change the wipe colour, edit `.btn-primary .btn-slide { background: ... }` in `index.css`.

### `Navbar`

Transparent on scroll-top → frosted white on scroll. Mobile hamburger menu.

### `FAQAccordion`

Accepts `{ q: string; a: string }[]`. Used on all Q&A variation pages.

### `PackageVisualizer`

Horizontal package tier selector with animated highlight.

### `BeforeAfterSlider`

Drag-to-reveal before/after image comparison component.

### `Reviews`

Static review cards grid. Data passed as props or imported from `src/data/`.

### `CTABlock`

Full-width CTA banner. Accepts `heading`, `sub`, `btnText`, `btnHref`.

### `QuoteForm`

Contact / quote request form with validation.

### `PageMeta`

Thin wrapper around `<Helmet>` for `<title>`, `<meta description>`, `<link rel="canonical">`.

---

## Page Architecture

### Money Pages (5)
| Route | File |
|---|---|
| `/ppf-brisbane` | `PPFPage.tsx` |
| `/ceramic-coating-brisbane` | `CeramicCoatingPage.tsx` |
| `/automotive-window-tinting-brisbane` | `AutomotiveTintPage.tsx` |
| `/residential-window-tinting-brisbane` | `ResidentialTintPage.tsx` |
| `/commercial-window-tinting-brisbane` | `CommercialTintPage.tsx` |

### Q&A Pages (5)
`PPFQuestionsPage`, `CeramicQuestionsPage`, `AutoTintQuestionsPage`, `ResidentialTintQuestionsPage`, `CommercialTintQuestionsPage`

### B1 — PPF Variation Pages (11) ✅
`/ppf-cost-brisbane`, `/ppf-near-me-brisbane`, `/ppf-new-car-brisbane`, `/ppf-partial-brisbane`, `/ppf-self-healing-brisbane`, `/ppf-stone-chip-brisbane`, `/ppf-warranty-brisbane`, `/ppf-dark-paint-brisbane`, `/ppf-gloss-matte-brisbane`, `/ppf-resale-value-brisbane`, `/suntek-ppf-brisbane`

### B2 — Ceramic Variation Pages (13) ✅
`/ceramic-coating-cost-brisbane`, `/ceramic-coating-near-me-brisbane`, `/ceramic-coating-new-car-brisbane`, `/ceramic-coating-brisbane-south`, `/ceramic-coating-longevity-brisbane`, `/ceramic-coating-maintenance-brisbane`, `/ceramic-coating-resale-brisbane`, `/ceramic-coating-matte-brisbane`, `/ceramic-coating-wheels-brisbane`, `/ceramic-glass-coating-brisbane`, `/ceramic-vs-dealer-brisbane`, `/ceramic-ppf-combo-brisbane`, `/paint-correction-brisbane`

### B3 — Auto Tint Variation Pages ❌ (pending)
Planned routes: `/window-tinting-cost-brisbane`, `/car-window-tinting-brisbane`, `/automotive-tint-shades-brisbane`, `/window-tint-legal-brisbane`, `/solar-gard-tint-brisbane`, `/window-tint-heat-rejection-brisbane`, `/window-tint-uv-protection-brisbane`, `/window-tint-privacy-brisbane`, `/window-tint-new-car-brisbane`, `/window-tint-warranty-brisbane`, `/window-tinting-near-me-brisbane`, `/window-tint-vs-ppf-brisbane`

### B4 — Residential Tint Variation Pages ❌ (pending, ~12 pages)

### B5 — Commercial Tint Variation Pages ❌ (pending, ~11 pages)

### Section C — Bundle Pages ❌ (pending, ~10 pages)

### Section D — Comparison Pages ❌ (pending, ~15 pages)

---

## Section Wave Texture

All `.section` elements get a flowing SVG wave overlay via `::before` pseudo-element (18 paths, 0.6px stroke, 7% opacity). Children are `position: relative; z-index: 1` to sit above it.

To override for a specific section, add `position: relative; overflow: hidden` to the section and inject an absolutely-positioned `<div>` with a custom inline SVG.

---

## Deployment

Hosted on **Vercel** — project `dannys-projects-e4c45659`.

```bash
vercel --prod
```

Last production commit: `110cd52` — B2 Ceramic complete.
