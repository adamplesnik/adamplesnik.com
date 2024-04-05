import { LucideIcon } from 'lucide-react'
import { MouseEventHandler } from 'react'

const ActionButton = ({ onClick, Icon, tooltip = '' }: ReplayButtonProps) => {
  return (
    <div onClick={onClick} title={tooltip} className="group cursor-pointer p-1">
      <div
        className="ease-custom flex size-6 items-center justify-center rounded-full bg-gradient-to-tr from-slate-400 to-indigo-500 text-zinc-100 opacity-80
          transition-[transform,color,opacity] duration-300 group-hover:scale-125 group-hover:opacity-100"
      >
        <Icon className="ease-custom size-3 delay-75 duration-300 group-hover:rotate-[180deg]" />
      </div>
    </div>
  )
}

export interface ReplayButtonProps {
  onClick: MouseEventHandler
  Icon: LucideIcon
  tooltip: string
}

export default ActionButton
