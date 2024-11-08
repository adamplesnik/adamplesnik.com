import Heading from '@/components/Heading'
import AboutMe from '@/content/AboutMe'
import Intro from '@/content/Intro'
import Tech from '@/content/Tech'
import WorkKolbord from '@/content/WorkKolbord'
import WorkScrollDriven from '@/content/WorkScrollDriven'
import WorkScrollDrivenShowcase from '@/content/WorkScrolldrivenShowcase'
import WorkWebUmenia from '@/content/WorkWebUmenia'
import Footer from '@/partials/Footer'
import Header from '@/partials/Header'

const Home = () => {
  return (
    <>
      <div className="sticky top-0 z-10 mx-auto w-full max-w-screen-md bg-gradient-to-b from-slate-50 p-8 pt-12 dark:from-zinc-900 print:max-w-screen-md print:bg-none">
        <Header />
      </div>
      <div
        className="mx-auto mb-12 flex w-full max-w-screen-md flex-col overflow-hidden p-8 print:max-w-screen-md"
        role="main"
      >
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
      </div>
    </>
  )
}

export default Home
