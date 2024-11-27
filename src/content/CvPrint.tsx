import Heading from '@/components/Heading'
import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import { ReactNode } from 'react'
import CvTimeline from './CvTimeline'

const Item = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <div className="mt-16 flex flex-col items-baseline gap-4 md:flex-row md:gap-8">
      <Heading size={2} className="w-32 shrink-0">
        {title}
      </Heading>
      <div>{children}</div>
    </div>
  )
}

const CvPrint = () => {
  return (
    <div className="mx-auto max-w-screen-lg p-8 pt-16 text-base sm:p-14 sm:pt-24">
      <div className="flex flex-col justify-between md:flex-row">
        <Heading size={1}>Adam Plesník</Heading>
        <Heading size={2} className="mt-12 md:mt-0">
          UX&ndash;UI designer
        </Heading>
      </div>
      <div className="mt-2 flex w-full flex-col md:mt-4 md:flex-row md:items-center md:gap-2 md:pb-12">
        <Link href="https://adamplesnik.com">adamplesnik.com</Link>{' '}
        <span className="hidden md:block">/</span>
        <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link>
        <div className="flex-1 md:text-right">Bratislava, Slovakia</div>
      </div>
      <Item title="About me">
        <>
          <Paragraph className="mb-4">
            I spend quality time with my family&mdash;or alone when needed&mdash;preferably in
            nature, mountain biking, traveling, or exploring around town.
          </Paragraph>
          <Paragraph>
            I speak English fluently. I also enjoy photography, playing piano as a hobby, and
            reading.
          </Paragraph>
        </>
      </Item>
      <Item title="Skills">
        <>
          <Paragraph className="mb-4">
            I create, polish, and improve user experiences and interfaces.
          </Paragraph>
          <Paragraph>
            Paint the large picture first&mdash;mapping user journeys and prototyping
            wireframes&mdash;before diving into the designs. Once the user experience and flow are
            sorted, I do my best to create clean layouts with strong typography, thoughtful colors,
            and visual clarity. And a touch of playfulness.
          </Paragraph>
        </>
      </Item>
      <Item title="Tech">
        <Paragraph>Figma, React+Typescript, TSX, Tailwind CSS</Paragraph>
      </Item>
      <Item title="CV">
        <div className="flex flex-col gap-2 print:gap-1">
          <CvTimeline print />
        </div>
      </Item>
    </div>
  )
}

export default CvPrint
