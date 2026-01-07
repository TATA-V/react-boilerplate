import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';
import App from './App.tsx';
import RQProvider from './provider/RQProvider.tsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RQProvider>
      <App />
      <Toaster />
    </RQProvider>
  </StrictMode>,
);
