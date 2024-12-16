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
      The original application is very complex and poorly designed. I simplified and polished the
      user journey to make it more intuitive and less prone to errors. The new UI aims to be clear,
      highly readable, and easy to use while in transit. This work is 100% guerilla, with a planned
      pitch to the authorities.
    </Paragraph>
  )
}

const WorkMartin = () => {
  return (
    <WorkTile
      id="martin"
      title="Hospital in Martin"
      more={<More />}
      text="lala"
      top={<img src={martinNewborn} />}
    >
      <img src={martinNav} />
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
