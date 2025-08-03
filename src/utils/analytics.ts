// Google Analytics utilities
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const initializeGA = (measurementId: string) => {
  // Create script tags for Google Analytics
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(gtagScript);

  const configScript = document.createElement('script');
  configScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', {
      page_title: document.title,
      page_location: window.location.href
    });
  `;
  document.head.appendChild(configScript);
};

// Track page views
export const trackPageView = (page_path: string, page_title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-EJFS5Z9CSJ', {
      page_path,
      page_title: page_title || document.title,
    });
  }
};

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific business events
export const trackContactEvent = (method: 'phone' | 'whatsapp' | 'email' | 'form') => {
  trackEvent('contact', 'engagement', method);
};

export const trackServiceView = (service: string) => {
  trackEvent('view_service', 'services', service);
};

export const trackLanguageChange = (language: string) => {
  trackEvent('language_change', 'localization', language);
};
