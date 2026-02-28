import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/Animations";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "SwiftHealth",
      description: "AI emergency triage system pre-screening patients and prioritizing critical cases in real-time. Reduces wait times and physician burnout with multi-language support.",
      image: "/images/swifthealth.png",
      technologies: ["Next.js", "Python", "FastAPI", "Whisper"],
      github: "https://github.com/At104/SwiftHealth",
      demo: null,
      linkType: "github"
    },
    {
      id: 2,
      title: "McMaster iGEM 2025 Wiki",
      description: "Developed the official wiki website for McMaster University's iGEM team, consolidating cutting-edge synthetic biology research presented at the international conference. Features comprehensive documentation of lab work, methodology, and project outcomes.",
      image: "/images/reactimg.jpeg",
      technologies: ["React", "Vite", "Bootstrap", "GitLab"],
      github: "https://2025.igem.wiki/mcmaster-canada/",
      demo: null,
      linkType: "website"
    },
    {
      id: 3,
      title: "PRISM",
      description: "Machine learning framework predicting drug mechanisms of action from single-cell RNA data. Combines contrastive learning between small molecules and cellular responses to accelerate drug discovery, analyzing 95M+ transcriptomes for breakthrough compound interactions.",
      image: "/images/prismimg.jpg",
      technologies: ["PyTorch", "Docker", "AWS", "scikit-learn", "FastAPI"],
      github: "https://github.com/hackbio-ca/PRISM",
      demo: null,
      linkType: "github"
    },
    {
      id: 4,
      title: "EconomyBot",
      description: "A versatile Discord bot designed to manage an economy system and track individual user data on a server. Features virtual currency tracking, user data management, moderation tools, and automatic role assignment based on user activities.",
      image: "/images/economybot.png",
      technologies: ["Python", "Discord.py", "JSON", "DynamoDB"],
      github: "https://github.com/At104/economybot",
      demo: null,
      linkType: "github"
    },
    {
      id: 5,
      title: "MinuteMaster",
      description: "AI-powered meeting assistant that transforms recordings into structured meeting minutes. Features smart audio identification, automatic transcription with speaker recognition, and AI-generated summaries with action items highlighted.",
      image: "/images/minutemaster.png",
      technologies: ["Next.js", "React", "TailwindCSS", "OpenAI", "Clerk", "Amazon S3"],
      github: "https://github.com/At104/MinuteMaster",
      demo: null,
      linkType: "github"
    },
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-24">
        {/* Header Section */}
        <section className="section py-16 pb-8">
          <div className="max-w-6xl mx-auto text-center">
            <FadeInOnScroll>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                My <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto" style={{color: 'var(--foreground)'}}>
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
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group cursor-pointer h-full flex flex-col hover:scale-105 transition-transform duration-300 w-full max-w-sm"
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <Image
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
                    
                    <p className="text-xs leading-relaxed mb-3 flex-grow" style={{color: 'var(--muted)'}}>
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
