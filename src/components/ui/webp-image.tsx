import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface WebPImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
}

const WebPImage = ({ 
  src, 
  webpSrc,
  alt, 
  className, 
  priority = false,
  onLoad 
}: WebPImageProps) => {
  const [imageFormat, setImageFormat] = useState<'webp' | 'fallback'>('webp');
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Auto-generate WebP source if not provided
  const webpSource = webpSrc || src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  useEffect(() => {
    // Test WebP support
    const testWebP = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const dataURL = canvas.toDataURL('image/webp');
      return dataURL.indexOf('data:image/webp') === 0;
    };

    if (!testWebP()) {
      setImageFormat('fallback');
    }
  }, []);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    if (imageFormat === 'webp') {
      setImageFormat('fallback');
    }
  };

  const imageSrc = inView ? (imageFormat === 'webp' ? webpSource : src) : '';

  return (
    <picture className={cn("block", className)}>
      {imageFormat === 'webp' && (
        <source srcSet={webpSource} type="image/webp" />
      )}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
};

export default WebPImage;