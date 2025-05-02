
import React from 'react';
import { ContentStore } from '../../store/content';
import { SectionEditor } from './SectionEditor';

interface PageContentEditorProps {
  currentPage: keyof ContentStore;
  pageContent: any;
  updatePageTitle: (page: keyof ContentStore, value: string) => void;
  updatePageDescription: (page: keyof ContentStore, value: string) => void;
  updatePageKeywords: (page: keyof ContentStore, value: string) => void;
}

export const PageContentEditor: React.FC<PageContentEditorProps> = ({
  currentPage,
  pageContent,
  updatePageTitle,
  updatePageDescription,
  updatePageKeywords,
}) => {
  return (
    <div className="lg:col-span-4 bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
      <h2 className="text-2xl font-orbitron text-cyan-400 mb-4 capitalize">{currentPage} Page</h2>
      
      <div className="space-y-6">
        {/* SEO Settings */}
        <div className="bg-black/30 border border-gray-800 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-orbitron text-cyan-400 mb-4">SEO Settings</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Page Title</label>
              <input
                type="text"
                value={pageContent.title}
                onChange={(e) => updatePageTitle(currentPage, e.target.value)}
                className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded text-white"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-1">Meta Description</label>
              <textarea
                value={pageContent.description}
                onChange={(e) => updatePageDescription(currentPage, e.target.value)}
                className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded text-white h-20"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-1">Keywords</label>
              <input
                type="text"
                value={pageContent.keywords}
                onChange={(e) => updatePageKeywords(currentPage, e.target.value)}
                className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded text-white"
              />
              <p className="text-xs text-gray-500 mt-1">Separate keywords with commas</p>
            </div>
          </div>
        </div>
        
        {/* Content Sections */}
        <div>
          <h3 className="text-xl font-orbitron text-cyan-400 mb-4">Page Content</h3>
          
          {Object.entries(pageContent.sections).map(([sectionKey, sectionData]) => (
            <SectionEditor
              key={sectionKey}
              currentPage={currentPage}
              sectionKey={sectionKey}
              sectionData={sectionData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
