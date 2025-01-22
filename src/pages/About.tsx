import Paragraph from '@/components/Paragraph'
import CvTimeline from '@/content/CvTimeline'
import { catchDetail, catchPhrase, freeTime, tech } from '@/content/phrases'
import { Fade } from 'react-awesome-reveal'

const About = () => {
  return (
    <>
      <Fade triggerOnce cascade damping={0.09}>
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
      </Fade>
      <Fade triggerOnce>
        <div className="-mb-24 flex flex-col gap-2 bg-cv-light p-6 sm:p-8 md:p-12 dark:bg-cv-dark">
          <CvTimeline />
        </div>
      </Fade>
    </>
  )
}

export default About
