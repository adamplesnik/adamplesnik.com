import Link from '@/components/Link'
import WorkTile from '@/components/WorkTile'
import MasonryWrapper from '@/partials/MasonryWrapper'
import kolbordFashion from './images/kolbord-fashion.jpg'
import kolbordDemo from './images/kolbord-ipad.mp4'
import kolbordMacbook from './images/kolbord-macbook.png'
import kolbordSidebar from './images/kolbord-sidebar.png'
import kolbordWatch from './images/kolbord-watch.png'

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
      text="Opinionated, free to use, and open source app for reservation of anything. This is a one-man-project: I take care of everything from brand to code.
        Drawn and prototyped in Figma, coded in React, Payload CMS, with user management in Clerk. WIP as of November 2024."
      top={
        <div className="bg-[#E2BEC0] p-4 sm:p-8">
          <div className="relative mx-auto max-w-screen-lg overflow-hidden before:absolute before:bottom-0 before:right-0 before:top-0 before:z-10 before:w-2 before:bg-[#E2BEC0]">
            <video loop autoPlay playsInline muted className="-m-1">
              <source src={kolbordDemo} type="video/mp4"></source>
            </video>
          </div>
        </div>
      }
    >
      <MasonryWrapper>
        <img src={kolbordSidebar} className="mb-4" alt="" />
        <img src={kolbordWatch} className="mb-4" alt="" />
        <img src={kolbordFashion} className="mb-4" alt="" />
        <img src={kolbordMacbook} className="mb-4" alt="" />
      </MasonryWrapper>
    </WorkTile>
  )
}

export default WorkKolbord
