import { Github } from 'lucide-react'
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'
import Tile from '../components/Tile'

const KolbordTile = () => {
  return (
    <Tile
      title="Kolbord: the smoothest space booking"
      badge={
        <span className="flex h-fit -rotate-6 rounded border border-white bg-zinc-800 p-1 text-xs text-white">
          Beta
        </span>
      }
    >
      <Paragraph>
        Opinionated, free to use, and open source app for one-click reservation of anything.
      </Paragraph>
      <Paragraph>Built in React, Payload CMS with user management in Clerk.</Paragraph>
      <Link href="https://github.com/adamplesnik/kolbord" Icon={Github}>
        @adamplesnik/kolbord
      </Link>
      <Link href="https://github.com/adamplesnik/kolbord-payload" Icon={Github}>
        @adamplesnik/kolbord-payload
      </Link>
    </Tile>
  )
}

export default KolbordTile
