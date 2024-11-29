import Paragraph from '@/components/Paragraph'
import CvTimeline from '@/content/CvTimeline'

const About = () => {
  return (
    <>
      <Paragraph big className="mb-16 px-6 sm:px-8 md:px-12">
        I create nice and functional things across multiple platforms. Although I have an extensive
        experience with UX–UI design and coding, I can tackle assignments ranging from branding and
        UI to print and photography.
      </Paragraph>
      <Paragraph big className="mb-16 px-6 sm:px-8 md:px-12">
        I value both creative and personal freedom, preferring remote, flexible, and non-corporate
        work. Family time is a non-negotiable, and I put high priority in my time off, enjoying
        mountain bike, hiking and travel—whether with family or solo when needed.
      </Paragraph>
      <div className="bg-cv-light dark:bg-cv-dark -mb-24 flex flex-col gap-2 p-6 sm:p-8 md:p-12">
        <CvTimeline />
      </div>
    </>
  )
}

export default About
