import WorkTile from '@/components/WorkTile'
import comparator from './images/comparator.mp4'

const WorkComparator = () => {
  return (
    <WorkTile
      title="Photo comparator interface"
      text="A conceptual UI for an application dedicated to displaying before and after photographs of various spaces and places within our cities and nature."
    >
      <div className="overflow-hidden">
        <video loop autoPlay playsInline className="-mt-[2px]">
          <source src={comparator} type="video/mp4"></source>
        </video>
      </div>
    </WorkTile>
  )
}

export default WorkComparator
