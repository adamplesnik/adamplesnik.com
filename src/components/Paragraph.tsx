import clsx from 'clsx'
import { HTMLAttributes } from 'react'

const Paragraph = ({
  children,
  className,
  big,
}: { big?: boolean } & HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={clsx(
        'w-full print:max-w-full',
        big
          ? 'text-2xl font-medium leading-snug sm:text-2xl md:text-3xl print:text-xl'
          : 'max-w-6xl leading-normal',
        className
      )}
    >
      {children}
    </p>
  )
}

export default Paragraph
