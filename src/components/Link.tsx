import { LucideIcon } from 'lucide-react'
import { PropsWithChildren } from 'react'

const Link = ({ Icon = undefined, href, children }: PropsWithChildren<LinkProps>) => {
  return (
    <div className="flex gap-2">
      {Icon ? <Icon /> : ''}
      <a href={href} target="_blank">
        {children}
      </a>
    </div>
  )
}

export interface LinkProps {
  href: string
  children: PropsWithChildren
  Icon?: LucideIcon | undefined
}

export default Link
