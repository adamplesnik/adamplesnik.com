import Heading from '@/components/Heading'
import Footer from '@/content/Footer'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { NavLink, Outlet, ScrollRestoration, useLocation } from 'react-router-dom'

const Layout = ({ outlet }: { outlet?: ReactNode | null }) => {
  const location = useLocation()
  const isWork = location.pathname.split('/')[1] === 'work'

  return (
    <div className="flex flex-col pt-8">
      <ScrollRestoration />
      <div className="sticky top-0 z-50 mb-12 bg-gradient-to-b from-white/80 pt-5 dark:from-zinc-800/80">
        <div className="mx-auto flex w-full max-w-screen-2xl items-baseline gap-8 px-6 sm:px-8 md:px-12">
          <a href="/" className="cursor-pointer">
            {isWork ? (
              <span className="text-2xl font-medium hover:underline sm:text-3xl">&larr;</span>
            ) : (
              <Heading size={1} className={clsx('transition-opacity', isWork && 'opacity-0')}>
                Adam Plesník
              </Heading>
            )}
          </a>
          <div className="flex flex-1 justify-end gap-4">
            <NavLink
              className={({ isActive }) =>
                clsx(
                  'cursor-pointer text-2xl font-medium hover:underline sm:text-3xl',
                  isActive && 'underline'
                )
              }
              to="/"
            >
              Work
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  'cursor-pointer text-2xl font-medium hover:underline sm:text-3xl',
                  isActive && 'underline'
                )
              }
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-screen-2xl">{outlet ? outlet : <Outlet />}</div>
      <Footer />
    </div>
  )
}

export default Layout
