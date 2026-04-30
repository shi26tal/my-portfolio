import { useState } from "react";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Web", "Design"];

const projectsData = [
  {
    title: "E-commerce Platform",
    category: "Web",
    image: "ecommerce.png",
    liveUrl: "https://e-commerce-project-gpgy.onrender.com"
  },
  {
    title: "We Plumb And Heat",
    category: "Web",
    image: "wph.png",
    liveUrl: "https://weplumbnheat.co.uk/"
  },
  {
    title: "Weather App",
    category: "Web",
    image: "weather-app.png",
    liveUrl: "https://shi26tal.github.io/Weather-app/"
  },
  {
    title: "Avendi Web App",
    category: "Web",
    image: "avendi.png",
    liveUrl : "https://test-guest.avendi.me/prachet.sharma/home"
  },
  {
    title: "Scamfree Rentals",
    category: "Design",
    image: "scamfree.png",
    liveUrl: "https://www.figma.com/proto/vCk0J9VOKFpLGnn7Sz970N/scamfree-ui?t=gQgpVV93cYWb2XYr-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-4"
  },
  {
    title: "Chat-Bot",
    category: "Web",
    image: "chat-bot.png",
    liveUrl: "https://shi26tal.github.io/chat-bot/"
  },
  {
    title: "Cartica",
    category: "Design",
    image: "cartica.png",
    liveUrl: "https://www.figma.com/proto/W6qWVxa3t3hxFSU3HcQ8BG/Cartica?node-id=2135-47&p=f&t=SdLXwLkncILXW6NI-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2135%3A47"
  },

];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of the projects I have worked on recently.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-muted"
            >
              <div className="aspect-[3/2] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-primary-foreground">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.category}</p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
