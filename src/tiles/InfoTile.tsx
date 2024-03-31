import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'

const InfoTile = () => {
  return (
    <div className="p-2">
      <Heading size={1} className="text--300">
        Adam Plesník
      </Heading>
      <Paragraph size="small">Bratislava, Slovakia</Paragraph>
      <Paragraph>
        As a front-end developer, I love creating, polishing and improving user interfaces, with a
        particular focus on Tailwind CSS and building reusable components.
      </Paragraph>
    </div>
  )
}

export default InfoTile
