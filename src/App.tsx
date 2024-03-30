import InfoTile from './tiles/InfoTile'
import PluginTile from './tiles/PluginTile'

function App() {
  return (
    <div className="flex w-screen justify-center">
      <div className="grid max-w-screen-lg gap-8 p-8 md:grid-cols-2">
        <InfoTile />
        <PluginTile />
      </div>
    </div>
  )
}

export default App
