import AndyPreview from '@/content/andy/AndyPreview'
import Intro from '@/content/Intro'
import MhdPreview from '@/content/mhd/MhdPreview'
import MasonryWrapper from '@/partials/MasonryWrapper'

const Home = () => {
  return (
    <>
      <Intro />
      <MhdPreview />
      <MasonryWrapper>
        <AndyPreview />
      </MasonryWrapper>
    </>
  )
}

export default Home
