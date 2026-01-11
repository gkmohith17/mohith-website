import Timeline from "./Timeline";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  const education = [
    {
      title: "Bachelor of Technology in Computer Science - Specialization in AI and ML",
      organization: "Vellore Institute of Technology, Chennai",
      period: "2022 - 2026",
      description:
        "Specialized in Software Engineering and Artificial Intelligence. Relevant coursework: Data Structures, Algorithms, Machine Learning, Deep Learning, Database Management Systems, and Cloud Computing.",
    },
    {
      title: "12th Standard - Computer Science",
      organization: "MASVS Gurukula PU College, Mysuru",
      period: "2020 - 2022",
      description:
        "Focused on Computer Science, Mathematics, Physics, and Chemistry. Achieved top 3rd rank in the state board examinations in college.",
    },  
    {
      title: "10th Standard",
      organization: "Manasarowar Pushkarini Vidyasharama, Mysuru",
      period: "2014 - 2020",
      description:
        "Completed secondary education with a strong foundation in Science and Mathematics. Graduated with distinction and received awards for academic excellence.",
    },
  ];

  return (
    <section id="education" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-16 gradient-text text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 rotate-0" : "opacity-0 -rotate-3"
          }`}
        >
          Education
        </h2>
        <div className="max-w-4xl mx-auto">
          <Timeline items={education} type="education" isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Education;
