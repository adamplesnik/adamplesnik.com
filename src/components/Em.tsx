import clsx from 'clsx/lite'
import { HTMLAttributes } from 'react'

const Em = ({ children, className }: HTMLAttributes<HTMLSpanElement>) => {
  return <span className={clsx('font-serif italic', className)}>{children}</span>
}

export default Em
