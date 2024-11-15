import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'
import andyAlt from './images/andy-alt.png'
import andyBadge from './images/andy-badge.jpg'
import andyMain from './images/andy-main.png'

const WorkAndy = () => {
  return (
    <WorkTile title="Andy Warhol museum logo">
      <Paragraph>
        This is me dipping toes into logo waters. Nobody actually asked for it, it just struck me,
        after visiting the museum, that it should have a more solid identity, given the greatness of
        the king of pop art.
      </Paragraph>
      <div className="grid grid-flow-row-dense grid-cols-2 gap-4">
        <img src={andyMain} className="w-full" />
        <img src={andyAlt} className="w-full" />
        <img src={andyBadge} className="w-full" />
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:flex-[2]"></div>
        <div className="md:flex-1"></div>
      </div>
    </WorkTile>
  )
}

export default WorkAndy
