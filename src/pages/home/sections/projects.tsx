import { Link } from "react-router";
import { FaWrench, FaArrowRight } from "react-icons/fa6";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { engineeringProjects } from "@/data/engineeringProjects";

export default function ProjectsSection() {
  return (
    <section className="space-y-6">
      <h2 className="flex items-center justify-center gap-2 text-plus font-semibold"><FaWrench /> Engineering Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {engineeringProjects.map((project) => (
          <Card key={project.title} className="rounded-md gap-2">
            <CardHeader className="space-y-1">
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{project.role} · {project.dates}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm leading-relaxed">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <span key={tag} className="text-xs rounded-sm bg-muted px-2 py-1">{tag}</span>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-right">
        <Button asChild variant="ghost" size="sm"><Link to="/projects">View project details <FaArrowRight className="ml-2" /></Link></Button>
      </div>
    </section>
  );
}
