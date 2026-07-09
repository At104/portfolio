import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlockReveal } from "@/components/BlockReveal";
import { projects } from "@/content/projects";
import { colorByIndex } from "@/lib/tetromino";

export default function Projects() {
  return (
    <>
      <title>Projects | Atul Rao</title>
      <meta
        name="description"
        content="A collection of projects by Atul Rao showcasing skills across software development, machine learning, cloud, and robotics."
      />

      <Navbar />

      <main className="mx-auto max-w-6xl px-6 pb-8 pt-32">
        <p className="hud mb-3">01 / Projects</p>
        <h1 className="mb-12 text-4xl md:text-5xl">Things I&apos;ve built</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <BlockReveal key={project.id} delay={i * 80} className="h-full">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brick brick-accent flex h-full flex-col overflow-hidden"
                style={{ ["--accent" as string]: colorByIndex(i) }}
              >
                <div className="aspect-[16/10] overflow-hidden border-b-2 border-[color:var(--color-ink)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h2 className="mb-2 text-xl">{project.title}</h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="hud rounded bg-[color:var(--color-bg)] px-2 py-1 text-[0.6rem]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="hud flex items-center gap-2">
                    <FontAwesomeIcon icon={project.linkType === "website" ? faGlobe : faGithub} className="h-4 w-4" />
                    {project.linkType === "website" ? "Visit site" : "View code"}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
                  </span>
                </div>
              </a>
            </BlockReveal>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
