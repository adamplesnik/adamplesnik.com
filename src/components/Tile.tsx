import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import Heading from './Heading'

const Tile = ({ children, title, badge, links }: PropsWithChildren<TileWrapperProps>) => {
  return (
    <div>
      <div className="flex gap-1">
        <Heading size={4}>{title}</Heading>
        {badge && badge}
      </div>
      {children}
      {links && <div className="flex flex-col gap-2">{links}</div>}
    </div>
  )
}

export type TileWrapperProps = {
  children: PropsWithChildren
  title: string
  badge?: ReactNode
  links?: ReactNode
} & HTMLAttributes<HTMLDivElement>

export default Tile
