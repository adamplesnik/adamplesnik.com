import Link from '@/components/Link'
import WorkTile from '@/components/WorkTile'

const Links = () => {
  return (
    <Link href="https://github.com/adamplesnik/webumenia.sk/tree/feature/css-refactoring">
      @adamplesnik/webumenia.sk
    </Link>
  )
}

const WorkWebUmenia = () => {
  return (
    <WorkTile
      title="CSS refactoring for webumenia.sk"
      links={<Links />}
      text="Web umenia features almost 180k artworks from the collections of Slovak galleries. I forked
        their dev branch and started the process of removing old code, reorganizing dependencies and
        eventually creating the dark mode. Still work in progress."
    ></WorkTile>
  )
}

export default WorkWebUmenia
