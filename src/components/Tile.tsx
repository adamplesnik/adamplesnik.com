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
    <div className={'' + addWithSpace(className)}>
      <Heading size={3}>{title}</Heading>
      <Heading size={4}>{subTitle}</Heading>
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
