import clsx from 'clsx'
import { HTMLAttributes } from 'react'

const Heading = ({ size = 1, className, children }: TitleProps) => {
  const defaultClasses = clsx('font-semibold', className)

  if (size === 1) {
    return (
      <h1 className={clsx(className, 'text-4xl font-semibold tracking-tight sm:text-5xl')}>
        {children}
      </h1>
    )
  } else if (size === 2) {
    return <h2 className={clsx(className, 'font-serif text-2xl italic lg:text-3xl')}>{children}</h2>
  } else if (size === 3) {
    return <h3 className={clsx(defaultClasses, 'font-serif text-2xl italic')}>{children}</h3>
  }
}

type TitleProps = {
  size: 1 | 2 | 3
} & HTMLAttributes<HTMLHeadingElement>

export default Heading
