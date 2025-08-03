import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/34c49b4a-27df-4c53-b230-575af90598b4.png" 
              alt="Laboratori Labor Logo"
              className="h-8 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-primary transition-colors font-medium"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-800 hover:text-primary transition-colors font-medium"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-800 hover:text-primary transition-colors font-medium"
            >
              {t('nav.contact')}
            </button>
            <LanguageSwitcher />
          </nav>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="hidden xl:inline">Gjeravica 30, Prizren 20000</span>
              <span className="xl:hidden">Prizren</span>
            </div>
            <Button 
              size="sm" 
              className="flex items-center space-x-2"
              onClick={() => window.open('tel:+38344217859', '_self')}
            >
              <Phone className="h-4 w-4" />
              <span>{t('hero.contact')}</span>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg z-40">
            <nav className="p-4 space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-accent"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-accent"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-accent"
              >
                {t('nav.contact')}
              </button>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>Gjeravica 30, Prizren 20000, Republika e Kosovës</span>
                </div>
                <Button 
                  size="sm" 
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={() => window.open('tel:+38344217859', '_self')}
                >
                  <Phone className="h-4 w-4" />
                  <span>{t('hero.contact')}</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;