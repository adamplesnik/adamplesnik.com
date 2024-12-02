import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'

const Footer = () => {
  return (
    <Paragraph className="mt-24 flex flex-col justify-end gap-1 bg-zinc-900 px-6 pb-8 pt-12 text-white sm:px-8 md:px-12">
      Adam Plesník, graphic and UI designer
      <br />
      Bratislava, Slovakia
      <Link href="mailto:adam@adamplesnik.com" className="mt-12">
        adam@adamplesnik.com
      </Link>
      <Link href="https://github.com/adamplesnik">github.com/adamplesnik</Link>
    </Paragraph>
  )
}

export default Footer
