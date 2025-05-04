import React from 'react';
import { CyberHeading } from "@/components/CyberHeading";

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <CyberHeading level="h1" className="text-center mb-8">
        Privacy Policy
      </CyberHeading>
      
      <div className="cyber-card mb-8">
        <CyberHeading level="h2" size="md" className="mb-4">
          Introduction
        </CyberHeading>
        <p className="text-cyber-lavender/90 mb-4">
          This Privacy Policy explains how we collect, use, and protect information that you may provide while using our portfolio website. We are committed to ensuring that your privacy is protected in compliance with applicable laws and regulations.
        </p>
        <p className="text-cyber-lavender/90">
          By using this website, you agree to the collection and use of information in accordance with this policy.
        </p>
      </div>
      
      <div className="cyber-card mb-8">
        <CyberHeading level="h2" size="md" className="mb-4">
          Information We Collect
        </CyberHeading>
        <p className="text-cyber-lavender/90 mb-4">
          We may collect the following information when you interact with our website:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-cyber-lavender/90">
          <li>Name and contact information, including email address, when you fill out our contact form</li>
          <li>Information about your visit, including pages you viewed, time spent on the website, and navigation paths</li>
          <li>Technical information such as your IP address, browser type and version, and operating system</li>
          <li>Cookies and similar technologies as detailed in our Cookie Policy</li>
        </ul>
      </div>
      
      <div className="cyber-card mb-8">
        <CyberHeading level="h2" size="md" className="mb-4">
          How We Use Your Information
        </CyberHeading>
        <p className="text-cyber-lavender/90 mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-cyber-lavender/90">
          <li>To respond to your inquiries and provide you with requested information</li>
          <li>To improve our website and user experience</li>
          <li>To analyze website traffic and usage patterns</li>
          <li>To maintain security and prevent fraud</li>
          <li>To comply with legal obligations</li>
        </ul>
      </div>
      
      <div className="cyber-card mb-8">
        <CyberHeading level="h2" size="md" className="mb-4">
          Data Security
        </CyberHeading>
        <p className="text-cyber-lavender/90 mb-4">
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-cyber-lavender/90">
          <li>Secure socket layer (SSL) encryption for data transmission</li>
          <li>Regular security assessments and updates</li>
          <li>Access controls and authentication procedures</li>
          <li>Data minimization practices</li>
        </ul>
        <p className="text-cyber-lavender/90 mt-4">
          While we strive to protect your personal information, please be aware that no method of transmission over the internet is 100% secure.
        </p>
      </div>
      
      <div className="cyber-card mb-8">
        <CyberHeading level="h2" size="md" className="mb-4">
          Your Rights
        </CyberHeading>
        <p className="text-cyber-lavender/90 mb-4">
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-cyber-lavender/90">
          <li>The right to access the personal information we hold about you</li>
          <li>The right to request correction of inaccurate information</li>
          <li>The right to request deletion of your personal information</li>
          <li>The right to restrict or object to processing of your information</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent</li>
        </ul>
        <p className="text-cyber-lavender/90 mt-4">
          To exercise these rights, please contact us using the information provided in the Contact section below.
        </p>
      </div>
      
      <div className="cyber-card mb-8">
        <CyberHeading level="h2" size="md" className="mb-4">
          Third-Party Links
        </CyberHeading>
        <p className="text-cyber-lavender/90">
          Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. We encourage you to read the privacy statements of any third-party websites you visit.
        </p>
      </div>
      
      <div className="cyber-card mb-8">
        <CyberHeading level="h2" size="md" className="mb-4">
          Changes to This Privacy Policy
        </CyberHeading>
        <p className="text-cyber-lavender/90">
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post any changes on this page and, when appropriate, notify you by email. We encourage you to periodically review this Privacy Policy for the latest information on our privacy practices.
        </p>
      </div>
      
      <div className="cyber-card">
        <CyberHeading level="h2" size="md" className="mb-4">
          Contact Information
        </CyberHeading>
        <p className="text-cyber-lavender/90">
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
        </p>
        <div className="mt-4 p-4 bg-cyber-background/50 border border-cyber-purple/30 rounded-md">
          <p className="text-cyber-lavender/90">Email: pinkth3floyd@gmail.com</p>
          <p className="text-cyber-lavender/90">Address: Chabahil, Kathmandu8 Nepal</p>
          <p className="text-cyber-lavender/90">Phone : +9779869804695 </p>
        </div>
      </div>
    </div>
  );
}
