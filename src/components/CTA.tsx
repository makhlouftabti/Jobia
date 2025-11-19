import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2 } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto text-primary-foreground animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Prêt à Trouver du Travail
            <span className="block text-primary-glow">Sur Votre Téléphone ?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Rejoignez des milliers de travailleurs et d'entreprises utilisant notre plateforme mobile-first pour se connecter et collaborer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="/Jobia.apk" download>
              <Button variant="hero" size="lg" className="text-lg px-10 py-5 bg-card text-card-foreground hover:shadow-glow hover:scale-105">
                <Users className="h-6 w-6" />
                Télécharger l'App Mobile
                <ArrowRight className="h-6 w-6" />
              </Button>
            </a>
            <Button variant="outline-hero" size="lg" className="text-lg px-10 py-5 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Building2 className="h-6 w-6" />
              Portail Entreprise
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-2xl font-semibold mb-2">Mobile-First</div>
              <div className="text-primary-foreground/80">Optimisé pour les travailleurs en déplacement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold mb-2">Notifications Push</div>
              <div className="text-primary-foreground/80">Ne ratez jamais une opportunité d'emploi</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold mb-2">Matching Instantané</div>
              <div className="text-primary-foreground/80">Trouvez des matchs en temps réel</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl animate-glow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl animate-glow" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-glow" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default CTA;