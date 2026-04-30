import { Download, ExternalLink } from "lucide-react";

const personalInfo = [
  { label: "Name", value: "Shital Prajapati" },
  { label: "Date of birth", value: "December 26, 2002" },
  { label: "Address", value: "Kathmandu, Nepal" },
  { label: "Email", value: "shital26prajapati@gmail.com" },
  { label: "Phone", value: "+977 9862445979" },
];

// const companies = [
//   { name: "Microsoft", logo: "M" },
//   { name: "Envato", logo: "E" },
//   { name: "Slack", logo: "S" },
//   { name: "Google", logo: "G" },
//   { name: "Adobe", logo: "A" },
// ];

export default function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden bg-secondary ">
              <img
                src="profile.jpg"
                alt="Profile Photo"
                className="w-full h-full  object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get to know me!
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I’m a Computer Science graduate and web developer focused on
              creating clean, responsive, and efficient web applications. I have
              experience with JavaScript and the MERN stack, and I’m currently
              strengthening my development skills by learning TypeScript. I’m
              also exploring fields like AI, data science to grow as a
              well-rounded developer.
            </p>

            {/* Personal Info */}
            <div className="space-y-3 mb-8">
              {personalInfo.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <span className="text-muted-foreground min-w-[120px]">
                    {info.label}:
                  </span>
                  <span className="text-foreground font-medium">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="/Shital_Prajapati.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View CV
              </a>

              <a
                href="/Shital_Prajapati.pdf"
                download
                className="inline-flex items-center gap-2 bg-secondary border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* <a
              href="/Shital_Prajapati.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors mr-4"
            >
              <ExternalLink className="w-4 h-4" />
              View CV
            </a>
            <a
              href="/Shital_Prajapati.pdf"
              download
              className="inline-flex items-center gap-2 bg-secondary border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/80 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a> */}

            {/* <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              <Download className="w-4 h-4" />
              Download CV
            </button> */}
          </div>
        </div>

        {/* Company Logos */}
        {/* <div className="mt-16 pt-16 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-8 h-8 bg-muted rounded flex items-center justify-center font-bold">
                  {company.logo}
                </div>
                <span className="font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
