import { Github } from 'lucide-react'
import Heading from '../components/Heading'
import Link from '../components/Link'
import TileWrapper from '../components/TileWrapper'
import Paragraph from '../components/Paragraph'

const WebUmeniaTile = () => {
  return (
    <TileWrapper padding>
      <Heading size={2}>Open Source Contribution</Heading>
      <Heading size={3}>Refactoring of the CSS for webumenia.sk</Heading>
      <Paragraph>
        Web umenia features almost 180k artworks from the collections of Slovak galleries. I forked
        their dev branch and started the process of removing old code, reorganizing dependencies and
        eventually creating the dark mode.
      </Paragraph>
      <Link
        href="https://github.com/adamplesnik/webumenia.sk/tree/feature/css-refactoring"
        Icon={Github}
      >
        @adamplesnik/webumenia.sk
      </Link>
    </TileWrapper>
  )
}

export default WebUmeniaTile
