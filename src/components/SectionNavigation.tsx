import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface NavigationLink {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
}

interface SectionNavigationProps {
  title?: string;
  links: NavigationLink[];
  className?: string;
}

const SectionNavigation = ({ 
  title = "Explore Our Services", 
  links, 
  className 
}: SectionNavigationProps) => {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className={cn("py-8", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => {
                if (link.external) {
                  window.open(link.href, '_blank');
                } else {
                  scrollToSection(link.href);
                }
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {link.icon && (
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {link.icon}
                      </div>
                    )}
                    <h3 className="font-semibold text-lg">{link.title}</h3>
                  </div>
                  {link.external ? (
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{link.description}</p>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="p-0 h-auto font-medium text-primary hover:text-primary/80"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (link.external) {
                      window.open(link.href, '_blank');
                    } else {
                      scrollToSection(link.href);
                    }
                  }}
                >
                  {link.external ? 'Visit External Link' : 'Learn More'}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionNavigation;