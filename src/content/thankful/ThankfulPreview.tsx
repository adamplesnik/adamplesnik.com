import CustomImg from '@/components/CustomImg'
import WorkPreviewTile from '@/components/WorkPreviewTile'
import preview from './images/thank-home.jpg'

const ThankfulPreview = () => {
  return (
    <WorkPreviewTile title="Thankful" link="/work/thankful">
      <CustomImg src={preview} />
    </WorkPreviewTile>
  )
}

export default ThankfulPreview
