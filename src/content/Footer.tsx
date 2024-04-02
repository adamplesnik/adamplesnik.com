import Link from '../components/Link'

const Footer = () => {
  return (
    <div className="flex w-full justify-between border-t border-t-zinc-700 pt-4 text-xs">
      <span className="font-medium">Adam Plesník, Bratislava, Slovakia</span>
      <Link href="https://github.com/adamplesnik">github.com/adamplesnik</Link>
    </div>
  )
}

export default Footer
