import AndyPreview from '@/content/andy/AndyPreview'
import KolbordPreview from '@/content/kolbord/KolbordPreview'
import MhdPreview from '@/content/mhd/MhdPreview'
import ThankfulPreview from '@/content/thankful/ThankfulPreview'

const Work = () => {
  return (
    <div className="grid grid-cols-1 gap-10 p-6 sm:px-8 md:grid-cols-2 md:px-12">
      <MhdPreview />
      <KolbordPreview />
      <ThankfulPreview />
      <AndyPreview />
    </div>
  )
}

export default Work
