
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import SEO from '../components/SEO';
import { GlitchText } from '../components/GlitchText';
import { CyberButton } from '../components/CyberButton';
import { ProjectCard } from '../components/ProjectCard';

const projects = [
  {
    id: "1",
    title: 'Web Converter Tools',
    description: 'Online collection of web tools used for conversion and seo',
    image: 'https://webconvertertools.com/storage/uploads/Untitled%20design(3).png',
    tags: ['Laravel', 'MySQL', 'Ghost Script','LibreOffice',"SMTP","Stripe","Oracle Cloud"],
    githubUrl: 'https://webconvertertools.com/'
  },
  {
    id: "2",
    title: 'GOLO CRM',
    description: 'CRM Software that can be used to track office operations',
    image: 'https://www.golocrm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoWhite.10a0e67b.png&w=256&q=75',
    tags: ['NextJS',"Tailwind", 'Typescript', 'SQlite',"Vercel","React","Google Maps","Firebase"],
    githubUrl: 'https://golocrm.com'
  },
  {
    id: "3",
    title: 'Raid Media',
    description: 'News Portal from Kathmandu Nepal which publishes news in Nepali Language',
    image: 'https://raidmedia.net/uploads/20240610065227-rm-logo-final.png',
    tags: ['Laravel', 'MYSQL', 'SMTP'],
    githubUrl: 'https://raidmedia.net/'
  }
];

const Index: React.FC = () => {
  const { content } = useContent();
  const pageContent = content.home;
  const [stars, setStars] = useState<{ x: number; y: number; size: number; opacity: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.25
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);
  
  return (
    <>
      <SEO 
        title={pageContent.title} 
        description={pageContent.description}
        keywords={pageContent.keywords}
      />
      
      <div className="container mx-auto px-4 py-16 relative min-h-screen">
        {/* Animated stars background */}
        <div className="fixed inset-0 -z-10">
          {stars.map((star, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animation: `pulse ${Math.random() * 3 + 2}s infinite`
              }}
            />
          ))}
        </div>

        <section className="mb-24 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <GlitchText className="text-4xl md:text-6xl font-bold mb-6">
                {pageContent.sections.hero?.title || "CyberDev 2077"}
              </GlitchText>
              <h2 className="text-xl md:text-2xl text-cyan-400 mb-6 font-rajdhani">
                {pageContent.sections.hero?.subtitle || "Web & Mobile Developer"}
              </h2>
              <p className="text-gray-300 mb-8 font-rajdhani text-lg">
                {pageContent.sections.hero?.content || "Creating digital experiences from the future"}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <CyberButton>View Projects</CyberButton>
                </Link>
                <Link to="/contact">
                  <CyberButton variant="outline">Contact Me</CyberButton>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full border-4 border-cyan-500/30 animate-pulse"></div>
                <img 
                  src="/assets/cropped.png"
                  alt="CyberDev"
                  className="rounded-full w-full h-full object-cover p-2"
                />
                <div className="absolute -inset-1 rounded-full border border-cyan-500/50 animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-orbitron text-white mb-2">
            {pageContent.sections.featured?.title || "Featured Projects"}
          </h2>
          <p className="text-cyan-400 mb-10 font-rajdhani text-xl">
            {pageContent.sections.featured?.subtitle || "Check out my latest work"}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects">
              <CyberButton>View All Projects</CyberButton>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
