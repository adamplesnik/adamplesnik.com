import CustomImg from '@/components/CustomImg'
import GridWrapper from '@/components/GridWrapper'
import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'
import andyAd from './images/andy-ad.jpg'
import andyAssets from './images/andy-assets.png'
import andyBook from './images/andy-book.jpg'
import andyMain from './images/andy-main.jpg'
import andyStickers from './images/andy-stickers.jpg'
import andyStreet from './images/andy-street.jpg'
import andyTshirt from './images/andy-t-shirt.jpg'
import andyTote from './images/andy-tote.jpg'

const More = () => (
  <Paragraph>
    The logo is constructed with the simplified museum name and the identity is supported by
    distinctive type family, wordmark 'Andy!' and bold 'pop yellow' color.
  </Paragraph>
)

const WorkAndy = () => {
  return (
    <WorkTile
      id="andy"
      title="Andy Warhol museum"
      text="Logo and identity for the Andy Warhol museum in Slovakia. Nobody actually asked for it, it just struck me, after visiting the museum, that it should have a more solid identity, given the greatness of the king of pop art."
      top={<CustomImg src={andyAd} />}
      more={<More />}
    >
      <GridWrapper>
        <CustomImg src={andyMain} />
        <CustomImg src={andyBook} />
        <CustomImg src={andyTote} />
        <CustomImg src={andyAssets} />
      </GridWrapper>
      <CustomImg src={andyStreet} />
      <GridWrapper>
        <CustomImg src={andyStickers} />
        <CustomImg src={andyTshirt} />
      </GridWrapper>
    </WorkTile>
  )
}

export default WorkAndy
