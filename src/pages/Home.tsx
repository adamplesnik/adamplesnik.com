import KolbordTile from '@/content/KolbordTile'
import LoveToDo from '@/content/LoveToDo'
import Cv from '../content/Cv'
import Info from '../content/Info'
import PluginTile from '../content/PluginTile'
import Skills from '../content/Skills'
import WebUmeniaTile from '../content/WebUmeniaTile'
import Page from '../layouts/Page'

const Home = () => {
  return (
    <Page>
      <Info />
      <Skills />
      <LoveToDo />
      <KolbordTile />
      <PluginTile />
      <WebUmeniaTile />
      <Cv />
    </Page>
  )
}

export default Home
