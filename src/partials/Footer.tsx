import Em from '@/components/Em'
import Icon from '@/components/Icon'
import Link from '@/components/Link'
import { Trees } from 'lucide-react'

const Footer = () => {
  return (
    <div className="mt-4 flex w-full items-baseline gap-3 border-t border-t-zinc-300 pt-8 text-sm">
      <Icon Icon={Trees} className="text-zinc-800 dark:text-zinc-300" />
      <div>
        <Em className="block pb-6">Adam Plesník, Bratislava, Slovakia</Em>
        <div className="flex flex-col gap-2">
          <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link>
          <Link href="https://github.com/adamplesnik">github.com/adamplesnik</Link>
          <Link href="https://www.linkedin.com/in/adamplesnik/">linkedin.com/in/adamplesnik</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
