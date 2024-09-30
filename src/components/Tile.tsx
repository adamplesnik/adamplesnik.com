import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import { addWithSpace } from '../utils/addWithSpace'
import Heading from './Heading'

const Tile = ({
  children,
  className,
  title,
  badge,
  links,
}: PropsWithChildren<TileWrapperProps>) => {
  return (
    <div className={'' + addWithSpace(className)}>
      <div className="flex gap-1">
        <Heading size={4}>{title}</Heading>
        {badge && badge}
      </div>
      {children}
      {links && <div className="flex flex-col gap-2 pt-2">{links}</div>}
    </div>
  )
}

export type TileWrapperProps = {
  children: PropsWithChildren
  title: string
  className?: string | '' | undefined
  badge?: ReactNode
  links?: ReactNode
} & HTMLAttributes<HTMLDivElement>

export default Tile
