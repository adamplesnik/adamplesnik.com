import { Repeat } from 'lucide-react'
import { MouseEventHandler } from 'react'

const ActionButton = ({ onClick }: ReplayButtonProps) => {
  return (
    <div
      onClick={onClick}
      title="Replay"
      className="ease-custom group flex size-7 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-500 to-indigo-400 shadow-lg
          transition-[transform,background] delay-100 duration-500 hover:rotate-[180deg] hover:scale-110 hover:text-white
          "
    >
      <Repeat className="size-4" />
      <div className="absolute -z-10 size-full rounded-full bg-indigo-800 opacity-0 transition-opacity duration-700 group-hover:opacity-45"></div>
    </div>
  )
}

export interface ReplayButtonProps {
  onClick: MouseEventHandler
}

export default ActionButton
