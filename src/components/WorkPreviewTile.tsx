import { clsx } from 'clsx'
import { HTMLAttributes } from 'react'
import Heading from './Heading'

const WorkPreviewTile = ({ children, title, className, link }: WorkPreviewTileProps) => {
  return (
    <a href={link} className={clsx('w-full', className)}>
      {children}
      <Heading size={2} className="mt-4 hover:underline">
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
