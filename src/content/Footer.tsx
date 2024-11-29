import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'

const Footer = () => {
  return (
    <Paragraph className="mt-24 flex flex-col justify-end gap-1 bg-zinc-900 px-6 py-8 text-white sm:px-8 md:px-12 md:py-12">
      <span className="font-medium">Adam Plesník, UX–UI designer</span>
      Bratislava, Slovakia
      <Link href="mailto:adam@adamplesnik.com" className="mt-12">
        adam@adamplesnik.com
      </Link>
      <Link href="https://github.com/adamplesnik">github.com/adamplesnik</Link>
    </Paragraph>
  )
}

export default Footer
