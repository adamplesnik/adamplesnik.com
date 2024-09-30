import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import { addWithSpace } from '../utils/addWithSpace'
import Heading from './Heading'

const Tile = ({ children, className, title, badge }: PropsWithChildren<TileWrapperProps>) => {
  return (
    <div className={'' + addWithSpace(className)}>
      <div className="flex justify-between">
        <Heading size={4}>{title}</Heading>
        {badge && badge}
      </div>
      {children}
    </div>
  )
}

export type TileWrapperProps = {
  children: PropsWithChildren
  title: string
  className?: string | '' | undefined
  badge?: ReactNode
} & HTMLAttributes<HTMLDivElement>

export default Tile
