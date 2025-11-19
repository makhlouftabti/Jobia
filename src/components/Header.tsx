import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Jobia Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-foreground">Jobia</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">Tarifs</Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">Comment ça marche</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">À propos</Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex" asChild>
              <Link to="/login">Connexion</Link>
            </Button>
            <a href="/Jobia.apk" download>
              <Button variant="default">
                Télécharger l'App
              </Button>
            </a>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;