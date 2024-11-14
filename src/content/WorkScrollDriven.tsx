import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'

const Links = () => {
  return (
    <>
      <Link href="https://scrolldriven.dev">scrolldriven.dev</Link>
      <Link href="https://github.com/adamplesnik/tailwindcss-scroll-driven-animations">
        @adamplesnik/tailwindcss-scroll-driven-animations
      </Link>
    </>
  )
}

const WorkScrollDriven = () => {
  return (
    <WorkTile title="Scroll-driven animations plugin for Tailwind CSS" links={<Links />}>
      <Paragraph>
        A plugin for Tailwind CSS v3.4+ that provides utilities for scroll-driven animations.
      </Paragraph>
    </WorkTile>
  )
}

export default WorkScrollDriven
