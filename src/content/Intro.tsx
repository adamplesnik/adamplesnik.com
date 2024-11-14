import Em from '@/components/Em'
import Heading from '@/components/Heading'
import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import { ChevronsDown } from 'lucide-react'

const Intro = () => {
  return (
    <div className="flex min-h-screen flex-col gap-16 p-12">
      <Heading size={1}>Adam Plesník</Heading>
      <Heading size={2}>Design engineer.</Heading>
      <Paragraph className="max-w-xl flex-1 text-2xl">
        I create, polish, and improve user interfaces by clicking in <Em>Figma</Em> and coding in{' '}
        <Em>React</Em>.
      </Paragraph>
      <div className="flex flex-col items-end gap-4 sm:flex-row">
        <div className="w-full flex-1">
          <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link>
          <span className="block pt-2">Bratislava, Slovakia</span>
        </div>
        <ChevronsDown className="animate-bounce" strokeWidth={1.5} />
      </div>
    </div>
  )
}

export default Intro
