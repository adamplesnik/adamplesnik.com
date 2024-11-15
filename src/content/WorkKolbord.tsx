import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'

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
    <WorkTile title="Kolbord: the smoothest space booking" links={<Links />}>
      <Paragraph>
        Opinionated, free to use, and open source app for two-click reservation of anything.
        Prototyped in Figma, coded in React, Payload CMS, with user management in Clerk.
      </Paragraph>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="aspect-[4_/_3] bg-red-100 md:flex-[2]">h</div>
        <div className="flex flex-col gap-8 md:flex-1">
          <div className="aspect-square bg-red-200"></div>
          <div className="aspect-square bg-red-200"></div>
        </div>
      </div>
    </WorkTile>
  )
}

export default WorkKolbord
