import GridWrapper from '@/components/GridWrapper'
import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'
import andyAd from './images/andy-ad.jpg'
import andyAssets from './images/andy-assets.png'
import andyBuild from './images/andy-build.jpg'
import andyMain from './images/andy-main.jpg'
import andyStickers from './images/andy-stickers.jpg'
import andyStreet from './images/andy-street.jpg'
import andyTshirt from './images/andy-t-shirt.jpg'
import andyTote from './images/andy-tote.jpg'

const More = () => (
  <Paragraph>
    The logo is constructed with four words: Andy, Warhol, Museum and Medzilaborce. Each word can be
    displayed either in full or as its initial letter. However, at least two words must always
    appear in full.
  </Paragraph>
)

const WorkAndy = () => {
  return (
    <WorkTile
      id="andy"
      title="Andy Warhol museum"
      text="Logo and identity for the Andy Warhol museum in Slovakia. Nobody actually asked for it, it just struck me, after visiting the museum, that it should have a more solid identity, given the greatness of the king of pop art."
      top={<img src={andyStreet} />}
      more={<More />}
    >
      <GridWrapper>
        <img src={andyMain} />
        <img src={andyBuild} />
        <img src={andyTote} />
        <img src={andyAssets} />
      </GridWrapper>
      <img src={andyAd} />
      <GridWrapper>
        <img src={andyStickers} />
        <img src={andyTshirt} />
      </GridWrapper>
    </WorkTile>
  )
}

export default WorkAndy
