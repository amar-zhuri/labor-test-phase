import { MapPin, Phone, Clock, Mail, MessageSquare, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      details: [t('hero.address'), "Republika e Kosovës"]
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      details: ["+383 44 217 859", "+383 49 767 705", t('contact.phone.desc')]
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      details: [t('hours.weekdays'), t('hours.saturday'), t('hours.sunday')]
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: ["laboratorilabor@gmail.com", t('contact.email.desc')]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('contact.title')} <span className="text-primary">{t('contact.title.highlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medical transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground mb-1">{detail}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-medical p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                {t('contact.visit')}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('contact.visit.desc')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{t('hero.address')}</p>
                    <p className="text-sm text-muted-foreground">{t('contact.parking')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{t('contact.hours')}</p>
                    <p className="text-sm text-muted-foreground">{t('hours.short')}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-6 md:mt-8">
                {/* Primary action buttons row */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="lg"
                    className="w-full sm:flex-1"
                    onClick={() => window.open('tel:+38344217859', '_self')}
                  >
                    <Phone className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                    {t('contact.call')}
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="bg-green-500 text-white border-green-500 hover:bg-green-600 hover:border-green-600 w-full sm:flex-1"
                    onClick={() => window.open('https://wa.me/38344217859', '_blank')}
                  >
                    <MessageSquare className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                    {t('contact.whatsapp')}
                  </Button>
                </div>
                {/* Directions button - separate row for better mobile layout */}
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:border-blue-600 w-full"
                  onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Laboratori+Labor,+Gjeravica+30,+Prizren+20000,+Kosovo', '_blank')}
                >
                  <Navigation className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  {t('contact.directions')}
                </Button>
              </div>
            </div>
            <div className="rounded-xl h-80 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.0560376088933!2d20.72960357640207!3d42.21324694436382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135395b4f6c36203%3A0xfdf75eb84c8de2a4!2zTGFib3JhdG9yaSAiTGFib3LigJ0!5e0!3m2!1sen!2s!4v1754234412301!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laboratori Labor Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;