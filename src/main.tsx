import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerServiceWorker } from './utils/sw-register'
import { trackWebVitals } from './utils/performance'
import { initializeGA } from './utils/analytics'
import { inlineCriticalCSS, preloadNonCriticalCSS, optimizeFontLoading } from './utils/critical-css'

// Inline critical CSS for faster rendering
inlineCriticalCSS();

// Optimize font loading
optimizeFontLoading();

// Preload non-critical CSS
preloadNonCriticalCSS();

// Register service worker for caching
registerServiceWorker();

// Initialize performance tracking
trackWebVitals();

// Initialize Google Analytics
if (import.meta.env.PROD) {
   initializeGA('G-3ENL50W43R');
}

createRoot(document.getElementById("root")!).render(<App />);
