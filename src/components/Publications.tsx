import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Publications = () => {
  const publications = [
    {
      title: "Building Scalable Web Applications with React and Node.js",
      journal: "Tech Journal",
      year: "2023",
      description:
        "A comprehensive guide to building scalable web applications using modern JavaScript technologies.",
      url: "https://example.com",
    },
    {
      title: "Machine Learning in Web Development: A Practical Approach",
      journal: "Dev Magazine",
      year: "2022",
      description:
        "Exploring practical applications of machine learning algorithms in modern web development.",
      url: "https://example.com",
    },
    {
      title: "TypeScript Best Practices for Large-Scale Applications",
      journal: "Code Review",
      year: "2022",
      description:
        "Best practices and patterns for using TypeScript in enterprise-level applications.",
      url: "https://example.com",
    },
  ];

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Publications</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {publication.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {publication.journal} • {publication.year}
                  </p>
                  <p className="text-muted-foreground mb-4">{publication.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={publication.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Publication
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
