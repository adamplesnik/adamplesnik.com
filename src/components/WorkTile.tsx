import { clsx } from 'clsx'
import { HTMLAttributes, ReactNode } from 'react'
import Heading from './Heading'

const WorkTile = ({ children, title, links, className }: WorkTileWrapperProps) => {
  return (
    <div className={clsx('p-12', className)}>
      <div className="flex gap-1">{title && <Heading size={2}>{title}</Heading>}</div>
      {children}
      {links && <div className="flex flex-col gap-1">{links}</div>}
    </div>
  )
}

type WorkTileWrapperProps = {
  links?: ReactNode
  title?: string
} & HTMLAttributes<HTMLDivElement>

export default WorkTile
