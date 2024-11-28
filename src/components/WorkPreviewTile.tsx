import { clsx } from 'clsx'
import { HTMLAttributes } from 'react'
import Heading from './Heading'

const WorkPreviewTile = ({ children, title, className, link }: WorkPreviewTileProps) => {
  return (
    <a href={link} className={clsx('flex w-full flex-col gap-6 p-6 sm:p-8 md:p-12', className)}>
      <div className="flex flex-col gap-4 md:flex-1">{children}</div>
      <Heading size={2}>{title} &rarr;</Heading>
    </a>
  )
}

type WorkPreviewTileProps = {
  title: string
  link: string
} & HTMLAttributes<HTMLDivElement>

export default WorkPreviewTile
