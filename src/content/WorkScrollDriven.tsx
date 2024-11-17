import Link from '@/components/Link'
import PreviewWrapper from '@/components/PreviewWrapper'
import WorkTile from '@/components/WorkTile'
import MasonryWrapper from '@/partials/MasonryWrapper'
import scrollPreview from './images/scroll-1.mp4'
import scrollImage from './images/scroll-1.png'
import scrollPreview2 from './images/scroll-2.mp4'
import scrollPreview3 from './images/scroll-3.mp4'

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
      links={<Links />}
      text="Explore the possibilities of CSS scroll-driven animations. Powered by my own Tailwind CSS plugin, no animation JS libs used. Some browsers might have been harmed during the process."
    >
      <MasonryWrapper>
        <PreviewWrapper>
          <img src={scrollImage} />
        </PreviewWrapper>
        <PreviewWrapper>
          <video loop autoPlay playsInline className="-mt-px">
            <source src={scrollPreview2} type="video/mp4"></source>
          </video>
        </PreviewWrapper>
        <PreviewWrapper>
          <video loop autoPlay playsInline className="-mt-px">
            <source src={scrollPreview} type="video/mp4"></source>
          </video>
        </PreviewWrapper>
        <PreviewWrapper>
          <video loop autoPlay playsInline className="-mt-px">
            <source src={scrollPreview3} type="video/mp4"></source>
          </video>
        </PreviewWrapper>
      </MasonryWrapper>
    </WorkTile>
  )
}

export default WorkScrollDriven
