import Heading from '@/components/Heading'
import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import CvTimeline from './CvTimeline'

const CvPrint = () => {
  return (
    <div className="mx-auto max-w-screen-lg p-8 pt-14 text-xl sm:p-14 sm:pt-24">
      <div className="flex flex-col justify-between md:flex-row print:flex-row">
        <Heading size={1}>Adam Plesník</Heading>
        <Heading size={2} className="mt-3 md:mt-0 print:mt-0">
          Graphic and UI designer
        </Heading>
      </div>
      <Paragraph className="my-10">
        I create nice and functional things across multiple platforms. While I have extensive
        experience with UX/UI design and coding, I also work on projects related to brand identity.
      </Paragraph>
      <Paragraph className="mb-10">
        I value both creative and personal freedom, preferring remote and flexible work. Family time
        is a non-negotiable, and I put high priority in my time off, enjoying mountain biking,
        hiking and travel—whether with family or solo when needed.
      </Paragraph>
      <Paragraph className="mb-10">
        Proficient in Figma, Adobe Photoshop, InDesign, Lightroom. Coding in React+Typescript, TSX,
        Tailwind CSS. Speaking English, French.
      </Paragraph>
      <div className="flex flex-col gap-2 print:gap-1">
        <CvTimeline print />
      </div>
      <Paragraph className="mt-14 flex flex-col gap-1">
        <span>+421 904 983 582</span>
        <Link href="https://adamplesnik.com">adamplesnik.com</Link>
        <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link>
        <span className="mt-4">Bratislava, Slovakia</span>
      </Paragraph>
    </div>
  )
}

export default CvPrint
