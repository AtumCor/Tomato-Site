import { FaPeopleGroup } from "react-icons/fa6";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { leadership } from "@/data/leadership";

export default function LeadershipSection() {
  return (
    <section className="space-y-6">
      <h2 className="flex items-center justify-center gap-2 text-plus font-semibold">
        <FaPeopleGroup /> Leadership & Involvement
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {leadership.map((entry) => (
          <Card key={entry.organization} className="rounded-md">
            <CardHeader className="space-y-1">
              <CardTitle>{entry.role} · {entry.organization}</CardTitle>
              <p className="text-sm text-muted-foreground">{entry.dates}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
