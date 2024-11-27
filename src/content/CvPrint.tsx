import Heading from '@/components/Heading'
import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import CvTimeline from './CvTimeline'

const CvPrint = () => {
  return (
    <div className="p-14 pt-20 text-base">
      <div className="flex justify-between">
        <Heading size={1}>Adam Plesník</Heading>
        <Heading size={1}>UX&ndash;UI designer</Heading>
      </div>
      <div className="mt-4 flex w-full items-center gap-2">
        <Link href="https://adamplesnik.com">adamplesnik.com</Link> /
        <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link>
        <div className="flex-1 justify-end text-right">Bratislava, Slovakia</div>
      </div>
      <div className="mt-16 flex items-baseline gap-8">
        <Heading size={2} className="w-32 shrink-0">
          About me
        </Heading>
        <div>
          <Paragraph className="mb-4">
            I spend quality time with my family&mdash;or alone when needed&mdash;preferably in
            nature, mountain biking, traveling, or exploring around town.
          </Paragraph>
          <Paragraph>
            I speak English fluently. I also enjoy photography, playing piano as a hobby, and
            reading.
          </Paragraph>
        </div>
      </div>
      <div className="mt-16 flex flex-1 items-baseline gap-8">
        <Heading size={2} className="w-32 shrink-0">
          Skills
        </Heading>
        <div>
          <Paragraph className="mb-4">
            I create, polish, and improve user experiences and interfaces.
          </Paragraph>
          <Paragraph>
            Paint the large picture first&mdash;mapping user journeys and prototyping
            wireframes&mdash;before diving into the designs. Once the user experience and flow are
            sorted, I do my best to create clean layouts with strong typography, thoughtful colors,
            and visual clarity. And a touch of playfulness.
          </Paragraph>
        </div>
      </div>
      <div className="mt-16 flex items-baseline gap-8">
        <Heading size={2} className="w-32 shrink-0">
          Tech
        </Heading>
        <Paragraph>Figma, React+Typescript, TSX, Tailwind CSS</Paragraph>
      </div>
      <div className="mt-16 flex items-baseline gap-8">
        <Heading size={2} className="w-32 shrink-0">
          CV
        </Heading>
        <div className="flex flex-col gap-2 print:gap-1">
          <CvTimeline print />
        </div>
      </div>
    </div>
  )
}

export default CvPrint
