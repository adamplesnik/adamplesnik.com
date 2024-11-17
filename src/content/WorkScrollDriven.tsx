import Link from '@/components/Link'
import WorkTile from '@/components/WorkTile'
import MasonryWrapper from '@/partials/MasonryWrapper'
import scrollImage from './images/scroll-1.png'
import scrollPreview3 from './images/scroll-3.mp4'
import scrollMain from './images/scroll-main.mp4'
import mockWindow from './images/window.png'

const Links = () => {
  return (
    <>
      <Link href="https://scrolldriven.dev">scrolldriven.dev</Link>
      <Link href="https://showcase.scrolldriven.dev">showcase.scrolldriven.dev</Link>
      <Link href="https://github.com/adamplesnik/tailwindcss-scroll-driven-animations">
        @adamplesnik/tailwindcss-scroll-driven-animations
      </Link>
    </>
  )
}

const WorkScrollDriven = () => {
  return (
    <WorkTile
      title="Scroll-driven animations plugin for Tailwind CSS"
      className="bg-teal-50"
      links={<Links />}
      text="Explore the possibilities of CSS scroll-driven animations. Powered by my own Tailwind CSS plugin, no animation JS libs used. Some browsers might have been harmed during the process."
    >
      <div className="relative">
        <img src={mockWindow} alt="" />
        <div className="absolute bottom-[6%] left-[2.7%] right-[2.6%] top-[4.8%] overflow-hidden rounded-b-xl">
          <video loop autoPlay playsInline className="-mt-px">
            <source src={scrollMain} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <MasonryWrapper>
        <div className="relative">
          <img src={mockWindow} alt="" />
          <div className="absolute bottom-[6%] left-[2.7%] right-[2.6%] top-[4.8%] overflow-hidden rounded-b-xl">
            <img src={scrollImage} />
          </div>
        </div>
        <div className="bg-red-500">
          <video loop autoPlay playsInline className="-mt-px">
            <source src={scrollPreview3} type="video/mp4"></source>
          </video>
        </div>
      </MasonryWrapper>
    </WorkTile>
  )
}

export default WorkScrollDriven
