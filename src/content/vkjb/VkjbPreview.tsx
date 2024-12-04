import WorkPreviewTile from '@/components/WorkPreviewTile'
import preview from './images/vkjb-home.png'

const VkjbPreview = () => {
  return (
    <WorkPreviewTile title="Public library in Košice" link="/work/library">
      <img src={preview} />
    </WorkPreviewTile>
  )
}

export default VkjbPreview
