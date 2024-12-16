import GridWrapper from '@/components/GridWrapper'
import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'
import martinAssets from './images/martin-assets.png'
import martinIpad from './images/martin-ipad.jpg'
import martinKids from './images/martin-kids.jpg'
import martinLogo from './images/martin-logo.png'
import martinMobile from './images/martin-mobile.jpg'
import martinNavDetail from './images/martin-nav-detail.jpg'
import martinNav from './images/martin-nav.jpg'
import martinNewborn from './images/martin-newborn.jpg'
import martinPaper from './images/martin-paper.jpg'
import martinSign from './images/martin-sign.jpg'
import martinStuff from './images/martin-stuff.jpg'

const More = () => {
  return (
    <Paragraph>
      It is based on a rather unusual—for a hospital—grotesk, combined with nice business serif,
      bold logo, solid colors and icons to complement the whole. A logo competition entry.
    </Paragraph>
  )
}

const WorkMartin = () => {
  return (
    <WorkTile
      id="martin"
      title="Hospital in Martin"
      more={<More />}
      text="Identity for a new hospital in Martin. The whole idea behind the proposal is to create well working and easily recognizable visual system from logo, identity and wayfinding."
      top={<img src={martinNav} />}
    >
      <img src={martinNewborn} />
      <GridWrapper>
        <img src={martinLogo} />
        <img src={martinNavDetail} />
        <img src={martinMobile} />
        <img src={martinIpad} />
        <img src={martinPaper} />
        <img src={martinAssets} />
      </GridWrapper>
      <img src={martinKids} />
      <GridWrapper>
        <img src={martinStuff} />
        <img src={martinSign} />
      </GridWrapper>
    </WorkTile>
  )
}

export default WorkMartin