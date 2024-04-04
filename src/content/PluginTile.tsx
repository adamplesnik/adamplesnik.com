import { Github, NotepadText } from 'lucide-react'
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'
import Tile from '../components/Tile'

const PluginTile = () => {
  return (
    <Tile title="Scroll-driven Animations" subTitle="Tailwind CSS plugin">
      <Paragraph>
        A plugin for Tailwind CSS v3.4+ that provides utilities for scroll-driven animations.
      </Paragraph>
      <div className="flex flex-col gap-2 pt-2">
        <Link Icon={NotepadText} href="https://tailwind.adamplesnik.com">
          tailwind.adamplesnik.com
        </Link>
        <Link
          Icon={Github}
          href="https://github.com/adamplesnik/tailwindcss-scroll-driven-animations"
        >
          @adamplesnik/tailwindcss-scroll-driven-animations
        </Link>
      </div>
    </Tile>
  )
}

export default PluginTile
