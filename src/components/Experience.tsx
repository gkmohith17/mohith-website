import Timeline from "./Timeline";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      organization: "Tech Corp",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical decisions.",
    },
    {
      title: "Full Stack Developer",
      organization: "Innovation Labs",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.",
    },
    {
      title: "Software Developer Intern",
      organization: "StartUp Inc",
      period: "2019 - 2020",
      description:
        "Assisted in building web applications and learning industry best practices. Contributed to various frontend and backend features.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Experience</h2>
        <div className="max-w-4xl mx-auto">
          <Timeline items={experiences} type="experience" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
