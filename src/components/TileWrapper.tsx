import { PropsWithChildren } from 'react'

const TileWrapper = ({
  children,
  className = '',
  padding = false,
}: PropsWithChildren<TileWrapperProps>) => {
  return (
    <div className="rounded-lg bg-gradient-to-t from-zinc-600/0 to-zinc-600/30 p-px shadow-2xl backdrop-blur">
      <div
        className={
          'overflow-hidden rounded-lg bg-gradient-to-tr from-neutral-900/30 to-zinc-900 ' +
          // 'overflow-hidden rounded-lg bg-zinc-800 '+
          className +
          (padding ? ' p-6 pt-8' : '')
        }
      >
        {children}
      </div>
    </div>
  )
}

export interface TileWrapperProps {
  children: PropsWithChildren
  className?: string | '' | undefined
  padding?: boolean
}

export default TileWrapper
