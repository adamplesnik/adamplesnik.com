import clsx from 'clsx'
import Paragraph from './Paragraph'

const TimelineItem = ({
  year,
  desc,
  className,
  em,
  right,
}: {
  year: number | string
  desc: string
  className?: string
  em?: boolean
  right?: boolean
}) => {
  return (
    <div
      className={clsx(
        'relative z-10 flex flex-col items-baseline gap-1 py-3 sm:flex-row sm:gap-4 print:py-1',
        className,
        right && 'justify-between print:hidden'
      )}
    >
      <div className="absolute top-[1.65rem] z-0 h-px w-full bg-current opacity-50 print:hidden"></div>
      <div className="relative z-10 w-full shrink-0 font-semibold sm:w-40 md:w-52 print:w-28">
        <span className="inline-block bg-cv-light pr-2 dark:bg-cv-dark print:bg-transparent">
          {year}
        </span>
      </div>
      <Paragraph
        className={clsx(
          'relative z-10 !w-fit bg-cv-light sm:px-2 dark:bg-cv-dark print:bg-transparent',
          em && 'font-semibold',
          right && 'text-right sm:pr-0'
        )}
      >
        {desc}
      </Paragraph>
    </div>
  )
}

export default TimelineItem
