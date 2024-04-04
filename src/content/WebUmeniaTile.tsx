import { Github } from 'lucide-react'
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'
import Tile from '../components/Tile'

const WebUmeniaTile = () => {
  return (
    <Tile title="Open Source Contribution" subTitle="Refactoring of the CSS for webumenia.sk">
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
    </Tile>
  )
}

export default WebUmeniaTile
