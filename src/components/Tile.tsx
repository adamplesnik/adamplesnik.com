import { clsx } from 'clsx'
import { MousePointerClick } from 'lucide-react'
import { HTMLAttributes, ReactNode } from 'react'
import Heading from './Heading'
import Icon from './Icon'

const Tile = ({ sub, children, title, badge, links, className }: TileWrapperProps) => {
  return (
    <div className={clsx('px-12', className)}>
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

type TileWrapperProps = {
  badge?: ReactNode
  links?: ReactNode
  sub?: boolean
  title?: string
} & HTMLAttributes<HTMLDivElement>

export default Tile
