import { MapPin, Phone, Mail, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/shital-prajapati-02b957330/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/shi26tal", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/shital._26/", label: "Instagram" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];


export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* About */}
          <div>
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 flex items-center justify-center">
              {/* <span className="text-primary-foreground font-bold text-lg">S</span> */}
              <img src="logo.png" alt="Logo"  />
            </div>
              <span className="font-bold text-xl">Shital Prajapati</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              I’m a web developer focused on building clean, responsive, and
              user-friendly websites that create real value for users and businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-105"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mt-3 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
    

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mt-3 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span className="text-white/70">
                  Handigaun, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/70">+977 9862445979</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/70">shital26prajapati@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
  © {new Date().getFullYear()} Shital Prajapati. All rights reserved · Built with React & Tailwind CSS
</p>
        </div>
      </div>
    </footer>
  );
}
