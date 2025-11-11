import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Connect from "@/components/Connect";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <TechStack />
      <Projects />
      <Publications />
      <Connect />
      
      <footer className="bg-card py-6 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mohith G K. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
