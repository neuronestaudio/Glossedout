# Glossed Out Detailing — Website

Melbourne prestige auto detailing: car detailing, paint correction and ceramic coating.
Live at **https://glossedoutdetailing.com.au**

**Stack:** React 19 · Vite 7 · TypeScript 5.9 (strict) · React Router 7 · GSAP 3 · Lenis · Lucide React · Vercel

Rendering is a **static pre-render** — Vite builds an SSR bundle, `scripts/prerender.mjs` walks
every route in Node and writes real HTML into `dist/<route>/index.html`. No server runtime,
no `react-helmet`; head tags are captured through a small module-level store (`src/lib/headStore.ts`).

---

## Business details

| Field | Value | Files |
|---|---|---|
| Phone | `0481 327 250` / `tel:0481327250` | **21** |
| Address | Goodrich Ct, Craigieburn VIC 3064 | **17** |
| Email | `admin@glossedoutdetailing.com.au` | **5** |
| Hours | 08:00–20:00, 7 days | `index.html` JSON-LD |
| Instagram / Facebook | `@glossedoutdetailing` | `Footer.tsx`, `index.html` JSON-LD |
| Accreditations | Gtechniq · Magnum · Kraken · CarPro | `TrustBadges.tsx`, `Accreditations.tsx`, `Footer.tsx`, `public/accreditations/` |

NAP details are **hardcoded, not centralised** — the phone number and address are repeated in visible
copy (`Navbar`, `Footer`, `CTABlock`, `PackageVisualizer`, `AboutPage`) *and* in the per-page
`LocalBusiness` JSON-LD on every ceramic page. Changing them means a full grep:

```bash
grep -rln "0481327250\|0481 327 250" src index.html
grep -rln "Goodrich Ct" src index.html
```

> The `<!-- TODO: replace all placeholder business details -->` comment above the JSON-LD in
> `index.html` is **stale** — the details below it are real. Safe to delete.

---

## Dev

```bash
npm install
npm run dev       # localhost:5173 (client only — no pre-render)
npm run build     # tsc -b → client build → SSR build → pre-render (must pass before deploy)
npm run preview   # serve dist/ locally, closest thing to production
npm run lint      # eslint
npx tsc --noEmit  # type-check only
vercel --prod     # deploy
```

`npm run build` is a four-stage chain and **fails the build if any route fails to pre-render**:

```
tsc -b
vite build                                       → dist/
vite build --ssr src/entry-server.tsx            → dist/server/entry-server.js
node scripts/prerender.mjs                       → dist/<route>/index.html + dist/404.html
```

---

## Project structure

```
index.html            shell — GTM, fonts, sitewide AutomotiveBusiness JSON-LD
src/
  main.tsx            client entry (hydrate + initPhoneCtaTracking)
  App.tsx             BrowserRouter, lazy routes, Layout, floating "Enquire Now" CTA
  entry-server.tsx    SSR route table (eager imports, StaticRouter) — must mirror App.tsx
  index.css           whole design system, ~1230 lines, no CSS framework
  components/         18 shared components
  pages/              33 page components (32 routes + 404)
  pages/about/        cinematic about page (scroll-scrubbed canvas frame sequences)
  data/galleryPhotos.ts
  lib/gtm.ts          dataLayer helpers + event tracking
  lib/headStore.ts    module-level head capture consumed by the pre-renderer
  assets/             imported images (hashed by Vite)
scripts/prerender.mjs route list + head-tag injection
public/               static passthrough — frames, logos, robots.txt, sitemap.xml
vercel.json           build config + 37 legacy 301 redirects
```

Styling is **inline styles + `index.css` utility classes**. There is no Tailwind, CSS module or
styled-components — matching that pattern matters when adding components.

---

## Routes

All routes are defined in **three places that must stay in sync**:
`src/App.tsx` · `src/entry-server.tsx` · `scripts/prerender.mjs` (plus `public/sitemap.xml` for indexed pages).

### Core (5)
| Route | File |
|---|---|
| `/` | `HomePage.tsx` |
| `/detailing-packages-melbourne` | `ServicesPage.tsx` |
| `/gallery` | `GalleryPage.tsx` |
| `/about` | `AboutPage.tsx` |
| `/get-a-quote` | `GetAQuotePage.tsx` |

### Service pages (3) — all built on `ServicePageLayout`
| Route | File | Tiers from `PackagesKit` |
|---|---|---|
| `/car-detailing-melbourne` | `CarDetailingServicePage.tsx` | `detailing` |
| `/paint-correction-melbourne` | `PaintCorrectionServicePage.tsx` | `correction` |
| `/ceramic-coating-packages-melbourne` | `CeramicPackagesServicePage.tsx` | `ceramicUsed` |

### Ceramic SEO cluster (14)
`/ceramic-coating-melbourne` (hub) · `/ceramic-coating-questions` · and 12 variation pages:

`/ceramic-coating-new-car-melbourne`, `/ceramic-coating-cost-melbourne`,
`/ceramic-coating-uv-melbourne` (file: `CeramicMelbournePage.tsx`),
`/ceramic-coating-paint-correction-melbourne`, `/ceramic-glass-coating-melbourne`,
`/ceramic-coating-wheels-melbourne`, `/ceramic-coating-longevity-melbourne`,
`/ceramic-vs-dealer-paint-protection-melbourne`, `/ceramic-coating-matte-paint-melbourne`,
`/ceramic-coating-maintenance-melbourne`, `/ceramic-coating-resale-melbourne`,
`/ceramic-coating-near-me-melbourne`

### Support (5)
`/warranties` · `/product-tds` · `/sitemap` · `/privacy-policy` · `/thank-you` (noindex, guarded)

### Home-page demos (5) — `noindex`, internal only
`/home-sportscar` · `/home-intro` · `/home-banner` · `/home-demo2` · `/home-white`

Reachable from an "Interface versions" dropdown in `Navbar.tsx` (marked
`TODO: remove this block before final client hand-off`). Not in `sitemap.xml`.

### 404
`*` → `NotFoundPage.tsx`. The pre-renderer also emits `dist/404.html`, which Vercel serves with a
real HTTP 404 for unmatched paths.

### Redirects
`vercel.json` holds **37 permanent (301) redirects** from the previous Next LVL Protection URL set —
`*-brisbane` ceramic paths → their `*-melbourne` equivalents, and all PPF / window-tint paths →
`/detailing-packages-melbourne` (the site no longer offers those services).

---

## SEO & head management

`react-helmet` is not used. `PageMeta` does double duty:

```tsx
<PageMeta
  title="…"
  description="…"
  canonical="https://glossedoutdetailing.com.au/…"
  noindex          // optional
  jsonLd={[{ '@type': 'FAQPage', … }]}   // optional, array of objects
/>
```

- **During pre-render** it calls `recordHead()` synchronously into `headStore`; `entry-server.tsx`
  wraps each render in `startCapture()` / `endCapture()` and returns the captured head to
  `prerender.mjs`, which injects `<title>`, description, canonical, OG, Twitter and JSON-LD tags.
- **In the browser** a `useEffect` writes the same tags into `document.head` on navigation.

Every page must render exactly one `PageMeta`. OG image is `/NLP-Shop.jpeg` (hardcoded in both
`PageMeta.tsx` and `prerender.mjs` — change both).

`public/sitemap.xml` lists **25 indexable URLs** and is maintained by hand. `public/robots.txt`
allows everything and points at it.

---

## Design system (`src/index.css`)

### Colour tokens

| Token | Value | Usage |
|---|---|---|
| `--brand-green` / `--color-accent` | `#0C3B2A` | Deep forest green — primary |
| `--brand-green-dk` / `--color-accent-bright` | `#072A20` | Near-black green |
| `--brand-emerald` | `#1B6B4A` | Mid emerald — gradients, hover |
| `--brand-emerald-lt` | `#2E8560` | Light emerald |
| `--brand-dark` | `#0A2B1E` | Very dark green — dark sections, hero vignettes |
| `--brand-gold` | `#C9A227` | Metallic gold — accents, borders, dividers |
| `--brand-gold-lt` | `#E4C766` | Light gold — eyebrows on dark |
| `--brand-gold-dk` | `#A17E12` | Deep gold — gold text on light |
| `--color-bg-primary` | `#F8FAF9` | Page background |
| `--color-bg-secondary` | `#FFFFFF` | Section backgrounds |
| `--color-bg-tertiary` | `#EDF2EF` | Alt sections |
| `--color-text-primary` | `#0D1613` | Body copy |
| `--color-text-secondary` | `#445048` | Subtext |
| `--color-text-muted` | `#869089` | Captions |
| `--gradient-brand` | `135deg #0C3B2A → #1B6B4A → #C9A227` | Green→gold brand gradient |

`body` also carries three fixed radial-gradient washes (green, gold, pale mint) for depth.

### Typography

Loaded in `index.html`: **Bebas Neue**, **DM Sans**, **Syne**, **Allura**, **Instrument Sans**.

| Token / class | Value |
|---|---|
| `--font-display` | `'Syne', sans-serif` |
| `--font-body` | `'DM Sans', sans-serif` |
| `.font-display` | **Bebas Neue** — the condensed headline face used for nearly all H1/H2 |
| `.font-syne` | Syne |
| `--size-hero` | `clamp(72px, 12vw, 160px)` |
| `--size-h1` | `clamp(40px, 6vw, 80px)` |
| `--size-h2` | `clamp(28px, 4vw, 48px)` |
| `--size-h3` | `clamp(18px, 2.5vw, 24px)` |

> Naming trap: `--font-display` is Syne, but the `.font-display` **class** is Bebas Neue. Headings
> use the class. Don't "fix" one to match the other without checking every heading.

### Layout & surface classes

| Class | Effect |
|---|---|
| `.section` | `--section-padding-y` / `--section-padding-x` padding, `position: relative` |
| `.container` | `max-width: 1280px`, centred |
| `.card` | Glass surface — white ~80% + blur + hairline border |
| `.services-wave-bg` | Dark green (`#0A2B1E`) section; overrides `.card` to gold-on-green |
| `.services-grid` / `.gold-grid` / `.tier-grid` | Responsive grids (4→2→1, 3→2→1) |
| `.section-number` | Giant ghosted numeral, 4% opacity, absolutely positioned |

> The old flowing-wave SVG `::before` overlay on `.section` has been **removed** —
> `.section::before { content: none }`. Sections are flat now.

### Buttons

| Class | Look |
|---|---|
| `.btn-primary` | Deep green pill, emerald wipe on hover |
| `.btn-emerald` | Emerald fill |
| `.btn-gold` | Gold gradient fill (used on "Get My Quote") |
| `.btn-gold-outline` | Gold border, transparent fill |
| `.btn-ghost` | Frosted white pill |
| `.btn-shine` | **Modifier** — adds a looping diagonal gleam sweep via `::after` |

The wipe mechanic: the base gradient sits on the button, a `<span class="btn-slide" />` child holds
the hover gradient at `translateX(-100%)` and slides to `0` on hover (out-expo), and the label sits
at `z-index: 1` above both. **Every wipe button needs the `<span className="btn-slide" />` child** or
the hover does nothing.

### Text effects

| Class | Effect |
|---|---|
| `.hero-text-mono` | White marble gradient clipped to text with a 6.5s shine sweep (`marbleSweep`) |
| `.hero-gradient` | Brand green→gold gradient clipped to text |
| `.title-green-grad` | Green gradient headline |
| `.hero-sub-shine` / `.shine-anim-accent` | Animated highlight sweeps |
| `.text-gradient` | Brand gradient text (defined, largely unused) |

All sweep animations are disabled under `@media (prefers-reduced-motion: reduce)`.

---

## Components (`src/components/`)

| Component | Props | Notes |
|---|---|---|
| `Navbar` | — | Transparent → frosted on scroll (>60px). Services dropdown, mobile hamburger, GSAP stagger. Also holds the temporary "Interface versions" demo dropdown. |
| `Footer` | — | 4-column (brand + accreditation tiles, Quick Links, Popular, Contact). Collapses at 900px / 560px. |
| `PageMeta` | `title, description, canonical, noindex?, jsonLd?` | See SEO section. One per page. |
| `QuoteForm` | `defaultService?` | Posts to GoHighLevel. See Lead flow. |
| `CTABlock` | `defaultService` | Full-width CTA band feeding the quote page. |
| `ServicePageLayout` | `meta, eyebrow, title, lead, heroImg, tiers, carouselTitle, carouselIntro, carouselNote?, faqs, faqTitle, showWarranty?, ctaService` | Whole-page template for the 3 service pages: 88dvh photo hero + vignette → package carousel → optional warranty table → FAQ → CTA. |
| `PackagesKit` | — | Exports `Tier` type, the `detailing` / `correction` / `ceramicUsed` tier data, plus `PriceCard`, `PackageCarousel` and `WarrantyTable`. **Pricing lives here.** |
| `PackageVisualizer` | `tiers: PackageTier[]` | Horizontal tier selector with animated highlight. |
| `ServicesShowcase` | `services: ServiceItem[]` | Image-card grid with hover reveal. |
| `TrustBadges` | `services?: ('ppf'\|'tint'\|'window'\|'ceramic')[]` — defaults `['ceramic']` | Dark green pills + orange ribbon icon: Gtechniq, Magnum Accredited, Kraken Certified, CarPro Trained. |
| `Accreditations` | `variant?: 'light'\|'dark'`, `heading?`, `subtext?` | Logo strip from `public/accreditations/`. |
| `AccreditationBar` | `background?` (default `#0A2B1E`) | Compact 4-logo bar used under hero sections. |
| `GoogleReviews` | `reviews, googleUrl, rating?` (`'5.0'`) `count?` (`'113'`) | Review cards + Google link-out. |
| `Reviews` | `reviews` | Plain static review grid. |
| `FAQAccordion` | `items: { q, a }[]` | GSAP height accordion. Pair with `FAQPage` JSON-LD via `PageMeta`. |
| `BeforeAfterSlider` | `before, after, alt?, height?` (360) | Drag-to-reveal comparison. |
| `HomeSplash` | — | Logo splash intro on the home page. |
| `PremiumHeroBg` | — | Static, mirror-symmetric SVG hero background — silver wave panels, gold trim curves, centre kept clear for the wordmark. |

> `TrustBadges` still declares the `'ppf' \| 'tint' \| 'window'` union from the template, but all
> four badges are tagged `'ceramic'` — passing anything else renders nothing.

### About page (`src/pages/about/`)

The most complex page. `IntroCineHero` and `AboutHero` drive `FrameSequence` — a canvas that paints
a scroll-scrubbed WebP image sequence (Lenis smooth scroll + GSAP ScrollTrigger pin), then cross-fades
typographic "sayings" over a radial emerald fade.

`TeamPanorama` annotates a single group photo: each person gets a connector dot placed on their
shoulder at hand-measured `%` coordinates, with an elbow line running out to a staggered label.
Those coordinates are tuned to **that exact photo** — swapping the image means re-measuring every
`sx/sy/lx/ly` in the `PEOPLE` array.

Styles are in `about-cinematic.css` / `team-panorama.css`.

Frames live in `public/` and are **not** Vite assets — paths are built as `/${framesDir}/f000.webp`:

| Dir | Frames | Used by |
|---|---|---|
| `public/intro-frames/` | 228 | `IntroCineHero` |
| `public/about-frames/` | 240 | `AboutHero` |
| `public/about-frames-uhd/` | 228 | high-DPI variant |

---

## Content & data

- **Pricing** — `src/components/PackagesKit.tsx`. Detailing $229 / $350 / $699 · Correction from $450 ·
  Ceramic $1,299–$2,699 (Gtechniq CSL, Magnum Graphene/Borophene, Kraken Elite Plus / Elite Titanium).
- **Gallery** — `src/data/galleryPhotos.ts`, 10 photos categorised `Detailing | Paint Correction | Ceramic`,
  imported from `src/assets/glossed/`.
- **Warranty matrix** — `WarrantyPage.tsx` + `WarrantyTable` in `PackagesKit`. Coating range and
  durability are cross-checked against `/product-tds`; keep the two in step.
- **Coating TDS** — `ProductTDSPage.tsx`.

---

## Analytics & lead flow

**Google Tag Manager `GTM-WR8SVWC3`** is live in `index.html` (head script + noscript iframe).

`src/lib/gtm.ts` pushes to `dataLayer`:

| Event | Fired by |
|---|---|
| `page_view` | every route change (`ScrollToTop` in `App.tsx`) |
| `key_service_page_view` | `/detailing-packages-melbourne`, `/ceramic-coating-melbourne` |
| `scroll_depth` | 25 / 50 / 75 / 90 % thresholds, once each per page |
| `high_intent_time_on_page` | 60s on a page |
| `phone_call_cta_click` + `contact` | any `a[href^="tel:"]` click — delegated listener bound once in `main.tsx` |
| `quote_form_submit`, `generate_lead` | **only** after GHL returns 2xx. Never on a failed submit — an uncaptured lead is not a lead. |

### Quote submission

`QuoteForm` POSTs JSON straight to a **GoHighLevel webhook** (hardcoded at the top of
`QuoteForm.tsx` — no env var, no server route):

```
https://services.leadconnectorhq.com/hooks/ed6fxFrV8P1iGtkwL7D7/webhook-trigger/I3moCd8GTaDTsQUIdzvF
```

Fields: name\*, mobile\* (10 digits, stripped to numerals), email\*, car model, budget,
service option\* (drop-off / mobile), postcode (required + only enabled when mobile service is
chosen), inquiry, referral source.

> **Gotcha:** `budget` and `serviceLocation` send GHL *option values* (`entry_level_under_1000`,
> `mobile_service`, …), not labels — these must match the GHL dropdown's Value column exactly or the
> custom field silently saves blank. Human-readable `budgetLabel` / `serviceLocationLabel` are sent
> alongside for the notes.

On success it navigates to `/thank-you` with `state.fromSubmit`. `ThankYouPage` redirects back to
`/get-a-quote` without that state, so the page can't be hit directly or refreshed.

---

## Deployment

Vercel project **`glossed-out-detailing`**. `vercel.json` sets `buildCommand`, `outputDirectory: dist`,
`trailingSlash: false` and the redirect table. `dist/` is gitignored.

```bash
npm run build   # verify the pre-render passes all routes first
vercel --prod
```

---

## Known gaps

- **The route tables can drift silently.** `App.tsx`, `entry-server.tsx` and `prerender.mjs` are
  three hand-maintained lists. A route in `prerender.mjs` that `entry-server.tsx` doesn't match
  falls through to the `*` wildcard, so its static HTML is written as the **404 page** —
  `noindex,nofollow`, canonical `/404`, none of the real content — and the build still prints ✅ for
  it. This bit three live service pages until it was fixed; the structural risk remains. Check
  parity after adding any route:

  ```bash
  diff <(grep -o 'path="[^"]*"' src/App.tsx | sort) \
       <(grep -o 'path="[^"]*"' src/entry-server.tsx | sort)
  ```

  The durable fix is one exported route array that all three import. Not done yet.
- **`npm run lint` currently fails** — 9 pre-existing errors across `BeforeAfterSlider`,
  `HomeSplash`, `Navbar`, `PackagesKit`, `TrustBadges` and `entry-server` (ref-during-render,
  setState-in-effect, fast-refresh export rules, one `any`). None block the build, which runs
  `tsc -b`, not eslint.
- **No Google Ads conversion is wired up.** The placeholder `send_to: 'AW-XXXXXXXXX/…'` gtag call has
  been removed from `ThankYouPage.tsx` — it was dead code (`window.gtag` is never defined, since the
  site loads GTM rather than gtag.js). Conversions should be configured **inside GTM** off the
  `generate_lead` / `quote_form_submit` events that `QuoteForm` pushes on successful submit.
  `fireGadsConversion()` in `gtm.ts` is still exported but called from nowhere.
- **13 `[Confirm from official TDS]` placeholders** remain in `ProductTDSPage.tsx`.
- **Demo home pages** (`/home-*`) and the Navbar "Interface versions" dropdown should be removed
  before final hand-off.
- **Template job titles on the team** — `TeamPanorama` still lists "PPF & Tint Installer" and
  "PPF & Tint Specialist", but the site no longer sells PPF or window tinting (those URLs all 301
  away in `vercel.json`).
- **Stale TODO comment** above the JSON-LD in `index.html` — the business details are real.
- `sitemap.xml` is hand-maintained and can drift from the route table.
