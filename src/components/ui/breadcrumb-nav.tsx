import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

const BreadcrumbNav = ({ items, className }: BreadcrumbNavProps) => {
  useEffect(() => {
    // Add breadcrumb structured data
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": item.href ? `${window.location.origin}${item.href}` : undefined
      }))
    };

    // Remove existing breadcrumb schema
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-breadcrumb]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new breadcrumb schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const schemaToRemove = document.querySelector('script[type="application/ld+json"][data-breadcrumb]');
      if (schemaToRemove) {
        schemaToRemove.remove();
      }
    };
  }, [items]);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
    >
      <ol className="flex items-center space-x-1">
        <li>
          <a 
            href="/" 
            className="flex items-center hover:text-foreground transition-colors"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-1">
            <ChevronRight className="w-4 h-4" />
            {item.href ? (
              <a
                href={item.href}
                onClick={(e) => {
                  if (item.href?.startsWith('#')) {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }
                }}
                className={cn(
                  "hover:text-foreground transition-colors",
                  item.active && "text-foreground font-medium"
                )}
              >
                {item.label}
              </a>
            ) : (
              <span 
                className={cn(
                  item.active && "text-foreground font-medium"
                )}
                aria-current={item.active ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbNav;