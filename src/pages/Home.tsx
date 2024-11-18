import AboutMe from '@/content/AboutMe'
import Chart from '@/content/Chart'
import Footer from '@/content/Footer'
import Intro from '@/content/Intro'
import WorkAndy from '@/content/WorkAndy'
import WorkComparator from '@/content/WorkComparator'
import WorkPhoto from '@/content/WorkPhoto'
import WorkScrollDriven from '@/content/WorkScrollDriven'
import WorkThankful from '@/content/WorkThankful'

const Home = () => {
  return (
    <div className="flex flex-col gap-24">
      <Intro />
      <Chart />
      <WorkThankful />
      <WorkScrollDriven />
      <WorkComparator />
      <WorkAndy />
      <WorkPhoto />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default Home
