import React, { useState } from "react";
import { CyberHeading } from "@/components/CyberHeading";
import { ProjectCard, ProjectData } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

const projects: ProjectData[] = [
  {
    id: "1",
    title: "Everest Travels",
    description: "Everest Travels is an travels and tours company based in Australia with branch in Kathmandu ,Nepal.",
    image: "https://www.everesttravel.com.au/uploads/0000/11/2023/06/02/everest-pic.png",
    tags: ["Laravel", "SMTP", "MYSQL"],
    liveUrl: "#",
    githubUrl: "https://www.everesttravel.com.au/",
    fullDescription: "Using the site user can view different tour packages available in Nepal or can book a flightfor cities around the world. Once a ticket or package is booked it the message gets pushed to admin using SMTP protocol where admin views the request and processes the request manually",
    features: [
      "Interactive tour package visualization",
      "Manage content form admin",
      "Flight Search API",
      "Easy for booking"
    ],
    techStack: ["Laravel", "SMTP", "MYSQL"]
  },
  {
    id: "2",
    title: "Cyber City Map",
    description: "Interactive 3D map of a futuristic city with glowing neon elements",
    image: "https://images.unsplash.com/photo-1502780831116-d682dd6fcd51?auto=format&fit=crop&q=80&w=2080",
    tags: ["3D", "WebGL", "Interactive"],
    liveUrl: "#",
    githubUrl: "#",
    fullDescription: "Cyber City Map is an immersive 3D exploration of a futuristic cyberpunk cityscape. Users can navigate through neon-lit streets, interact with buildings, and discover hidden easter eggs throughout the experience.",
    features: [
      "Fully explorable 3D environment",
      "Dynamic lighting effects",
      "Interactive buildings and elements",
      "Custom shader effects"
    ],
    techStack: ["Three.js", "WebGL", "GLSL", "React"]
  },
  {
    id: "3",
    title: "Quantum Interface",
    description: "Experimental UI components inspired by quantum computing interfaces",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020",
    tags: ["UI/UX", "Animation", "Design"],
    liveUrl: "#",
    githubUrl: "#",
    fullDescription: "Quantum Interface is a library of futuristic UI components inspired by quantum computing interfaces. It features advanced animation techniques and unique interaction patterns that push the boundaries of web interfaces.",
    features: [
      "Advanced animation system",
      "Experimental interaction patterns",
      "Holographic display components",
      "Cyberpunk-inspired form elements"
    ],
    techStack: ["React", "Framer Motion", "CSS", "GSAP"]
  }
];
// const projects:ProjectData[]=[]

type FilterType = "All" | "Web" | "3D" | "Design";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  
  const filterMap = {
    All: () => true,
    Web: (project: ProjectData) => project.tags.some(tag => 
      ["React", "Web", "UI/UX", "Template"].includes(tag)
    ),
    "3D": (project: ProjectData) => project.tags.some(tag => 
      ["3D", "WebGL", "VR", "ThreeJS"].includes(tag)
    ),
    Design: (project: ProjectData) => project.tags.some(tag => 
      ["Design", "Animation", "UI/UX"].includes(tag)
    )
  };
  
  const filteredProjects = projects.filter(filterMap[activeFilter]);
  
  return (
    <div className="container mx-auto px-4 py-16">
      <CyberHeading level="h1" className="text-center mb-4">
        Projects
      </CyberHeading>
      <p className="text-cyber-lavender/70 text-center max-w-2xl mx-auto mb-12">
        Explore my portfolio of digital experiments, interactive experiences, and web applications
      </p>
      
      {/* Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 rounded-lg bg-cyber-background border border-cyber-purple/30">
          {(["All", "Web", "3D", "Design"] as FilterType[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-6 py-2 rounded-md font-orbitron text-sm transition-all duration-300",
                activeFilter === filter 
                  ? "bg-gradient-to-r from-cyber-purple/20 to-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/30 shadow-[0_0_10px_rgba(0,255,255,0.2)]" 
                  : "text-cyber-lavender/70 hover:text-cyber-lavender"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-cyber-lavender/70 text-lg">No projects found matching the selected filter.</p>
        </div>
      )}
    </div>
  );
}
