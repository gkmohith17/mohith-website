import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Connect = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/mohithgk",
      color: "hover:text-foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/mohithgk",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/mohithgk",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:mohithgk@example.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section id="connect" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text animate-fade-in-up">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  asChild
                  className={`group animate-fade-in-up ${link.color} transition-colors`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5 mr-2" />
                    {link.label}
                  </a>
                </Button>
              );
            })}
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <p className="text-muted-foreground mb-4">Or send me a direct message:</p>
            <Button size="lg" asChild className="group">
              <a href="mailto:mohithgk@example.com">
                <Mail className="w-5 h-5 mr-2" />
                mohithgk@example.com
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
