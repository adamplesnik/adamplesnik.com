import { PropsWithChildren } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const MasonryWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>{children}</Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryWrapper
