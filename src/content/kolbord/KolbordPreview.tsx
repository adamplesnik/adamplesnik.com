import CustomImg from '@/components/CustomImg'
import WorkPreviewTile from '@/components/WorkPreviewTile'
import preview from './images/kolbord-home.jpg'

const KolbordPreview = () => {
  return (
    <WorkPreviewTile title="Kolbord" link="/work/kolbord">
      <CustomImg src={preview} />
    </WorkPreviewTile>
  )
}

export default KolbordPreview
