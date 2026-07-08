import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faLocationDot, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export interface ContactMethod {
  icon: IconDefinition;
  title: string;
  description: string;
  value: string;
  link: string | null;
}

export const contactMethods: ContactMethod[] = [
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

export type SocialIcon =
  | { type: "fa"; icon: IconDefinition }
  | { type: "img"; src: string };

export interface SocialLink {
  name: string;
  icon: SocialIcon;
  url: string;
  handle: string;
  description: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: { type: "fa", icon: faGithub },
    url: "https://github.com/At104",
    handle: "@At104",
    description: "Check out my projects and code",
  },
  {
    name: "LinkedIn",
    icon: { type: "fa", icon: faLinkedin },
    url: "https://linkedin.com/in/atul5rao",
    handle: "atul5rao",
    description: "Let's connect professionally",
  },
  {
    name: "Devpost",
    icon: { type: "img", src: "/icons/tech/devpost.svg" },
    url: "https://devpost.com/At104",
    handle: "@At104",
    description: "View my hackathon projects",
  },
];
