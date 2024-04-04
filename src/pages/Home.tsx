import CvTile from '../content/CvTile'
import InfoTile from '../content/InfoTile'
import PluginTile from '../content/PluginTile'
import WebUmeniaTile from '../content/WebUmeniaTile'
import WorkTile from '../content/WorkTile'
import Page from '../layouts/Page'

const Home = () => {
  return (
    <Page>
      <InfoTile />
      <CvTile />
      <WorkTile />
      <PluginTile />
      <WebUmeniaTile />
    </Page>
  )
}

export default Home
