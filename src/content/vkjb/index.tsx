import CustomImg from '@/components/CustomImg'
import GridWrapper from '@/components/GridWrapper'
import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'
import assetsDetail from './images/vkjb-assets-detail.png'
import assets from './images/vkjb-assets.png'
import bag from './images/vkjb-bag.jpg'
import preview from './images/vkjb-home.jpg'
import hours from './images/vkjb-hours.jpg'
import paper from './images/vkjb-paper.jpg'
import posterIn from './images/vkjb-poster-in.jpg'
import poster from './images/vkjb-poster.jpg'
import prices from './images/vkjb-prices.jpg'
import shirt from './images/vkjb-shirt.jpg'

const More = () => <Paragraph>A logo competition entry.</Paragraph>

const WorkLibrary = () => {
  return (
    <WorkTile
      id="library"
      title="Public library"
      text="Identity and UI for a public library. Very heavy logo complemented with a straightforward typography. Both logo and type visually support the brand and they should become distinctive over time."
      top={<CustomImg src={poster} />}
      more={<More />}
    >
      <GridWrapper>
        <CustomImg src={posterIn} />
        <CustomImg src={hours} />
        <CustomImg src={prices} />
        <CustomImg src={paper} />
        <CustomImg src={assets} />
        <CustomImg src={assetsDetail} />
      </GridWrapper>
      <CustomImg src={preview} />
      <GridWrapper>
        <CustomImg src={shirt} />
        <CustomImg src={bag} />
      </GridWrapper>
    </WorkTile>
  )
}

export default WorkLibrary
