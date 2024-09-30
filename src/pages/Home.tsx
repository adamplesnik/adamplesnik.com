import Cv from '../content/Cv'
import Info from '../content/Info'
import KolbordTile from '../content/KolbordTile'
import LoveToDo from '../content/LoveToDo'
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
      <Work />
      <KolbordTile />
      <PluginTile />
      <WebUmeniaTile />
      <Cv />
    </Page>
  )
}

export default Home
