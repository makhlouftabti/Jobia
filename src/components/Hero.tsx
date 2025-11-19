import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI-powered job matching platform" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-primary-glow animate-glow" />
            <span className="text-primary-glow font-medium">Matching d'Emploi Mobile par IA</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bienvenue sur{" "}
            <span className="text-primary-glow outlined-text">Jobia</span>
            <span className="block text-primary-glow outlined-text">Travaillez Partout</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            L'application mobile qui connecte les travailleurs qualifiés et freelances avec des opportunités instantanément. 
            Les entreprises publient des emplois, examinent les candidatures et trouvent des talents sur notre plateforme complète.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="/Jobia.apk" download>
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Users className="h-5 w-5" />
                Télécharger l'App Mobile
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
              <Building2 className="h-5 w-5" />
              Portail Entreprise
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-primary-glow mb-2">100K+</div>
              <div className="text-primary-foreground/80">Travailleurs Actifs</div>
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl font-bold text-primary-glow mb-2">5K+</div>
              <div className="text-primary-foreground/80">Entreprises qui Recrutent</div>
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="text-4xl font-bold text-primary-glow mb-2">95%</div>
              <div className="text-primary-foreground/80">Taux de Réussite</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/20 rounded-full blur-xl animate-glow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/30 rounded-full blur-2xl animate-glow" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;