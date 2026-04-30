import { useState, useEffect } from "react";

const roles = ["Web Developer", "Designer", "Freelancer"];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-secondary pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground uppercase tracking-widest mb-4">
          Hello, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
          Shital Prajapati
        </h1>
        <div className="flex items-center justify-center gap-2 text-xl md:text-2xl">
          <span className="text-muted-foreground">{"I'm a"}</span>
          <span className="text-primary font-semibold min-w-[140px] text-left">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
      </div>
    </section>
  );
}
