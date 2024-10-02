import Em from '@/components/Em'
import Link from '@/components/Link'

const Footer = () => {
  return (
    <div className="mt-4 flex w-full flex-col gap-4 border-t border-t-zinc-300 pt-8 text-sm sm:justify-between">
      <Em>Adam Plesník, Bratislava, Slovakia</Em>
      <div className="flex flex-col gap-2 sm:items-end">
        <Link href="https://github.com/adamplesnik">github.com/adamplesnik</Link>
        <Link href="https://www.linkedin.com/in/adamplesnik/">linkedin.com/in/adamplesnik</Link>
        <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link>
      </div>
    </div>
  )
}

export default Footer
