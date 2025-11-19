import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, UserPlus, Search, MessageCircle, CheckCircle, Building2, FileText, Users, Calendar } from "lucide-react";

const HowItWorks = () => {
  const workerSteps = [
    {
      icon: Download,
      title: "Téléchargez l'App",
      description: "Téléchargez Jobia gratuitement sur votre téléphone depuis l'App Store ou Google Play.",
      step: "1"
    },
    {
      icon: UserPlus,
      title: "Créez votre Profil",
      description: "Ajoutez vos compétences, expériences et préférences pour obtenir les meilleurs matchs.",
      step: "2"
    },
    {
      icon: Search,
      title: "Découvrez des Emplois",
      description: "Notre IA vous propose des emplois qui correspondent parfaitement à votre profil et localisation.",
      step: "3"
    },
    {
      icon: MessageCircle,
      title: "Postulez et Communiquez",
      description: "Postulez en un clic et communiquez directement avec les employeurs via l'app.",
      step: "4"
    },
    {
      icon: CheckCircle,
      title: "Commencez à Travailler",
      description: "Une fois sélectionné, commencez votre nouveau travail et notez votre expérience.",
      step: "5"
    }
  ];

  const companySteps = [
    {
      icon: Building2,
      title: "Créez votre Compte Entreprise",
      description: "Inscrivez-vous avec votre email professionnel et vérifiez votre entreprise.",
      step: "1"
    },
    {
      icon: FileText,
      title: "Publiez une Offre d'Emploi",
      description: "Décrivez le poste, les compétences requises et les conditions en quelques minutes.",
      step: "2"
    },
    {
      icon: Users,
      title: "Recevez des Candidatures",
      description: "Notre IA vous envoie automatiquement les candidats les plus qualifiés.",
      step: "3"
    },
    {
      icon: Calendar,
      title: "Planifiez des Entretiens",
      description: "Organisez des entretiens directement via la plateforme avec calendrier intégré.",
      step: "4"
    },
    {
      icon: CheckCircle,
      title: "Embauchez les Meilleurs Talents",
      description: "Sélectionnez vos candidats et gérez l'onboarding via notre tableau de bord.",
      step: "5"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Comment Fonctionne Jobia ?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez comment notre plateforme mobile connecte les travailleurs avec les entreprises 
            grâce à l'intelligence artificielle.
          </p>
        </div>

        {/* Process Overview */}
        <Tabs defaultValue="workers" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="workers" className="text-lg py-3">
              Pour les Travailleurs & Freelances
            </TabsTrigger>
            <TabsTrigger value="companies" className="text-lg py-3">
              Pour les Entreprises
            </TabsTrigger>
          </TabsList>

          <TabsContent value="workers" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Trouvez votre Emploi Idéal en 5 Étapes</h2>
              <p className="text-lg text-muted-foreground">
                De l'installation de l'app à votre premier jour de travail
              </p>
            </div>
            
            <div className="grid gap-8">
              {workerSteps.map((step, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
                >
                  <CardHeader className="flex flex-row items-start gap-6 space-y-0">
                    <div className="flex items-center gap-4">
                      <Badge 
                        variant="outline" 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-primary text-primary"
                      >
                        {step.step}
                      </Badge>
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="companies" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Recrutez les Meilleurs Talents en 5 Étapes</h2>
              <p className="text-lg text-muted-foreground">
                De la création de votre compte à l'embauche de vos premiers employés
              </p>
            </div>
            
            <div className="grid gap-8">
              {companySteps.map((step, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
                >
                  <CardHeader className="flex flex-row items-start gap-6 space-y-0">
                    <div className="flex items-center gap-4">
                      <Badge 
                        variant="outline" 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-primary text-primary"
                      >
                        {step.step}
                      </Badge>
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Benefits Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Choisir Jobia ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-border/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Matching IA Avancé</h3>
                <p className="text-muted-foreground">
                  Notre algorithme d'IA analyse vos compétences et préférences pour vous proposer 
                  les emplois les plus pertinents.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Communication Directe</h3>
                <p className="text-muted-foreground">
                  Communiquez directement avec les employeurs via notre chat intégré, 
                  sans intermédiaires.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Processus Simplifié</h3>
                <p className="text-muted-foreground">
                  Candidatures en un clic, suivi automatique et notifications push 
                  pour ne rien manquer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Prêt à Commencer ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Rejoignez des milliers d'utilisateurs qui trouvent du travail via Jobia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/signup">Télécharger l'App</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">Voir les Tarifs</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;