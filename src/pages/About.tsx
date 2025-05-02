
import React from 'react';
import { useContent } from '../context/ContentContext';
import SEO from '../components/SEO';
import { TimelineItem } from '../components/TimelineItem';
import { GlitchText } from '../components/GlitchText';

const experiences = [
  {
    id: 1,
    year: '2024  - Present',
    role: 'Full Stack Nextjs Developer',
    company: 'Zeptosky Private Limited',
    description: 'Building cutting-edge web applications with React and TypeScript'
  },
  {
    id: 2,
    year: '2022 - Present',
    role: 'Mobile Developer',
    company: '21st Tech Private Limited',
    description: 'Developed cross-platform mobile applications using flutter, kotlin or java.'
  },
  {
    id: 3,
    year: '2021-2022',
    role: 'Back End Developer Developer',
    company: '21st Tech Private Limited',
    description: 'Created responsive and interactive websites for clients across various industries.'
  },
  {
    id: 4,
    year: '2019 - 2021',
    role: 'Front End Developer',
    company: '21st Tech Private Limited',
    description: 'Created responsive and interactive websites for clients across various industries.'
  }
];

const About: React.FC = () => {
  const { content } = useContent();
  const pageContent = content.about;

  return (
    <>
      <SEO 
        title={pageContent.title}
        description={pageContent.description}
        keywords={pageContent.keywords}
      />
      
      <div className="container mx-auto px-4 py-16 relative">
        {/* Cyberpunk background elements */}
        <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-10 pointer-events-none">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className="border border-cyber-purple/20"
              style={{
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-orbitron text-white mb-8">
          <GlitchText intensity="low">{pageContent.sections.intro?.title || "About Me"}</GlitchText>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="cyber-card transform hover:scale-105 transition-transform duration-300">
            <p className="text-gray-300 mb-6 text-lg">
              {pageContent.sections.intro?.content || "I'm a passionate web and mobile developer with over 5 years of experience creating cutting-edge digital experiences."}
            </p>
            
            <p className="text-gray-300 mb-6 text-lg">
              My approach combines technical expertise with creative problem-solving to build applications that are not just functional, but also visually striking and intuitive to use.
            </p>
            
            <p className="text-cyan-400 text-lg">
              Based in Kathmandu, I work with clients globally to bring their digital visions to life.
            </p>
          </div>
          
          <div className="cyber-card">
            <h2 className="text-2xl font-orbitron text-cyan-400 mb-6">
              {pageContent.sections.skills?.title || "Technical Skills"}
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {pageContent.sections.skills?.items ? 
                pageContent.sections.skills.items.map((skill, index) => (
                  <div key={index} className="bg-black/30 border border-cyan-500/30 rounded-md p-4 hover:border-cyan-500 transition-colors">
                    <span className="text-white">{skill}</span>
                  </div>
                )) : 
                ["React", "React Native", "TypeScript", "Node.js", "Python", "UI/UX Design"].map((skill, index) => (
                  <div key={index} className="bg-black/30 border border-cyan-500/30 rounded-md p-4">
                    <span className="text-white">{skill}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-3xl font-orbitron text-white mb-12">
            <GlitchText intensity="low">Experience</GlitchText>
          </h2>
          
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <TimelineItem 
                key={item.id}
                date={item.year}
                title={`${item.role} at ${item.company}`}
                description={item.description}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-orbitron text-white mb-12">
            <GlitchText intensity="low">Education</GlitchText>
          </h2>
          
          <div className="space-y-12">
            {pageContent.sections.education?.items?.map((item, index, arr) => (
              <TimelineItem
                key={index}
                date={item.year}
                title={item.degree}
                description={`${item.school} - ${item.description}`}
                isLast={index === arr.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
