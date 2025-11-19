import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Link, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  ArrowLeft,
  Star,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Download,
  CheckCircle,
  XCircle,
  MessageSquare
} from "lucide-react";

const ReviewApplication = () => {
  const [searchParams] = useSearchParams();
  const applicationId = searchParams.get('id') || '1';
  const { toast } = useToast();
  const [notes, setNotes] = useState("");
  const [applicationStatus, setApplicationStatus] = useState("pending");

  // Mock application data
  const application = {
    id: applicationId,
    name: "Sarah Benali",
    email: "sarah.benali@email.com",
    phone: "+213 555 123 456",
    position: "Développeur React",
    rating: 4.8,
    location: "Alger",
    status: applicationStatus,
    appliedAt: "il y a 2 heures",
    experience: "5 ans",
    expectedSalary: "85 000 - 95 000 DZD",
    availability: "Immédiate",
    coverLetter: "Je suis ravie de postuler pour le poste de Développeur React dans votre entreprise. Avec 5 ans d'expérience en développement frontend, j'ai travaillé intensivement avec React, TypeScript et les technologies web modernes. Je suis passionnée par la création d'interfaces conviviales et j'ai fait mes preuves en livrant du code de haute qualité dans des environnements agiles.",
    skills: ["React", "TypeScript", "JavaScript", "Node.js", "MongoDB", "Git", "Agile"],
    education: "Licence en Informatique - Université d'Alger",
    previousRoles: [
      {
        company: "TechStart Inc.",
        position: "Développeur Frontend Senior",
        duration: "2021 - Présent",
        description: "Direction du développement d'applications React, mentorat de développeurs juniors"
      },
      {
        company: "WebSolutions Co.",
        position: "Développeur Frontend",
        duration: "2019 - 2021",
        description: "Développement d'applications web responsive utilisant React et Redux"
      }
    ]
  };

  const handleAccept = () => {
    setApplicationStatus("accepted");
    toast({
      title: "Candidature Acceptée",
      description: `La candidature de ${application.name} a été acceptée.`,
    });
  };

  const handleDecline = () => {
    setApplicationStatus("declined");
    toast({
      title: "Candidature Refusée",
      description: `La candidature de ${application.name} a été refusée.`,
      variant: "destructive",
    });
  };

  const handleScheduleInterview = () => {
    toast({
      title: "Entretien Planifié",
      description: `Entretien planifié avec ${application.name}. Ils recevront une confirmation par email.`,
    });
  };

  const handleDownloadResume = () => {
    toast({
      title: "CV Téléchargé",
      description: `Le CV de ${application.name} a été téléchargé.`,
    });
  };

  const handleSaveNotes = () => {
    if (!notes.trim()) {
      toast({
        title: "Aucune note à sauvegarder",
        description: "Veuillez entrer des notes avant de sauvegarder.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Notes Sauvegardées",
      description: "Vos notes ont été sauvegardées avec succès.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/company-dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-bold">Examiner la Candidature</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Applicant Info */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="text-lg">
                      {application.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{application.name}</CardTitle>
                    <CardDescription className="text-base">A postulé pour {application.position}</CardDescription>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{application.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{application.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Postulé {application.appliedAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{application.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{application.phone}</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Expérience:</span>
                    <p className="font-medium">{application.experience}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Salaire Attendu:</span>
                    <p className="font-medium">{application.expectedSalary}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Disponibilité:</span>
                    <p className="font-medium">{application.availability}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cover Letter */}
            <Card>
              <CardHeader>
                <CardTitle>Lettre de Motivation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{application.coverLetter}</p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Compétences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {application.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Expérience Professionnelle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {application.previousRoles.map((role, index) => (
                  <div key={index} className="border-l-2 border-border pl-4">
                    <h4 className="font-semibold">{role.position}</h4>
                    <p className="text-sm text-muted-foreground">{role.company} • {role.duration}</p>
                    <p className="text-sm mt-1">{role.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" onClick={handleAccept} disabled={applicationStatus === "accepted"}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {applicationStatus === "accepted" ? "Acceptée" : "Accepter la Candidature"}
                </Button>
                <Button variant="outline" className="w-full" onClick={handleDecline} disabled={applicationStatus === "declined"}>
                  <XCircle className="h-4 w-4 mr-2" />
                  {applicationStatus === "declined" ? "Refusée" : "Refuser la Candidature"}
                </Button>
                <Button variant="outline" className="w-full" onClick={handleScheduleInterview}>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Planifier un Entretien
                </Button>
                <Button variant="outline" className="w-full" onClick={handleDownloadResume}>
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger le CV
                </Button>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Notes</CardTitle>
                <CardDescription>Ajoutez vos notes sur ce candidat</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea 
                  placeholder="Entrez vos notes ici..."
                  className="min-h-[100px]"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
                <Button size="sm" className="mt-3 w-full" onClick={handleSaveNotes}>Sauvegarder les Notes</Button>
              </CardContent>
            </Card>

            {/* Application Status */}
            <Card>
              <CardHeader>
                <CardTitle>Statut</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="w-full justify-center py-2">
                  {application.status === "accepted" ? "Acceptée" : 
                   application.status === "declined" ? "Refusée" : 
                   application.status === "pending" ? "En Attente" : 
                   application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewApplication;