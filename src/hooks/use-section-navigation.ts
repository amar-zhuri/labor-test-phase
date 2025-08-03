import { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
  element?: Element;
}

export const useSectionNavigation = (sections: Section[]) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [breadcrumbItems, setBreadcrumbItems] = useState<Array<{label: string, href: string, active?: boolean}>>([]);

  useEffect(() => {
    const sectionElements = sections.map(section => ({
      ...section,
      element: document.getElementById(section.id)
    })).filter(section => section.element);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sectionElements.find(s => s.element === entry.target);
            if (section) {
              setActiveSection(section.id);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0.1
      }
    );

    sectionElements.forEach(section => {
      if (section.element) {
        observer.observe(section.element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const currentSection = sections.find(s => s.id === activeSection);
    if (currentSection) {
      setBreadcrumbItems([
        { label: currentSection.label, href: `#${currentSection.id}`, active: true }
      ]);
    }
  }, [activeSection, sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return {
    activeSection,
    breadcrumbItems,
    scrollToSection
  };
};