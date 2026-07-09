import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="fixed right-4 top-4 z-50 grid h-11 w-11 place-items-center rounded"
      style={{
        border: "2px solid var(--color-ink)",
        background: "var(--color-surface)",
        boxShadow: "4px 4px 0 var(--block-shadow)",
      }}
    >
      <FontAwesomeIcon
        icon={theme === "dark" ? faSun : faMoon}
        className="h-5 w-5"
        style={{ color: "var(--color-primary)" }}
      />
    </button>
  );
}
