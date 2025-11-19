import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { 
  faPython, 
  faJava, 
  faJs, 
  faReact, 
  faNodeJs, 
  faGitAlt, 
  faAws, 
  faDocker,
  faHtml5,
  faCss3Alt,
  faBootstrap
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/Animations";
import TypeWriter from "@/components/TypeWriter";

export default function Home() {
  const techStack = {
    "Programming Languages": [
      { 
        name: "Python", 
        icon: <FontAwesomeIcon icon={faPython} className="w-12 h-12" />
      },
      { 
        name: "Java", 
        icon: <FontAwesomeIcon icon={faJava} className="w-12 h-12" />
      },
      { 
        name: "C", 
        icon: <Image src="/icons/tech/C_Programming_Language.svg" alt="C" width={48} height={48} className="w-12 h-12" />
      },
      { 
        name: "C#", 
        icon: <Image src="/icons/tech/csharp.svg" alt="C#" width={48} height={48} className="w-12 h-12" />
      },
      { 
        name: "JavaScript", 
        icon: <FontAwesomeIcon icon={faJs} className="w-12 h-12" />
      },
      { 
        name: "TypeScript", 
        icon: <Image src="/icons/tech/typescript.svg" alt="TypeScript" width={48} height={48} className="w-12 h-12" />
      },
      { 
        name: "HTML", 
        icon: <FontAwesomeIcon icon={faHtml5} className="w-12 h-12" />
      },
      { 
        name: "CSS", 
        icon: <FontAwesomeIcon icon={faCss3Alt} className="w-12 h-12" />
      },
    ],
    "Technologies & Tools": [
      { 
        name: "Git", 
        icon: <FontAwesomeIcon icon={faGitAlt} className="w-12 h-12" />
      },
      { 
        name: "AWS", 
        icon: <FontAwesomeIcon icon={faAws} className="w-12 h-12" />
      },
      { 
        name: "Azure", 
        icon: <Image src="/icons/tech/Microsoft_Azure.svg" alt="MS Azure" width={48} height={48} className="w-12 h-12" />
      },
      { 
        name: "Docker", 
        icon: <FontAwesomeIcon icon={faDocker} className="w-12 h-12" />
      },
      { 
        name: "Kubernetes", 
        icon: <Image src="/icons/tech/Kubernetes.svg" alt="Kubernetes" width={48} height={48} className="w-12 h-12" />
      },
      { 
        name: "MySQL", 
        icon: <FontAwesomeIcon icon={faDatabase} className="w-12 h-12" />
      },
      { 
        name: "JSON", 
        icon: <span className="w-12 h-12 flex items-center justify-center text-2xl font-bold">{"{ }"}</span>
      },
    ],
    "Frameworks & Libraries": [
      { 
        name: "React", 
        icon: <FontAwesomeIcon icon={faReact} className="w-12 h-12" />
      },
      { 
        name: "Next.js", 
        icon: <Image src="/icons/tech/nextjs.svg" alt="Next.js" width={48} height={48} className="w-12 h-12" />
      },
      { 
        name: "Node.js", 
        icon: <FontAwesomeIcon icon={faNodeJs} className="w-12 h-12" />
      },
      { 
        name: "Tailwind CSS", 
        icon: <Image src="/icons/tech/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" width={48} height={48} className="w-12 h-12" />
      },
      { 
        name: "Bootstrap", 
        icon: <FontAwesomeIcon icon={faBootstrap} className="w-12 h-12" />
      },
    ],
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-8" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <FadeInOnScroll>
              <div className="relative w-48 h-48 mx-auto mb-12 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/30 hover:scale-105 transition-transform duration-500">
                <Image 
                  src="/images/headshot.png"
                  alt="Atul Rao" 
                  fill
                  style={{objectFit: 'cover'}}
                  priority
                  className="rounded-full"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
              
              <div className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight" style={{ color: 'var(--foreground)' }}>
                Hi, I&apos;m <span className="gradient-text">Atul</span>
              </div>
              
              <div className="mb-8">
                <TypeWriter 
                  texts={[
                    "Software Developer",
                    "Cloud Computing Enthusiast",
                    "Software Engineering Student",
                    "Machine Learning Explorer",
                    "Robotics Programmer",

                  ]}
                  className="text-2xl md:text-3xl text-primary font-semibold"
                  speed={80}
                  delay={2500}
                  initialDelay={1400}
                />
              </div>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>
                Software Engineering Student at McMaster University passionate about 
                building innovative solutions through the cloud, machine learning, and robotics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/projects" className="group btn flex items-center gap-2 relative overflow-hidden">
                  <span className="relative z-10">View My Work</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link href="/contact" className="group btn bg-primary/10 text-primary border-primary hover:bg-primary hover:text-white flex items-center gap-2 relative overflow-hidden backdrop-blur-sm">
                  <span className="relative z-10">Get In Touch</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* About Section */}
        <section className="section py-20">
          <div className="max-w-4xl mx-auto">
            <FadeInOnScroll>
              <h2 className="section-title">About Me</h2>
            </FadeInOnScroll>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeInOnScroll>
                <div>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
                    From a young age, I was surrounded by technology and it became a fundamental part of my childhood.
                    Whether playing video games, watching movies, or using the internet for schoolwork, 
                    I have always been fascinated by technology&apos;s ability to change the world.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
                    These experiences inspired me to pursue a career in this field. I&apos;m currently in my 3rd year of 
                    Software Engineering at McMaster University, actively seeking internships for 2026.
                  </p>
                  
                  
                </div>
              </FadeInOnScroll>
              
              <FadeInOnScroll>
                <div className="card">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Interests</h3>
                  <ul className="space-y-3" style={{ color: 'var(--muted)' }}>
                    <li className="flex items-center gap-3">
                      <span className="text-primary">•</span>
                      Cybersecurity
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary">•</span>
                      Machine Learning
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary">•</span>
                      Robotics
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary">•</span>
                      Cloud Computing
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary">•</span>
                      Software Development
                    </li>
                  </ul>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="section py-20 bg-gradient-to-br from-cyan-50/50 to-cyan-100/30 dark:from-cyan-950/20 dark:to-cyan-900/10">
          <div className="max-w-6xl mx-auto">
            <FadeInOnScroll>
              <h2 className="section-title">Tech Stack</h2>
            </FadeInOnScroll>
            
            <div className="space-y-12">
              {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
                <FadeInOnScroll key={category} delay={categoryIndex * 200}>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                      {category}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      {technologies.map((tech, index) => (
                        <FadeInOnScroll key={tech.name} delay={categoryIndex * 200 + index * 50}>
                          <div className="tech-card group cursor-pointer min-h-[120px] w-32 flex flex-col items-center justify-center text-center p-4">
                            <div className="mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center h-12 w-full">
                              <div className="text-primary flex items-center justify-center text-3xl">
                                {tech.icon}
                              </div>
                            </div>
                            <h4 className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>{tech.name}</h4>
                          </div>
                        </FadeInOnScroll>
                      ))}
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
