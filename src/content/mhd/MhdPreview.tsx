import WorkPreviewTile from '@/components/WorkPreviewTile'
import preview from './images/mhd-home.jpg'

const MhdPreview = () => {
  return (
    <WorkPreviewTile title="Bratislava public transport" link="/work/tickets">
      <img src={preview} />
    </WorkPreviewTile>
  )
}

export default MhdPreview
