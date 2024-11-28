import WorkPreviewTile from '@/components/WorkPreviewTile'
import preview from './images/andy-home.jpg'

const AndyPreview = () => {
  return (
    <WorkPreviewTile title="Ticket-buying redesign" link="/work#andy">
      <img src={preview} />
    </WorkPreviewTile>
  )
}

export default AndyPreview
