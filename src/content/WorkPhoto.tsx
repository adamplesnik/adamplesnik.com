import WorkTile from '@/components/WorkTile'
import GridWrapper from '@/partials/GridWrapper'
import photoFashion from './images/photo-fashion.jpg'
import photoM from './images/photo-michaela.jpg'
import photoS from './images/photo-stanka.jpg'
import photoT from './images/photo-t.jpg'

const WorkPhoto = () => {
  return (
    <WorkTile
      title="Portrait photography"
      text="I occasionally take portraits; mostly of family, friends, or friends of friends. It’s a great creative outlet, opportunity to work with people, and to experience something different."
    >
      <GridWrapper>
        <div className="flex aspect-square items-center bg-neutral-200 p-9 dark:bg-neutral-700">
          <img src={photoM} />
        </div>
        <div className="flex aspect-square items-center bg-neutral-200 p-9 dark:bg-neutral-700">
          <img src={photoS} />
        </div>
        <div className="flex aspect-square items-center justify-center bg-neutral-200 p-9 dark:bg-neutral-700">
          <img src={photoFashion} className="w-2/3" />
        </div>
        <div className="flex aspect-square items-center bg-neutral-200 p-9 dark:bg-neutral-700">
          <img src={photoT} />
        </div>
      </GridWrapper>
    </WorkTile>
  )
}

export default WorkPhoto
