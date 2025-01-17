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
      <div className="sticky top-0 z-50 mb-12 flex w-full items-baseline gap-8 bg-gradient-to-b from-white/80 px-6 pt-5 sm:px-8 md:px-12 dark:from-zinc-800/80">
        <a href="/" className="cursor-pointer">
          {isWork ? (
            <span className="block w-24 text-2xl font-medium transition-transform ease-in-out hover:-translate-x-2 sm:text-3xl">
              &larr;
            </span>
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
                'relative cursor-pointer text-2xl font-medium sm:text-3xl',
                'after:absolute after:bottom-1 after:left-0 after:h-[3px] after:w-full after:max-w-0 after:bg-black after:transition-[max-width] after:ease-in-out hover:after:max-w-full',
                isActive && 'after:max-w-full'
              )
            }
            to="/"
          >
            Work
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(
                'relative cursor-pointer text-2xl font-medium sm:text-3xl',
                'after:absolute after:bottom-1 after:left-0 after:h-[3px] after:w-full after:max-w-0 after:bg-black after:transition-[max-width] after:ease-in-out hover:after:max-w-full',
                isActive && 'after:max-w-full'
              )
            }
            to="/about"
          >
            About
          </NavLink>
        </div>
      </div>
      {outlet ? outlet : <Outlet />}
      <Footer />
    </div>
  )
}

export default Layout
