import WorkPreviewTile from '@/components/WorkPreviewTile'
import preview from './images/thank-home.jpg'

const ThankfulPreview = () => {
  return (
    <WorkPreviewTile title="Gratitude journal" link="/work#thankful">
      <img src={preview} />
    </WorkPreviewTile>
  )
}

export default ThankfulPreview
