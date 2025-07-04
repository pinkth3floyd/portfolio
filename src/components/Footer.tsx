
import { NavLink } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyber-purple/30 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <NavLink to="/" className="font-orbitron text-lg font-bold text-cyber-purple">
              <span className="inline-block animate-glow">PRAKASH</span>
              <span className="text-cyber-cyan">NIRAULA</span>
            </NavLink>
            <p className="text-sm text-cyber-lavender/60 mt-2">
              Forging the Future — One Line of Code at a Time
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-cyber-background border border-cyber-purple/30 transition-all duration-300 hover:border-cyber-cyan hover:shadow-[0_0_10px_rgba(0,255,255,0.5)]"
            >
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-cyber-lavender/60 group-hover:text-cyber-cyan">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-cyber-background border border-cyber-purple/30 transition-all duration-300 hover:border-cyber-cyan hover:shadow-[0_0_10px_rgba(0,255,255,0.5)]"
            >
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-cyber-lavender/60 group-hover:text-cyber-cyan">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-cyber-background border border-cyber-purple/30 transition-all duration-300 hover:border-cyber-cyan hover:shadow-[0_0_10px_rgba(0,255,255,0.5)]"
            >
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-cyber-lavender/60 group-hover:text-cyber-cyan">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          
          <div className="text-right">
            <div className="text-sm text-cyber-lavender/60">
              <NavLink to="/privacy" className="hover:text-cyber-cyan transition-colors">
                Privacy Policy
              </NavLink>
              <span className="mx-2">|</span>
              <span>© {currentYear} PRAKASHNIRAULA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
