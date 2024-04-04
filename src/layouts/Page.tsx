import { PropsWithChildren } from 'react'
import PageBackground from '../components/PageBackground'
import Footer from '../content/Footer'

const Page = ({ children }: PropsWithChildren<PageProps>) => {
  return (
    <div className="flex w-screen justify-center">
      <PageBackground />
      <div className="relative mb-12 flex w-full max-w-screen-md flex-col gap-8 overflow-hidden p-8 pt-12 md:gap-12">
        {children}
        <Footer />
      </div>
    </div>
  )
}

export interface PageProps {
  children: PropsWithChildren
}

export default Page
