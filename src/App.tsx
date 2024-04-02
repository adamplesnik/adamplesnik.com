import PageBackground from './components/PageBackground'
import CvTile from './content/CvTile'
import Footer from './content/Footer'
import InfoTile from './content/InfoTile'
import PluginTile from './content/PluginTile'
import WebUmeniaTile from './content/WebUmeniaTile'
import WorkTile from './content/WorkTile'

function App() {
  return (
    <>
      <div className="flex w-screen justify-center">
        <PageBackground />
        <div className="relative mb-12 flex max-w-screen-md flex-col gap-8 overflow-hidden p-8 pt-12 md:gap-12">
          <InfoTile />
          <CvTile />
          <WorkTile />
          <PluginTile />
          <WebUmeniaTile />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
