import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import SEO from '../components/SEO';
import { CyberButton } from '../components/CyberButton';
import { useToast } from '../hooks/use-toast';
import { GlitchText } from '../components/GlitchText';
import { config } from 'dotenv';

const Contact: React.FC = () => {
  // config();
  const { content } = useContent();
  const pageContent = content.contact;
  const { toast } = useToast();
  const [chat_id,setchat_id]=useState('');
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const botToken = '8088442395:AAGVsqnpsm33wliSfmRisbxl2qger85jQ1U';

  const chatId =  '1721592109';


  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(JSON.stringify(formData))}`)
    .then(response => {
      console.log(response);
      toast({
        title: "Message sent",
        description: "I'll get back to you soon!",
      });
     
    })
    .catch(error => {
        console.error('Error sending message:', error);
       
     });

  
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <SEO 
        title={pageContent.title}
        description={pageContent.description}
        keywords={pageContent.keywords}
      />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>

        <h1 className="text-4xl md:text-5xl font-orbitron text-white mb-8">
          <GlitchText intensity="low">
            {pageContent.sections.intro?.title || "Get In Touch"}
          </GlitchText>
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="cyber-card transform hover:scale-105 transition-transform duration-300">
            <p className="text-gray-300 mb-8 text-lg">
              {pageContent.sections.intro?.content || "Have a project in mind? Let's discuss how I can help bring your vision to life."}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-cyan-400">pinkth3floyd@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-cyan-400">Chabahil, Kathmandu</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Working Hours</p>
                  <p className="text-cyan-400">Mon-Fri: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="cyber-card">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="cyber-input w-full"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="cyber-input w-full"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="cyber-input w-full"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="cyber-input w-full"
                ></textarea>
              </div>
              
              <CyberButton type="submit" className="w-full" variant='outline' glitch={false}>
                Send Message
              </CyberButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
