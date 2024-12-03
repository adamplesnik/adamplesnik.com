import GridWrapper from '@/components/GridWrapper'
import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'
import assetsDetail from './images/vkjb-assets-detail.png'
import assets from './images/vkjb-assets.png'
import bag from './images/vkjb-bag.jpg'
import preview from './images/vkjb-home.png'
import hours from './images/vkjb-hours.jpg'
import posterIn from './images/vkjb-poster-in.jpg'
import poster from './images/vkjb-poster.jpg'
import shirt from './images/vkjb-shirt.jpg'

const More = () => <Paragraph>A logo competition entry.</Paragraph>

const WorkLibrary = () => {
  return (
    <WorkTile
      id="library"
      title="Library indentity"
      text="Identity for a library in Košice. Very heavy logo complemented with a straightforward typography. Both logo and type visually support the brand and they should become distinctive over time."
      top={<img src={poster} />}
      more={<More />}
    >
      <GridWrapper>
        <img src={posterIn} />
        <img src={hours} />
        <img src={assets} />
        <img src={assetsDetail} />
      </GridWrapper>
      <img src={preview} />
      <GridWrapper>
        <img src={shirt} />
        <img src={bag} />
      </GridWrapper>
    </WorkTile>
  )
}

export default WorkLibrary
