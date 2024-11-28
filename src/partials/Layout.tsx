import Heading from '@/components/Heading'
import Footer from '@/content/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex flex-col gap-48 pt-12">
      <div className="sticky top-0 z-50 flex h-16 w-full items-end gap-8 bg-gradient-to-b from-white/80 px-6 sm:px-8 md:px-12 dark:from-zinc-800/80">
        <Heading size={1}>Adam Plesník</Heading>
        <div className="hidden flex-1 justify-end gap-4 sm:flex">
          <a className="cursor-pointer hover:underline" href="#skills">
            Skills
          </a>
          <a className="cursor-pointer hover:underline" href="#work">
            Work
          </a>
          <a className="cursor-pointer hover:underline" href="#cv">
            CV
          </a>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
