import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WorkAndy from './content/andy/index.tsx'
import CvPrint from './content/CvPrint.tsx'
import WorkKolbord from './content/kolbord/index.tsx'
import WorkMHD from './content/mhd/index.tsx'
import Thankful from './content/thankful/index.tsx'
import WorkPhoto from './content/WorkPhoto.tsx'
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
        path: '/work/thankful',
        element: <Thankful />,
      },
      {
        path: '/work/photo',
        element: <WorkPhoto />,
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
