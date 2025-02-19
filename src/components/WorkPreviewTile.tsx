import { clsx } from 'clsx'
import { HTMLAttributes } from 'react'
import { Fade } from 'react-awesome-reveal'
import CustomImg from './CustomImg'
import Heading from './Heading'

const WorkPreviewTile = ({ title, className, link, src, titleRight }: WorkPreviewTileProps) => {
  return (
    <Fade triggerOnce className="group relative">
      <a
        href={link}
        className={clsx('group w-full overflow-hidden rounded-lg md:rounded-2xl', className)}
      >
        <div className="aspect-2/1 overflow-hidden rounded-lg md:rounded-2xl lg:aspect-[2.5/1]">
          <CustomImg
            src={src}
            alt={title}
            className="transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.02]"
          />
        </div>
        <Heading
          size={2}
          className={clsx(
            'relative mt-4 inline-flex items-baseline gap-2 md:absolute md:top-4 md:max-w-72 lg:max-w-full',
            'after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-full after:max-w-0 after:bg-current after:transition-[max-width] after:ease-out group-hover:after:max-w-full md:after:h-[3px]',
            titleRight ? 'md:right-8' : 'md:left-8'
          )}
        >
          {title}
        </Heading>
      </a>
    </Fade>
  )
}

type WorkPreviewTileProps = {
  title: string
  link: string
  src: string | undefined
  titleRight?: boolean | undefined
} & HTMLAttributes<HTMLDivElement>

export default WorkPreviewTile
