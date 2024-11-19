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
      className={clsx('inline-block w-fit underline hover:no-underline', className)}
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
