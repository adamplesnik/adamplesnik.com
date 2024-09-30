import Link from '@/components/Link'
import Paragraph from '../components/Paragraph'
import Tile from '../components/Tile'

const Links = () => {
  return (
    <Link href="https://github.com/adamplesnik/webumenia.sk/tree/feature/css-refactoring">
      @adamplesnik/webumenia.sk
    </Link>
  )
}

const WebUmeniaTile = () => {
  return (
    <Tile title="CSS refactoring for webumenia.sk" links={<Links />}>
      <Paragraph>
        Web umenia features almost 180k artworks from the collections of Slovak galleries. I forked
        their dev branch and started the process of removing old code, reorganizing dependencies and
        eventually creating the dark mode.
      </Paragraph>
    </Tile>
  )
}

export default WebUmeniaTile
