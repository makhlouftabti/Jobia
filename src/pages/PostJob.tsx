import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { ArrowLeft, Save, Eye } from "lucide-react";

const PostJob = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/company-dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-2xl font-bold">Publier une Offre</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Aperçu
              </Button>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Publier l'Offre
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Informations de Base</CardTitle>
              <CardDescription>Détails essentiels sur le poste</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Titre du Poste</Label>
                  <Input id="jobTitle" placeholder="ex. Développeur React Senior" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Département</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un département" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Ingénierie</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Ventes</SelectItem>
                      <SelectItem value="hr">Ressources Humaines</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="jobType">Type de Poste</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Temps plein</SelectItem>
                      <SelectItem value="part-time">Temps partiel</SelectItem>
                      <SelectItem value="contract">Contrat</SelectItem>
                      <SelectItem value="internship">Stage</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Niveau d'Expérience</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Débutant (0-2 ans)</SelectItem>
                      <SelectItem value="mid">Intermédiaire (2-5 ans)</SelectItem>
                      <SelectItem value="senior">Senior (5+ ans)</SelectItem>
                      <SelectItem value="lead">Lead/Principal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Localisation</Label>
                  <Input id="location" placeholder="ex. Alger, Sétif, Oran" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="salaryMin">Salaire Minimum (DZD)</Label>
                  <Input id="salaryMin" type="number" placeholder="40000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salaryMax">Salaire Maximum (DZD)</Label>
                  <Input id="salaryMax" type="number" placeholder="80000" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Description */}
          <Card>
            <CardHeader>
              <CardTitle>Description du Poste</CardTitle>
              <CardDescription>Description détaillée du rôle et des responsabilités</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="summary">Résumé du Poste</Label>
                <Textarea 
                  id="summary"
                  placeholder="Aperçu bref du poste..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="responsibilities">Responsabilités Clés</Label>
                <Textarea 
                  id="responsibilities"
                  placeholder="• Développer et maintenir des applications React&#10;• Collaborer avec l'équipe de design&#10;• Écrire du code propre et maintenable..."
                  className="min-h-[150px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Exigences</Label>
                <Textarea 
                  id="requirements"
                  placeholder="• Diplôme en informatique ou domaine connexe&#10;• 3+ ans d'expérience React&#10;• Solide connaissance de JavaScript/TypeScript..."
                  className="min-h-[150px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="benefits">Avantages</Label>
                <Textarea 
                  id="benefits"
                  placeholder="• Salaire compétitif et actions&#10;• Assurance santé complète&#10;• Horaires flexibles..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Skills & Qualifications */}
          <Card>
            <CardHeader>
              <CardTitle>Compétences et Qualifications</CardTitle>
              <CardDescription>Compétences requises et préférées pour ce poste</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="skills">Compétences Requises</Label>
                <Input 
                  id="skills" 
                  placeholder="React, TypeScript, Node.js (séparer par des virgules)" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredSkills">Compétences Préférées</Label>
                <Input 
                  id="preferredSkills" 
                  placeholder="GraphQL, AWS, Docker (séparer par des virgules)" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Niveau d'Éducation</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Aucune exigence</SelectItem>
                    <SelectItem value="high-school">Baccalauréat</SelectItem>
                    <SelectItem value="associate">DUT/BTS</SelectItem>
                    <SelectItem value="bachelor">Licence</SelectItem>
                    <SelectItem value="master">Master</SelectItem>
                    <SelectItem value="phd">Doctorat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Application Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Paramètres de Candidature</CardTitle>
              <CardDescription>Configurez comment les candidats peuvent postuler</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="remote" />
                <Label htmlFor="remote">Travail à distance disponible</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="urgent" />
                <Label htmlFor="urgent">Recrutement urgent</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="screening" />
                <Label htmlFor="screening">Questions de sélection requises</Label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="deadline">Date Limite de Candidature</Label>
                  <Input id="deadline" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="positions">Nombre de Postes</Label>
                  <Input id="positions" type="number" defaultValue="1" min="1" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <Button variant="outline">Sauvegarder comme Brouillon</Button>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Publier l'Offre
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;