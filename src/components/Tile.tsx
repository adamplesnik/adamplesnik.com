import { clsx } from 'clsx'
import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import Heading from './Heading'

const Tile = ({
  sub,
  children,
  title,
  badge,
  links,
  className,
}: PropsWithChildren<TileWrapperProps>) => {
  return (
    <div className={clsx('mb-12', className)}>
      <div className="flex gap-1">
        {title && <Heading size={sub ? 3 : 2}>{title}</Heading>}
        {badge && badge}
      </div>
      {children}
      {links && <div className="flex flex-col gap-2">{links}</div>}
    </div>
  )
}

export type TileWrapperProps = {
  children: PropsWithChildren
  sub?: boolean
  title?: string
  badge?: ReactNode
  links?: ReactNode
} & HTMLAttributes<HTMLDivElement>

export default Tile
