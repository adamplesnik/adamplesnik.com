import { PropsWithChildren } from 'react'

const Link = ({ href, children, target = '_blank' }: PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={href}
      target={target}
      className="flex items-center text-zinc-500 underline decoration-zinc-400 hover:text-zinc-900 hover:decoration-zinc-800 print:text-zinc-700"
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
