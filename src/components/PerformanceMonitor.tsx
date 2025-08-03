import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observePerformance = () => {
      // First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
          }
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
        });
      });

      observer.observe({ type: 'paint', buffered: true });
      observer.observe({ type: 'largest-contentful-paint', buffered: true });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        if (clsValue > 0) {
          console.log('CLS:', clsValue);
        }
      });

      clsObserver.observe({ type: 'layout-shift', buffered: true });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (entry.processingStart && entry.startTime) {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        });
      });

      if ('first-input' in PerformanceObserver.supportedEntryTypes) {
        fidObserver.observe({ type: 'first-input', buffered: true });
      }
    };

    // Only monitor in production
    if (import.meta.env.PROD && 'PerformanceObserver' in window) {
      observePerformance();
    }

    // Monitor bundle size in development
    if (import.meta.env.DEV) {
      console.log('Performance monitoring active in development mode');
    }
  }, []);

  return null; // This is a monitoring component, no UI needed
};

export default PerformanceMonitor;