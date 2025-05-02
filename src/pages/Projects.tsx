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
    techStack: ["Laravel", "SMTP", "MYSQL","CSS"]
  },
  {
    id: "2",
    title: "Wise Choice Mortgage",
    description: "Real state mortgage and broker company based in Australia.",
    image: "https://wisechoicemortgage.com.au/uploads/20230829043931-logo.png",
    tags: ["Laravel", "SMTP", "Interactive"],
    liveUrl: "#",
    githubUrl: "https://wisechoicemortgage.com.au/",
    fullDescription: "Wise choice mortgage and finance is a company that deals with home loans situated in Australia. It is an portfolio site for the company. In this site user can book a consultation or request for property valuation. This site also contains borrowing calculator, repayment calculator and stamp duty calculator.",
    features: [
      "Content Management System",
      "Borrowing , Repayment and Stamp Duty Calculator",
      "Blogs and Posts",
      "Custom property evaluation "
    ],
    techStack: ["Laravel","Oracle Cloud", "SMTP","CSS","MYSQL", "BANK API"]
  },
  {
    id: "3",
    title: "Foodie Nepal",
    description: "Foodie Nepal is a food delivery service provider based in Kathmandu Nepal",
    image: "https://admin.foodienepal.com/storage/app/public/business/2024-03-20-65fabff9942cd.png",
    tags: ["UI/UX", "Animation", "Design"],
    liveUrl: "#",
    githubUrl: "https://foodienepal.com",
    fullDescription: "Foodie Nepal is an online food ordering app where one can order food form different restaurants around the city. Once the order is placed using user app the order is pushed to specific restaurant app using Firebase notifications. Once restaurant is ready to send the food, they can view nearby online delivery boy and dispatch the order. Users can view real time location of delivery boy.",
    features: [
      "Quick Food Ordering",
      "Beautiful user interface",
      "Live Food Tracking",
      "Subscription Based"
    ],
    techStack: ["Laravel", "MySQL", "Flutter", "REST API", "Firebase", "Google Maps"]
  },
  {
    id: "4",
    title: "Photo Fix",
    description: "Photo Fix is a photo editing app where we can edit and save photos and videos",
    image: "https://lh3.googleusercontent.com/ZNo5kexx4JFjkx77Vc2wTQAOYV0UV0_sHYjY5sb8wXpQ97HLGqW7kLZnLjm60_Ax7EKW",
    tags: ["UI/UX", "Animation", "Design"],
    liveUrl: "#",
    githubUrl: "https://github.com/PrakashNiraula/photofix",
    fullDescription: "Photofix is a photo and video editing tool for android devices which shows admob ads for monetization. This app contains feature like edit photo, crop photo, trim videos, compress photo and make collage features. It also has free photos collection within the app. This app also can be used to apply filters on photos which is achieved by multiplying pixels value with some constant matrix.",
    features: [
      "Easy to use",
      "Edit Photos and Videos",
      "Apply Filters",
      "Free to use"
    ],
    techStack: ["Flutter", "REST API", "Firebase"]
  },
  {
    id: "4",
    title: "PokhreliRestaurantCore",
    description: "PokhreliRestaurantCore is a desktop application used for tracking hotel data.",
    image: "https://yopoho.com/tourism/tourismpics/1269t3.jpg",
    tags: ["UI/UX", "Animation", "Design"],
    liveUrl: "#",
    githubUrl: "https://github.com/PrakashNiraula/restaurantcore",
    fullDescription: "This is a desktop application that can be used to create and manage restaurant data. Here one can manage products staffs guests products ingredients and expenses. It used amazon rds for storing data which are then rendered on windows forms.",
    features: [
      "Easy to use",
      "Manage Income and Expenses",
      "Manage staffs and products and rooms ",
      "Create and manage invoices and guest entry"
    ],
    techStack: ["C#", "Windows Forms", "WPF","Amazon RDS"]
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
