
import { useEffect, useState } from "react";

export function CyberBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 grid-bg opacity-20"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      
      {/* Parallax stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.25,
              transform: `translateY(${scrollY * (Math.random() * 0.2)}px)`,
              transition: "transform 0.1s ease-out",
            }}
          />
        ))}
      </div>
    </div>
  );
}
