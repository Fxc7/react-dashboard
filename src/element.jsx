import React from 'react';
import { Toaster } from 'sonner';
import { BrowserRouter, Routes } from 'react-router-dom';

import App from './App.jsx';

export const element = (
   <React.StrictMode>
      <BrowserRouter>
         <Toaster richColors position="top-center" />
         <App />
      </BrowserRouter>
   </React.StrictMode>
);