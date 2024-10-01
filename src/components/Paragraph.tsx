import clsx from 'clsx'
import { PropsWithChildren } from 'react'

const Paragraph = ({ children, className = '' }: PropsWithChildren<ParagraphProps>) => {
  return <p className={clsx('mb-5 w-full text-base leading-7 last:mb-0', className)}>{children}</p>
}

export interface ParagraphProps {
  children: PropsWithChildren
  className?: string
}

export default Paragraph
