import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { TETROMINO } from "@/lib/tetromino";

const SOCIALS = [
  { href: "https://github.com/At104", label: "GitHub", icon: faGithub, color: TETROMINO.T },
  { href: "https://www.linkedin.com/in/atul5rao/", label: "LinkedIn", icon: faLinkedin, color: TETROMINO.J },
  { href: "mailto:atul.rao664@gmail.com", label: "Email", icon: faEnvelope, color: TETROMINO.Z },
];

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 py-14 text-center">
      <div className="flex gap-3">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={s.label}
            className="grid h-11 w-11 place-items-center rounded"
            style={{
              border: "2px solid var(--color-ink)",
              background: "var(--color-surface)",
              boxShadow: `3px 3px 0 ${s.color}`,
            }}
          >
            <FontAwesomeIcon icon={s.icon} className="h-5 w-5" />
          </a>
        ))}
      </div>
      <p className="hud">
        © {new Date().getFullYear()} Atul Rao — built block by block
      </p>
    </footer>
  );
}
