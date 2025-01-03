import clsx from 'clsx'
import Paragraph from './Paragraph'

const TimelineItem = ({
  year,
  desc,
  className,
  em,
  right,
  print,
}: {
  year: number | string
  desc: string
  className?: string
  em?: boolean
  right?: boolean
  print?: boolean
}) => {
  return (
    <div
      className={clsx(
        'relative z-10 flex flex-col items-baseline gap-1 sm:flex-row sm:gap-4',
        className,
        right && 'justify-between',
        right && print && 'hidden',
        print ? 'py-1' : 'py-3'
      )}
    >
      <div
        className={clsx(
          'absolute top-[1.65rem] z-0 h-px w-full bg-current opacity-50',
          print && 'hidden'
        )}
      ></div>
      <div
        className={clsx(
          'relative z-10 shrink-0 font-medium',
          print ? 'w-32' : 'w-full sm:w-40 md:w-52'
        )}
      >
        <span className={clsx('inline-block pr-2', !print && 'bg-cv-light dark:bg-cv-dark')}>
          {year}
        </span>
      </div>
      <Paragraph
        className={clsx(
          'relative z-10 !w-fit sm:px-2',
          em && 'font-medium',
          right && 'text-right sm:pr-0',
          !print && 'bg-cv-light dark:bg-cv-dark'
        )}
      >
        {desc}
      </Paragraph>
    </div>
  )
}

export default TimelineItem
