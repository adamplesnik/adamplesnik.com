import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WorkAndy from './content/andy/index.tsx'
import CvPrint from './content/CvPrint.tsx'
import WorkKolbord from './content/kolbord/index.tsx'
import WorkMartin from './content/martin/index.tsx'
import WorkMHD from './content/mhd/index.tsx'
import WorkThankful from './content/thankful/index.tsx'
import WorkLibrary from './content/vkjb/index.tsx'
import './index.css'
import About from './pages/About.tsx'
import Home from './pages/Home.tsx'
import Layout from './partials/Layout.tsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Layout outlet={<Home />} />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/work/tickets',
        element: <WorkMHD />,
      },
      {
        path: '/work/kolbord',
        element: <WorkKolbord />,
      },
      {
        path: '/work/andy',
        element: <WorkAndy />,
      },
      {
        path: '/work/library',
        element: <WorkLibrary />,
      },
      {
        path: '/work/martin',
        element: <WorkMartin />,
      },
      {
        path: '/work/thankful',
        element: <WorkThankful />,
      },
      {
        path: '/about',
        element: <About />,
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
