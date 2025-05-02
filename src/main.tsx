
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import { Toaster } from './components/ui/sonner';
import { AuthProvider } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <ContentProvider>
          <App />
          <Toaster />
        </ContentProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
