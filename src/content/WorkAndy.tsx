import WorkTile from '@/components/WorkTile'
import MasonryWrapper from '@/partials/MasonryWrapper'
import andyAlt from './images/andy-alt.png'
import andyBadge from './images/andy-badge.jpg'
import andyMain from './images/andy-main.png'
import andyWall from './images/andy-wall.jpg'

const WorkAndy = () => {
  return (
    <WorkTile
      title="Andy Warhol museum logo"
      text="This is me dipping toes into logo waters. Nobody actually asked for it, it just struck me, after visiting the museum, that it should have a more solid identity, given the greatness of the king of pop art."
    >
      <MasonryWrapper>
        <img src={andyMain} />
        <img src={andyAlt} />
        <img src={andyWall} />
        <img src={andyBadge} />
      </MasonryWrapper>
    </WorkTile>
  )
}

export default WorkAndy
