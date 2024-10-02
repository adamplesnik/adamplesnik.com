import AboutMe from '@/content/AboutMe'
import Intro from '@/content/Intro'
import Tech from '@/content/Tech'
import Work from '@/content/Work'
import WorkKolbord from '@/content/WorkKolbord'
import WorkScrollDriven from '@/content/WorkScrollDriven'
import WorkWebUmenia from '@/content/WorkWebUmenia'
import Footer from '@/partials/Footer'
import Header from '@/partials/Header'

const Home = () => {
  return (
    <>
      <div className="to-white-0 sticky top-0 z-10 mx-auto w-full max-w-screen-md bg-gradient-to-b from-slate-50 p-8 pt-12 dark:from-gray-900 print:max-w-screen-sm print:bg-transparent">
        <Header />
      </div>
      <div className="mx-auto mb-12 flex w-full max-w-screen-md flex-col overflow-hidden p-8 print:max-w-screen-sm">
        <Intro />
        <AboutMe />
        <Tech />
        <Work />
        <WorkKolbord />
        <WorkScrollDriven />
        <WorkWebUmenia />
        <Footer />
      </div>
    </>
  )
}

export default Home
