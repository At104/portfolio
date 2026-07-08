export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
  linkType: "github" | "website";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SwiftHealth",
    description:
      "AI emergency triage system pre-screening patients and prioritizing critical cases in real-time. Reduces wait times and physician burnout with multi-language support.",
    image: "/images/swifthealth.png",
    technologies: ["Next.js", "Node.js", "Python", "FastAPI", "Whisper", "Ollama"],
    url: "https://github.com/At104/SwiftHealth",
    linkType: "github",
  },
  {
    id: 2,
    title: "McMaster iGEM 2025 Wiki",
    description:
      "Developed the official wiki website for McMaster University's iGEM team, consolidating cutting-edge synthetic biology research presented at the international conference. Features comprehensive documentation of lab work, methodology, and project outcomes.",
    image: "/images/reactimg.jpeg",
    technologies: ["React", "Vite", "Bootstrap", "GitLab"],
    url: "https://2025.igem.wiki/mcmaster-canada/",
    linkType: "website",
  },
  {
    id: 3,
    title: "PRISM",
    description:
      "Machine learning framework predicting drug mechanisms of action from single-cell RNA data. Combines contrastive learning between small molecules and cellular responses to accelerate drug discovery, analyzing 95M+ transcriptomes for breakthrough compound interactions.",
    image: "/images/prismimg.jpg",
    technologies: ["PyTorch", "Docker", "AWS", "scikit-learn", "FastAPI"],
    url: "https://github.com/hackbio-ca/PRISM",
    linkType: "github",
  },
  {
    id: 4,
    title: "EconomyBot",
    description:
      "A versatile Discord bot designed to manage an economy system and track individual user data on a server. Features virtual currency tracking, user data management, moderation tools, and automatic role assignment based on user activities.",
    image: "/images/economybot.png",
    technologies: ["Python", "Discord.py", "JSON", "DynamoDB", "EC2"],
    url: "https://github.com/At104/economybot",
    linkType: "github",
  },
  {
    id: 5,
    title: "MinuteMaster",
    description:
      "AI-powered meeting assistant that transforms recordings into structured meeting minutes. Features smart audio identification, automatic transcription with speaker recognition, and AI-generated summaries with action items highlighted.",
    image: "/images/minutemaster.png",
    technologies: ["Next.js", "React", "TailwindCSS", "OpenAI", "Clerk", "Amazon S3"],
    url: "https://github.com/At104/MinuteMaster",
    linkType: "github",
  },
];
