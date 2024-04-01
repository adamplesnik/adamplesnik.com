import CvTile from './tiles/CvTile'
import InfoTile from './tiles/InfoTile'
import PluginTile from './tiles/PluginTile'
import WebUmeniaTile from './tiles/WebUmeniaTile'

function App() {
  return (
    <>
      {/* <PageBackground /> */}
      <div className="flex w-screen justify-center">
        <div className="mb-12 flex max-w-screen-md flex-col gap-8 overflow-hidden p-8 pt-12 md:gap-12">
          <InfoTile />
          <CvTile />
          <PluginTile />
          <WebUmeniaTile />
        </div>
      </div>
    </>
  )
}

export default App
