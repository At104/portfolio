import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/Animations";

export default function Contact() {
  const contactMethods = [
    {
      icon: faEnvelope,
      title: "Email",
      description: "Best way to reach me",
      value: "atul.rao664@gmail.com",
      link: "mailto:atul.rao664@gmail.com",
    },
    {
      icon: faLocationDot,
      title: "Location",
      description: "Currently based in",
      value: "Hamilton, ON",
      link: null,
    },
    {
      icon: faCalendarDays,
      title: "Available",
      description: "For Summer 2026 internships",
      value: "Open to opportunities",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/At104",
      handle: "@At104",
      description: "Check out my code and projects",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      url: "https://linkedin.com/in/atul5rao",
      handle: "atul5rao",
      description: "Let's connect professionally",
    },
    {
      name: "Devpost",
      icon: faGithub, // Using GitHub icon as placeholder for now
      url: "https://devpost.com/At104",
      handle: "@At104",
      description: "View my hackathon projects and achievements",
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
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                I&apos;m always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and innovation.
              </p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Contact Methods */}
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
                    
                    <p className="text-gray-400 text-sm mb-3">
                      {method.description}
                    </p>
                    
                    {method.link ? (
                      <a 
                        href={method.link}
                        className="text-white hover:text-primary transition-colors duration-200 font-medium"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium">
                        {method.value}
                      </span>
                    )}
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="section py-20 bg-gradient-to-br from-orange-950/20 to-amber-950/20">
          <div className="max-w-6xl mx-auto">
            <FadeInOnScroll>
              <h2 className="section-title">Connect With Me</h2>
            </FadeInOnScroll>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {socialLinks.map((social, index) => (
                <FadeInOnScroll key={social.name} delay={index * 50}>
                  <div className="card group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <FontAwesomeIcon 
                          icon={social.icon} 
                          className="w-6 h-6 text-primary" 
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold mb-1 gradient-text">
                          {social.name}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-2">
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

      
      </main>
      
      <Footer />
    </>
  );
}
