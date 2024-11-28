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
        'w-full leading-[1.42] print:max-w-full',
        big && 'text-2xl font-medium !leading-snug sm:text-3xl lg:text-4xl',
        className
      )}
    >
      {children}
    </p>
  )
}

export default Paragraph
