import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Mohith G K</span>
          </h1>
          
          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-12 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>

          <button
            onClick={() => scrollToSection("about")}
            className={`group transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-8 h-8 text-primary animate-bounce group-hover:text-accent transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
