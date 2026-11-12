import { FaWrench } from "react-icons/fa6";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { engineeringProjects } from "@/data/engineeringProjects";
import { usePageTitle } from "@/hooks/use-pagetitle";

export default function ProjectsPage() {
  usePageTitle("Engineering Projects");
  return (
    <main className="w-full max-w-5xl mx-auto px-3 md:px-8 py-8 space-y-8">
      <h1 className="flex items-center justify-center gap-3 text-3xl font-semibold"><FaWrench /> Engineering Projects</h1>
      <p className="text-center text-muted-foreground">Selected engineering experiences and technical projects.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {engineeringProjects.map((project) => (
          <Card key={project.title} className="rounded-md">
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{project.organization} · {project.role}</p>
              <p className="text-xs text-muted-foreground">{project.dates}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">{project.summary}</p>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                {project.achievements.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <span key={tag} className="text-xs rounded-sm bg-muted px-2 py-1">{tag}</span>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
