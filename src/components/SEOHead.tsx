import { useEffect } from 'react';
import { updateMetaTags, generateLocalBusinessSchema, addStructuredData, type SEOConfig } from '@/utils/seo';

interface SEOHeadProps {
  config?: Partial<SEOConfig>;
}

const SEOHead = ({ config = {} }: SEOHeadProps) => {
  useEffect(() => {
    // Update meta tags
    updateMetaTags(config);
    
    // Add structured data for LocalBusiness
    const schema = generateLocalBusinessSchema();
    addStructuredData(schema);
    
    // Add canonical URL if not provided
    if (!config.canonical) {
      updateMetaTags({ canonical: window.location.href.split('?')[0].split('#')[0] });
    }
  }, [config]);

  return null; // This component doesn't render anything
};

export default SEOHead;