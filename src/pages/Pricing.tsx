import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Sparkles, Crown, Rocket } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Gratuit",
      price: "0 DZD",
      period: "/mois",
      description: "Parfait pour commencer",
      icon: Sparkles,
      popular: false,
      features: [
        "5 candidatures par mois",
        "Recherche d'emplois de base",
        "Profil simple",
        "Notifications par email",
        "Support communautaire"
      ]
    },
    {
      name: "Premium",
      price: "1 200 DZD",
      period: "/mois",
      description: "Pour les chercheurs d'emploi actifs",
      icon: Crown,
      popular: true,
      features: [
        "Candidatures illimitées",
        "Matching IA avancé",
        "Profil prioritaire",
        "Notifications push",
        "Support par chat",
        "Statistiques détaillées",
        "CV premium"
      ]
    },
    {
      name: "Entreprise",
      price: "6 500 DZD",
      period: "/mois",
      description: "Pour les entreprises qui recrutent",
      icon: Rocket,
      popular: false,
      features: [
        "Publication d'emplois illimitée",
        "Candidats illimités",
        "Outils de tri avancés",
        "Tableau de bord analytique",
        "Support prioritaire",
        "Intégration API",
        "Manager d'équipe"
      ]
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
            Tarifs Simples et Transparents
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choisissez le plan qui correspond à vos besoins. Commencez gratuitement, 
            évoluez quand vous le souhaitez.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-border/50 ${plan.popular ? 'border-primary shadow-elegant' : ''}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Le Plus Populaire
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <plan.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {plan.description}
                </CardDescription>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.name === "Gratuit" ? "Commencer Gratuitement" : 
                   plan.name === "Premium" ? "Essayer Premium" : "Contacter les Ventes"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-lg mb-3">Puis-je changer de plan à tout moment ?</h3>
              <p className="text-muted-foreground">
                Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment. 
                Les changements prennent effet immédiatement.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Y a-t-il une période d'essai gratuite ?</h3>
              <p className="text-muted-foreground">
                Le plan Premium inclut un essai gratuit de 7 jours. Aucun engagement, 
                annulation possible à tout moment.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Quels moyens de paiement acceptez-vous ?</h3>
              <p className="text-muted-foreground">
                Nous acceptons toutes les cartes de crédit principales (Visa, MasterCard, AmEx) 
                ainsi que PayPal et les virements SEPA.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Puis-je annuler mon abonnement ?</h3>
              <p className="text-muted-foreground">
                Oui, vous pouvez annuler votre abonnement à tout moment depuis votre compte. 
                Aucuns frais cachés ou pénalités.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Prêt à Commencer ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Rejoignez des milliers d'utilisateurs qui utilisent déjà Jobia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/signup">Créer un Compte Gratuit</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/login">Se Connecter</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;