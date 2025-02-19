import clsx from 'clsx'
import Paragraph from './Paragraph'

const TimelineItem = ({
  year,
  desc,
  detail,
  className,
  em,
  right,
  print,
}: {
  year: number | string
  desc: string
  detail?: string
  className?: string
  em?: boolean
  right?: boolean
  print?: boolean
}) => {
  return (
    <div
      className={clsx(
        'relative z-10 flex flex-col items-baseline gap-1 leading-snug sm:flex-row sm:gap-4',
        className,
        right && 'justify-between',
        right && print && 'hidden',
        !print && 'py-3'
      )}
    >
      <div className={clsx('relative z-10 w-40 shrink-0 font-medium')}>
        <span className={clsx('inline-block pr-2')}>{year}</span>
      </div>
      <div>
        <Paragraph
          className={clsx(
            'relative z-10 w-fit! sm:px-2',
            em && 'font-medium',
            right && 'text-right sm:pr-0'
          )}
        >
          {desc}
        </Paragraph>
        <Paragraph className="sm:px-2">{detail}</Paragraph>
      </div>
    </div>
  )
}

export default TimelineItem
