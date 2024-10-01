import { addWithSpace } from '@/utils/addWithSpace'
import { HTMLAttributes } from 'react'

const Hr = ({ text, className, ...rest }: HrProps) => {
  return (
    <div
      className={
        'my-4 flex items-center gap-2 text-zinc-700 dark:text-zinc-300' + addWithSpace(className)
      }
      {...rest}
    >
      {text && <span className="text-xs font-medium">{text}</span>}
      <hr className="h-px flex-1 border-none bg-current" />
    </div>
  )
}

export type HrProps = {
  text?: string
} & HTMLAttributes<HTMLDivElement>

export default Hr
