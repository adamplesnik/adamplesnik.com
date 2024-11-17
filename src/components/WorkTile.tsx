import { clsx } from 'clsx'
import { HTMLAttributes, ReactNode } from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'

const WorkTile = ({ children, title, links, className, text }: WorkTileWrapperProps) => {
  return (
    <div className={clsx('flex w-full flex-col gap-8 p-12', className)}>
      {title && (
        <Heading size={2} className="sticky top-8 z-20">
          {title}
        </Heading>
      )}
      <div className="flex max-w-screen-lg flex-col gap-8">
        <Paragraph>{text}</Paragraph>
        <div className="flex flex-col gap-4 md:flex-1">{children}</div>
      </div>
      {links && <div className="flex flex-col gap-1">{links}</div>}
    </div>
  )
}

type WorkTileWrapperProps = {
  links?: ReactNode
  title?: string
  text?: string
} & HTMLAttributes<HTMLDivElement>

export default WorkTile
