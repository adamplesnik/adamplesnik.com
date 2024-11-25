import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'
import MasonryWrapper from '@/partials/MasonryWrapper'
import andyAlt from './images/andy-alt.jpg'
import andyMain from './images/andy-main.jpg'
import mhdMain from './images/mhd-main.jpg'

const More = () => {
  return (
    <Paragraph>
      The original application was very complex and poorly designed. I simplified and polished the
      user journey to make it more intuitive and less prone to errors. The new UI aims to be clear,
      highly readable, and easy to use while in transit.
    </Paragraph>
  )
}

const WorkMHD = () => {
  return (
    <WorkTile
      title="Ticket-buying redesign"
      more={<More />}
      text="A complete redesign of the ticket-buying experience for Bratislava public transport, from an completely new UX to a simpler, more intuitive ticket machine interface."
      top={<img src={mhdMain} />}
    >
      <MasonryWrapper>
        <img src={andyMain} className="mb-4" />
        <img src={andyAlt} className="mb-4" />
      </MasonryWrapper>
    </WorkTile>
  )
}

export default WorkMHD
