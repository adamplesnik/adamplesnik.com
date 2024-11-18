import Link from '@/components/Link'
import WorkTile from '@/components/WorkTile'
import MasonryWrapper from '@/partials/MasonryWrapper'
import kolbordDemo from './images/kolbord-demo.mp4'
import kolbordFashion from './images/kolbord-fashion.jpg'
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
        <div className="relative mx-auto max-w-screen-lg overflow-hidden before:absolute before:bottom-0 before:right-0 before:top-0 before:z-10 before:w-2 before:bg-fuchsia-100">
          <video loop autoPlay playsInline muted className="-m-1">
            <source src={kolbordDemo} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <MasonryWrapper>
        <img src={kolbordFashion} className="mb-4" alt="" />
        <img src={kolbordMacbook} alt="" />
      </MasonryWrapper>
    </WorkTile>
  )
}

export default WorkKolbord
