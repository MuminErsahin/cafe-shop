import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AppDataProvider } from './context/AppDataContext.jsx';  // ← bunu ekle

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppDataProvider>     {/* ← burası eklendi */}
        <App />
      </AppDataProvider>
    </BrowserRouter>
  </StrictMode>
);
