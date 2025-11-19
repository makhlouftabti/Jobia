import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  Search, 
  Bookmark, 
  Clock, 
  CheckCircle, 
  XCircle,
  ArrowLeft,
  Star,
  MapPin,
  Briefcase,
  DollarSign,
  TrendingUp
} from "lucide-react";

const WorkerDashboard = () => {
  // Mock data
  const recentJobs = [
    {
      id: 1,
      title: "Développeur React Senior",
      company: "Tech Corp Inc.",
      location: "Alger",
      salary: "120 000 - 150 000 DZD",
      type: "Temps plein",
      posted: "il y a 2 jours",
      match: 95,
      saved: true
    },
    {
      id: 2,
      title: "Développeur Frontend",
      company: "Startup Labs", 
      location: "Télétravail",
      salary: "90 000 - 110 000 DZD",
      type: "Contrat",
      posted: "il y a 1 semaine",
      match: 88,
      saved: false
    },
    {
      id: 3,
      title: "Ingénieur Full Stack",
      company: "Digital Agency",
      location: "Oran",
      salary: "100 000 - 130 000 DZD", 
      type: "Temps plein",
      posted: "il y a 3 jours",
      match: 92,
      saved: true
    }
  ];

  const applications = [
    {
      id: 1,
      title: "Développeur React",
      company: "TechFlow Inc.",
      appliedAt: "il y a 2 jours",
      status: "interviewing"
    },
    {
      id: 2,
      title: "Ingénieur Frontend", 
      company: "StartupX",
      appliedAt: "il y a 1 semaine",
      status: "pending"
    },
    {
      id: 3,
      title: "Développeur Senior",
      company: "BigCorp",
      appliedAt: "il y a 2 semaines", 
      status: "rejected"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500";
      case "interviewing": 
        return "bg-blue-500";
      case "accepted":
        return "bg-green-500";
      case "rejected":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "interviewing":
        return <TrendingUp className="h-4 w-4" />;
      case "accepted":
        return <CheckCircle className="h-4 w-4" />;
      case "rejected":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
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
              <h1 className="text-2xl font-bold">Tableau de Bord Travailleur</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-muted-foreground">john.doe@email.com</p>
              </div>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Completion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Profil Complété</CardTitle>
            <CardDescription>Complétez votre profil pour obtenir de meilleurs matchs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Progress value={75} className="flex-1" />
              <span className="text-sm font-medium">75%</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Ajoutez votre portfolio et vos compétences pour atteindre 100%
            </p>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Candidatures</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+3 cette semaine</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Entretiens</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 programmés</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vues du Profil</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">+12 cette semaine</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Emplois Sauvegardés</CardTitle>
              <Bookmark className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Vérifier les délais</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList>
            <TabsTrigger value="jobs">Emplois Recommandés</TabsTrigger>
            <TabsTrigger value="applications">Mes Candidatures</TabsTrigger>
            <TabsTrigger value="saved">Emplois Sauvegardés</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Emplois Recommandés par IA</h2>
              <Button variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Parcourir Tous les Emplois
              </Button>
            </div>

            <div className="grid gap-4">
              {recentJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {job.match}% match
                          </Badge>
                        </div>
                        <p className="text-muted-foreground font-medium">{job.company}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            {job.salary}
                          </div>
                          <Badge variant="secondary">{job.type}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className={job.saved ? "text-yellow-500" : ""}
                        >
                          <Bookmark className={`h-4 w-4 ${job.saved ? "fill-current" : ""}`} />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Publié {job.posted}</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Voir Détails</Button>
                        <Button size="sm">Postuler</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <h2 className="text-xl font-semibold">Mes Candidatures</h2>
            
            <div className="grid gap-4">
              {applications.map((application) => (
                <Card key={application.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{application.title}</h3>
                        <p className="text-muted-foreground">{application.company}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Postulé {application.appliedAt}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(application.status)}`} />
                          <span className="text-sm capitalize flex items-center gap-1">
                            {getStatusIcon(application.status)}
                            {application.status}
                          </span>
                        </div>
                        <Button variant="outline" size="sm">
                          Voir Détails
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-6">
            <h2 className="text-xl font-semibold">Emplois Sauvegardés</h2>
            
            <div className="grid gap-4">
              {recentJobs.filter(job => job.saved).map((job) => (
                <Card key={job.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <p className="text-muted-foreground font-medium">{job.company}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            {job.salary}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Sauvegardé • Publié {job.posted}</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Retirer</Button>
                        <Button size="sm">Postuler</Button>
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

export default WorkerDashboard;