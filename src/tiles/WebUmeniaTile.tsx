import { Github } from 'lucide-react'
import Heading from '../components/Heading'
import Link from '../components/Link'
import TileWrapper from '../components/TileWrapper'
import Paragraph from '../components/Paragraph'

const WebUmeniaTile = () => {
  return (
    <TileWrapper padding>
      <Heading size={2}>Open Source Contribution</Heading>
      <Paragraph size="small">Refactoring of the CSS for webumenia.sk</Paragraph>
      <Paragraph>
        This is a huge database of almost 180k artworks. I once decided to fork their dev branch and
        started the process of removing old code, reorganizing dependencies and integrating more
        Tailwind CSS.
      </Paragraph>
      <Link
        href="https://github.com/adamplesnik/webumenia.sk/tree/feature/css-refactoring"
        Icon={Github}
      >
        adamplesnik/webumenia.sk
      </Link>
    </TileWrapper>
  )
}

export default WebUmeniaTile
