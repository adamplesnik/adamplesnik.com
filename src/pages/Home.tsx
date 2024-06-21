import LoveToDo from '@/content/LoveToDo'
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
      <SkillsTile />
      <LoveToDo />
      <CvTile />
      <WorkTile />
      <PluginTile />
      <WebUmeniaTile />
    </Page>
  )
}

export default Home
