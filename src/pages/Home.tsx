import AboutMe from '@/content/AboutMe'
import Chart from '@/content/Chart'
import Footer from '@/content/Footer'
import Intro from '@/content/Intro'
import Tech from '@/content/Tech'
import WorkKolbord from '@/content/WorkKolbord'
import WorkScrollDriven from '@/content/WorkScrollDriven'
import WorkScrollDrivenShowcase from '@/content/WorkScrolldrivenShowcase'
import WorkWebUmenia from '@/content/WorkWebUmenia'

const Home = () => {
  return (
    <div className="flex flex-col gap-48">
      <Intro />
      <Chart />
      <AboutMe />
      <Tech />
      <WorkKolbord />
      <WorkScrollDriven />
      <WorkScrollDrivenShowcase />
      <WorkWebUmenia />
      <Footer />
    </div>
  )
}

export default Home
