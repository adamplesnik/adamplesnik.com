import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CvPrint from './content/CvPrint.tsx'
import './index.css'
import Figma from './pages/Figma.tsx'
import Home from './pages/Home.tsx'
import Layout from './partials/Layout.tsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Home />,
      },
      {
        path: '/figma',
        element: <Figma />,
      },
    ],
  },
  { element: <CvPrint />, path: '/cv' },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
)
