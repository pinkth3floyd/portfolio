
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useContent } from '../context/ContentContext';
import SEO from '../components/SEO';
import { CyberButton } from '../components/CyberButton';
import { useToast } from '../hooks/use-toast';
import { ContentStore } from '../store/content';
import { PageSelector } from '../components/admin/PageSelector';
import { PageContentEditor } from '../components/admin/PageContentEditor';

const Admin: React.FC = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const { content, updateContent } = useContent();
  const [currentPage, setCurrentPage] = useState<keyof ContentStore>('home');
  const [editedContent, setEditedContent] = useState<ContentStore>(content);
  const { toast } = useToast();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleSave = () => {
    updateContent(editedContent);
    toast({
      title: 'Changes saved',
      description: 'Content updated successfully',
      variant: 'default',
    });
  };

  const updatePageTitle = (page: keyof ContentStore, value: string) => {
    setEditedContent(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        title: value
      }
    }));
  };

  const updatePageDescription = (page: keyof ContentStore, value: string) => {
    setEditedContent(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        description: value
      }
    }));
  };

  const updatePageKeywords = (page: keyof ContentStore, value: string) => {
    setEditedContent(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        keywords: value
      }
    }));
  };

  const pageContent = editedContent[currentPage];

  return (
    <>
      <SEO 
        title="Admin Dashboard | CyberDev Portfolio" 
        description="Administrative dashboard for CyberDev Portfolio content management."
      />
      <div className="min-h-screen p-4 md:p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-orbitron text-cyan-400">Admin Dashboard</h1>
            <p className="text-gray-400">Logged in as {user?.username}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <CyberButton onClick={logout} className="text-sm">Logout</CyberButton>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <PageSelector
            content={content}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            onSave={handleSave}
          />
          <PageContentEditor
            currentPage={currentPage}
            pageContent={pageContent}
            updatePageTitle={updatePageTitle}
            updatePageDescription={updatePageDescription}
            updatePageKeywords={updatePageKeywords}
          />
        </div>
      </div>
    </>
  );
};

export default Admin;
