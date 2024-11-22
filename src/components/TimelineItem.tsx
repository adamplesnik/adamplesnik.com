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
        'relative z-10 flex flex-col items-baseline gap-1 py-3 sm:flex-row sm:gap-4',
        className,
        right && 'justify-between'
      )}
    >
      <div className="absolute top-[1.65rem] z-0 h-px w-full bg-current opacity-50"></div>
      <div className="relative z-10 w-full shrink-0 font-semibold sm:w-40 md:w-52">
        <span className="inline-block bg-[#FEC84B] pr-2 dark:bg-[#5a574e]">{year}</span>
      </div>
      <Paragraph
        className={clsx(
          'relative z-10 !w-fit bg-[#FEC84B] sm:px-2 dark:bg-[#5a574e]',
          em && 'font-semibold',
          right && 'text-right'
        )}
      >
        {desc}
      </Paragraph>
    </div>
  )
}

export default TimelineItem
