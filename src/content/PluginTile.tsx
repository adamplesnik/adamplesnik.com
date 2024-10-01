import Link from '../components/Link'
import Paragraph from '../components/Paragraph'
import Tile from '../components/Tile'

const Links = () => {
  return (
    <>
      <Link href="https://scrolldriven.dev">scrolldriven.dev</Link>
      <Link href="https://github.com/adamplesnik/tailwindcss-scroll-driven-animations">
        @adamplesnik/tailwindcss-scroll-driven-animations
      </Link>
    </>
  )
}

const PluginTile = () => {
  return (
    <Tile title="Scroll-driven animations plugin for Tailwind CSS" links={<Links />} sub>
      <Paragraph>
        A plugin for Tailwind CSS v3.4+ that provides utilities for scroll-driven animations.
      </Paragraph>
    </Tile>
  )
}

export default PluginTile
