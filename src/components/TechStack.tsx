import { Code2, Database, Globe, Server, Smartphone, Wrench } from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      icon: Code2,
      title: "Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      icon: Server,
      title: "Backend",
      technologies: ["Node.js", "Express", "Python", "Django"],
    },
    {
      icon: Database,
      title: "Database",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      icon: Wrench,
      title: "Tools",
      technologies: ["Git", "VS Code", "Figma", "Postman"],
    },
  ];

  return (
    <section id="techstack" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
