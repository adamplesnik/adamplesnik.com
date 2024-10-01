import clsx from 'clsx'
import { PropsWithChildren } from 'react'

const Heading = ({ size = 1, className = '', children }: PropsWithChildren<TitleProps>) => {
  const defaultClasses = clsx('font-semibold', className)

  if (size === 1) {
    return <h1 className={clsx(defaultClasses, 'text-2xl text-zinc-800')}>{children}</h1>
  } else if (size === 2) {
    return <h2 className={clsx(defaultClasses, 'mb-7 text-2xl text-zinc-800')}>{children}</h2>
  } else if (size === 3) {
    return <h3 className={clsx(defaultClasses, 'mb-4 text-lg text-zinc-700')}>{children}</h3>
  }
}

export interface TitleProps {
  children: PropsWithChildren
  size: 1 | 2 | 3
  className?: string
}

export default Heading
