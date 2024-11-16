import WorkTile from '@/components/WorkTile'
import comparator from './images/comparator.mp4'

const WorkComparator = () => {
  return (
    <WorkTile
      title="Photo comparator interface"
      text="A conceptual UI for an application dedicated to displaying before and after photographs of various spaces and places within our cities and nature."
    >
      <div className="max-w-3xl rounded-3xl border-2 border-zinc-600 bg-zinc-800 p-4 sm:p-6 md:p-8">
        <video loop autoPlay playsInline className="rounded-xl">
          <source src={comparator} type="video/mp4"></source>
        </video>
      </div>
    </WorkTile>
  )
}

export default WorkComparator
