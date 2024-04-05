import { LucideIcon } from 'lucide-react'
import { MouseEventHandler, useState } from 'react'

const ActionButton = ({
  clickAction,
  Icon,
  IconOnClick = undefined,
  tooltip = '',
}: ReplayButtonProps) => {
  const [clicked, setClicked] = useState(false)
  function handleClick() {
    clickAction
    setClicked(true)
    setTimeout(() => setClicked(false), 3000)
  }
  return (
    <div onClick={() => handleClick()} title={tooltip} className="group cursor-pointer p-1">
      <div
        className={
          'relative flex size-6 items-center justify-center rounded-full bg-gradient-to-tr from-slate-400 to-indigo-500 text-zinc-100 opacity-80 ease-custom ' +
          'overflow-hidden transition-[transform,opacity] duration-300 group-hover:scale-125 group-hover:opacity-100 ' +
          (clicked ? 'scale-125' : 'group-hover:scale-125')
        }
      >
        <Icon
          className={
            'absolute size-3 transition-[opacity,transform] duration-500 ease-custom group-hover:rotate-180 ' +
            (clicked ? 'translate-y-24 rotate-180 delay-300' : 'translate-y-0 delay-75')
          }
        />
        {IconOnClick && (
          <IconOnClick
            className={
              'size-3 transition-[opacity,transform] duration-[1s] ease-custom ' +
              (clicked ? 'translate-y-0' : '-translate-y-24')
            }
          />
        )}
      </div>
    </div>
  )
}

export interface ReplayButtonProps {
  clickAction: MouseEventHandler
  Icon: LucideIcon
  IconOnClick?: LucideIcon | undefined
  tooltip: string
}

export default ActionButton
