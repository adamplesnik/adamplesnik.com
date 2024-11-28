import WorkPreviewTile from '@/components/WorkPreviewTile'
import preview from './images/andy-home.jpg'

const AndyPreview = () => {
  return (
    <WorkPreviewTile title="Andy Warhol museum logo" link="/work#andy">
      <img src={preview} />
    </WorkPreviewTile>
  )
}

export default AndyPreview
