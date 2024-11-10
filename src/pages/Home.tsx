import Heading from '@/components/Heading'
import AboutMe from '@/content/AboutMe'
import Intro from '@/content/Intro'
import Tech from '@/content/Tech'
import WorkKolbord from '@/content/WorkKolbord'
import WorkScrollDriven from '@/content/WorkScrollDriven'
import WorkScrollDrivenShowcase from '@/content/WorkScrolldrivenShowcase'
import WorkWebUmenia from '@/content/WorkWebUmenia'
import Footer from '@/partials/Footer'

const Home = () => {
  return (
    <>
      <Intro />
      <AboutMe />
      <Tech />
      <Heading size={2} className="print:mt-12">
        Work
      </Heading>
      <WorkKolbord />
      <WorkScrollDriven />
      <WorkScrollDrivenShowcase />
      <WorkWebUmenia />
      <Footer />
    </>
  )
}

export default Home
