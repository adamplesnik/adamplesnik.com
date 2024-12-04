import Paragraph from '@/components/Paragraph'
import CvTimeline from '@/content/CvTimeline'

const About = () => {
  return (
    <>
      <Paragraph big className="mb-16 px-6 sm:px-8 md:px-12">
        I create nice and functional things across multiple platforms. While I have extensive
        experience with UX/UI design and coding, I also work on projects related to brand identity.
      </Paragraph>
      <Paragraph big className="mb-16 px-6 sm:px-8 md:px-12">
        I value both creative and personal freedom, preferring remote and flexible work. Family time
        is a non-negotiable, and I put high priority in my time off, enjoying mountain biking,
        hiking and travel—whether with family or solo when needed.
      </Paragraph>
      <div className="-mb-24 flex flex-col gap-2 bg-cv-light p-6 sm:p-8 md:p-12 dark:bg-cv-dark">
        <CvTimeline />
      </div>
    </>
  )
}

export default About
