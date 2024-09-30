import Link from '@/components/Link'
import Paragraph from '../components/Paragraph'
import Tile from '../components/Tile'

const Badge = () => {
  return (
    <span className="flex h-fit -rotate-6 rounded border border-white bg-zinc-800 p-1 text-xs text-white">
      Beta
    </span>
  )
}

const Links = () => {
  return (
    <>
      <Link href="https://github.com/adamplesnik/kolbord">@adamplesnik/kolbord</Link>
      <Link href="https://github.com/adamplesnik/kolbord-payload">
        @adamplesnik/kolbord-payload
      </Link>
    </>
  )
}

const KolbordTile = () => {
  return (
    <Tile title="Kolbord: the smoothest space booking" badge={<Badge />} links={<Links />}>
      <Paragraph>
        Opinionated, free to use, and open source app for one-click reservation of anything.
      </Paragraph>
      <Paragraph>Built in React, Payload CMS with user management in Clerk.</Paragraph>
    </Tile>
  )
}

export default KolbordTile
