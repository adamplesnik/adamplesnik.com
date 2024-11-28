import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import AboutMe from '@/content/AboutMe'

const About = () => {
  return (
    <>
      <Paragraph big className="mb-16 px-6 sm:px-8 md:px-12">
        I create nice and functional things, no-matter the platform. Although I have an extensive
        experience with UX–UI design and coding, I can tackle assignments spanning from branding to
        UI design, from print to photography.
      </Paragraph>
      <Paragraph big className="mb-16 px-6 sm:px-8 md:px-12">
        I value both my creative and personal freedom. I prefer remote, flexible and no corporate
        work environment. Family time is non-negotiable, I put high priority in my time off,
        embracing mountain bike, hiking and travel—both with family or solo if needed.
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
