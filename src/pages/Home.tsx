import AboutMe from '@/content/AboutMe'
import Chart from '@/content/Chart'
import Footer from '@/content/Footer'
import Intro from '@/content/Intro'
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

      <WorkKolbord />
      <WorkScrollDriven />
      <WorkScrollDrivenShowcase />
      <WorkWebUmenia />
      <Footer />
    </div>
  )
}

export default Home
