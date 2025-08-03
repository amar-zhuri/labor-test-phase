import { GraduationCap, Users, Award, Stethoscope, Globe, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const ExpertTeam = () => {
  const { t } = useLanguage();
  const teamHighlights = [
    {
      icon: Users,
      title: t('team.experience'),
      description: t('team.experience.desc'),
      detail: t('team.experience.detail')
    },
    {
      icon: GraduationCap,
      title: t('team.international'),
      description: t('team.international.desc'),
      detail: t('team.international.detail')
    },
    {
      icon: Globe,
      title: t('team.standards'),
      description: t('team.standards.desc'),
      detail: t('team.standards.detail')
    },
    {
      icon: Stethoscope,
      title: t('team.supervision'),
      description: t('team.supervision.desc'),
      detail: t('team.supervision.detail')
    }
  ];

  const certifications = [
    t('team.cert1'),
    t('team.cert2'),
    t('team.cert3'),
    t('team.cert4')
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('team.title')} <span className="text-primary-light">{t('team.title.highlight')}</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            {t('team.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamHighlights.map((highlight, index) => (
            <Card key={index} className="border-0 shadow-medical bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-primary-light" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{highlight.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-3">{highlight.description}</p>
                <p className="text-xs text-primary-light font-medium">{highlight.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                {t('team.certifications')}
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                {t('team.certifications.desc')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary-light flex-shrink-0" />
                    <span className="text-sm text-primary-foreground/90">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-primary-light/20 rounded-xl p-8">
                <Award className="h-16 w-16 text-primary-light mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-4">{t('team.expertise')}</h4>
                <p className="text-primary-foreground/90 mb-6">
                  {t('team.expertise.desc')}
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary-light">500K+</div>
                    <div className="text-sm text-primary-foreground/80">{t('team.tests')}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-light">99.6%</div>
                    <div className="text-sm text-primary-foreground/80">{t('team.accuracy')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;