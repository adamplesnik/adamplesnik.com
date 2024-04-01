import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import TileWrapper from '../components/TileWrapper'

const PhotoTile = () => {
  return (
    <TileWrapper padding>
      <Heading size={3}>I am married, 38 years old, father of two kids.</Heading>
      <Paragraph>
        I love coding, but I also enjoy mountain biking, traveling, and spending quality time with
        my family. I speak English and French fluently, and I am learning Portuguese.
      </Paragraph>
    </TileWrapper>
  )
}

export default PhotoTile
