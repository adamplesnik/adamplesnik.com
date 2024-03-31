import TileWrapper from '../components/TileWrapper'
import photo from '/assets/adam-plesnik.jpg'

const PhotoTile = () => {
  return (
    <TileWrapper>
      <img src={photo} alt="" className="opacity-80" />
    </TileWrapper>
  )
}

export default PhotoTile
