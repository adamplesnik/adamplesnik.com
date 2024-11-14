import clsx from 'clsx'
import { MoveRight } from 'lucide-react'
import Paragraph from './Paragraph'

const TimelineItem = ({
  year,
  desc,
  className,
}: {
  year: number | string
  desc: string
  className?: string
}) => {
  return (
    <div className={clsx('flex gap-2 border-l border-l-black', className)}>
      <MoveRight strokeWidth={1.5} className="-ml-px" />
      <div>
        <div className="font-serif italic">{year}</div>
        <Paragraph className="pb-8">{desc}</Paragraph>
      </div>
    </div>
  )
}

export default TimelineItem
