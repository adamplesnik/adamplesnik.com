import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import Tile from '@/components/Tile'

const Links = () => {
  return (
    <>
      <Link href="https://kolbord.com">kolbord.com</Link>
      <Link href="https://github.com/adamplesnik/kolbord">@adamplesnik/kolbord</Link>
    </>
  )
}

const WorkKolbord = () => {
  return (
    <Tile title="Kolbord: the smoothest space booking" links={<Links />} sub>
      <Paragraph>
        Opinionated, free to use, and open source app for two-click reservation of anything.
        Prototyped in Figma, coded in React, Payload CMS, with user management in Clerk.
      </Paragraph>
    </Tile>
  )
}

export default WorkKolbord
