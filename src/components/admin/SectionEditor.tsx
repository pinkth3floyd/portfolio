
import React from 'react';
import { useContent } from '../../context/ContentContext';
import { ContentStore } from '../../store/content';

interface SectionEditorProps {
  currentPage: keyof ContentStore;
  sectionKey: string;
  sectionData: any;
}

export const SectionEditor: React.FC<SectionEditorProps> = ({
  currentPage,
  sectionKey,
  sectionData,
}) => {
  const { content, updateContent } = useContent();

  const updateSectionField = (field: string, value: any) => {
    const newContent = { ...content };
    newContent[currentPage].sections[sectionKey][field] = value;
    updateContent(newContent);
  };

  return (
    <div className="bg-black/30 border border-gray-800 rounded-lg p-4 mb-4">
      <h4 className="text-cyan-400 font-orbitron mb-3 capitalize">{sectionKey} Section</h4>
      
      {Object.entries(sectionData).map(([field, value]) => {
        if (field === 'items' && Array.isArray(value)) {
          return (
            <div key={field} className="mb-3">
              <label className="block text-gray-300 text-sm mb-1 capitalize">{field}</label>
              <div className="space-y-2">
                {(value as string[]).map((item, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const newItems = [...value];
                      newItems[idx] = e.target.value;
                      updateSectionField(field, newItems);
                    }}
                    className="w-full px-3 py-2 bg-black/50 border border-gray-700 rounded text-white text-sm"
                  />
                ))}
              </div>
            </div>
          );
        }
        
        return (
          <div key={field} className="mb-3">
            <label className="block text-gray-300 text-sm mb-1 capitalize">{field}</label>
            <input
              type="text"
              value={value as string}
              onChange={(e) => updateSectionField(field, e.target.value)}
              className="w-full px-3 py-2 bg-black/50 border border-gray-700 rounded text-white text-sm"
            />
          </div>
        );
      })}
    </div>
  );
};
