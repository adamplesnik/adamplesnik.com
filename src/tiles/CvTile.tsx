import Paragraph from '../components/Paragraph'
import TileWrapper from '../components/TileWrapper'

const PhotoTile = () => {
  return (
    <TileWrapper className="bg-gradient-to-tr from-slate-800 to-slate-700/40" padding>
      <Paragraph size="small">I am married, 38 years old, father of two kids.</Paragraph>
      <Paragraph>
        I love coding, but I also enjoy mountain biking, traveling, and spending quality time with
        my family. I speaks English and French fluently, and I am learning Portuguese.
      </Paragraph>
    </TileWrapper>
  )
}

export default PhotoTile
