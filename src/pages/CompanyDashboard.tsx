import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { 
  Plus, 
  Briefcase, 
  Users, 
  Eye, 
  CheckCircle, 
  XCircle, 
  Clock,
  ArrowLeft,
  Star,
  MapPin
} from "lucide-react";

const CompanyDashboard = () => {
  // Mock data
  const jobPostings = [
    { 
      id: 1, 
      title: "Développeur React", 
      applications: 12, 
      status: "Actif",
      posted: "il y a 2 jours",
      type: "Temps plein"
    },
    { 
      id: 2, 
      title: "Designer UI/UX", 
      applications: 8, 
      status: "Actif",
      posted: "il y a 1 semaine",
      type: "Contrat"
    },
    { 
      id: 3, 
      title: "Responsable Marketing", 
      applications: 15, 
      status: "Fermé",
      posted: "il y a 2 semaines",
      type: "Temps plein"
    }
  ];

  const recentApplications = [
    {
      id: 1,
      name: "Sarah Benali",
      position: "Développeur React",
      rating: 4.8,
      location: "Alger",
      status: "pending",
      fr_status: "En attente",
      appliedAt: "il y a 2 heures"
    },
    {
      id: 2,
      name: "Mohamed Amrani",
      position: "Designer UI/UX", 
      rating: 4.9,
      location: "Sétif",
      status: "reviewed",
      fr_status: "Examiné",
      appliedAt: "il y a 5 heures"
    },
    {
      id: 3,
      name: "Amina Kaci",
      position: "Développeur React",
      rating: 4.7,
      location: "Oran", 
      status: "pending",
      fr_status: "En attente",
      appliedAt: "il y a 1 jour"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "reviewed":
        return <Eye className="h-4 w-4 text-blue-500" />;
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-2xl font-bold">Tableau de Bord Entreprise</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium">Tech Corp Inc.</p>
                <p className="text-sm text-muted-foreground">admin@techcorp.com</p>
              </div>
              <Avatar>
                <AvatarFallback>TC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Emplois Actifs</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">+1 du mois dernier</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Candidatures</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">35</div>
              <p className="text-xs text-muted-foreground">+12 de la semaine dernière</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">En Attente</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Nécessite attention</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Embauches ce Mois</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">+2 du mois dernier</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList>
            <TabsTrigger value="jobs">Offres d'Emploi</TabsTrigger>
            <TabsTrigger value="applications">Candidatures</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Vos Offres d'Emploi</h2>
              <Link to="/post-job">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Publier une Offre
                </Button>
              </Link>
            </div>

            <div className="grid gap-4">
              {jobPostings.map((job) => (
                <Card key={job.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4">
                          <span>Publié {job.posted}</span>
                          <Badge variant="outline">{job.type}</Badge>
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={job.status === "Actif" ? "default" : "secondary"}>
                          {job.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                          {job.applications} candidatures
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Link to={`/review-application?id=${job.id}`}>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Voir Candidatures
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm">Modifier</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <h2 className="text-xl font-semibold">Candidatures Récentes</h2>
            
            <div className="grid gap-4">
              {recentApplications.map((application) => (
                <Card key={application.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>
                            {application.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{application.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            A postulé pour {application.position}
                          </p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs">{application.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{application.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(application.status)}
                          <span className="text-sm">{application.fr_status}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{application.appliedAt}</span>
                        <div className="flex gap-2">
                          <Link to={`/review-application?id=${application.id}`}>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-2" />
                              Examiner
                            </Button>
                          </Link>
                          {application.status === "pending" && (
                            <>
                              <Button size="sm" variant="default">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Accepter
                              </Button>
                              <Button size="sm" variant="outline">
                                <XCircle className="h-4 w-4 mr-2" />
                                Refuser
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyDashboard;