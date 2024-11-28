import WorkPreviewTile from '@/components/WorkPreviewTile'
import preview from './images/mhd-home.png'

const MhdPreview = () => {
  return (
    <WorkPreviewTile title="Ticket-buying redesign" link="/work#mhd">
      <img src={preview} />
    </WorkPreviewTile>
  )
}

export default MhdPreview
