import { clsx } from 'clsx'
import { HTMLAttributes } from 'react'
import Paragraph from './Paragraph'

const WorkPreviewTile = ({ children, title, className, link }: WorkPreviewTileProps) => {
  return (
    <a href={link} className={clsx('w-full', className)}>
      <div className="mb-4">{children}</div>
      <Paragraph className="hover:underline">{title} &rarr;</Paragraph>
    </a>
  )
}

type WorkPreviewTileProps = {
  title: string
  link: string
} & HTMLAttributes<HTMLDivElement>

export default WorkPreviewTile
