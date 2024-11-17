import AboutMe from '@/content/AboutMe'
import Chart from '@/content/Chart'
import Footer from '@/content/Footer'
import Intro from '@/content/Intro'
import WorkAndy from '@/content/WorkAndy'
import WorkComparator from '@/content/WorkComparator'
import WorkKolbord from '@/content/WorkKolbord'
import WorkScrollDriven from '@/content/WorkScrollDriven'
import WorkThankful from '@/content/WorkThankful'
import WorkWebUmenia from '@/content/WorkWebUmenia'

const Home = () => {
  return (
    <div className="flex flex-col gap-48">
      <Intro />
      <Chart />
      <WorkKolbord />
      <WorkScrollDriven />
      <WorkThankful />
      <WorkComparator />
      <WorkAndy />
      <WorkWebUmenia />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default Home
