import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/Animations";
import { projects } from "@/content/projects";

export default function Projects() {
  return (
    <>
      <title>Projects | Atul Rao</title>
      <meta
        name="description"
        content="A collection of projects by Atul Rao showcasing skills across software development, machine learning, cloud, and robotics."
      />

      <Navbar />

      <main className="min-h-screen pt-24">
        {/* Header Section */}
        <section className="section py-16 pb-8">
          <div className="max-w-6xl mx-auto text-center">
            <FadeInOnScroll>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                My <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: "var(--foreground)" }}>
                A collection of projects showcasing my skills in various software development domains.
              </p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section pt-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <FadeInOnScroll>
              <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
                Featured Work
              </h2>
            </FadeInOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 justify-items-center">
              {projects.map((project, index) => (
                <FadeInOnScroll key={project.id} delay={index * 100}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group cursor-pointer h-full flex flex-col hover:scale-105 transition-transform duration-300 w-full max-w-sm"
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <h3 className="text-lg font-bold mb-2 gradient-text">
                      {project.title}
                    </h3>

                    <p className="text-xs leading-relaxed mb-3 flex-grow" style={{ color: "var(--muted)" }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <FontAwesomeIcon icon={project.linkType === "website" ? faGlobe : faGithub} className="w-5 h-5 text-primary" />
                      <span className="text-primary text-sm font-medium">
                        {project.linkType === "website" ? "View Website" : "View on GitHub"}
                      </span>
                    </div>
                  </a>
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
