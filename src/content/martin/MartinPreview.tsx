import WorkPreviewTile from '@/components/WorkPreviewTile'
import preview from './images/martin-home.jpg'

const MartinPreview = () => {
  return (
    <WorkPreviewTile title="Hospital in Martin" link="/work/martin">
      <img src={preview} />
    </WorkPreviewTile>
  )
}

export default MartinPreview
