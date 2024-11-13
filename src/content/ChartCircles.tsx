import clsx from 'clsx'
import { ActiveItemsType } from './Chart'

export type CircleType = {
  for: string
  size: string
  color: string
  top: string
  left: string
  z: number
}

const ChartCircles = ({
  circles,
  activeItems,
}: {
  circles: CircleType[]
  activeItems: ActiveItemsType
}) => {
  return (
    <div className="absolute inset-0 size-full">
      {circles.map((circle) => (
        <div
          className={clsx('absolute rounded-full')}
          style={{
            width: circle.size,
            height: circle.size,
            background: circle.color,
            top: circle.top,
            left: circle.left,
            zIndex: circle.z,
          }}
        ></div>
      ))}
    </div>
  )
}
export default ChartCircles
