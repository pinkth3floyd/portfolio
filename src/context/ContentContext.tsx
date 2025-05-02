
import React, { createContext, useContext, useEffect, useState } from 'react';
import { contentStore, ContentStore } from '../store/content';

interface ContentContextType {
  content: ContentStore;
  updateContent: (newContent: ContentStore) => void;
  isInitialized: boolean;
}

const ContentContext = createContext<ContentContextType>({
  content: contentStore.content,
  updateContent: () => {},
  isInitialized: false
});

export const useContent = () => useContext(ContentContext);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentStore>(contentStore.content);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    contentStore.init();
    setContent(contentStore.content);
    setIsInitialized(true);
  }, []);

  const updateContent = (newContent: ContentStore) => {
    setContent(newContent);
    contentStore.setContent(newContent);
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, isInitialized }}>
      {children}
    </ContentContext.Provider>
  );
};
