import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CvPrint from './content/CvPrint.tsx'
import './index.css'
import About from './pages/About.tsx'
import Home from './pages/Home.tsx'
import Work from './pages/Work.tsx'
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
        path: '/work',
        element: <Work />,
        errorElement: <Work />,
      },
      {
        path: '/about',
        element: <About />,
        errorElement: <About />,
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
