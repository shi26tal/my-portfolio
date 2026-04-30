import { Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          {"I'm"} <span className="text-secondary">Available</span> for
          Freelancing
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Have a project in mind? {"Let's"} work together to bring your ideas to
          life. I am always open to discussing new projects and creative ideas.
        </p>
        {/*  this to send email 
        <a
          href="mailto:shital26prajapati@gmail.com?subject=Project%20Inquiry"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium"
        >
          <Mail className="w-5 h-5" />
          Hire Me
        </a> */}

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=shital26prajapati@gmail.com&su=Project%20Inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-secondary bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium"
        >
          <Mail className="w-5 h-5" />
          Hire Me
        </a>
      </div>
    </section>
  );
}
