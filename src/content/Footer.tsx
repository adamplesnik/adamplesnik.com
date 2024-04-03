import Link from '../components/Link'

const Footer = () => {
  return (
    <div className="flex w-full flex-col gap-1 border-t border-t-zinc-700 pt-4 text-xs sm:flex-row sm:justify-between">
      <span className="font-medium">Adam Plesník, Bratislava, Slovakia</span>
      <Link href="https://github.com/adamplesnik">github.com/adamplesnik</Link>
    </div>
  )
}

export default Footer
