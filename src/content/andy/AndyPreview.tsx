import CustomImg from '@/components/CustomImg'
import WorkPreviewTile from '@/components/WorkPreviewTile'
import preview from './images/andy-home.jpg'

const AndyPreview = () => {
  return (
    <WorkPreviewTile title="Andy Warhol museum" link="/work/andy">
      <CustomImg src={preview} alt="Andy Warhol museum identity preview" />
    </WorkPreviewTile>
  )
}

export default AndyPreview
