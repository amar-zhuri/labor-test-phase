import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SEOHead from "@/components/SEOHead";
import ErrorBoundary from "@/components/ui/error-boundary";
import LoadingSpinner from "@/components/ui/loading-spinner";

// Lazy load non-critical components
const About = lazy(() => import("@/components/About"));
const TechnologySection = lazy(() => import("@/components/TechnologySection"));
const Services = lazy(() => import("@/components/Services"));
const ExpertTeam = lazy(() => import("@/components/ExpertTeam"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppFloat = lazy(() => import("@/components/WhatsAppFloat"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <section id="about" aria-label="About our laboratory">
              <About />
            </section>
            <section aria-label="Technology and equipment">
              <TechnologySection />
            </section>
            <section id="services" aria-label="Medical services">
              <Services />
            </section>
            <section aria-label="Expert team">
              <ExpertTeam />
            </section>
            <section id="contact" aria-label="Contact information">
              <Contact />
            </section>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
