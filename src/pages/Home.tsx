import LoveToDo from '@/content/LoveToDo'
import Cv from '../content/Cv'
import Info from '../content/Info'
import PluginTile from '../content/PluginTile'
import Skills from '../content/Skills'
import WebUmeniaTile from '../content/WebUmeniaTile'
import Work from '../content/Work'
import Page from '../layouts/Page'

const Home = () => {
  return (
    <Page>
      <Info />
      <Skills />
      <LoveToDo />
      <Cv />
      <Work />
      <PluginTile />
      <WebUmeniaTile />
    </Page>
  )
}

export default Home
