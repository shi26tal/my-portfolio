import { GraduationCap } from "lucide-react";

const educationData = [
  {
    year: "2022 - 2026",
    title: "Bachelor of Science in Computer Science Information Technology",
    institution: "Trinity International College Affiliated to Tribhuvan University",
    description:
      "Completed Bachelor's degree with a focus on web development, and core computer science concepts. Currently awaiting final results while continuing to build projects and improve technical skills.",
  },
  {
    year: "Dec 2024 - Mar 2025",
    title: "MERN Stack Web Development Certificate",
    institution: "N9 Solution",
    description:
      "Completed comprehensive MERN stack development program covering MongoDB, Express.js, React, and Node.js.",
  },
  {
    year: "2019 - 2022",
    title: "Higher Secondary Education in Science",
    institution: "Trinity International College Affiliated to Tribhuvan University",
    description:
      "Studied core science subjects including Physics, Chemistry, and Mathematics, building a strong analytical and problem-solving foundation.",
  },
  
  
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <div key={index} className="flex gap-6 mb-8 last:mb-0">
              {/* Icon */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                {index !== educationData.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-2">
                  {item.year}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-primary font-medium mb-2">{item.institution}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
