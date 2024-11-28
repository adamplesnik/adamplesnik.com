import Paragraph from '@/components/Paragraph'
import WorkTile from '@/components/WorkTile'
import MasonryWrapper from '@/partials/MasonryWrapper'
import mhdLang from './images/mhd-lang.mp4'
import mhdMain from './images/mhd-main.jpg'
import mhdTest from './images/mhd-test.jpg'
import mhdTrio from './images/mhd-trio.png'
import mhdVideo from './images/mhd-video.png'
import mhd from './images/mhd.mp4'

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
      top={<img src={mhdTrio} className="mb-4" />}
    >
      <MasonryWrapper>
        <div className="relative mx-auto mb-4 max-w-screen-xl">
          <img src={mhdVideo} alt="" />
          <div className="absolute left-[34.3%] top-[16.3%] w-[31.6%] overflow-hidden">
            <video loop autoPlay playsInline muted className="-mt-[2px]">
              <source src={mhd} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="relative mx-auto mb-4 max-w-screen-xl">
          <img src={mhdVideo} alt="" />
          <div className="absolute left-[34.3%] top-[16.3%] w-[31.6%] overflow-hidden">
            <video loop autoPlay playsInline muted className="-mt-[2px]">
              <source src={mhdLang} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <img src={mhdMain} className="mb-4" />
        <div className="mb-4 bg-[#BBE2DA]">
          <img src={mhdTest} className="opacity-90" />
        </div>
      </MasonryWrapper>
    </WorkTile>
  )
}

export default WorkMHD
