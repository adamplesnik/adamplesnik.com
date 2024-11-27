import Heading from '@/components/Heading'
import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import { ChevronsDown } from 'lucide-react'

const Intro = () => {
  return (
    <div className="flex min-h-[calc(100svh_-_19rem)] w-full flex-col gap-8 px-6 pb-8 sm:gap-12 sm:px-8 md:gap-16 md:px-12 md:pb-12">
      <Heading size={2}>UX–UI designer</Heading>
      <Paragraph className="flex-1 text-2xl">
        I create, polish, and improve user experiences and interfaces.
      </Paragraph>
      <div className="flex flex-col items-end gap-4 sm:flex-row">
        <div className="w-full flex-1">
          <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link>
          <span className="block pt-2">Bratislava, Slovakia</span>
        </div>
        <a href="#skills" className="cursor-pointer">
          <ChevronsDown className="animate-bounce" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  )
}

export default Intro
