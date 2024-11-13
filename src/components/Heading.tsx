import clsx from 'clsx'
import { HTMLAttributes } from 'react'

const Heading = ({ size = 1, className, children }: TitleProps) => {
  const defaultClasses = clsx('font-semibold', className)

  if (size === 1) {
    return <h1 className={clsx(className, 'text-5xl font-semibold tracking-tight')}>{children}</h1>
  } else if (size === 2) {
    return <h2 className={clsx(className, 'mb-7 font-serif text-3xl italic')}>{children}</h2>
  } else if (size === 3) {
    return (
      <h3 className={clsx(defaultClasses, 'mb-4 text-lg text-zinc-700 dark:text-zinc-300')}>
        {children}
      </h3>
    )
  }
}

type TitleProps = {
  size: 1 | 2 | 3
} & HTMLAttributes<HTMLHeadingElement>

export default Heading
