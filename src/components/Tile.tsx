import { clsx } from 'clsx'
import { MousePointerClick } from 'lucide-react'
import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import Heading from './Heading'
import Icon from './Icon'

const Tile = ({
  sub,
  children,
  title,
  badge,
  links,
  className,
}: PropsWithChildren<TileWrapperProps>) => {
  return (
    <div className={clsx('mb-24', className)}>
      <div className="flex gap-1">
        {title && <Heading size={sub ? 3 : 2}>{title}</Heading>}
        {badge && badge}
      </div>
      {children}
      {links && (
        <div className="flex items-baseline gap-2">
          <Icon Icon={MousePointerClick} />
          <div className="flex flex-col gap-1">{links}</div>
        </div>
      )}
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
