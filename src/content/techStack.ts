import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
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
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

/**
 * A tech icon is rendered one of three ways: a Font Awesome icon, an image in
 * /public/icons/tech, or a short text glyph. The page decides how to render each.
 */
export type TechIcon =
  | { type: "fa"; icon: IconDefinition }
  | { type: "img"; src: string }
  | { type: "text"; text: string };

export interface Tech {
  name: string;
  icon: TechIcon;
}

export const techStack: Record<string, Tech[]> = {
  "Programming Languages": [
    { name: "Python", icon: { type: "fa", icon: faPython } },
    { name: "Java", icon: { type: "fa", icon: faJava } },
    { name: "C", icon: { type: "img", src: "/icons/tech/C_Programming_Language.svg" } },
    { name: "C#", icon: { type: "img", src: "/icons/tech/csharp.svg" } },
    { name: "JavaScript", icon: { type: "fa", icon: faJs } },
    { name: "TypeScript", icon: { type: "img", src: "/icons/tech/typescript.svg" } },
    { name: "HTML", icon: { type: "fa", icon: faHtml5 } },
    { name: "CSS", icon: { type: "fa", icon: faCss3Alt } },
  ],
  "Technologies & Tools": [
    { name: "Git", icon: { type: "fa", icon: faGitAlt } },
    { name: "AWS", icon: { type: "fa", icon: faAws } },
    { name: "Azure", icon: { type: "img", src: "/icons/tech/Microsoft_Azure.svg" } },
    { name: "Docker", icon: { type: "fa", icon: faDocker } },
    { name: "Kubernetes", icon: { type: "img", src: "/icons/tech/Kubernetes.svg" } },
    { name: "MySQL", icon: { type: "fa", icon: faDatabase } },
    { name: "JSON", icon: { type: "text", text: "{ }" } },
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: { type: "fa", icon: faReact } },
    { name: "Next.js", icon: { type: "img", src: "/icons/tech/nextjs.svg" } },
    { name: "Node.js", icon: { type: "fa", icon: faNodeJs } },
    { name: "Tailwind CSS", icon: { type: "img", src: "/icons/tech/Tailwind_CSS_Logo.svg" } },
    { name: "Bootstrap", icon: { type: "fa", icon: faBootstrap } },
  ],
};
