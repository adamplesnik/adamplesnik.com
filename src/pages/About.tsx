import Paragraph from '@/components/Paragraph'
import CvTimeline from '@/content/CvTimeline'
import { catchDetail, catchPhrase, freeTime, tech } from '@/content/phrases'

const About = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-screen-2xl">
        <Paragraph big className="mb-12 px-6 sm:px-8 md:px-12">
          {catchPhrase}
        </Paragraph>
        <Paragraph big className="mb-12 px-6 sm:px-8 md:px-12">
          {catchDetail}
        </Paragraph>
        <Paragraph big className="mb-12 px-6 sm:px-8 md:px-12">
          {tech}
        </Paragraph>
        <Paragraph big className="mb-24 px-6 sm:px-8 md:px-12">
          {freeTime}
        </Paragraph>
      </div>
      <div className="-mb-24 flex flex-col gap-2 bg-cv-light pb-12 dark:bg-cv-dark">
        <div className="mx-auto w-full max-w-screen-2xl p-6 sm:p-8 md:p-12">
          <CvTimeline />
        </div>
      </div>
    </>
  )
}

export default About
