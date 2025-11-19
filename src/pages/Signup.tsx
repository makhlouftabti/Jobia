import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Briefcase, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: ""
  });
  const navigate = useNavigate();

  const handleWorkerSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup - redirect to worker dashboard
    navigate("/worker-dashboard");
  };

  const handleCompanySignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup - redirect to company dashboard
    navigate("/company-dashboard");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Créer un Compte</CardTitle>
            <CardDescription>Rejoignez Jobia et commencez votre parcours</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="worker" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="worker" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Travailleur
                </TabsTrigger>
                <TabsTrigger value="company" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Entreprise
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="worker">
                <form onSubmit={handleWorkerSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="worker-name">Nom Complet</Label>
                    <Input
                      id="worker-name"
                      type="text"
                      placeholder="Entrez votre nom complet"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="worker-email">Email</Label>
                    <Input
                      id="worker-email"
                      type="email"
                      placeholder="Entrez votre email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="worker-password">Mot de passe</Label>
                    <Input
                      id="worker-password"
                      type="password"
                      placeholder="Créez un mot de passe"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="worker-confirm">Confirmez le mot de passe</Label>
                    <Input
                      id="worker-confirm"
                      type="password"
                      placeholder="Confirmez votre mot de passe"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Créer un Compte
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="company">
                <form onSubmit={handleCompanySignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Nom de l'Entreprise</Label>
                    <Input
                      id="company-name"
                      type="text"
                      placeholder="Entrez le nom de l'entreprise"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-contact">Nom du Contact</Label>
                    <Input
                      id="company-contact"
                      type="text"
                      placeholder="Entrez le nom de la personne de contact"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-email">Email Entreprise</Label>
                    <Input
                      id="company-email"
                      type="email"
                      placeholder="Entrez l'email de l'entreprise"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-password">Mot de passe</Label>
                    <Input
                      id="company-password"
                      type="password"
                      placeholder="Créez un mot de passe"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-confirm">Confirmez le mot de passe</Label>
                    <Input
                      id="company-confirm"
                      type="password"
                      placeholder="Confirmez votre mot de passe"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Créer un Compte Entreprise
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-sm text-muted-foreground">
              Vous avez déjà un compte ?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Connectez-vous ici
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Signup;