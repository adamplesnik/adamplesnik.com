import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'
import MasonryWrapper from '@/partials/MasonryWrapper'
import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import mhdAfter from './images/mhd-after.jpg'
import mhdBefore from './images/mhd-before.jpg'
import mhdHome from './images/mhd-home.jpg'
import mhdLang from './images/mhd-lang.mp4'
import mhdTrio from './images/mhd-trio.png'
import mhdVideo from './images/mhd-video.png'
import mhd from './images/mhd.mp4'

const FIRST_IMAGE = {
  imageUrl: mhdBefore,
}
const SECOND_IMAGE = {
  imageUrl: mhdAfter,
}

const More = () => {
  return (
    <Paragraph>
      The original application is very complex and poorly designed. I simplified and polished the
      user journey to make it more intuitive and less prone to errors. The new UI aims to be clear,
      highly readable, and easy to use while in transit. 100% guerilla.
    </Paragraph>
  )
}

const WorkMHD = () => {
  return (
    <WorkTile
      id="mhd"
      title="Ticket-buying redesign"
      more={<More />}
      text="A complete redesign of the ticket-buying experience for Bratislava public transport, from an completely new UX to a simpler, more intuitive ticket machine interface."
      top={<img src={mhdHome} />}
    >
      <img src={mhdTrio} />
      <MasonryWrapper>
        <div className="relative mx-auto max-w-screen-xl">
          <img src={mhdVideo} alt="" />
          <div className="absolute left-[34.3%] top-[16.3%] w-[31.6%] overflow-hidden">
            <video loop autoPlay playsInline muted className="-mt-[2px]">
              <source src={mhd} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="relative mx-auto max-w-screen-xl">
          <img src={mhdVideo} alt="" />
          <div className="absolute left-[34.3%] top-[16.3%] w-[31.6%] overflow-hidden">
            <video loop autoPlay playsInline muted className="-mt-[2px]">
              <source src={mhdLang} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </MasonryWrapper>
      <ReactBeforeSliderComponent
        currentPercentPosition={69}
        delimiterColor="#222"
        delimiterIconStyles={{ border: '2px #fff solid', cursor: 'ew-resize' }}
        firstImage={FIRST_IMAGE}
        secondImage={SECOND_IMAGE}
      ></ReactBeforeSliderComponent>
    </WorkTile>
  )
}

export default WorkMHD
