import clsx from 'clsx/lite'
import { HTMLAttributes } from 'react'

const Em = ({ children, className }: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={clsx('font-medium text-zinc-800 dark:text-zinc-300', className)}>
      {children}
    </span>
  )
}

export default Em
