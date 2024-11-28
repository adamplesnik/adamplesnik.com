import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import AboutMe from '@/content/AboutMe'

const About = () => {
  return (
    <>
      <Paragraph big className="mb-16 px-6 sm:px-8 md:px-12">
        I create nice and functional things across multiple platforms. Although I have an extensive
        experience with UX–UI design and coding, I can tackle assignments ranging from branding and
        UI design to print and photography.
      </Paragraph>
      <Paragraph big className="mb-16 px-6 sm:px-8 md:px-12">
        I value both creative and personal freedom, preferring remote, flexible, and non-corporate
        work. Family time is a non-negotiable, and I put high priority in my time off, enjoying
        mountain bike, hiking and travel—whether with family or solo when needed.
      </Paragraph>
      <Paragraph big className="mb-16 px-6 sm:px-8 md:px-12">
        <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link> &mdash; Bratislava,
        Slovakia
      </Paragraph>
      <AboutMe />
    </>
  )
}

export default About
