import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-900/30 bg-gradient-to-br from-cyan-950/20 to-cyan-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">Atul Rao</h3>
            <p className="text-sm" style={{color: 'var(--foreground)'}}>
              Software Engineering Student at McMaster University
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/At104"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 border border-cyan-500/30"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/atul5rao/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 border border-cyan-500/30"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
            
            <a
              href="mailto:atul.rao664@gmail.com"
              className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 border border-cyan-500/30"
            >
              <span className="text-sm font-bold">@</span>
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-cyan-500/20 mt-6 pt-6 text-center">
          <p className="text-sm" style={{color: 'var(--foreground)'}}>
            © {new Date().getFullYear()} Atul Rao. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
