import WorkTile from '@/components/WorkTile'
import comparator from './images/comparator.mp4'
import macbook from './images/macbook.png'

const WorkComparator = () => {
  return (
    <WorkTile
      title="Photo comparator interface"
      text="A conceptual UI for an application dedicated to displaying before and after photographs of various spaces and places within our cities and nature."
    >
      <div className="bg-teal-200 p-4 sm:p-8 dark:bg-teal-800">
        <div className="relative mx-auto max-w-screen-xl">
          <img src={macbook} alt="" />
          <div className="absolute left-[21%] top-[13%] w-[58%] overflow-hidden">
            <video loop autoPlay playsInline muted className="-mt-[2px]">
              <source src={comparator} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    </WorkTile>
  )
}

export default WorkComparator
