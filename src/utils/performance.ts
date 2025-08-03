// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof performance !== 'undefined' && performance.mark) {
    performance.mark(`${name}-start`);
    fn();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  } else {
    fn();
  }
};

// Web Vitals tracking
export const trackWebVitals = () => {
  if (typeof window !== 'undefined' && 'web-vital' in window) {
    // This would integrate with analytics in a real app
    console.log('Web Vitals tracking initialized');
  }
};

// Image preloading utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Critical resource preloading
export const preloadCriticalResources = async (resources: string[]) => {
  const promises = resources.map(resource => {
    if (resource.endsWith('.jpg') || resource.endsWith('.png') || resource.endsWith('.webp')) {
      return preloadImage(resource);
    }
    // Add other resource types as needed
    return Promise.resolve();
  });

  try {
    await Promise.all(promises);
    console.log('Critical resources preloaded');
  } catch (error) {
    console.warn('Some critical resources failed to preload:', error);
  }
};