import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'

const Links = () => {
  return (
    <>
      <Link href="https://showcase.scrolldriven.dev">showcase.scrolldriven.dev</Link>
      <Link href="https://github.com/adamplesnik/scroll-driven-showcase">
        @adamplesnik/scroll-driven-showcase
      </Link>
    </>
  )
}

const WorkScrollDrivenShowcase = () => {
  return (
    <WorkTile title="Scroll-driven showcase" links={<Links />}>
      <Paragraph>
        Explore the possibilities of CSS scroll-driven animations. Powered by Tailwind CSS, no
        animation JS libs used. Some browsers might have been harmed during the process.
      </Paragraph>
    </WorkTile>
  )
}

export default WorkScrollDrivenShowcase
