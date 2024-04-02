import { Github } from 'lucide-react'
import Heading from '../components/Heading'
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'
import TileWrapper from '../components/TileWrapper'

const PluginTile = () => {
  return (
    <TileWrapper padding>
      <Heading size={2}>Scroll-driven Animations</Heading>
      <Heading size={3}>Tailwind CSS plugin</Heading>
      <Paragraph>
        A plugin for Tailwind CSS v3.4+ that provides utilities for scroll-driven animations.
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
