import PreviewWrapper from '@/components/PreviewWrapper'
import WorkTile from '@/components/WorkTile'
import comparator from './images/comparator.mp4'

const WorkComparator = () => {
  return (
    <WorkTile
      title="Photo comparator interface"
      text="A conceptual UI for an application dedicated to displaying before and after photographs of various spaces and places within our cities and nature."
    >
      <PreviewWrapper>
        <video loop autoPlay playsInline className="-mt-px">
          <source src={comparator} type="video/mp4"></source>
        </video>
      </PreviewWrapper>
    </WorkTile>
  )
}

export default WorkComparator
