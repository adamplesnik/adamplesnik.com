import WorkPreviewTile from '@/components/WorkPreviewTile'
import preview from './images/kolbord-home.png'

const KolbordPreview = () => {
  return (
    <WorkPreviewTile title="Kolbord" link="/work/kolbord">
      <img src={preview} />
    </WorkPreviewTile>
  )
}

export default KolbordPreview
