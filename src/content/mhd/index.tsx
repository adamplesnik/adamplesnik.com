import CustomImg from '@/components/CustomImg'
import GridWrapper from '@/components/GridWrapper'
import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'
import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import mhdAfter from './images/mhd-after.jpg'
import mhdAssets from './images/mhd-assets.png'
import mhdBefore from './images/mhd-before.jpg'
import mhdHome from './images/mhd-home.jpg'
import mhdLang from './images/mhd-lang.mp4'
import mhdScreens from './images/mhd-screens.png'
import mhdTrio from './images/mhd-trio.jpg'
import mhdVideo from './images/mhd-video.png'
import mhd from './images/mhd.mp4'

const FIRST_IMAGE = {
  imageUrl: mhdAfter,
}
const SECOND_IMAGE = {
  imageUrl: mhdBefore,
}

const More = () => {
  return (
    <>
      <Paragraph>
        The original application is very complex and poorly designed. I simplified and polished the
        user journey to make it more intuitive and less prone to errors. The new UI aims to be
        clear, highly readable, and easy to use while in transit.
      </Paragraph>
      <Paragraph>This work is 100% guerilla, with a planned pitch to the authorities.</Paragraph>
    </>
  )
}

const WorkMHD = () => {
  return (
    <WorkTile
      id="mhd"
      title="Bratislava public transport"
      more={<More />}
      text="A complete redesign of the ticket-buying experience for Bratislava public transport, from an completely new UX to a simpler, more intuitive ticket machine interface."
      top={<CustomImg src={mhdHome} />}
      badges={['Figma']}
    >
      <CustomImg src={mhdTrio} />
      <GridWrapper>
        <div className="relative mx-auto max-w-(--breakpoint-xl)">
          <img src={mhdVideo} alt="" />
          <div className="absolute left-[34.3%] top-[16.3%] w-[31.6%] overflow-hidden">
            <video loop autoPlay playsInline muted className="-mt-[2px]">
              <source src={mhd} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="relative mx-auto max-w-(--breakpoint-xl)">
          <img src={mhdVideo} alt="" />
          <div className="absolute left-[34.3%] top-[16.3%] w-[31.6%] overflow-hidden">
            <video loop autoPlay playsInline muted className="-mt-[2px]">
              <source src={mhdLang} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </GridWrapper>
      <ReactBeforeSliderComponent
        currentPercentPosition={69}
        delimiterColor="#222"
        delimiterIconStyles={{ border: '2px #fff solid', cursor: 'ew-resize' }}
        firstImage={FIRST_IMAGE}
        secondImage={SECOND_IMAGE}
      ></ReactBeforeSliderComponent>
      <img src={mhdScreens} alt="MHD screens" />
      <img src={mhdAssets} alt="MHD screens" />
    </WorkTile>
  )
}

export default WorkMHD
