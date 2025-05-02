
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  intensity?: "low" | "medium" | "high";
  as?: keyof JSX.IntrinsicElements;
}

export function GlitchText({
  children,
  className,
  intensity = "medium",
  as: Component = "div",
  ...props
}: GlitchTextProps) {
  const intensityMap = {
    low: "animate-[glitch_3s_infinite]",
    medium: "animate-[glitch_1s_infinite]",
    high: "animate-[glitch_0.5s_infinite]",
  };
  
  // Use a type assertion to handle the dynamic component type
  const Comp = Component as React.ElementType;
  
  return (
    <Comp
      className={cn("relative inline-block", className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      <span
        className={cn(
          "absolute top-0 left-0 text-cyber-pink opacity-70",
          intensityMap[intensity]
        )}
        aria-hidden="true"
      >
        {children}
      </span>
      
      <span
        className={cn(
          "absolute top-0 left-0 text-cyber-cyan opacity-70",
          intensityMap[intensity]
        )}
        aria-hidden="true"
        style={{ animationDelay: "0.1s" }}
      >
        {children}
      </span>
    </Comp>
  );
}
