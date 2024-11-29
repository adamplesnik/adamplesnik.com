import { clsx } from 'clsx'
import { HTMLAttributes } from 'react'
import Heading from './Heading'

const WorkPreviewTile = ({ children, title, className, link }: WorkPreviewTileProps) => {
  return (
    <a href={link} className={clsx('w-full', className)}>
      <div className="mb-4">{children}</div>
      <Heading size={2} className="hover:underline">
        {title} &rarr;
      </Heading>
    </a>
  )
}

type WorkPreviewTileProps = {
  title: string
  link: string
} & HTMLAttributes<HTMLDivElement>

export default WorkPreviewTile
