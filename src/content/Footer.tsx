import Link from '@/components/Link'

const Footer = () => {
  return (
    <div className="mt-24 flex flex-col justify-end gap-1 bg-zinc-900 px-6 pb-8 pt-12 text-white sm:px-8 md:px-12">
      Adam Plesník
      <span className="mt-4">UI designer with a strong coding background</span>
      <span className="mt-12">+421 904 983 582</span>
      <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link>
      <Link href="https://github.com/adamplesnik">github.com/adamplesnik</Link>
      <span className="mt-12">Bratislava, Slovakia</span>
    </div>
  )
}

export default Footer
