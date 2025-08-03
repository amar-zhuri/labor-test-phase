// SEO utilities and helpers
export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: any;
}

export const defaultSEOConfig: SEOConfig = {
  title: "Laboratori Labor - Analizat më të Sakta në Prizren | Rezultate Online 24/7",
  description: "Laboratori Labor - laboratori mjekësor modern në Prizren që ofron analizat më të sakta dhe të shpejta. Rezultate elektronike 24/7, teknologji e avancuar, ekip ekspert.",
  keywords: "laboratori labor, laboratori mjekësor, Prizren, Kosovo, analizat, rezultate online 24/7, rezultate elektronike, ekzaminimet mjekësore, hematologji, biokimi, mikrobiologji, analiza urine",
  ogImage: "/og-image.jpg"
};

export const updateMetaTags = (config: Partial<SEOConfig>) => {
  const finalConfig = { ...defaultSEOConfig, ...config };
  
  // Update title
  document.title = finalConfig.title;
  
  // Update meta description
  updateMetaTag('description', finalConfig.description);
  
  // Update keywords
  if (finalConfig.keywords) {
    updateMetaTag('keywords', finalConfig.keywords);
  }
  
  // Update canonical URL
  if (finalConfig.canonical) {
    updateLinkTag('canonical', finalConfig.canonical);
  }
  
  // Update Open Graph tags
  updateMetaTag('og:title', finalConfig.title, 'property');
  updateMetaTag('og:description', finalConfig.description, 'property');
  if (finalConfig.ogImage) {
    updateMetaTag('og:image', finalConfig.ogImage, 'property');
  }
  
  // Update Twitter Card tags
  updateMetaTag('twitter:title', finalConfig.title);
  updateMetaTag('twitter:description', finalConfig.description);
  if (finalConfig.ogImage) {
    updateMetaTag('twitter:image', finalConfig.ogImage);
  }
};

const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
};

const updateLinkTag = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
};

// Generate structured data for LocalBusiness
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Laboratori Labor",
  "description": "Laboratori Labor - laboratori mjekësor modern në Prizren që ofron analizat më të sakta dhe të shpejta me rezultate elektronike 24/7.",
  "url": "https://laboratorilabor.com",
  "telephone": "+383 49 217 859",
  "email": "info@laboratorilabor.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rr. Gjeravica, Nr.30",
    "addressLocality": "Prizren",
    "addressCountry": "XK",
    "postalCode": "20000"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "42.2135",
    "longitude": "20.7397"
  },
  "openingHours": [
    "Mo-Fr 07:00-19:00",
    "Sa 08:00-14:00"
  ],
  "priceRange": "$$",
  "image": "https://laboratorilabor.com/og-image.jpg",
  "sameAs": [
    "https://www.facebook.com/lablabor",
    "https://www.instagram.com/laboratori_labor/"
  ],
  "medicalSpecialty": [
    "Hematology",
    "Clinical Chemistry", 
    "Microbiology",
    "Immunology"
  ],
  "availableService": [
    {
      "@type": "MedicalTest",
      "name": "Rezultate Elektronike 24/7",
      "description": "Qasje online në rezultatet e testeve në çdo kohë të ditës dhe natës"
    },
    {
      "@type": "MedicalTest",
      "name": "Analizat e Gjakut",
      "description": "Analiza të plota të gjakut me teknologji moderne dhe rezultate të shpejta"
    },
    {
      "@type": "MedicalTest", 
      "name": "Analizat Biokimike",
      "description": "Testime biokimike për funksionin e organeve me raportim elektronik"
    },
    {
      "@type": "MedicalTest",
      "name": "Analizat Mikrobiologjike", 
      "description": "Identifikimi i infeksioneve dhe baktereve me rezultate online"
    },
    {
      "@type": "MedicalTest",
      "name": "Analizat e Urinës",
      "description": "Analiza të plota të urinës për diagnostikim të sëmundjeve urologjike"
    }
  ]
});

// Add structured data to page
export const addStructuredData = (schema: any) => {
  // Remove existing structured data
  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) {
    existing.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};