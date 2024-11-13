import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex w-full flex-col gap-24" role="main">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
