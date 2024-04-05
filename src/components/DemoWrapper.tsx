import { Repeat, StepForward } from 'lucide-react'
import { PropsWithChildren } from 'react'
import { addWithSpace } from '../utils/addWithSpace'
import ActionButton from './ActionButton'

const replayButtonClick = () => {
  const wrapper = document.getElementById('demo-wrapper')
  wrapper &&
    wrapper.getAnimations({ subtree: true }).forEach((anim) => {
      anim.cancel()
      anim.play()
    })
}

const DemoWrapper = ({
  children,
  className = '',
  actionButton = false,
}: PropsWithChildren<DemoWrapperProps>) => {
  return (
    <div
      id="demo-wrapper"
      className={
        'relative mb-4 rounded-lg border border-zinc-700 bg-black/10' + addWithSpace(className)
      }
    >
      {children}
      {actionButton && (
        <div className="absolute right-3 top-3">
          <ActionButton
            Icon={Repeat}
            IconOnClick={StepForward}
            clickAction={() => replayButtonClick()}
            tooltip="Replay"
          />{' '}
        </div>
      )}
    </div>
  )
}

export interface DemoWrapperProps {
  children: PropsWithChildren
  className?: string
  actionButton?: boolean
}

export default DemoWrapper
