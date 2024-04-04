import { PropsWithChildren } from 'react'
import Heading from './Heading'
import { addWithSpace } from '../utils/addWithSpace'

const Tile = ({
  children,
  className = '',
  title,
  subTitle,
}: PropsWithChildren<TileWrapperProps>) => {
  return (
    <div
      className={
        'overflow-hidden rounded-lg border border-zinc-600/20 bg-gradient-to-tr from-zinc-800/20 to-zinc-800/40 px-6 pb-4 pt-8 shadow-2xl' +
        addWithSpace(className)
      }
    >
      <Heading size={2}>{title}</Heading>
      <Heading size={3}>{subTitle}</Heading>
      {children}
    </div>
  )
}

export interface TileWrapperProps {
  children: PropsWithChildren
  title: string
  subTitle: string
  className?: string | '' | undefined
}

export default Tile
