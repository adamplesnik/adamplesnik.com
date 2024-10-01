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
      <div className="flex flex-col md:flex-row md:gap-16">
        <LoveToDo />
        <div>
          <Work />
          <KolbordTile />
          <PluginTile />
          <WebUmeniaTile />
        </div>
      </div>
      <Cv />
    </Page>
  )
}

export default Home
