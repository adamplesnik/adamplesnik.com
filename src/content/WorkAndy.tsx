import WorkTile from '@/components/WorkTile'
import MasonryWrapper from '@/partials/MasonryWrapper'
import andyAlt from './images/andy-alt.jpg'
import andyBadge from './images/andy-badge.jpg'
import andyMain from './images/andy-main.jpg'
import andyStreet from './images/andy-street.jpg'
import andyWall from './images/andy-wall.jpg'

const WorkAndy = () => {
  return (
    <WorkTile
      title="Andy Warhol museum logo"
      text="This is me dipping toes into logo waters. Nobody actually asked for it, it just struck me, after visiting the museum, that it should have a more solid identity, given the greatness of the king of pop art."
      top={<img src={andyStreet} />}
    >
      <MasonryWrapper>
        <img src={andyMain} className="mb-4" />
        <img src={andyAlt} className="mb-4" />
        <img src={andyBadge} className="mb-4" />
        <img src={andyWall} className="mb-4" />
      </MasonryWrapper>
    </WorkTile>
  )
}

export default WorkAndy
