import Heading from '@/components/Heading'
import Footer from '@/content/Footer'
import clsx from 'clsx'
import { NavLink, Outlet, ScrollRestoration, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  const isWork = location.pathname.split('/')[1] === 'work'

  return (
    <div className="flex flex-col pt-8">
      <ScrollRestoration />
      <div className="sticky top-0 z-50 mb-12 flex w-full items-baseline gap-8 bg-gradient-to-b from-white/80 px-6 pt-5 sm:px-8 md:px-12 dark:from-zinc-800/80">
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
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
