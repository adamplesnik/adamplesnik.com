import Link from '../components/Link'

const Footer = () => {
  return (
    <div className="flex w-full flex-col gap-4 border-t border-t-zinc-700 pt-4 text-xs sm:flex-row sm:justify-between">
      <span className="font-medium">Adam Plesník, Bratislava, Slovakia</span>
      <div className="flex flex-col gap-2 sm:items-end">
        <Link href="https://github.com/adamplesnik">github.com/adamplesnik</Link>
        <Link href="https://www.linkedin.com/in/adamplesnik/">linkedin.com/in/adamplesnik</Link>
        <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link>
      </div>
    </div>
  )
}

export default Footer
