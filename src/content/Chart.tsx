import clsx from 'clsx'
import { useState } from 'react'
import ChartItem from './ChartItem'

type CircleType = {
  size: string
  color: string
  top: string
  left: string
  z: number
  title: string
  desc: string
}

type ActiveItemsType = {
  ux: boolean
  ui: boolean
  dev: boolean
  paper: boolean
  figma: boolean
  react: boolean
}

const circles: CircleType[] = [
  {
    size: '400px',
    color: '#DDDF73',
    top: '-3%',
    left: '-2%',
    z: 6,
    title: 'UX',
    desc: 'Painting the large picture, maps and wireframes, user research and feedback.',
  },
  {
    size: '700px',
    color: '#FEC84B',
    top: '-17%',
    left: '25%',
    z: 3,
    title: 'UI design',
    desc: 'Clean layouts, strong typography, visual clarity, and a touch of happiness.',
  },
  {
    size: '500px',
    color: '#40E8F4',
    top: '-1%',
    left: '71%',
    z: 2,
    title: 'Frontend dev',
    desc: 'Micro-sites to large scale applications, strive for reusability, simplicity.',
  },
  {
    size: '350px',
    color: '#999',
    top: '36%',
    left: '-3%',
    z: 5,
    title: 'Pen & paper',
    desc: 'Sketching, brain dumps, diagrams, schemas.',
  },
  {
    size: '600px',
    color: '#EB46EB',
    top: '41%',
    left: '14%',
    z: 4,
    title: 'Figma',
    desc: 'Mockups and prototypes, design systems, variables, modes.',
  },
  {
    size: '500px',
    color: '#9D0814',
    top: '42%',
    left: '64%',
    z: 1,
    title: 'React',
    desc: 'TSX, state, queries, micro components, API.',
  },
]

const Chart = () => {
  const [activeItems, setActiveItems] = useState<ActiveItemsType>({
    ux: true,
    ui: true,
    dev: true,
    paper: true,
    figma: true,
    react: true,
  })

  const skills = circles.slice(0, 3)
  const tech = circles.slice(3, 6)

  return (
    <div className="h-[200vh]">
      <div className="sticky top-0 min-h-svh w-full">
        <div className="absolute inset-0 z-10 bg-white/30 backdrop-blur-[60px]"></div>
        <div className="absolute inset-0 overflow-hidden">
          {circles.map((circle) => (
            <div
              className={clsx(
                'absolute scale-75 rounded-full opacity-80 sm:scale-90 md:scale-100 lg:scale-110'
              )}
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
        <div className="relative z-20 flex min-h-screen w-full flex-col justify-between p-12">
          <div className="flex max-w-56 flex-col items-baseline gap-12 md:max-w-full md:flex-row">
            {skills.map((skill) => (
              <ChartItem title={skill.title} desc={skill.desc} item={0} />
            ))}
            <div className="hidden flex-1 lg:block"></div>
          </div>
          <div className="mt-32 flex max-w-56 flex-col items-baseline justify-end gap-12 md:max-w-full md:flex-row">
            <div className="hidden flex-1 lg:block"></div>
            {tech.map((t) => (
              <ChartItem title={t.title} desc={t.desc} item={0} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart