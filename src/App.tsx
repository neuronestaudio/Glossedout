import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { trackPageView, trackKeyPageVisit, initScrollDepthTracking, initTimeOnPageTracking } from './lib/gtm';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HomePage                   = lazy(() => import('./pages/HomePage'));
const ServicesPage               = lazy(() => import('./pages/ServicesPage'));
const HomePageSportscar          = lazy(() => import('./pages/HomePageSportscar'));
const HomePageIntro              = lazy(() => import('./pages/HomePageIntro'));
const HomePageBanner             = lazy(() => import('./pages/HomePageBanner'));
const HomePageBars               = lazy(() => import('./pages/HomePageBars'));
const HomePageWhite              = lazy(() => import('./pages/HomePageWhite'));
const CarDetailingServicePage    = lazy(() => import('./pages/CarDetailingServicePage'));
const PaintCorrectionServicePage = lazy(() => import('./pages/PaintCorrectionServicePage'));
const CeramicPackagesServicePage = lazy(() => import('./pages/CeramicPackagesServicePage'));
const CeramicCoatingPage         = lazy(() => import('./pages/CeramicCoatingPage'));
const CeramicQuestionsPage       = lazy(() => import('./pages/CeramicQuestionsPage'));
const GalleryPage                = lazy(() => import('./pages/GalleryPage'));
const AboutPage                  = lazy(() => import('./pages/AboutPage'));
const GetAQuotePage              = lazy(() => import('./pages/GetAQuotePage'));
const CeramicNewCarPage          = lazy(() => import('./pages/CeramicNewCarPage'));
const CeramicCostPage            = lazy(() => import('./pages/CeramicCostPage'));
const CeramicUVPage              = lazy(() => import('./pages/CeramicMelbournePage'));
const CeramicCorrectionPage      = lazy(() => import('./pages/CeramicCorrectionPage'));
const CeramicGlassPage           = lazy(() => import('./pages/CeramicGlassPage'));
const CeramicWheelsPage          = lazy(() => import('./pages/CeramicWheelsPage'));
const CeramicLongevityPage       = lazy(() => import('./pages/CeramicLongevityPage'));
const CeramicVsDealerPage        = lazy(() => import('./pages/CeramicVsDealerPage'));
const CeramicMattePage           = lazy(() => import('./pages/CeramicMattePage'));
const CeramicMaintenancePage     = lazy(() => import('./pages/CeramicMaintenancePage'));
const CeramicResalePage          = lazy(() => import('./pages/CeramicResalePage'));
const CeramicNearMePage          = lazy(() => import('./pages/CeramicNearMePage'));
const WarrantyPage               = lazy(() => import('./pages/WarrantyPage'));
const ProductTDSPage             = lazy(() => import('./pages/ProductTDSPage'));
const SitemapPage                = lazy(() => import('./pages/SitemapPage'));
const PrivacyPolicyPage          = lazy(() => import('./pages/PrivacyPolicyPage'));
const ThankYouPage               = lazy(() => import('./pages/ThankYouPage'));
const NotFoundPage               = lazy(() => import('./pages/NotFoundPage'));

function PageLoader() {
  return (
    <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>
        GLOSSED OUT<span style={{ color: 'var(--color-accent)' }}> DETAILING</span>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    trackPageView(pathname);
    trackKeyPageVisit(pathname);
    const cleanupScroll = initScrollDepthTracking();
    const cleanupTimer = initTimeOnPageTracking(pathname);
    return () => { cleanupScroll(); cleanupTimer(); };
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <Link
        to="/get-a-quote"
        aria-label="Enquire now — get a quote"
        className="sticky-enquire-btn btn-shine"
        style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          zIndex: 9999,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'linear-gradient(135deg, #2E8560 0%, #1B6B4A 45%, #0C3B2A 100%)',
          color: '#FFFFFF',
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: '0.08em',
          padding: '15px 32px',
          borderRadius: 100,
          border: '1px solid rgba(201,162,39,0.5)',
          boxShadow: '0 12px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.18)',
          whiteSpace: 'nowrap',
          textDecoration: 'none',
        }}
      >
        Enquire Now
      </Link>
      <style>{`
        /* Mobile already has the bottom Call/Quote/Directions bar — hide the floating CTA there */
        @media (max-width: 768px) {
          .sticky-enquire-btn { display: none !important; }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detailing-packages-melbourne" element={<ServicesPage />} />
            <Route path="/car-detailing-melbourne" element={<CarDetailingServicePage />} />
            <Route path="/paint-correction-melbourne" element={<PaintCorrectionServicePage />} />
            <Route path="/ceramic-coating-packages-melbourne" element={<CeramicPackagesServicePage />} />
            <Route path="/home-sportscar" element={<HomePageSportscar />} />
            <Route path="/home-intro" element={<HomePageIntro />} />
            <Route path="/home-banner" element={<HomePageBanner />} />
            <Route path="/home-demo2" element={<HomePageBars />} />
            <Route path="/home-white" element={<HomePageWhite />} />
            <Route path="/ceramic-coating-melbourne" element={<CeramicCoatingPage />} />
            <Route path="/ceramic-coating-questions" element={<CeramicQuestionsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/get-a-quote" element={<GetAQuotePage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/ceramic-coating-new-car-melbourne" element={<CeramicNewCarPage />} />
            <Route path="/ceramic-coating-cost-melbourne" element={<CeramicCostPage />} />
            <Route path="/ceramic-coating-uv-melbourne" element={<CeramicUVPage />} />
            <Route path="/ceramic-coating-paint-correction-melbourne" element={<CeramicCorrectionPage />} />
            <Route path="/ceramic-glass-coating-melbourne" element={<CeramicGlassPage />} />
            <Route path="/ceramic-coating-wheels-melbourne" element={<CeramicWheelsPage />} />
            <Route path="/ceramic-coating-longevity-melbourne" element={<CeramicLongevityPage />} />
            <Route path="/ceramic-vs-dealer-paint-protection-melbourne" element={<CeramicVsDealerPage />} />
            <Route path="/ceramic-coating-matte-paint-melbourne" element={<CeramicMattePage />} />
            <Route path="/ceramic-coating-maintenance-melbourne" element={<CeramicMaintenancePage />} />
            <Route path="/ceramic-coating-resale-melbourne" element={<CeramicResalePage />} />
            <Route path="/ceramic-coating-near-me-melbourne" element={<CeramicNearMePage />} />
            <Route path="/warranties" element={<WarrantyPage />} />
            <Route path="/product-tds" element={<ProductTDSPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
