import { useState } from 'react'
import ChartCircles, { CircleType } from './ChartCircles'

export type ActiveItemsType = {
  ux: boolean
  ui: boolean
  dev: boolean
  paper: boolean
  figma: boolean
  react: boolean
}

const circles: CircleType[] = [
  {
    for: 'ux',
    size: '421px',
    color: '#DDDF73',
    top: '10%',
    left: '5%',
    z: 1,
  },
  {
    for: 'ui',
    size: '564px',
    color: '#FEC84B',
    top: '2%',
    left: '30%',
    z: 1,
  },
]

const Chart = () => {
  const [activeItems] = useState<ActiveItemsType>({
    ux: true,
    ui: true,
    dev: true,
    paper: true,
    figma: true,
    react: true,
  })

  return (
    <div className="h-[200vh]">
      <div className="re sticky top-0 h-screen w-full">
        <div className="absolute inset-0 z-10 bg-white/30 backdrop-blur-[80px]"></div>
        <ChartCircles circles={circles} activeItems={activeItems} />
        <div className="relative z-20 flex size-full flex-col justify-between p-12">
          <div className="flex items-baseline gap-12">lkasdf</div>
          <div className="flex items-baseline justify-end gap-12">lkasdf</div>
        </div>
      </div>
    </div>
  )
}

export default Chart
