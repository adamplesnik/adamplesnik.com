import { PropsWithChildren } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const DemoWrapper = ({ children, className = '' }: PropsWithChildren<DemoWrapperProps>) => {
  return (
    <div
      className={
        'relative mb-4 overflow-y-auto overflow-x-hidden rounded-lg border border-zinc-700 bg-black/10' +
        addWithSpace(className)
      }
    >
      {children}
    </div>
  )
}

export interface DemoWrapperProps {
  children: PropsWithChildren
  className?: string
}

export default DemoWrapper
