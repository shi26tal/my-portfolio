// import { useEffect, useState, useRef } from "react";

// const circularSkills = [
//   { name: "HTML5", percentage: 90 },
//   { name: "CSS3", percentage: 85 },
//   { name: "JavaScript", percentage: 80 },
// ];

// const linearSkills = [
  
//   { name: "React", percentage: 85 },
//   { name: "Node.js", percentage: 70 },
//   { name: "TypeScript", percentage: 40 },
//   { name: "Tailwind CSS", percentage: 90 },
// ];

// function CircularProgress({ percentage, name, isVisible }) {
//   const radius = 70;
//   const circumference = 2 * Math.PI * radius;
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     if (isVisible) {
//       const timer = setTimeout(() => setProgress(percentage), 100);
//       return () => clearTimeout(timer);
//     }
//   }, [isVisible, percentage]);

//   const strokeDashoffset = circumference - (progress / 100) * circumference;

//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative w-40 h-40">
//         <svg className="w-full h-full transform -rotate-90">
//           <circle
//             cx="80"
//             cy="80"
//             r={radius}
//             stroke="currentColor"
//             strokeWidth="8"
//             fill="none"
//             className="text-muted"
//           />
//           <circle
//             cx="80"
//             cy="80"
//             r={radius}
//             stroke="currentColor"
//             strokeWidth="8"
//             fill="none"
//             strokeLinecap="round"
//             className="text-primary transition-all duration-1000 ease-out"
//             strokeDasharray={circumference}
//             strokeDashoffset={strokeDashoffset}
//           />
//         </svg>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="text-2xl font-bold text-foreground">{progress}%</span>
//         </div>
//       </div>
//       <span className="mt-3 text-foreground font-medium">{name}</span>
//     </div>
//   );
// }

// function LinearProgress({ percentage, name, isVisible }) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     if (isVisible) {
//       const timer = setTimeout(() => setProgress(percentage), 100);
//       return () => clearTimeout(timer);
//     }
//   }, [isVisible, percentage]);

//   return (
//     <div className="mb-6">
//       <div className="flex justify-between mb-2">
//         <span className="text-foreground font-medium">{name}</span>
//         <span className="text-muted-foreground">{progress}%</span>
//       </div>
//       <div className="h-2 bg-muted rounded-full overflow-hidden">
//         <div
//           className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
//           style={{ width: `${progress}%` }}
//         />
//       </div>
//     </div>
//   );
// }

// export default function Skills() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             Skills
//           </h2>
//           <div className="w-16 h-1 bg-primary mx-auto" />
//         </div>

//         {/* Circular Progress */}
//         <div className="flex flex-wrap justify-center gap-12 mb-16">
//           {circularSkills.map((skill) => (
//             <CircularProgress
//               key={skill.name}
//               percentage={skill.percentage}
//               name={skill.name}
//               isVisible={isVisible}
//             />
//           ))}
//         </div>

//         {/* Linear Progress */}
//         <div className="max-w-2xl mx-auto">
//           {linearSkills.map((skill) => (
//             <LinearProgress
//               key={skill.name}
//               percentage={skill.percentage}
//               name={skill.name}
//               isVisible={isVisible}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


const skills = [
  { category: "Frontend", items: ["HTML5","JavaScript", "React", "Tailwind CSS", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { category: "Tools & Others", items: ["Git", "GitHub", "Figma", "VS Code"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>


        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-5 border-b border-border pb-3">
                {group.category}
              </h3>

              {/* Skills List (no pills) */}
              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-foreground text-sm font-medium"
                  >
                    {/* small indicator dot */}
                    <span className="w-2 h-2 bg-primary"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>



      </div>
    </section>
  );
}
