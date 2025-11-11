const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 gradient-text">About Me</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p className="animate-fade-in-up">
              Hello! I'm Mohith G K, a passionate developer with a keen interest in building
              innovative solutions and learning new technologies.
            </p>
            <p className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              I specialize in full-stack development, with expertise in modern web technologies
              and a strong foundation in problem-solving. My journey in tech has been driven by
              curiosity and a commitment to continuous learning.
            </p>
            <p className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
