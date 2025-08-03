// Critical CSS utilities for performance optimization
export const inlineCriticalCSS = () => {
  if (typeof document === 'undefined') return;

  // Critical CSS that should be inlined for faster rendering
  const criticalCSS = `
    /* Critical above-the-fold styles */
    :root {
      --background: 0 0% 100%;
      --foreground: 222.2 84% 4.9%;
      --primary: 221.2 83.2% 53.3%;
      --primary-foreground: 210 40% 98%;
    }
    
    * {
      border-color: hsl(var(--border));
    }
    
    body {
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      font-family: system-ui, -apple-system, sans-serif;
    }
    
    .header-critical {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      background: hsl(var(--background) / 0.95);
      backdrop-filter: blur(10px);
    }
    
    .hero-critical {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.8));
    }
    
    .btn-critical {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.375rem;
      font-weight: 500;
      transition: all 0.2s;
      background: hsl(var(--primary));
      color: hsl(var(--primary-foreground));
      padding: 0.5rem 1rem;
    }
    
    .btn-critical:hover {
      background: hsl(var(--primary) / 0.9);
    }
  `;

  // Check if critical CSS is already inlined
  if (document.querySelector('#critical-css')) return;

  // Create and inject critical CSS
  const style = document.createElement('style');
  style.id = 'critical-css';
  style.textContent = criticalCSS;
  document.head.insertBefore(style, document.head.firstChild);
};

// Preload non-critical CSS
export const preloadNonCriticalCSS = () => {
  if (typeof document === 'undefined') return;

  const nonCriticalStyles = [
    // Add paths to non-critical CSS files
    '/src/components/ui/',
    '/src/pages/'
  ];

  nonCriticalStyles.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = path;
    document.head.appendChild(link);
  });
};

// Font display optimization
export const optimizeFontLoading = () => {
  if (typeof document === 'undefined') return;

  // Add font-display: swap to existing font links
  const fontLinks = document.querySelectorAll('link[href*="fonts"]');
  fontLinks.forEach(link => {
    link.setAttribute('rel', 'preload');
    link.setAttribute('as', 'font');
    link.setAttribute('crossorigin', '');
  });
};