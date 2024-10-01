import Cv from '../content/Cv'
import Header from '../content/Header'
import KolbordTile from '../content/KolbordTile'
import LoveToDo from '../content/LoveToDo'
import PluginTile from '../content/PluginTile'
import Skills from '../content/Skills'
import WebUmeniaTile from '../content/WebUmeniaTile'
import Work from '../content/Work'
import Page from '../layouts/Page'

const Home = () => {
  return (
    <>
      <div className="to-white-0 sticky top-0 z-10 mx-auto w-full max-w-screen-md bg-gradient-to-b from-slate-50 p-8 pt-12">
        <Header />
      </div>
      <Page>
        <Skills />
        <Cv />
        <div className="flex flex-col md:flex-row md:gap-24">
          <LoveToDo />
          <div>
            <Work />
            <KolbordTile />
            <PluginTile />
            <WebUmeniaTile />
          </div>
        </div>
      </Page>
    </>
  )
}

export default Home
