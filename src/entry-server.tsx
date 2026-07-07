/**
 * SSR entry point — used at build time to pre-render each route to static HTML.
 * Uses StaticRouter (no browser APIs) and eager imports (no lazy/Suspense).
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { startCapture, endCapture, type HeadData } from './lib/headStore';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import HomePageSportscar from './pages/HomePageSportscar';
import HomePageIntro from './pages/HomePageIntro';
import HomePageBanner from './pages/HomePageBanner';
import CeramicCoatingPage from './pages/CeramicCoatingPage';
import CeramicQuestionsPage from './pages/CeramicQuestionsPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import GetAQuotePage from './pages/GetAQuotePage';
import CeramicNewCarPage from './pages/CeramicNewCarPage';
import CeramicCostPage from './pages/CeramicCostPage';
import CeramicUVPage from './pages/CeramicMelbournePage';
import CeramicCorrectionPage from './pages/CeramicCorrectionPage';
import CeramicGlassPage from './pages/CeramicGlassPage';
import CeramicWheelsPage from './pages/CeramicWheelsPage';
import CeramicLongevityPage from './pages/CeramicLongevityPage';
import CeramicVsDealerPage from './pages/CeramicVsDealerPage';
import CeramicMattePage from './pages/CeramicMattePage';
import CeramicMaintenancePage from './pages/CeramicMaintenancePage';
import CeramicResalePage from './pages/CeramicResalePage';
import CeramicNearMePage from './pages/CeramicNearMePage';
import SitemapPage from './pages/SitemapPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import WarrantyPage from './pages/WarrantyPage';
import ProductTDSPage from './pages/ProductTDSPage';
import ThankYouPage from './pages/ThankYouPage';
import NotFoundPage from './pages/NotFoundPage';

function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export function render(url: string): { html: string; head: HeadData } {
  const captured = startCapture();
  try {
    const html = renderToString(
      <StaticRouter location={url}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detailing-packages-melbourne" element={<ServicesPage />} />
            <Route path="/home-sportscar" element={<HomePageSportscar />} />
            <Route path="/home-intro" element={<HomePageIntro />} />
            <Route path="/home-banner" element={<HomePageBanner />} />
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
      </StaticRouter>
    );
    return { html, head: { ...captured } };
  } finally {
    endCapture();
  }
}
