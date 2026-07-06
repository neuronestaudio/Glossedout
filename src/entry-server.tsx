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
import PPFPage from './pages/PPFPage';
import CeramicCoatingPage from './pages/CeramicCoatingPage';
import AutomotiveTintPage from './pages/AutomotiveTintPage';
import ResidentialTintPage from './pages/ResidentialTintPage';
import CommercialTintPage from './pages/CommercialTintPage';
import PPFQuestionsPage from './pages/PPFQuestionsPage';
import CeramicQuestionsPage from './pages/CeramicQuestionsPage';
import AutoTintQuestionsPage from './pages/AutoTintQuestionsPage';
import ResidentialTintQuestionsPage from './pages/ResidentialTintQuestionsPage';
import CommercialTintQuestionsPage from './pages/CommercialTintQuestionsPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import GetAQuotePage from './pages/GetAQuotePage';
import PPFNewCarPage from './pages/PPFNewCarPage';
import PPFDarkPaintPage from './pages/PPFDarkPaintPage';
import PPFStoneChipPage from './pages/PPFStoneChipPage';
import PPFResalePage from './pages/PPFResalePage';
import SunTekPPFPage from './pages/SunTekPPFPage';
import PPFCostPage from './pages/PPFCostPage';
import PPFWarrantyPage from './pages/PPFWarrantyPage';
import PPFPartialPage from './pages/PPFPartialPage';
import PPFSelfHealingPage from './pages/PPFSelfHealingPage';
import PPFGlossMattePage from './pages/PPFGlossMattePage';
import PPFNearMePage from './pages/PPFNearMePage';
import CeramicNewCarPage from './pages/CeramicNewCarPage';
import CeramicCostPage from './pages/CeramicCostPage';
import CeramicBrisbanePage from './pages/CeramicBrisbanePage';
import CeramicCorrectionPage from './pages/CeramicCorrectionPage';
import CeramicGlassPage from './pages/CeramicGlassPage';
import CeramicWheelsPage from './pages/CeramicWheelsPage';
import CeramicPPFComboPage from './pages/CeramicPPFComboPage';
import CeramicLongevityPage from './pages/CeramicLongevityPage';
import CeramicVsDealerPage from './pages/CeramicVsDealerPage';
import CeramicMattePage from './pages/CeramicMattePage';
import CeramicMaintenancePage from './pages/CeramicMaintenancePage';
import CeramicResalePage from './pages/CeramicResalePage';
import CeramicNearMePage from './pages/CeramicNearMePage';
import SitemapPage from './pages/SitemapPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import NextLevelProtectionPage from './pages/NextLevelProtectionPage';
import WarrantyPage from './pages/WarrantyPage';
import ProductTDSPage from './pages/ProductTDSPage';
import ThreeMCommercialFilmPage from './pages/3MCommercialWindowFilmPage';
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
            <Route path="/ppf-brisbane" element={<PPFPage />} />
            <Route path="/ceramic-coating-brisbane" element={<CeramicCoatingPage />} />
            <Route path="/automotive-window-tinting-brisbane" element={<AutomotiveTintPage />} />
            <Route path="/residential-window-tinting-brisbane" element={<ResidentialTintPage />} />
            <Route path="/commercial-window-tinting-brisbane" element={<CommercialTintPage />} />
            <Route path="/ppf-questions" element={<PPFQuestionsPage />} />
            <Route path="/ceramic-coating-questions" element={<CeramicQuestionsPage />} />
            <Route path="/automotive-tinting-questions" element={<AutoTintQuestionsPage />} />
            <Route path="/residential-tinting-questions" element={<ResidentialTintQuestionsPage />} />
            <Route path="/commercial-tinting-questions" element={<CommercialTintQuestionsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/get-a-quote" element={<GetAQuotePage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/ppf-new-car-brisbane" element={<PPFNewCarPage />} />
            <Route path="/ppf-dark-paint-brisbane" element={<PPFDarkPaintPage />} />
            <Route path="/ppf-stone-chip-protection-brisbane" element={<PPFStoneChipPage />} />
            <Route path="/ppf-resale-value-brisbane" element={<PPFResalePage />} />
            <Route path="/suntek-ppf-brisbane" element={<SunTekPPFPage />} />
            <Route path="/ppf-cost-brisbane" element={<PPFCostPage />} />
            <Route path="/ppf-warranty-brisbane" element={<PPFWarrantyPage />} />
            <Route path="/partial-ppf-brisbane" element={<PPFPartialPage />} />
            <Route path="/ppf-self-healing-brisbane" element={<PPFSelfHealingPage />} />
            <Route path="/gloss-vs-matte-ppf-brisbane" element={<PPFGlossMattePage />} />
            <Route path="/ppf-near-me-brisbane" element={<PPFNearMePage />} />
            <Route path="/ceramic-coating-new-car-brisbane" element={<CeramicNewCarPage />} />
            <Route path="/ceramic-coating-cost-brisbane" element={<CeramicCostPage />} />
            <Route path="/ceramic-coating-uv-brisbane" element={<CeramicBrisbanePage />} />
            <Route path="/ceramic-coating-paint-correction-brisbane" element={<CeramicCorrectionPage />} />
            <Route path="/ceramic-glass-coating-brisbane" element={<CeramicGlassPage />} />
            <Route path="/ceramic-coating-wheels-brisbane" element={<CeramicWheelsPage />} />
            <Route path="/ceramic-ppf-brisbane" element={<CeramicPPFComboPage />} />
            <Route path="/ceramic-coating-longevity-brisbane" element={<CeramicLongevityPage />} />
            <Route path="/ceramic-vs-dealer-paint-protection-brisbane" element={<CeramicVsDealerPage />} />
            <Route path="/ceramic-coating-matte-paint-brisbane" element={<CeramicMattePage />} />
            <Route path="/ceramic-coating-maintenance-brisbane" element={<CeramicMaintenancePage />} />
            <Route path="/ceramic-coating-resale-brisbane" element={<CeramicResalePage />} />
            <Route path="/ceramic-coating-near-me-brisbane" element={<CeramicNearMePage />} />
            <Route path="/3m-commercial-window-film-brisbane" element={<ThreeMCommercialFilmPage />} />
            <Route path="/next-level-protection-brisbane" element={<NextLevelProtectionPage />} />
            <Route path="/warranties" element={<WarrantyPage />} />
            <Route path="/next-level-protection-tds" element={<ProductTDSPage />} />
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
