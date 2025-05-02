
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CyberButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  glitch?: boolean;
}

export function CyberButton({
  children,
  className,
  variant = "primary",
  size = "md",
  glitch = false,
  ...props
}: CyberButtonProps) {
  // Button size classes
  const sizeClasses = {
    sm: "text-xs py-2 px-4",
    md: "text-sm py-3 px-6",
    lg: "text-base py-4 px-8",
  };

  // Button variants
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-cyber-purple/20 to-cyber-cyan/20 border-cyber-purple hover:shadow-[0_0_15px_rgba(160,32,240,0.5)]",
    secondary:
      "bg-gradient-to-r from-cyber-cyan/20 to-cyber-green/20 border-cyber-cyan hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]",
    outline: "bg-transparent border-cyber-pink hover:shadow-[0_0_15px_rgba(255,0,127,0.5)]",
  };

  return (
    <button
      className={cn(
        "cyber-btn",
        sizeClasses[size],
        variantClasses[variant],
        glitch && "hover:animate-glitch",
        className
      )}
      {...props}
    >
      {children}

      {/* Glitch effects for button text if enabled */}
      {glitch && (
        <span
          className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100"
          aria-hidden="true"
        >
          <span className="text-cyber-pink" style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}>
            {children}
          </span>
          <span className="text-cyber-cyan" style={{ clipPath: "polygon(0 45%, 100% 45%, 100% 100%, 0 100%)" }}>
            {children}
          </span>
        </span>
      )}
    </button>
  );
}
