import Link from '@/components/Link'
import Paragraph from '../components/Paragraph'
import Tile from '../components/Tile'

const Badge = () => {
  return (
    <span className="flex h-fit -rotate-6 rounded bg-zinc-800 p-1 text-xs text-white dark:border dark:border-zinc-500 dark:bg-gray-700">
      Beta
    </span>
  )
}

const Links = () => {
  return (
    <>
      <Link href="https://kolbord.com">kolbord.com</Link>
      <Link href="https://github.com/adamplesnik/kolbord">@adamplesnik/kolbord</Link>
      <Link href="https://github.com/adamplesnik/kolbord-payload">
        @adamplesnik/kolbord-payload
      </Link>
    </>
  )
}

const KolbordTile = () => {
  return (
    <Tile title="Kolbord: the smoothest space booking" badge={<Badge />} links={<Links />} sub>
      <Paragraph>
        Opinionated, free to use, and open source app for two-click reservation of anything. Built
        in React, Payload CMS, with user management in Clerk.
      </Paragraph>
    </Tile>
  )
}

export default KolbordTile
