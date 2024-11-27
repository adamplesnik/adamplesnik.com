import Heading from '@/components/Heading'
import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import TimelineItem from '@/components/TimelineItem'

const AboutMe = ({ print }: { print?: boolean }) => {
  return (
    <div className="flex min-h-svh flex-col gap-1 lg:flex-row print:block print:p-16 print:text-base">
      <div className="bg-cv-light p-6 sm:p-8 md:flex-1 md:p-12 dark:bg-cv-dark print:bg-transparent print:p-0">
        {print ? (
          <div className="flex justify-between">
            <Heading size={1}>Adam Plesník</Heading>
            <Heading size={1}>◞ UX&ndash;UI designer</Heading>
          </div>
        ) : (
          <Heading size={2}>CV</Heading>
        )}
        {print && (
          <>
            <Paragraph className="mt-4 flex w-full gap-2">
              <Link href="https://adamplesnik.com">adamplesnik.com</Link> /
              <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link>
            </Paragraph>
            <Heading size={2} className="mt-12">
              About me
            </Heading>
          </>
        )}

        <Paragraph className="mb-4 mt-8">
          I spend quality time with my family&mdash;or alone when needed&mdash;preferably in nature,
          mountain biking, traveling, or exploring around town.
        </Paragraph>
        <Paragraph className="mb-6">
          I enjoy photography, playing piano as a hobby, and reading.
        </Paragraph>
        {print ? (
          <div className="flex">
            <div>
              <Heading size={2} className="mb-4 mt-12">
                Skills
              </Heading>
              <Paragraph className="mb-4">
                I create, polish, and improve user experiences and interfaces.
              </Paragraph>
              <Paragraph>
                I like to paint the large picture first&mdash;mapping user journeys and prototyping
                wireframes&mdash;before diving into the designs. Once the user experience and flow
                are sorted, I do my best to create clean layouts with strong typography, thoughtful
                colors, and visual clarity. And a touch of playfulness.
              </Paragraph>
            </div>
            <div>
              <Heading size={2} className="mb-4 mt-12">
                Tech
              </Heading>
              <Paragraph>Figma, React+Typescript, TSX, Tailwind CSS</Paragraph>
            </div>
          </div>
        ) : (
          <Paragraph>
            On the tech side, I'm proficient in Figma and I code in React, using Tailwind CSS,
            TSX/HTML, or pure CSS.
          </Paragraph>
        )}
      </div>
      {print && (
        <Heading size={2} className="mb-4 mt-12">
          CV
        </Heading>
      )}
      <div className="bg-cv-light p-6 sm:p-8 md:flex-[2] dark:bg-cv-dark print:bg-transparent print:p-0">
        <div className="flex flex-col gap-2 print:gap-0">
          <TimelineItem year={'A long time ago'} desc="Han shot first!" className="mb-72" right />
          <TimelineItem year={1985} desc="Born" className="mb-12 print:mb-0" />
          <TimelineItem
            year={1999}
            desc="Star Wars is not a trilogy anymore"
            className="mb-16"
            right
          />
          <TimelineItem year={'2008\u20132010'} desc="Freelance web designer" em />
          <TimelineItem year={2010} desc="Master of Architecture" />
          <TimelineItem year={'2011\u20132012'} desc="Web designer in Websupport" em />
          <TimelineItem
            year={'2013\u2013now'}
            desc="Design engineer in Expersoft Technologies"
            em
          />
          <TimelineItem year={2014} desc="Married" />
          <TimelineItem year={'2015 & 2021'} desc="Kids" />
          <TimelineItem
            year={'Occasionally'}
            desc="Portrait photographer"
            className="mb-80 print:mb-0"
            em
          />
          <TimelineItem
            year={12067}
            desc="Hari will develop psychohistory"
            className="mb-80"
            right
          />
          <TimelineItem year={23354} desc="Paul will become overly sensitive" right />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
