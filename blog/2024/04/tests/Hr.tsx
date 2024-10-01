import { addWithSpace } from '@/utils/addWithSpace'
import { HTMLAttributes } from 'react'

const Hr = ({ text, textOrientation = 'start', className, ...rest }: HrProps) => {
  const flexOrderClassName = textOrientation === 'end' ? ' order-last' : ''

  return (
    <div
      className={
        'my-4 flex items-center gap-2 text-zinc-700 dark:text-zinc-300' + addWithSpace(className)
      }
      {...rest}
    >
      {text && <span className={'text-xs font-medium' + flexOrderClassName}>{text}</span>}
      <hr className="h-px flex-1 border-none bg-current" />
    </div>
  )
}

export type HrProps = {
  text?: string
  textOrientation?: 'start' | 'end'
} & HTMLAttributes<HTMLDivElement>

export default Hr
