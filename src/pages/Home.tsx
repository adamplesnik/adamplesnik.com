import AndyPreview from '@/content/andy/AndyPreview'
import Intro from '@/content/Intro'
import KolbordPreview from '@/content/kolbord/KolbordPreview'
import MhdPreview from '@/content/mhd/MhdPreview'
import ThankfulPreview from '@/content/thankful/ThankfulPreview'
import VkjbPreview from '@/content/vkjb/VkjbPreview'

const Home = () => {
  return (
    <>
      <Intro />
      <div className="flex flex-col gap-8 p-6 sm:px-8 md:px-12">
        <MhdPreview />
        <VkjbPreview />
        <KolbordPreview />
        <div className="flex flex-col gap-8 md:flex-row">
          <AndyPreview />
          <ThankfulPreview />
        </div>
        <div className="flex flex-col gap-8 md:flex-row"></div>
      </div>
    </>
  )
}

export default Home
