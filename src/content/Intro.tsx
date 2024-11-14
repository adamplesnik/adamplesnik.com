import Em from '@/components/Em'
import Heading from '@/components/Heading'
import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import { ChevronsDown } from 'lucide-react'

const Intro = () => {
  return (
    <div className="flex min-h-screen flex-col gap-16 p-12">
      <Heading size={1}>Adam Plesník</Heading>
      <div className="font-serif text-3xl italic">Design engineer.</div>
      <Paragraph className="max-w-xl flex-1 text-3xl">
        I create, polish, and improve user interfaces by clicking in <Em>Figma</Em> and coding in{' '}
        <Em>React</Em>.
      </Paragraph>
      <div className="flex items-end">
        <div className="flex-1">
          <Link>adam@adamplesnik.com</Link>
          <span className="block pt-2">Bratislava, Slovakia</span>
        </div>
        <ChevronsDown className="animate-bounce" strokeWidth={1.5} />
      </div>
    </div>
  )
}

export default Intro
