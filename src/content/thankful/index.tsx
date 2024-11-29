import WorkTile from '@/components/WorkTile'
import MasonryWrapper from '@/partials/MasonryWrapper'
import thankfulMain from './images/thank-main.jpg'
import thankfulVideo from './images/thank.mp4'

const WorkThankful = () => {
  return (
    <WorkTile
      id="thankful"
      title="Simple gratitude journal"
      text="This app concept aims to find a simple, lean, and nice gratitude journaling experience."
    >
      <MasonryWrapper>
        <img src={thankfulMain} className="mb-4" />
        <div className="overflow-hidden">
          <video loop autoPlay playsInline muted className="-mt-[2px]">
            <source src={thankfulVideo} type="video/mp4"></source>
          </video>
        </div>
      </MasonryWrapper>
    </WorkTile>
  )
}

export default WorkThankful
