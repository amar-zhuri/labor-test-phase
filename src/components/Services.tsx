import { Droplet, Heart, Activity, TestTube, Microscope, FileText, Bug, AlertTriangle, Pill, Zap, Shield, Beaker, FlaskConical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LazyImage from "@/components/ui/lazy-image";
import bloodTestingImage from "@/assets/blood-testing.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Droplet,
      title: t('service.blood.title'),
      description: t('service.blood.desc')
    },
    {
      icon: Heart,
      title: t('service.cardiac.title'),
      description: t('service.cardiac.desc')
    },
    {
      icon: Activity,
      title: t('service.hormonal.title'),
      description: t('service.hormonal.desc')
    },
    {
      icon: TestTube,
      title: t('service.biochemistry.title'),
      description: t('service.biochemistry.desc')
    },
    {
      icon: Bug,
      title: t('service.infectious.title'),
      description: t('service.infectious.desc')
    },
    {
      icon: AlertTriangle,
      title: t('service.tumor.title'),
      description: t('service.tumor.desc')
    },
    {
      icon: Activity,
      title: t('service.allergy.title'),
      description: t('service.allergy.desc')
    },
    {
      icon: Pill,
      title: t('service.diabetes.title'),
      description: t('service.diabetes.desc')
    },
    {
      icon: Zap,
      title: t('service.thyroid.title'),
      description: t('service.thyroid.desc')
    },
    {
      icon: Heart,
      title: t('service.vitamin.title'),
      description: t('service.vitamin.desc')
    },
    {
      icon: Shield,
      title: t('service.autoimmune.title'),
      description: t('service.autoimmune.desc')
    },
    {
      icon: Beaker,
      title: t('service.heavymetals.title'),
      description: t('service.heavymetals.desc')
    },
    {
      icon: FlaskConical,
      title: t('service.urine.title'),
      description: t('service.urine.desc')
    },
    {
      icon: FileText,
      title: t('service.electronic.title'),
      description: t('service.electronic.desc')
    },
    {
      icon: Microscope,
      title: t('service.detailed.title'),
      description: t('service.detailed.desc')
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('services.title')} <span className="text-primary">{t('services.title.highlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <LazyImage 
              src={bloodTestingImage} 
              alt="Analizat e gjakut - pajisje moderne për testimin e gjakut në Laboratorin Labor në Prizren"
              className="rounded-2xl shadow-medical w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              {t('services.advanced.title')}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('services.advanced.description')}
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 text-green-700 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold">{t('services.online247')}</span>
              </div>
              <p className="text-green-600 text-sm">
                {t('services.online247.desc')}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Microscope className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{t('services.tech')}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{t('services.reports')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medical transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('services.more.title')}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('services.more.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;