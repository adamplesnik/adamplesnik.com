import { PropsWithChildren } from 'react'

const Link = ({ href, children, target = '_blank' }: PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={href}
      target={target}
      className="flex items-center text-zinc-700 underline decoration-zinc-600 hover:text-black hover:decoration-zinc-800"
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
