import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <div className="sticky top-0 z-10 mx-auto w-full max-w-screen-md bg-gradient-to-b from-slate-50 p-8 pt-12 dark:from-zinc-900 print:max-w-screen-md print:bg-none">
        <Header />
      </div>
      <div
        className="mx-auto mb-12 flex w-full max-w-screen-md flex-col overflow-hidden p-8 print:max-w-screen-md"
        role="main"
      >
        <Outlet />
      </div>
    </>
  )
}

export default Layout
