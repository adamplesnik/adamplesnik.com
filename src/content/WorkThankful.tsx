import WorkTile from '@/components/WorkTile'
import MasonryWrapper from '@/partials/MasonryWrapper'
import thankfulMain from './images/thank-main.jpg'
import thankfulVideo from './images/thank.mp4'

const Thankful = () => {
  return (
    <WorkTile
      title="Simple gratitude journal"
      className="bg-amber-50 dark:bg-transparent"
      text="This app concept aims to find a simple, lean, and nice gratitude journaling experience."
    >
      <MasonryWrapper>
        <img src={thankfulMain} className="mb-4" />
        <video loop autoPlay playsInline className="border-none">
          <source src={thankfulVideo} type="video/mp4"></source>
        </video>
      </MasonryWrapper>
    </WorkTile>
  )
}

export default Thankful
