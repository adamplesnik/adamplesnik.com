import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'
import MasonryWrapper from '@/partials/MasonryWrapper'
import andyAlt from './images/andy-alt.jpg'
import andyMain from './images/andy-main.jpg'
import andyStreet from './images/andy-street.jpg'

const More = () => {
  return (
    <Paragraph>
      This is me dipping toes into logo waters. Nobody actually asked for it, it just struck me,
      after visiting the museum, that it should have a more solid identity, given the greatness of
      the king of pop art.
    </Paragraph>
  )
}

const WorkMHD = () => {
  return (
    <WorkTile
      title="Andy Warhol museum logo"
      more={<More />}
      text="This is me dipping toes into logo waters. Nobody actually asked for it, it just struck me, after visiting the museum, that it should have a more solid identity, given the greatness of the king of pop art."
      top={<img src={andyStreet} />}
    >
      <MasonryWrapper>
        <img src={andyMain} className="mb-4" />
        <img src={andyAlt} className="mb-4" />
      </MasonryWrapper>
    </WorkTile>
  )
}

export default WorkMHD
