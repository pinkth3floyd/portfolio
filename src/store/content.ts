// This represents the data that would come from a database in the future
// For now, we'll use this static data that can be modified through the admin panel

export interface PageContent {
  title: string;
  description: string;
  keywords: string;
  sections: {
    [key: string]: {
      title?: string;
      subtitle?: string;
      content?: string;
      items?: Array<any>;
    };
  };
}

export interface ContentStore {
  home: PageContent;
  about: PageContent;
  projects: PageContent;
  contact: PageContent;
  privacy: PageContent;
}

const initialContent: ContentStore = {
  home: {
    title: "Prakash Niraula | Futuristic Web Developer",
    description: "A web and mobile full stack developer with 4+ years of experience",
    keywords: "web developer, mobile developer, frontend, backend, cloud computing, server",
    sections: {
      hero: {
        title: "PRAKASH NIRAULA",
        subtitle: "Web & Mobile Developer",
        content: "Creating digital experiences from the future"
      },
      featured: {
        title: "Featured Projects",
        subtitle: "Check out my latest work",
      }
    }
  },
  about: {
    title: "About Prakash Niraula | Web & Mobile Developer Background",
    description: "Learn about my background, skills, and experience as a futuristic web and mobile developer.",
    keywords: "web developer bio, mobile developer experience, tech skills, cyberpunk developer",
    sections: {
      intro: {
        title: "About Me",
        content: "I'm a passionate web and mobile developer with over 4 years of experience creating cutting-edge digital experiences."
      },
      skills: {
        title: "Technical Skills",
        items: ["React", "Node", "TypeScript", "Flutter", "JAVA","UI/UX Design","REST API","CLOUD"]
      },
      education: {
        title: "Education",
        items: [
          {
            degree: "Bachelors in Computing",
            school: "Coventry University ",
            year: "2021",
            description: "Studied computing and its implementations in real world"
          },
          {
            degree: "High School(10+2)",
            school: "Golden Gate International College",
            year: "2014",
            description: "Studied science subjects along with computer."
          }
        ]
      }
    }
  },
  projects: {
    title: "Projects Prakash Niraula|  Web & Mobile Development Portfolio",
    description: "Explore my web and mobile development projects showcasing futuristic design and technical expertise.",
    keywords: "web projects, mobile apps, developer portfolio, tech projects, cyberpunk design",
    sections: {
      intro: {
        title: "My Projects",
        subtitle: "A collection of my best work"
      }
    }
  },
  contact: {
    title: "Contact Prakash Niraula | Get in Touch for Web & Mobile Development",
    description: "Contact me for web and mobile development services, collaboration opportunities, or project inquiries.",
    keywords: "contact developer, hire web developer, mobile app development, tech consultation",
    sections: {
      intro: {
        title: "Get In Touch",
        content: "Have a project in mind? Let's discuss how I can help bring your vision to life."
      }
    }
  },
  privacy: {
    title: "Privacy Policy | Prakash Niraula",
    description: "Privacy policy for my portfolio website explaining data collection and usage practices.",
    keywords: "privacy policy, web developer privacy, data protection, website privacy",
    sections: {
      intro: {
        title: "Privacy Policy",
        content: "This privacy policy outlines how your data is collected and used on this website."
      }
    }
  }
};

// We'll use this context to provide and update content throughout the app
export const contentStore = {
  content: initialContent,
  setContent: function(newContent: ContentStore) {
    this.content = newContent;
    // In a real app, this would save to a database
    // localStorage.setItem('contentStore', JSON.stringify(newContent));
  },
  loadContent: function() {
    // const saved = localStorage.getItem('contentStore');
    // if (saved) {
    //   try {
    //     this.content = JSON.parse(saved);
    //   } catch (e) {
    //     console.error("Failed to parse saved content", e);
    //   }
    // }
  },
  init: function() {
    this.loadContent();
  }
};
