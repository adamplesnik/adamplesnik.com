import WorkAndy from '@/content/andy'
import WorkKolbord from '@/content/kolbord'
import WorkMHD from '@/content/mhd'
import WorkThankful from '@/content/thankful'
import WorkComparator from '@/content/WorkComparator'
import WorkPhoto from '@/content/WorkPhoto'

const Work = () => {
  return (
    <div className="flex flex-col gap-32">
      <WorkMHD />
      <WorkKolbord />
      <WorkThankful />
      <WorkComparator />
      <WorkAndy />
      <WorkPhoto />
    </div>
  )
}

export default Work
