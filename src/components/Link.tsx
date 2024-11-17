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
        'inline-block w-fit underline decoration-zinc-400 decoration-1 underline-offset-[3px] hover:decoration-current dark:decoration-zinc-500',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
