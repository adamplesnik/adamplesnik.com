import { PropsWithChildren } from 'react'

const Link = ({ href, children, target = '_blank' }: PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={href}
      target={target}
      className="flex items-center text-zinc-900 hover:text-zinc-700 print:text-zinc-700"
    >
      {children}
    </a>
  )
}

export interface LinkProps {
  children: PropsWithChildren
  href?: string
  target?: string
}

export default Link
