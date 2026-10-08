import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Pages are prerendered to static HTML at build time for search engines
// (see scripts/prerender.mjs). The app then renders fresh in the browser,
// replacing that markup with the interactive version.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
