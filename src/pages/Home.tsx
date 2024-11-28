import AboutMe from '@/content/AboutMe'
import Intro from '@/content/Intro'
import Skills from '@/content/Skills'
import WorkAndy from '@/content/WorkAndy'
import WorkComparator from '@/content/WorkComparator'
import WorkKolbord from '@/content/WorkKolbord'
import WorkMHD from '@/content/WorkMHD'
import WorkPhoto from '@/content/WorkPhoto'
import WorkThankful from '@/content/WorkThankful'

const Home = () => {
  return (
    <>
      <Intro />
      <Skills />
      <div id="work" className="relative top-[8.5rem]" />
      <WorkMHD />
      <WorkKolbord />
      <WorkThankful />
      <WorkComparator />
      <WorkAndy />
      <WorkPhoto />
      <div id="cv" className="relative top-[7rem]" />
      <AboutMe />
    </>
  )
}

export default Home
