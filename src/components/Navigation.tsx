
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

type NavLinkData = {
  path: string;
  label: string;
};

const links: NavLinkData[] = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/projects", label: "PROJECTS" },
  { path: "/contact", label: "CONTACT" },
  { path: "/privacy", label: "PRIVACY" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-background/70 backdrop-blur-md border-b border-cyber-purple/30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="font-orbitron text-xl font-bold text-cyber-purple">
          <span className="inline-block animate-glow">PRAKASH</span>
          <span className="text-cyber-cyan">NIRAULA</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "font-orbitron text-sm tracking-wider hover:text-cyber-cyan relative transition-colors duration-300",
                  "after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-cyber-cyan after:transition-all after:duration-300",
                  "hover:after:w-full",
                  isActive
                    ? "text-cyber-cyan after:w-full"
                    : "text-cyber-text"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-cyber-cyan hover:text-cyber-purple transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center z-40 transition-all duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-2 items-center bg-black/95 w-full overflow-visible mt-[160px]">

        <NavLink to="/" className="font-orbitron text-xl font-bold text-cyber-purple">
          <span className="inline-block animate-glow">PRAKASH</span>
          <span className="text-cyber-cyan">NIRAULA</span>
        </NavLink>


          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "font-orbitron text-xl tracking-wider transition-colors duration-300",
                  isActive ? "text-cyber-cyan" : "text-cyber-text"
                )
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
