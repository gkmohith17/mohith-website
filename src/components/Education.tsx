import Timeline from "./Timeline";

const Education = () => {
  const education = [
    {
      title: "Master of Science in Computer Science",
      organization: "University Name",
      period: "2018 - 2020",
      description:
        "Specialized in Software Engineering and Artificial Intelligence. Completed thesis on machine learning applications in web development.",
    },
    {
      title: "Bachelor of Technology in Computer Science",
      organization: "College Name",
      period: "2014 - 2018",
      description:
        "Graduated with honors. Strong foundation in algorithms, data structures, and software development principles.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Education</h2>
        <div className="max-w-4xl mx-auto">
          <Timeline items={education} type="education" />
        </div>
      </div>
    </section>
  );
};

export default Education;
