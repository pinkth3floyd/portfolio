
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  date: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  isLast?: boolean;
}

export function TimelineItem({
  date,
  title,
  description,
  icon,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative flex items-start">
      {/* Line */}
      {!isLast && (
        <div className="absolute left-4 top-5 h-full w-[1px] bg-gradient-to-b from-cyber-purple to-cyber-cyan/30"></div>
      )}
      
      {/* Icon */}
      <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyber-purple bg-cyber-background text-cyber-cyan shadow-[0_0_10px_rgba(160,32,240,0.3)]">
        {icon || (
          <div className="h-2 w-2 rounded-full bg-cyber-cyan"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="ml-4 pb-8">
        <span className="font-orbitron text-xs text-cyber-purple mb-1 block">
          {date}
        </span>
        <h3 className="font-orbitron text-lg text-cyber-cyan mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-cyber-lavender/70">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
