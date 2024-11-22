import Heading from '@/components/Heading'
import AboutMe from '@/content/AboutMe'
import Footer from '@/content/Footer'
import Intro from '@/content/Intro'
import Skills from '@/content/Skills'
import WorkAndy from '@/content/WorkAndy'
import WorkComparator from '@/content/WorkComparator'
import WorkKolbord from '@/content/WorkKolbord'
import WorkPhoto from '@/content/WorkPhoto'
import WorkScrollDriven from '@/content/WorkScrollDriven'
import WorkThankful from '@/content/WorkThankful'

const Home = () => {
  return (
    <div className="flex flex-col gap-48 pt-12">
      <div className="sticky top-0 z-50 flex h-16 w-full items-end gap-8 bg-gradient-to-b from-white/80 px-6 sm:px-8 md:px-12 dark:from-zinc-800/80">
        <Heading size={1}>Adam Plesník</Heading>
        <div className="hidden flex-1 justify-end gap-4 sm:flex">
          <a className="cursor-pointer hover:underline" href="#skills">
            Skills
          </a>
          <a className="cursor-pointer hover:underline" href="#work">
            Work
          </a>
          <a className="cursor-pointer hover:underline" href="#cv">
            CV
          </a>
        </div>
      </div>
      <Intro />
      <Skills />
      <div id="work" className="relative top-[8.5rem]" />
      <WorkKolbord />
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
