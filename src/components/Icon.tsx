import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'

const Icon = ({ Icon, className }: { Icon: LucideIcon; className?: string }) => {
  return <Icon className={clsx('size-5 translate-y-1', className)} />
}

export default Icon
