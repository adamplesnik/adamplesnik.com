import Link from '@/components/Link'

const Footer = () => {
  return (
    <div className="flex h-svh flex-col justify-end gap-1 px-6 py-8 sm:px-8 md:px-12 md:py-12">
      <span className="mb-12">Designer first, coder second</span>
      Bratislava, Slovakia
      <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link>
      <Link href="https://github.com/adamplesnik">github.com/adamplesnik</Link>
   </div>
  )
}

export default Footer
