import Heading from '@/components/Heading'
import Link from '@/components/Link'

const Footer = () => {
  return (
    <div className="flex h-screen flex-col justify-end gap-1 p-12">
      <Heading size={2}>Adam Plesník</Heading>
      <span className="mb-12">Design engineer</span>
      Bratislava, Slovakia
      <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link>
      <Link href="https://github.com/adamplesnik">github.com/adamplesnik</Link>
      <Link href="https://www.linkedin.com/in/adamplesnik/">linkedin.com/in/adamplesnik</Link>
    </div>
  )
}

export default Footer
