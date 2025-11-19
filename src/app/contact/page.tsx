import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/Animations";

export default function Contact() {
  const contactMethods = [
    {
      icon: faLocationDot,
      title: "Location",
      description: "Currently Based In",
      value: "Ontario, Canada",
      link: null,
    },
    {
      icon: faCalendarDays,
      title: "Available",
      description: "For Summer 2026 Internships",
      value: "Open to All Opportunities",
      link: null,
    },
    {
      icon: faEnvelope,
      title: "Email",
      description: "Another Way to Reach Me",
      value: "atul.rao664@gmail.com",
      link: "mailto:atul.rao664@gmail.com",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: faGithub,
      iconType: "fontawesome",
      url: "https://github.com/At104",
      handle: "@At104",
      description: "Check out my projects and code",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      iconType: "fontawesome",
      url: "https://linkedin.com/in/atul5rao",
      handle: "atul5rao",
      description: "Let's connect professionally",
    },
    {
      name: "Devpost",
      icon: "/icons/tech/devpost.svg",
      iconType: "svg",
      url: "https://devpost.com/At104",
      handle: "@At104",
      description: "View my hackathon projects",
    },
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-24">
        {/* Header Section */}
        <section className="section py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInOnScroll>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Get <span className="gradient-text">In Touch</span>
              </h1>
              <p className="text-xl mb-12 max-w-3xl mx-auto" style={{color: 'rgb(var(--muted))'}}>
                I&apos;m always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and innovation.
              </p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Get In Touch */}
        <section className="section py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <FadeInOnScroll key={method.title} delay={index * 50}>
                  <div className="card text-center group">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <FontAwesomeIcon 
                        icon={method.icon} 
                        className="w-8 h-8 text-primary" 
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 gradient-text">
                      {method.title}
                    </h3>
                    
                    <p className="text-sm mb-3" style={{color: 'rgb(var(--muted))'}}>
                      {method.description}
                    </p>
                    
                    {method.link ? (
                      <a 
                        href={method.link}
                        className="hover:text-primary transition-colors duration-200 font-medium"
                        style={{color: 'rgb(var(--foreground))'}}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="font-medium" style={{color: 'rgb(var(--foreground))'}}>
                        {method.value}
                      </span>
                    )}
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Connect Links */}
        <section className="section py-20 pb-32 bg-gradient-to-br from-cyan-950/20 to-cyan-900/10">
          <div className="max-w-6xl mx-auto">
            <FadeInOnScroll>
              <h2 className="section-title">Connect With Me</h2>
            </FadeInOnScroll>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {socialLinks.map((social, index) => (
                <FadeInOnScroll key={social.name} delay={index * 50}>
                  <div className="tech-card group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        {social.iconType === "fontawesome" ? (
                          <FontAwesomeIcon 
                            icon={social.icon as IconDefinition} 
                            className="w-6 h-6 text-primary" 
                          />
                        ) : (
                          <Image 
                            src={social.icon as string} 
                            alt={social.name} 
                            width={24} 
                            height={24} 
                            className="w-6 h-6" 
                          />
                        )}
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold mb-1 gradient-text">
                          {social.name}
                        </h3>
                        
                        <p className="text-sm mb-2" style={{color: 'rgb(var(--muted))'}}>
                          {social.description}
                        </p>
                        
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-secondary transition-colors duration-200 text-sm font-medium"
                        >
                          {social.handle}
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>
        {/* Spacing Section */}
        <section className="py-10"></section>
      </main>
      
      <Footer />
    </>
  );
}
