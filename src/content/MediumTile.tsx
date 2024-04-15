import { SunMedium } from 'lucide-react'
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'
import Tile from '../components/Tile'

const MediumTile = () => {
  return (
    <Tile title="Blog on Medium" subTitle="Series of articles about atomic CSS and microcomponents">
      <Paragraph>
        I write about front-end development from the perspective of the atomic enthusiast. I am
        going to publish several posts about atomization, testing, component composition, and
        Tailwind CSS.
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
