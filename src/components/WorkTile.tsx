import { clsx } from 'clsx'
import { HTMLAttributes, ReactNode, useState } from 'react'
import Heading from './Heading'
import Link from './Link'
import Paragraph from './Paragraph'

const WorkTile = ({ children, title, links, className, text, top, more }: WorkTileWrapperProps) => {
  const [moreVisible, setMoreVisible] = useState(false)

  return (
    <div
      className={clsx(
        'flex w-full flex-col gap-8 px-6 pb-12 sm:px-8 md:px-12',
        title ? 'pt-6' : 'pt-12',
        className
      )}
    >
      {top && <>{top}</>}
      <div className="flex flex-col gap-4">
        {title && (
          <Heading size={2} className="pt-2">
            {title}
          </Heading>
        )}
        {text && <Paragraph>{text}</Paragraph>}
        {more && (
          <>
            <div
              className={clsx(
                'overflow-hidden transition-[max-height] duration-500',
                moreVisible ? 'max-h-[1000px] ease-in' : 'max-h-0 ease-out'
              )}
            >
              {more}
            </div>
            <Link className="cursor-pointer" onClick={() => setMoreVisible(!moreVisible)}>
              {moreVisible ? 'Hide details...' : 'Show details...'}
            </Link>
          </>
        )}
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
  more?: ReactNode
} & HTMLAttributes<HTMLDivElement>

export default WorkTile
