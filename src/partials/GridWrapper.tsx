import { PropsWithChildren } from 'react'

const GridWrapper = ({ children }: PropsWithChildren) => {
  return <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
}

export default GridWrapper
