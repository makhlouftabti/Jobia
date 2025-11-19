import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Briefcase, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleWorkerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - redirect to worker dashboard
    navigate("/worker-dashboard");
  };

  const handleCompanyLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - redirect to company dashboard
    navigate("/company-dashboard");
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
            <CardTitle className="text-2xl font-bold">Bienvenue</CardTitle>
            <CardDescription>Choisissez votre type de compte pour continuer</CardDescription>
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
                <form onSubmit={handleWorkerLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="worker-email">Email</Label>
                    <Input
                      id="worker-email"
                      type="email"
                      placeholder="Entrez votre email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="worker-password">Mot de passe</Label>
                    <Input
                      id="worker-password"
                      type="password"
                      placeholder="Entrez votre mot de passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Se connecter
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="company">
                <form onSubmit={handleCompanyLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-email">Email Entreprise</Label>
                    <Input
                      id="company-email"
                      type="email"
                      placeholder="Entrez l'email de l'entreprise"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-password">Mot de passe</Label>
                    <Input
                      id="company-password"
                      type="password"
                      placeholder="Entrez votre mot de passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Se connecter
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-sm text-muted-foreground">
              Vous n'avez pas de compte ?{" "}
              <Link to="/signup" className="text-primary hover:underline">
                Inscrivez-vous ici
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;