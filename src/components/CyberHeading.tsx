
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface CyberHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
  children: ReactNode;
  glowEffect?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

export function CyberHeading({
  level,
  children,
  className,
  glowEffect = false,
  size,
  ...props
}: CyberHeadingProps) {
  const Component = level;
  
  const sizeClasses = {
    sm: "text-lg md:text-xl",
    md: "text-xl md:text-2xl",
    lg: "text-2xl md:text-3xl",
    xl: "text-3xl md:text-4xl",
    "2xl": "text-4xl md:text-5xl",
    "3xl": "text-5xl md:text-6xl",
  };
  
  const defaultSizeByLevel = {
    h1: sizeClasses["2xl"],
    h2: sizeClasses.xl,
    h3: sizeClasses.lg,
    h4: sizeClasses.md,
    h5: sizeClasses.sm,
    h6: "text-base"
  };
  
  return (
    <Component
      className={cn(
        "cyber-heading",
        size ? sizeClasses[size] : defaultSizeByLevel[level],
        "tracking-wider",
        glowEffect && "animate-glow",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
