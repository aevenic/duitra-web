import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider, } from 'react-router-dom'

import './index.css'
import Home from './pages/Home.jsx'
import PrivacyPolicy from './pages/Privacy.jsx'
import TermsOfService from './pages/TOS.jsx'
import { LanguageProvider } from './components/ui/LanguageContext'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-of-service", element: <TermsOfService /> },
  { path: "*", element: <Navigate to="/404" replace /> },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
)
