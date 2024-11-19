import { clsx } from 'clsx'
import { HTMLAttributes, ReactNode } from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'

const WorkTile = ({ children, title, links, className, text, top }: WorkTileWrapperProps) => {
  return (
    <div
      className={clsx(
        'flex w-full flex-col gap-8 px-6 pb-12 sm:px-8 md:px-12',
        title ? 'pt-6' : 'pt-12',
        className
      )}
    >
      {top && <>{top}</>}
      <div className="flex flex-col gap-3">
        {title && (
          <Heading size={2} className="pt-2">
            {title}
          </Heading>
        )}
        {text && <Paragraph>{text}</Paragraph>}
      </div>
      <div className="flex flex-col gap-4 md:flex-1">{children}</div>
      {links && <div className="flex flex-col gap-y-2">{links}</div>}
    </div>
  )
}

type WorkTileWrapperProps = {
  links?: ReactNode
  top?: ReactNode
  title?: string
  text?: string
} & HTMLAttributes<HTMLDivElement>

export default WorkTile
