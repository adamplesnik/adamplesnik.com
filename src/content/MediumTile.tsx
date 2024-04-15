import { SunMedium } from 'lucide-react'
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'
import Tile from '../components/Tile'

const MediumTile = () => {
  return (
    <Tile title="Blog on Medium" subTitle="Series of articles about atomic CSS and microcomponents">
      <Paragraph>
        I write about breaking down the front-end development into its atomic parts. I plan to
        publish posts where I'll dive into atomization, testing, component composition, and making
        the most of Tailwind CSS.
      </Paragraph>
      <div className="flex flex-col gap-2 pt-2">
        <Link Icon={SunMedium} href="https://medium.com/@adamplesnik">
          medium.com/@adamplesnik
        </Link>
      </div>
    </Tile>
  )
}

export default MediumTile
