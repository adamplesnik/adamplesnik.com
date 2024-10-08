import clsx from 'clsx'
import { AnchorHTMLAttributes } from 'react'

const Link = ({
  href,
  children,
  target = '_blank',
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      target={target}
      className={clsx(
        'flex items-center text-zinc-700 underline decoration-zinc-600 hover:text-black hover:decoration-zinc-800 dark:text-zinc-300 dark:decoration-zinc-500 dark:hover:text-zinc-50 dark:hover:decoration-zinc-100',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
