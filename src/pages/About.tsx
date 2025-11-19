import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Utilisateurs Actifs", value: "50K+", icon: Users },
    { label: "Emplois Publiés", value: "10K+", icon: Target },
    { label: "Matchs Réussis", value: "5K+", icon: Award },
    { label: "Wilayas", value: "48", icon: Globe },
  ];

  const team = [
    { name: "Chaima Bouriachi", role: "PDG & Fondatrice", initials: "CB" },
    { name: "Makhlouf Tabti", role: "Développeur", initials: "MT" },
    { name: "Sofiane Amrani", role: "Directeur Design", initials: "SA" },
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
            À Propos de Jobia
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nous révolutionnons la façon dont les gens trouvent du travail et dont les entreprises trouvent des talents 
            grâce à une technologie de matching basée sur l'IA et des expériences mobile-first.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Notre Mission</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Autonomiser Chaque Travailleur</h3>
              <p className="text-muted-foreground mb-6">
                Nous croyons que chacun mérite l'accès à des opportunités de travail significatives. Notre plateforme 
                basée sur l'IA connecte les travailleurs qualifiés et freelances avec des entreprises qui valorisent 
                leurs talents, créant un marché du travail plus inclusif et efficace.
              </p>
              <p className="text-muted-foreground">
                En exploitant des technologies de pointe et des algorithmes d'apprentissage profond, nous mettons en relation 
                les candidats avec des opportunités qui correspondent à leurs compétences, préférences et objectifs de carrière.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Notre Histoire</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Fondée en 2023, Jobia est née de la frustration face aux méthodes traditionnelles de recherche d'emploi. 
                  Nos fondateurs ont vécu directement combien il était chronophage et inefficace pour les chercheurs 
                  d'emploi et les employeurs de trouver la bonne correspondance.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Nous avons réalisé que la technologie mobile et l'intelligence artificielle pouvaient transformer 
                  ce processus. Aujourd'hui, notre plateforme utilise des algorithmes avancés pour analyser les compétences, 
                  les préférences et la culture d'entreprise afin de créer des correspondances parfaites en secondes, pas en semaines.
                </p>
                <p className="text-lg text-muted-foreground">
                  Ce qui a commencé comme une simple idée est devenu un écosystème florissant qui sert 
                  des milliers de travailleurs et d'entreprises en Algérie, rendant la recherche d'emploi et le recrutement 
                  plus efficaces, équitables et accessibles pour tous.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Rencontrez Notre Équipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-border/50">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="text-lg">{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Inclusivité</h3>
                <p className="text-muted-foreground">
                  Nous croyons en la création d'opportunités pour tous, indépendamment du parcours ou du niveau d'expérience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Précision</h3>
                <p className="text-muted-foreground">
                  Notre matching basé sur l'IA garantit que les bonnes personnes trouvent les bonnes opportunités efficacement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Nous améliorons continuellement notre plateforme pour offrir la meilleure expérience à tous les utilisateurs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à Commencer ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Rejoignez des milliers de travailleurs et d'entreprises qui utilisent déjà Jobia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/login">Commencer Aujourd'hui</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/">En Savoir Plus</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;