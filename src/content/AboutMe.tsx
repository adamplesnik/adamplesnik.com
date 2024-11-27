import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import CvTimeline from './CvTimeline'

const AboutMe = () => {
  return (
    <div className="flex min-h-svh flex-col gap-1 lg:flex-row">
      <div className="bg-cv-light p-6 sm:p-8 md:flex-1 md:p-12 dark:bg-cv-dark">
        <Heading size={2}>CV</Heading>
        <Paragraph className="mb-6 mt-8">
          I spend quality time with my family—or alone when needed—preferably in nature, mountain
          biking, traveling, or exploring around town.
        </Paragraph>
        <Paragraph className="mb-6">
          I enjoy photography, playing piano as a hobby, and reading.
        </Paragraph>
        <Paragraph>
          On the tech side, I'm proficient in Figma and I code in React, using Tailwind CSS,
          TSX/HTML, or pure CSS.
        </Paragraph>
      </div>
      <div className="bg-cv-light p-6 sm:p-8 md:flex-[2] md:p-12 md:pt-10 dark:bg-cv-dark">
        <div className="flex flex-col gap-2">
          <CvTimeline />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
