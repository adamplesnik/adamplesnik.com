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
        'flex items-baseline gap-4 border-b border-b-black/20 py-4',
        className,
        right && 'justify-between'
      )}
    >
      <div className="w-32 font-serif italic sm:w-40 md:w-52">{year}</div>
      <Paragraph className={clsx(em && 'font-semibold', right && 'text-right')}>{desc}</Paragraph>
    </div>
  )
}

export default TimelineItem
