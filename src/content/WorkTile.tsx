import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'

const WorkTile = () => {
  return (
    <div>
      <Heading size={3}>Work</Heading>
      <Paragraph>
        Majority of my work in the last 10 years is covered by the large layer of fintech NDAs.
        That's why I only have two projects to showcase.
      </Paragraph>
      <Paragraph>
        First is the experimental Scroll-driven Animations plugin I wrote for Tailwind CSS, along
        with the demo site. The second project is the showcase of my efforts to refactor the front
        end of a huge open-source project.
      </Paragraph>
    </div>
  )
}

export default WorkTile
