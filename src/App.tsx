import CvTile from './tiles/CvTile'
import InfoTile from './tiles/InfoTile'
import PhotoTile from './tiles/PhotoTile'
import PluginTile from './tiles/PluginTile'
import WebUmeniaTile from './tiles/WebUmeniaTile'

function App() {
  return (
    <div className="flex w-screen justify-center">
      <div className="flex max-w-screen-lg flex-col gap-8 p-8 pt-12">
        <InfoTile />
        <CvTile />
        <PluginTile />
        <WebUmeniaTile />
        <PhotoTile />
      </div>
    </div>
  )
}

export default App
