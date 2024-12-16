import Heading from '@/components/Heading'
import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import CvTimeline from './CvTimeline'
import { catchPhrase, freeTime, tech } from './phrases'

const CvPrint = () => {
  return (
    <div className="mx-auto max-w-screen-lg p-8 pt-14 text-xl sm:p-14 sm:pt-24">
      <div className="flex flex-col justify-between md:flex-row print:flex-row">
        <Heading size={1}>Adam Plesník</Heading>
        <Heading size={2} className="mt-3 md:mt-0 print:mt-0">
          Graphic designer
        </Heading>
      </div>
      <Paragraph className="my-10">{catchPhrase}</Paragraph>
      <Paragraph className="mb-10">{freeTime}</Paragraph>
      <Paragraph className="mb-10">{tech}</Paragraph>
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
