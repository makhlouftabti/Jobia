import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Bell, MapPin, Clock, Shield, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Design Mobile-First",
      description: "Optimisé pour les travailleurs mobiles. Postulez aux emplois, suivez vos candidatures, et communiquez avec les employeurs en déplacement.",
      delay: "0s"
    },
    {
      icon: Bell,
      title: "Notifications Instantanées",
      description: "Soyez notifié immédiatement quand de nouveaux emplois correspondent à vos compétences ou quand les employeurs répondent à vos candidatures.",
      delay: "0.2s"
    },
    {
      icon: MapPin,
      title: "Emplois Géolocalisés",
      description: "Trouvez des opportunités de travail près de chez vous ou découvrez des postes en télétravail qui correspondent à vos préférences.",
      delay: "0.4s"
    },
    {
      icon: Clock,
      title: "Candidatures Rapides",
      description: "Postulez aux emplois en quelques clics. Profils pré-remplis et candidatures en un clic vous font gagner du temps.",
      delay: "0.6s"
    },
    {
      icon: Shield,
      title: "Entreprises Vérifiées",
      description: "Toutes les entreprises sont vérifiées et contrôlées. Travaillez en toute confiance en sachant que les employeurs sont légitimes.",
      delay: "0.8s"
    },
    {
      icon: Star,
      title: "Système de Notation",
      description: "Notez les employeurs et consultez les évaluations d'entreprises d'autres travailleurs pour prendre des décisions éclairées.",
      delay: "1s"
    }
  ];

  return (
    <section className="py-24 bg-feature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pourquoi Choisir Notre App Mobile ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conçue spécifiquement pour les travailleurs mobiles et freelances qui ont besoin de flexibilité et de rapidité dans leur recherche d'emploi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{animationDelay: feature.delay}}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;