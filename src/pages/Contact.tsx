import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/Animations";
import { contactMethods, socialLinks } from "@/content/contact";

export default function Contact() {
  return (
    <>
      <title>Contact | Atul Rao</title>
      <meta
        name="description"
        content="Get in touch with Atul Rao — open to Summer 2026 internships and opportunities in software, cloud, and machine learning."
      />

      <Navbar />

      <main className="min-h-screen pt-24">
        {/* Header Section */}
        <section className="section py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInOnScroll>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Get <span className="gradient-text">In Touch</span>
              </h1>
              <p className="text-xl mb-12 max-w-3xl mx-auto" style={{ color: "var(--muted)" }}>
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
                      <FontAwesomeIcon icon={method.icon} className="w-8 h-8 text-primary" />
                    </div>

                    <h3 className="text-xl font-bold mb-2 gradient-text">
                      {method.title}
                    </h3>

                    <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>
                      {method.description}
                    </p>

                    {method.link ? (
                      <a
                        href={method.link}
                        className="hover:text-primary transition-colors duration-200 font-medium"
                        style={{ color: "var(--foreground)" }}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="font-medium" style={{ color: "var(--foreground)" }}>
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
        <section
          className="section py-20 pb-32"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(6, 182, 212, 0.06), rgba(6, 182, 212, 0.02))",
          }}
        >
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
                        {social.icon.type === "fa" ? (
                          <FontAwesomeIcon icon={social.icon.icon} className="w-6 h-6 text-primary" />
                        ) : (
                          <img src={social.icon.src} alt={social.name} width={24} height={24} className="w-6 h-6" />
                        )}
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-lg font-bold mb-1 gradient-text">
                          {social.name}
                        </h3>

                        <p className="text-sm mb-2" style={{ color: "var(--muted)" }}>
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
