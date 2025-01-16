import WorkPreviewTile from '@/components/WorkPreviewTile'
import Intro from '@/content/Intro'
import kolbordPreview from '@/content/kolbord/images/kolbord-home.jpg'
import martinPreview from '@/content/martin/images/martin-home.jpg'
import mhdPreview from '@/content/mhd/images/mhd-home.jpg'
import vkjbPreview from '@/content/vkjb/images/vkjb-home.jpg'

const Home = () => {
  return (
    <>
      <Intro />
      <div className="flex flex-col gap-12 p-6 sm:px-8 md:px-12">
        <WorkPreviewTile
          title="Bratislava public transport"
          link="/work/tickets"
          src={mhdPreview}
        />

        <WorkPreviewTile title="Kolbord" link="/work/kolbord" src={kolbordPreview} />
        <WorkPreviewTile title="Public library in Košice" link="/work/library" src={vkjbPreview} />
        <WorkPreviewTile title="Hospital in Martin" link="/work/martin" src={martinPreview} />
      </div>
    </>
  )
}

export default Home
