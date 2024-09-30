import clsx from 'clsx'
import { PropsWithChildren } from 'react'

const Heading = ({ size = 1, className = '', children }: PropsWithChildren<TitleProps>) => {
  const defaultClasses = clsx('relative w-full text-zinc-950', className)

  if (size === 1) {
    return (
      <h1 className={clsx(defaultClasses, 'pb-8 text-xl font-medium leading-normal')}>
        {children}
      </h1>
    )
  } else if (size === 2) {
    return (
      <h2 className={clsx(defaultClasses, 'pb-4 text-2xl font-medium opacity-90')}>{children}</h2>
    )
  } else if (size === 3) {
    return (
      <h3 className={clsx(defaultClasses, 'pb-4 text-lg font-semibold opacity-90')}>{children}</h3>
    )
  } else {
    return <h4 className={clsx(defaultClasses + 'text-md pb-4 font-semibold')}>{children}</h4>
  }
}

export interface TitleProps {
  children: PropsWithChildren
  size: 1 | 2 | 3 | 4
  className?: string
}

export default Heading
