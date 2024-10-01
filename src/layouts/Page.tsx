import { PropsWithChildren } from 'react'
import Footer from '../content/Footer'

const Page = ({ children }: PropsWithChildren<PageProps>) => {
  return (
    <div className="mx-auto mb-12 flex w-full max-w-screen-md flex-col overflow-hidden p-8 print:max-w-screen-sm">
      {children}
      <Footer />
    </div>
  )
}

export interface PageProps {
  children: PropsWithChildren
}

export default Page
