import CustomImg from '@/components/CustomImg'
import GridWrapper from '@/components/GridWrapper'
import WorkTile from '@/components/WorkTile'
import thankfulMain from './images/thank-main.jpg'
import thankfulVideo from './images/thank.mp4'

const WorkThankful = () => {
  return (
    <WorkTile
      id="thankful"
      title="Thankful"
      text="This app concept aims to find a simple, lean, and nice gratitude journaling experience."
    >
      <GridWrapper>
        <CustomImg src={thankfulMain} />
        <div className="overflow-hidden">
          <video loop autoPlay playsInline muted className="-mt-[2px]">
            <source src={thankfulVideo} type="video/mp4"></source>
          </video>
        </div>
      </GridWrapper>
    </WorkTile>
  )
}

export default WorkThankful
