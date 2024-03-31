import { Github } from 'lucide-react'
import Heading from '../components/Heading'
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'
import TileWrapper from '../components/TileWrapper'

const PluginTile = () => {
  return (
    <TileWrapper className="bg-gradient-to-tr from-violet-900/50 to-purple-500/60" padding>
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
    </TileWrapper>
  )
}

export default PluginTile
