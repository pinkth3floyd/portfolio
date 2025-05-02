
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CyberButton } from "./CyberButton";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  fullDescription?: string;
  features?: string[];
  techStack?: string[];
}

interface ProjectCardProps {
  project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div 
        className="cyber-card group cursor-pointer h-full flex flex-col"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-48 mb-4 overflow-hidden border border-cyber-purple/20">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/10 to-transparent h-[1px] w-full opacity-0 group-hover:opacity-100 group-hover:animate-scanline"></div>
        </div>
        
        <a
        href={project.liveUrl}
        className="font-orbitron text-xl font-bold text-cyber-cyan mb-2 group-hover:text-cyber-purple transition-colors">
          {project.title}
        </a>
        
        <p className="text-cyber-lavender/70 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-lavender rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto">
          <div className="text-cyber-cyan text-xs tracking-wider font-orbitron">
            VIEW DETAILS
          </div>
        </div>
      </div>
      
      {/* Project Details Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-cyber-background border border-cyber-purple/30 text-cyber-text max-w-3xl w-[90vw]">
          <div className="relative h-48 md:h-64 mb-6 -mt-6 -mx-6 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
          
          <DialogHeader>
            <DialogTitle className="font-orbitron text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-cyan">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-cyber-lavender/70 mt-2">
              {project.fullDescription || project.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 space-y-4">
            {project.features && (
              <div>
                <h4 className="font-orbitron text-cyber-cyan mb-2">Features</h4>
                <ul className="list-disc pl-5 space-y-1 text-cyber-lavender/70">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.techStack && (
              <div>
                <h4 className="font-orbitron text-cyber-cyan mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs bg-cyber-purple/20 border border-cyber-purple/30 text-cyber-lavender rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <DialogFooter className="flex justify-end gap-4 mt-8">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <CyberButton variant="outline" size="sm">
                  Open Live URL
                </CyberButton>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <CyberButton variant="primary" size="sm">
                  Live Demo
                </CyberButton>
              </a>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
