import { clsx } from 'clsx'
import { HTMLAttributes } from 'react'
import CustomImg from './CustomImg'
import Heading from './Heading'

const WorkPreviewTile = ({ title, className, link, src }: WorkPreviewTileProps) => {
  return (
    <a
      href={link}
      className={clsx(
        'group relative w-full overflow-hidden rounded-lg transition-shadow duration-500 hover:shadow-lg md:rounded-2xl',
        className
      )}
    >
      <div className="aspect-[2/1] overflow-hidden rounded-lg transition-[transform,opacity] duration-[400ms] ease-in-out group-hover:scale-[1.02] group-hover:opacity-80 md:rounded-2xl">
        <CustomImg src={src} alt={title} />
      </div>
      <Heading
        size={2}
        className="left-8 top-4 mt-4 hover:underline sm:max-w-64 md:absolute md:max-w-72 lg:max-w-full"
      >
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
