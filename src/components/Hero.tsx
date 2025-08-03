import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/laboratory-hero.jpg";
import { useEffect } from "react";
import { preloadCriticalResources } from "@/utils/performance";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Preload critical resources for better performance
    preloadCriticalResources([heroImage]);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Seksioni kryesor i laboratorit">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Laboratori mjekësor modern me pajisje të avancuara për analizat më të sakta në Prizren"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 opacity-95 leading-relaxed px-4 sm:px-0">
            {t('hero.subtitle')}
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 mx-4 sm:mx-0">
            <div className="flex items-center justify-center gap-2 text-green-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">{t('hero.results247')}</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4 sm:px-0">
            <div className="flex items-center gap-2 text-sm md:text-lg">
              <MapPin className="h-4 md:h-5 w-4 md:w-5" />
              <span>{t('hero.address')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-lg text-center">
              <Clock className="h-4 md:h-5 w-4 md:w-5" />
              <span className="hidden sm:inline">{t('hero.hours')}</span>
              <span className="sm:hidden">{t('hero.hours.mobile')}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 sm:px-0">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto w-full sm:w-auto"
              onClick={() => window.open('tel:+38344217859', '_self')}
            >
              <Phone className="mr-2 h-4 md:h-5 w-4 md:w-5" />
              {t('hero.contact')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto border-white/80 bg-white/10 text-white hover:bg-white hover:text-primary w-full sm:w-auto backdrop-blur-sm"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.services')}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;