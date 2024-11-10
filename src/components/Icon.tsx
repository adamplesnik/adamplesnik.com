import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'

const Icon = ({
  Icon,
  className,
  noTranslate = false,
}: {
  Icon: LucideIcon
  className?: string
  noTranslate?: boolean
}) => {
  return (
    <Icon
      className={clsx('size-5', !noTranslate && 'translate-y-1', className)}
      strokeWidth={1.5}
    />
  )
}

export default Icon
