import { addWithSpace } from '@/utils/addWithSpace'
import { HTMLAttributes } from 'react'

const Hr = ({ text, className, ...rest }: HrProps) => {
  return (
    <div className="my-4 flex items-center gap-2">
      {text && <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{text}</span>}
      <hr
        className={'h-px flex-1 border-none bg-gray-700 dark:bg-gray-300' + addWithSpace(className)}
        {...rest}
      />
    </div>
  )
}

export type HrProps = {
  text?: string
} & HTMLAttributes<HTMLHRElement>

export default Hr
