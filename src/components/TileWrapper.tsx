import { PropsWithChildren } from 'react'

const TileWrapper = ({
  children,
  className = '',
  padding = false,
}: PropsWithChildren<TileWrapperProps>) => {
  return (
    <div
      className={
        'overflow-hidden rounded-lg border border-zinc-600/20 bg-gradient-to-tr from-zinc-800/30 to-zinc-900 shadow-2xl ' +
        className +
        (padding ? ' px-6 pb-2 pt-8' : '')
      }
    >
      {children}
    </div>
  )
}

export interface TileWrapperProps {
  children: PropsWithChildren
  className?: string | '' | undefined
  padding?: boolean
}

export default TileWrapper
