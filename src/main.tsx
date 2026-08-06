import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initPhoneCtaTracking } from './lib/gtm'
import { captureAttribution } from './lib/attribution'

initPhoneCtaTracking()
/* Once per page load, before render. Not on route changes — an internal
   navigation carries no campaign parameters and would clobber first-touch. */
captureAttribution()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
