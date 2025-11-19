import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Search, Send, Briefcase, Building, Users, Eye, Handshake } from "lucide-react";

const HowItWorks = () => {
  const workerSteps = [
    {
      icon: Download,
      title: "Téléchargez l'App",
      description: "Obtenez notre application mobile depuis l'App Store ou Google Play. Créez votre profil en quelques minutes.",
      step: "01"
    },
    {
      icon: Search,
      title: "Parcourez et Postulez",
      description: "Recherchez des emplois par localisation, catégorie ou entreprise. Postulez en un clic avec votre profil sauvegardé.",
      step: "02"
    },
    {
      icon: Send,
      title: "Recevez des Notifications",
      description: "Recevez des notifications push instantanées quand les employeurs consultent votre candidature ou veulent discuter.",
      step: "03"
    },
    {
      icon: Briefcase,
      title: "Commencez à Travailler",
      description: "Acceptez les offres d'emploi, coordonnez avec les employeurs et soyez payé en toute sécurité via l'application.",
      step: "04"
    }
  ];

  const companySteps = [
    {
      icon: Building,
      title: "Créez un Compte Entreprise",
      description: "Inscrivez-vous pour un compte entreprise sur notre portail web. Configurez le profil et les exigences de votre entreprise.",
      step: "01"
    },
    {
      icon: Users,
      title: "Publiez des Offres d'Emploi",
      description: "Créez des offres d'emploi détaillées avec les exigences, la localisation et les détails de rémunération.",
      step: "02"
    },
    {
      icon: Eye,
      title: "Examinez les Candidatures",
      description: "Parcourez les candidatures des travailleurs mobiles, consultez les profils et communiquez directement via notre portail.",
      step: "03"
    },
    {
      icon: Handshake,
      title: "Embauchez et Gérez",
      description: "Sélectionnez les meilleurs candidats, faites des offres et gérez votre main-d'œuvre via notre tableau de bord entreprise.",
      step: "04"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comment Ça Marche
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Étapes simples pour que les travailleurs trouvent des emplois via notre application mobile et pour que les entreprises recrutent via notre portail web.
          </p>
        </div>

        <Tabs defaultValue="workers" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="workers" className="text-lg py-3">Pour les Travailleurs & Freelances</TabsTrigger>
            <TabsTrigger value="companies" className="text-lg py-3">Pour les Entreprises</TabsTrigger>
          </TabsList>
          
          <TabsContent value="workers" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workerSteps.map((step, index) => (
                <Card 
                  key={index} 
                  className="relative group hover:shadow-elegant transition-all duration-300 animate-slide-up"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="companies" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companySteps.map((step, index) => (
                <Card 
                  key={index} 
                  className="relative group hover:shadow-elegant transition-all duration-300 animate-slide-up"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorks;