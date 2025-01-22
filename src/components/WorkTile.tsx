import { clsx } from 'clsx'
import { HTMLAttributes, ReactNode, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import Heading from './Heading'
import Link from './Link'
import Paragraph from './Paragraph'

const WorkTile = ({
  children,
  title,
  links,
  className,
  text,
  top,
  more,
  id,
}: WorkTileWrapperProps) => {
  const [moreVisible, setMoreVisible] = useState(false)

  return (
    <div
      className={clsx('relative flex w-full flex-col gap-8 px-6 pb-12 sm:px-8 md:px-12', className)}
    >
      <span id={id} className="absolute -top-12 block" />
      {top && (
        <Fade triggerOnce cascade>
          {top}
        </Fade>
      )}
      <Fade triggerOnce cascade damping={0.1}>
        <div className="flex flex-col gap-4 md:flex-row md:gap-12">
          {title && (
            <Heading size={2} className="flex-1 shrink-0">
              {title}
            </Heading>
          )}
          <div className="flex flex-col gap-6 md:flex-[2]">
            {text && <Paragraph>{text}</Paragraph>}
            {more && (
              <>
                <div
                  className={clsx(
                    'flex flex-col gap-6 overflow-hidden transition-[max-height] duration-500',
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
        </div>
      </Fade>
      <Fade triggerOnce cascade damping={2}>
        <div className="flex flex-col gap-4 md:flex-1">{children}</div>
      </Fade>
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
