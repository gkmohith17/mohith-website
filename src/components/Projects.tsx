import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, product management, and user authentication.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/mohithgk",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates and team features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/mohithgk",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather dashboard with location-based forecasts and interactive visualizations.",
      technologies: ["React", "TypeScript", "OpenWeather API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/mohithgk",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills, and professional experience.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/mohithgk",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="group"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
