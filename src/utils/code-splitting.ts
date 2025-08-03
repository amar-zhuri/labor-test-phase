// Dynamic imports for code splitting
export const importComponent = (componentPath: string) => {
  return import(componentPath);
};

// Bundle analysis helper
export const analyzeBundleSize = () => {
  if (typeof window !== 'undefined' && import.meta.env.DEV) {
    console.log('Bundle analysis available in production build');
  }
};

// Tree shaking helper - mark unused exports
export const markUnused = (exportName: string) => {
  if (import.meta.env.DEV) {
    console.warn(`Unused export detected: ${exportName}`);
  }
};

// Preload component utility
export const preloadComponent = (componentImport: () => Promise<any>) => {
  const link = document.createElement('link');
  link.rel = 'modulepreload';
  link.href = componentImport.toString();
  document.head.appendChild(link);
};