import FlowerAnim from '../components/FlowerAnim'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'

const CvTile = () => {
  return (
    <div>
      <Heading size={3}>About Me</Heading>
      <div className="flex items-center gap-2">
        <div className="order-last sm:order-none">
          <Paragraph>Married, 38 years old, father of two girls.</Paragraph>
        </div>
        <FlowerAnim />
      </div>
      <Paragraph>
        Spending quality time with my family is my number one priority, preferably while mountain
        biking, traveling or both. I also take lot of pictures and I love to read.
      </Paragraph>
      <Paragraph>I speak English and French fluently, and I am learning Portuguese.</Paragraph>
    </div>
  )
}

export default CvTile
