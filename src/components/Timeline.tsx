import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  type: "experience" | "education";
}

const Timeline = ({ items, type }: TimelineProps) => {
  const Icon = type === "experience" ? Briefcase : GraduationCap;

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-timeline-line"></div>

      {/* Timeline items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative pl-20 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-timeline-dot border-4 border-background"></div>

            {/* Icon */}
            <div className="absolute left-2 top-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>

            {/* Content */}
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-primary font-medium mb-2">{item.organization}</p>
              <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
