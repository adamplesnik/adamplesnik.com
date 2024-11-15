import AboutMe from '@/content/AboutMe'
import Chart from '@/content/Chart'
import Footer from '@/content/Footer'
import Intro from '@/content/Intro'
import WorkAndy from '@/content/WorkAndy'
import WorkKolbord from '@/content/WorkKolbord'
import WorkScrollDriven from '@/content/WorkScrollDriven'
import WorkScrollDrivenShowcase from '@/content/WorkScrolldrivenShowcase'
import WorkWebUmenia from '@/content/WorkWebUmenia'

const Home = () => {
  return (
    <div className="flex flex-col gap-48">
      <Intro />
      <Chart />
      <WorkKolbord />
      <WorkScrollDriven />
      <WorkScrollDrivenShowcase />
      <WorkAndy />
      <WorkWebUmenia />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default Home
