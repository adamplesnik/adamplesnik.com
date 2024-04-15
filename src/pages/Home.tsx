import MediumTile from '@/content/MediumTile'
import CvTile from '../content/CvTile'
import InfoTile from '../content/InfoTile'
import PluginTile from '../content/PluginTile'
import SkillsTile from '../content/SkillsTile'
import WebUmeniaTile from '../content/WebUmeniaTile'
import WorkTile from '../content/WorkTile'
import Page from '../layouts/Page'

const Home = () => {
  return (
    <Page>
      <InfoTile />
      <CvTile />
      <SkillsTile />
      <WorkTile />
      <PluginTile />
      <MediumTile />
      <WebUmeniaTile />
    </Page>
  )
}

export default Home
