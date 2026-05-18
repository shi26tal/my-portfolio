import { Award } from "lucide-react";

const awardsData = [
  {
    year: "2023",
    title: "Best Web Developer",
    organization: "Tech Awards",
    description:
      "Recognized for outstanding contributions to web development and innovative solutions.",
  },
  {
    year: "2022",
    title: "Top 5 JavaScript Developers",
    organization: "Developer Weekly",
    description:
      "Featured among the top JavaScript developers for exceptional coding skills and community contributions.",
  },
  {
    year: "2021",
    title: "Top 5 Web Trends",
    organization: "Web Design Awards",
    description:
      "Awarded for implementing cutting-edge web trends and modern design patterns.",
  },
  {
    year: "2020",
    title: "CSS Excellence",
    organization: "CSS Design Awards",
    description:
      "Recognized for exceptional CSS skills and creative styling solutions.",
  },
];

export default function Awards() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Awards
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          {awardsData.map((item, index) => (
            <div key={index} className="flex gap-6 mb-8 last:mb-0">
              {/* Icon */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                {index !== awardsData.length - 1 && (
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
                <p className="text-primary font-medium mb-2">{item.organization}</p>
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
