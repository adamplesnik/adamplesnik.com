import clsx from 'clsx'
import { PropsWithChildren } from 'react'

const Heading = ({ size = 1, className = '', children }: PropsWithChildren<TitleProps>) => {
  const defaultClasses = clsx('relative text-zinc-950 font-semibold', className)

  if (size === 1) {
    return <h1 className={clsx(defaultClasses, 'text-xl leading-normal')}>{children}</h1>
  } else if (size === 2) {
    return <h2 className={clsx(defaultClasses, 'mb-12 text-3xl opacity-90')}>{children}</h2>
  } else if (size === 3) {
    return <h3 className={clsx(defaultClasses, 'mb-6 text-xl opacity-90')}>{children}</h3>
  } else {
    return <h4 className={clsx(defaultClasses, 'mb-4 text-lg')}>{children}</h4>
  }
}

export interface TitleProps {
  children: PropsWithChildren
  size: 1 | 2 | 3 | 4
  className?: string
}

export default Heading
