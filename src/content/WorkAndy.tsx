import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'
import andyAlt from './images/andy-alt.png'
import andyBadge from './images/andy-badge.jpg'
import andyMain from './images/andy-main.png'
import andyWall from './images/andy-wall.jpg'

const WorkAndy = () => {
  return (
    <WorkTile title="Andy Warhol museum logo">
      <div className="flex flex-col gap-8 md:flex-row">
        <Paragraph className="h-fit md:sticky md:top-24 md:flex-1">
          This is me dipping toes into logo waters. Nobody actually asked for it, it just struck me,
          after visiting the museum, that it should have a more solid identity, given the greatness
          of the king of pop art.
        </Paragraph>
        <div className="flex flex-col gap-8 md:flex-1">
          <img src={andyMain} />
          <img src={andyAlt} />
          <img src={andyWall} />
          <img src={andyBadge} />
        </div>
      </div>
    </WorkTile>
  )
}

export default WorkAndy
