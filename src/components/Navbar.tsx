"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300" style={{ 
      backgroundColor: 'rgba(var(--background-rgb), 0.7)', 
      borderBottomColor: 'rgba(6, 182, 212, 0.2)',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Atul Rao
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="hover:text-primary transition-colors duration-200 font-medium"
                style={{ color: 'var(--foreground)' }}
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className="hover:text-primary transition-colors duration-200 font-medium"
                style={{ color: 'var(--foreground)' }}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="hover:text-primary transition-colors duration-200 font-medium"
                style={{ color: 'var(--foreground)' }}
              >
                Contact
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className="hover:text-primary transition-colors duration-200"
              style={{ color: 'var(--foreground)' }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-md border-t" style={{ backgroundColor: 'rgba(var(--background-rgb), 0.9)', borderTopColor: 'var(--border)' }}>
              <Link 
                href="/" 
                className="block px-3 py-2 hover:text-primary transition-colors duration-200 font-medium"
                style={{ color: 'var(--foreground)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className="block px-3 py-2 hover:text-primary transition-colors duration-200 font-medium"
                style={{ color: 'var(--foreground)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 hover:text-primary transition-colors duration-200 font-medium"
                style={{ color: 'var(--foreground)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
