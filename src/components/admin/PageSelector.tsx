
import React from 'react';
import { ContentStore } from '../../store/content';
import { CyberButton } from '../CyberButton';

interface PageSelectorProps {
  content: ContentStore;
  currentPage: keyof ContentStore;
  setCurrentPage: (page: keyof ContentStore) => void;
  onSave: () => void;
}

export const PageSelector: React.FC<PageSelectorProps> = ({
  content,
  currentPage,
  setCurrentPage,
  onSave,
}) => {
  return (
    <div className="lg:col-span-1 bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
      <h2 className="text-xl font-orbitron text-cyan-400 mb-4">Pages</h2>
      <nav className="space-y-1">
        {Object.keys(content).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page as keyof ContentStore)}
            className={`w-full text-left px-4 py-3 rounded-md transition-all ${
              currentPage === page
                ? 'bg-cyan-900/30 text-cyan-400 border-l-2 border-cyan-400'
                : 'text-gray-300 hover:bg-gray-800/30'
            }`}
          >
            <span className="capitalize">{page}</span>
          </button>
        ))}
      </nav>

      <div className="mt-8">
        <CyberButton onClick={onSave} className="w-full">
          Save All Changes
        </CyberButton>
      </div>
    </div>
  );
};
