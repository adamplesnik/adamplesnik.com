import Heading from '@/components/Heading'
import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import CvTechSkills from './CvTechSkills'
import CvTimeline from './CvTimeline'
import { catchPhraseCV } from './phrases'

const Contact = () => (
  <Paragraph className="mt-14 flex flex-1 flex-col gap-1">
    <span>+421 904 983 582</span>
    <Link href="https://adamplesnik.com">adamplesnik.com</Link>
    <Link href="https://github.com/adamplesnik">github.com/adamplesnik</Link>
    <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link>
    <span className="mt-4">Bratislava, Slovakia</span>
  </Paragraph>
)

const CvPrint = () => {
  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) p-8 pt-14 text-xl sm:p-14 sm:pt-24 print:max-w-full">
      <div className="flex flex-col justify-between md:flex-row print:flex-row">
        <Heading size={1}>Adam Plesník</Heading>
        <Heading size={2} className="mt-3 md:mt-0 print:mt-0">
          UI designer
        </Heading>
      </div>
      <div className="flex flex-col items-stretch gap-16 lg:flex-row lg:gap-32 print:flex-row print:gap-32">
        <div className="flex flex-1 flex-col gap-5">
          <Paragraph className="mb-6 mt-12">{catchPhraseCV}</Paragraph>
          <CvTechSkills />
          <div className="hidden flex-1 items-end lg:flex print:flex">
            <Contact />
          </div>
        </div>
        <div className="mt-12 flex flex-1 flex-col gap-[3.7rem] leading-normal">
          <CvTimeline print />
        </div>
      </div>
      <div className="flex lg:hidden print:hidden">
        <Contact />
      </div>
    </div>
  )
}

export default CvPrint
