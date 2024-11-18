import Link from '@/components/Link'
import WorkTile from '@/components/WorkTile'
import MasonryWrapper from '@/partials/MasonryWrapper'
import kolbordFashion from './images/kolbord-fashion.jpg'
import kolbordIpad from './images/kolbord-ipad.png'
import kolbordMacbook from './images/kolbord-macbook.jpg'

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
    <WorkTile
      title="Kolbord: the smoothest space booking"
      links={<Links />}
      text="Opinionated, free to use, and open source app reservation of anything. This is a one-man-project: I take care of everything from brand to code.
        Drawn and prototyped in Figma, coded in React, Payload CMS, with user management in Clerk. WIP as of November 2024."
    >
      <div className="bg-fuchsia-100 p-4 sm:p-8">
        <img src={kolbordIpad} alt="" />
      </div>
      <MasonryWrapper>
        <img src={kolbordFashion} alt="" />
        <img src={kolbordMacbook} alt="" />
      </MasonryWrapper>
    </WorkTile>
  )
}

export default WorkKolbord
