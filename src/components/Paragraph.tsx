import clsx from 'clsx'
import { HTMLAttributes } from 'react'

const Paragraph = ({ children, className = '' }: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={clsx('mb-4 w-full text-base leading-7 last:mb-0', className)}>{children}</p>
}

export default Paragraph
