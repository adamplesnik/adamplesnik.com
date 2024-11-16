import { PropsWithChildren } from 'react'
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
  default: 2,
  639: 1,
}

const MasonryWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="-ml-4 flex w-auto"
      columnClassName="pl-4 bg-clip-padding *:pb-4"
    >
      {children}
    </Masonry>
  )
}

export default MasonryWrapper
