import CustomImg from '@/components/CustomImg'
import GridWrapper from '@/components/GridWrapper'
import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'
import kolbordAssets from './images/kolbord-assets.png'
import kolbordFashion from './images/kolbord-fashion.jpg'
import kolbordMac from './images/kolbord-home.jpg'
import kolbordDemo from './images/kolbord-ipad.mp4'
import kolbordSidebar from './images/kolbord-sidebar.png'
import kolbordWatch from './images/kolbord-watch.png'

const More = () => {
  return (
    <Paragraph>
      This is a one-man-project: I take care of everything from brand to code. Drawn and prototyped
      in Figma, coded in React, Payload CMS, with user management in Clerk. WIP as of November 2024.
    </Paragraph>
  )
}
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
      id="kolbord"
      title="Kolbord: the smoothest space booking"
      links={<Links />}
      text="A prototype of an opinionated, free to use, and open source app for reservation of anything. It is meant to provide an alternative to corporate-oriented, heavy, and expensive booking apps."
      more={<More />}
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
      <CustomImg src={kolbordMac} alt="Kolbord sidebar" />
      <GridWrapper>
        <CustomImg src={kolbordSidebar} alt="Kolbord sidebar" />
        <CustomImg src={kolbordWatch} alt="Kolbord Apple Watch" />
        <CustomImg src={kolbordFashion} alt="Kolbord t-shirt" />
        <CustomImg src={kolbordAssets} alt="Kolbord assets" />
      </GridWrapper>
    </WorkTile>
  )
}

export default WorkKolbord
