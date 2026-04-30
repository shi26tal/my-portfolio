import { MapPin, Phone, Mail, Globe } from "lucide-react";
import emailjs from "emailjs-com";
import { useRef } from "react";

const contactInfo = [
  {
    icon: MapPin,
    text: "Kathmandu, Bagmati Province, Nepal",
    color: "text-foreground",
  },
  { icon: Phone, text: "+977-9862445979", color: "text-primary" },
  { icon: Mail, text: "shital26prajapati@gmail.com", color: "text-foreground" },
  { icon: Globe, text: "https://yourportfolio.dev", color: "text-primary" },
];

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset(); // clear form after successful submission
      })
      .catch(() => {
        alert("Failed to send message. Try again.");
      });

    
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left — Form */}
          <form ref={formRef} onSubmit={sendEmail}>
            {/* First & Last Name Row */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm text-muted-foreground mb-1">
                  First name
                </label>
                <input
                  type="text"
                  name="first_name"
                  required
                  className="w-full border-b border-border bg-transparent text-foreground py-2 outline-none focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground text-sm"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  name="last_name"
                  required
                  className="w-full border-b border-border bg-transparent text-foreground py-2 outline-none focus:border-primary transition-colors duration-200 text-sm"
                  placeholder=""
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-8">
              <label className="block text-sm text-muted-foreground mb-1">
                Email address
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full border-b border-border bg-transparent text-foreground py-2 outline-none focus:border-primary transition-colors duration-200 text-sm"
                placeholder=""
              />
            </div>

            {/* Message */}
            <div className="mb-10">
              <label className="block text-sm text-muted-foreground mb-1">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                required
                className="w-full border-b border-border bg-transparent text-foreground py-2 outline-none focus:border-primary transition-colors duration-200 resize-none text-sm"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-full uppercase tracking-widest hover:opacity-90 transition-opacity duration-200"
            >
              Send Message
            </button>
          </form>

          {/* Right — Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">
              Contact Info
            </h3>
            <div className="flex flex-col gap-5">
              {contactInfo.map(({ icon: Icon, text, color }, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${color}`} />
                  <span className={`text-sm ${color}`}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
