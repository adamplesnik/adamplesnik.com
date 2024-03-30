import { Github } from 'lucide-react'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Link from '../components/Link'

const PluginTile = () => {
  return (
    <div className="rounded-lg bg-gradient-to-tr from-violet-900 to-purple-500 p-4">
      <Heading size={2}>Scroll-driven Animations</Heading>
      <Paragraph size="small">
        Tailwind CSS plugin with scroll-driven animation utilities.
      </Paragraph>
      <Link
        Icon={Github}
        href="https://github.com/adamplesnik/tailwindcss-scroll-driven-animations"
      >
        @adamplesnik/tailwindcss-scroll-driven-animations
      </Link>
    </div>
  )
}

export default PluginTile
