import { clsx } from 'clsx'
import { HTMLAttributes } from 'react'
import CustomImg from './CustomImg'
import Heading from './Heading'

const WorkPreviewTile = ({ title, className, link, src }: WorkPreviewTileProps) => {
  return (
    <a href={link} className={clsx('w-full', className)}>
      <CustomImg src={src} alt={title} className="aspect-[2/1]" />
      <Heading size={2} className="mt-4 hover:underline">
        {title} &rarr;
      </Heading>
    </a>
  )
}

type WorkPreviewTileProps = {
  title: string
  link: string
  src: string | undefined
} & HTMLAttributes<HTMLDivElement>

export default WorkPreviewTile
