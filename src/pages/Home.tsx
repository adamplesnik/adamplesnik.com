import AndyPreview from '@/content/andy/AndyPreview'
import Intro from '@/content/Intro'
import KolbordPreview from '@/content/kolbord/KolbordPreview'
import MhdPreview from '@/content/mhd/MhdPreview'
import ThankfulPreview from '@/content/thankful/ThankfulPreview'

const Home = () => {
  return (
    <>
      <Intro />
      <KolbordPreview />
      <MhdPreview />
      <div className="flex flex-col md:flex-row">
        <AndyPreview />
        <ThankfulPreview />
      </div>
    </>
  )
}

export default Home
