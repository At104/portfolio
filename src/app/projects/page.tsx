import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/Animations";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "EconomyBot",
      description: "A versatile Discord bot designed to manage an economy system and track individual user data on a server. Features virtual currency tracking, user data management, moderation tools, and automatic role assignment based on user activities.",
      image: "/images/economybot.png",
      technologies: ["Python", "Discord.py", "JSON", "DynamoDB"],
      github: "https://github.com/At104/economybot",
      demo: null,
    },
    {
      id: 2,
      title: "FRC6854 Robotics Codebase",
      description: "Comprehensive robotics codebase for FIRST Robotics Competition team 6854. Includes libraries for standard robot integration and competition-ready robot code for the 2022-23 season with hardware integration.",
      image: "/images/robot.png",
      technologies: ["Java", "WPILib", "Git", "Hardware Integration"],
      github: "https://github.com/FRC6854/2023ChargedUpOfficial",
      demo: null,
    },
    {
      id: 3,
      title: "MinuteMaster",
      description: "AI-powered meeting assistant that transforms recordings into structured meeting minutes. Features smart audio identification, automatic transcription with speaker recognition, and AI-generated summaries with action items highlighted.",
      image: "/images/minutemaster.png",
      technologies: ["Next.js", "React", "TailwindCSS", "OpenAI", "Clerk", "Amazon S3"],
      github: "https://github.com/farazkabbo/Geesehacks2025",
      demo: null,
    },
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-24">
        {/* Header Section */}
        <section className="section py-20">
          <div className="max-w-6xl mx-auto text-center">
            <FadeInOnScroll>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                My <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                A collection of projects showcasing my skills in software development, 
                from Discord bots to robotics and web applications.
              </p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section py-20">
          <div className="max-w-6xl mx-auto">
            <FadeInOnScroll>
              <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
                Featured Work
              </h2>
            </FadeInOnScroll>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <FadeInOnScroll key={project.id} delay={index * 100}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group cursor-pointer h-full flex flex-col hover:scale-105 transition-transform duration-300"
                  >
                    <div className="relative overflow-hidden rounded-lg mb-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 gradient-text">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <FontAwesomeIcon icon={faGithub} className="w-5 h-5 text-primary" />
                      <span className="text-primary text-sm font-medium">View on GitHub</span>
                    </div>
                  </a>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInOnScroll>
              <h2 className="text-4xl font-bold mb-6">
                Let&apos;s Build Something <span className="gradient-text">Together</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                I&apos;m always open to discussing new opportunities and interesting projects.
              </p>
              <Link href="/contact" className="btn bg-primary text-black border-primary hover:bg-secondary hover:border-secondary">
                Get In Touch
              </Link>
            </FadeInOnScroll>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
