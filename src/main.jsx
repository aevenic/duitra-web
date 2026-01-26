import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider, ScrollRestoration, Outlet } from 'react-router-dom'

import './index.css'
import Home from './pages/Home.jsx'
import PrivacyPolicy from './pages/Privacy.jsx'
import TermsOfService from './pages/TOS.jsx'
import { LanguageProvider } from './components/ui/LanguageContext'

const RootLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-of-service", element: <TermsOfService /> },
      { path: "/404", element: <div className="text-white text-center pt-20">Page Not Found</div> },
      { path: "*", element: <Navigate to="/404" replace /> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
)
