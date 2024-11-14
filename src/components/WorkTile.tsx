import { clsx } from 'clsx'
import { HTMLAttributes, ReactNode } from 'react'
import Heading from './Heading'

const WorkTile = ({ children, title, links, className }: WorkTileWrapperProps) => {
  return (
    <div className={clsx('flex min-h-screen w-full flex-col gap-12 p-12', className)}>
      {title && (
        <Heading size={2} className="sticky top-6">
          {title}
        </Heading>
      )}
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
