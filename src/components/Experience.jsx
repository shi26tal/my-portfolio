import { Briefcase, Clock, Icon } from "lucide-react";

const experienceData = [
  {
    year: "May 2025 - October 2025",
    title: "Frontend Developer Intern",
    company: "Collab Pvt. Ltd.",
    description:
      "Worked on the Avendi web application as a frontend developer using React. Built reusable components and improved UI responsiveness while collaborating with the team.",
    icon: Briefcase,
  },
  {
    year: "2025",
    title: "FreeLance Developer (Team Project)",
    company: "Group Project",
    description:
      "Worked as part of a 3-member team to design and develop responsive websites and web applications for client projects. Collaborated on UI development, feature implementation and responsive design across devices.",
    icon: Clock,
  },
];

export default function Experience() {
  return (

    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">

        {/* Centered Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {experienceData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-7 flex gap-6 items-start hover:shadow-lg transition-all duration-200"
                style={{ "--tw-shadow-color": "var(--primary)" }}
              >
                {/* Icon Box */}
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm font-bold text-primary mb-1">
                    {item.year}
                  </p>
                  <h3 className="text-xl font-extrabold text-card-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-foreground mb-2">
                    {item.company}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>



  );
}
