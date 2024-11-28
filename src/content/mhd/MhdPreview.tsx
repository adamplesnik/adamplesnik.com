import WorkPreviewTile from '@/components/WorkPreviewTile'
import preview from './images/mhd-home.jpg'

const MhdPreview = () => {
  return (
    <WorkPreviewTile title="Ticket-buying redesign" link="/work#mhd">
      <img src={preview} />
    </WorkPreviewTile>
  )
}

export default MhdPreview
