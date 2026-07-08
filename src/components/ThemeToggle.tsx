import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border hover:bg-primary/10 transition-colors duration-200 backdrop-blur-sm"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card-background)' }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <FontAwesomeIcon 
        icon={theme === 'dark' ? faSun : faMoon} 
        className="w-5 h-5 text-primary"
      />
    </button>
  );
}
