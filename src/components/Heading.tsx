import clsx from 'clsx'
import { HTMLAttributes } from 'react'

const Heading = ({ size = 1, className, children }: TitleProps) => {
  if (size === 1) {
    return <h1 className={clsx(className, 'text-3xl font-medium lg:text-4xl')}>{children}</h1>
  } else if (size === 2) {
    return <h2 className={clsx(className, 'text-3xl font-medium lg:text-4xl')}>{children}</h2>
  } else if (size === 3) {
    return <h3 className={clsx(className, 'font-semibold')}>{children}</h3>
  }
}

type TitleProps = {
  size: 1 | 2 | 3
} & HTMLAttributes<HTMLHeadingElement>

export default Heading
