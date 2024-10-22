import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import Tile from '@/components/Tile'

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
    <Tile title="Scroll-driven showcase" links={<Links />} sub>
      <Paragraph>
        Explore the possibilities of CSS scroll-driven animations. Powered by Tailwind CSS, no
        animation JS libs used. Some browsers might have been harmed during the process.
      </Paragraph>
    </Tile>
  )
}

export default WorkScrollDrivenShowcase
