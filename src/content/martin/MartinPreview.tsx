import CustomImg from '@/components/CustomImg'
import WorkPreviewTile from '@/components/WorkPreviewTile'
import preview from './images/martin-home.jpg'

const MartinPreview = () => {
  return (
    <WorkPreviewTile title="Hospital in Martin" link="/work/martin">
      <CustomImg src={preview} />
    </WorkPreviewTile>
  )
}

export default MartinPreview
