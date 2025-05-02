import React, { useState } from "react";
import { CyberHeading } from "@/components/CyberHeading";
import { ProjectCard, ProjectData } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

// const projects: ProjectData[] = [
//   {
//     id: "1",
//     title: "Neural Nexus",
//     description: "AI-powered data visualization dashboard with real-time analytics",
//     image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=2070",
//     tags: ["React", "ThreeJS", "AI"],
//     liveUrl: "#",
//     githubUrl: "#",
//     fullDescription: "Neural Nexus is an AI-powered dashboard that transforms complex data into intuitive 3D visualizations. It features real-time analytics processing and machine learning algorithms that identify patterns and trends.",
//     features: [
//       "Interactive 3D data visualization",
//       "Real-time data processing",
//       "Pattern recognition algorithms",
//       "Customizable dashboard layouts"
//     ],
//     techStack: ["React", "Three.js", "TensorFlow.js", "WebGL", "D3.js"]
//   },
//   {
//     id: "2",
//     title: "Cyber City Map",
//     description: "Interactive 3D map of a futuristic city with glowing neon elements",
//     image: "https://images.unsplash.com/photo-1502780831116-d682dd6fcd51?auto=format&fit=crop&q=80&w=2080",
//     tags: ["3D", "WebGL", "Interactive"],
//     liveUrl: "#",
//     githubUrl: "#",
//     fullDescription: "Cyber City Map is an immersive 3D exploration of a futuristic cyberpunk cityscape. Users can navigate through neon-lit streets, interact with buildings, and discover hidden easter eggs throughout the experience.",
//     features: [
//       "Fully explorable 3D environment",
//       "Dynamic lighting effects",
//       "Interactive buildings and elements",
//       "Custom shader effects"
//     ],
//     techStack: ["Three.js", "WebGL", "GLSL", "React"]
//   },
//   {
//     id: "3",
//     title: "Quantum Interface",
//     description: "Experimental UI components inspired by quantum computing interfaces",
//     image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020",
//     tags: ["UI/UX", "Animation", "Design"],
//     liveUrl: "#",
//     githubUrl: "#",
//     fullDescription: "Quantum Interface is a library of futuristic UI components inspired by quantum computing interfaces. It features advanced animation techniques and unique interaction patterns that push the boundaries of web interfaces.",
//     features: [
//       "Advanced animation system",
//       "Experimental interaction patterns",
//       "Holographic display components",
//       "Cyberpunk-inspired form elements"
//     ],
//     techStack: ["React", "Framer Motion", "CSS", "GSAP"]
//   },
//   {
//     id: "4",
//     title: "Neon Beats",
//     description: "Audio visualization app that reacts to music with neon light effects",
//     image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80&w=2071",
//     tags: ["Audio", "Animation", "WebAudio"],
//     liveUrl: "#",
//     githubUrl: "#",
//     fullDescription: "Neon Beats transforms music into stunning visual experiences. It analyzes audio in real-time and generates synchronized neon light animations that pulse and flow with the rhythm and frequencies of the music.",
//     features: [
//       "Real-time audio analysis",
//       "Frequency-based visualizations",
//       "Custom neon light effects",
//       "Music upload and streaming"
//     ],
//     techStack: ["WebAudio API", "Canvas", "React", "Tone.js"]
//   },
//   {
//     id: "5",
//     title: "Synthwave Portfolio",
//     description: "Retro-futuristic portfolio template with 80s synthwave aesthetics",
//     image: "https://images.unsplash.com/photo-1614790871259-2da9c8b5c03e?auto=format&fit=crop&q=80&w=2574",
//     tags: ["Web", "Design", "Template"],
//     liveUrl: "#",
//     githubUrl: "#",
//     fullDescription: "Synthwave Portfolio is a customizable template that combines 80s retro aesthetics with modern web technologies. It features grid landscapes, neon typography, and smooth scrolling effects perfect for creative professionals.",
//     features: [
//       "Synthwave visual aesthetic",
//       "Parallax scrolling effects",
//       "Interactive grid landscapes",
//       "Customizable sections"
//     ],
//     techStack: ["React", "SCSS", "GSAP", "Locomotive Scroll"]
//   },
//   {
//     id: "6",
//     title: "Virtual Reality Lab",
//     description: "WebVR experiment showcasing interactive scientific simulations",
//     image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=2070",
//     tags: ["VR", "WebXR", "Education"],
//     liveUrl: "#",
//     githubUrl: "#",
//     fullDescription: "Virtual Reality Lab brings scientific concepts to life through immersive WebVR simulations. Users can interact with molecular structures, explore physics principles, and conduct virtual experiments in an intuitive 3D environment.",
//     features: [
//       "WebXR-powered experiences",
//       "Interactive scientific simulations",
//       "Cross-platform compatibility",
//       "Educational content integration"
//     ],
//     techStack: ["A-Frame", "Three.js", "WebXR API", "React"]
//   }
// ];
const projects:ProjectData[]=[]

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
