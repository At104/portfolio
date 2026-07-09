import { NavLink } from "react-router-dom";
import { TETROMINO } from "@/lib/tetromino";

const LINKS = [
  { to: "/", label: "Home", color: TETROMINO.T },
  { to: "/projects", label: "Projects", color: TETROMINO.S },
  { to: "/contact", label: "Contacts", color: TETROMINO.L },
];

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <ul
        className="flex gap-1 rounded-md p-1"
        style={{
          border: "2px solid var(--color-ink)",
          background: "var(--color-surface)",
          boxShadow: "4px 4px 0 var(--block-shadow)",
        }}
      >
        {LINKS.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === "/"}
              className="hud block rounded-sm px-3 py-2 transition-colors"
              style={({ isActive }) => ({
                color: isActive ? "var(--color-ink)" : "var(--color-ink-soft)",
                borderTop: `4px solid ${isActive ? link.color : "transparent"}`,
                background: isActive
                  ? `color-mix(in srgb, ${link.color} 14%, transparent)`
                  : "transparent",
              })}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
