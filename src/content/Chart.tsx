import clsx from 'clsx'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { useState } from 'react'
import ChartItem from '../components/ChartItem'

type CircleType = {
  size: string
  color: string
  top: string
  left: string
  z: number
  title: string
  desc: string
  for: string
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
    for: 'ux',
  },
  {
    size: '700px',
    color: '#FEC84B',
    top: '-17%',
    left: '25%',
    z: 3,
    title: 'UI design',
    desc: 'Clean layouts, strong typography, visual clarity, and a touch of happiness.',
    for: 'ui',
  },
  {
    size: '500px',
    color: '#40E8F4',
    top: '-1%',
    left: '71%',
    z: 2,
    title: 'Frontend dev',
    desc: 'Micro-sites to large scale applications, strive for reusability, simplicity.',
    for: 'dev',
  },
  {
    size: '350px',
    color: '#999',
    top: '36%',
    left: '-3%',
    z: 5,
    title: 'Pen & paper',
    desc: 'Sketching, brain dumps, diagrams, schemas.',
    for: 'paper',
  },
  {
    size: '600px',
    color: '#EB46EB',
    top: '41%',
    left: '14%',
    z: 4,
    title: 'Figma',
    desc: 'Mockups and prototypes, design systems, variables, modes.',
    for: 'figma',
  },
  {
    size: '500px',
    color: '#9D0814',
    top: '42%',
    left: '64%',
    z: 1,
    title: 'React',
    desc: 'TSX, state, queries, micro components, API.',
    for: 'react',
  },
]

const Chart = () => {
  const [activeItems, setActiveItems] = useState<{ [key: string]: boolean }>({
    ux: true,
    ui: true,
    dev: true,
    paper: true,
    figma: true,
    react: true,
  })

  const skills = circles.slice(0, 3)
  const tech = circles.slice(3, 6)

  const toggleActive = (item: string) => {
    setActiveItems((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }))
  }

  return (
    <div className="md:h-[200vh]">
      <div className="sticky top-0 min-h-svh w-full">
        <div className="absolute inset-0 z-10 bg-white/10 backdrop-blur-[60px] dark:bg-zinc-900/20"></div>
        <div className="absolute inset-0 overflow-hidden">
          {circles.map((circle, i) => {
            const isActive = activeItems[circle.for] === true
            return (
              <div
                key={`circle_${i}`}
                className={clsx(
                  'absolute -translate-x-1/3 rounded-full transition-[opacity,transform] duration-700 ease-in-out sm:-translate-x-1/4',
                  isActive
                    ? 'scale-75 opacity-80 sm:scale-90 md:scale-100 lg:scale-110'
                    : 'scale-50 opacity-0',
                  i === 2 && 'translate-y-1/4 sm:translate-y-[15%] md:translate-y-0',
                  i === 5 && 'translate-y-1/3 sm:translate-y-[15%] md:translate-y-0'
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
            )
          })}
        </div>
        <div className="relative z-20 flex min-h-svh w-full flex-col justify-between gap-8 p-12">
          <div className="flex max-w-80 flex-col items-baseline gap-12 md:max-w-full md:flex-row">
            {skills.map((skill, i) => (
              <ChartItem
                onClick={() => toggleActive(skill.for)}
                title={skill.title}
                desc={skill.desc}
                key={`skill_${i}`}
                isActive={activeItems[skill.for] === true}
              />
            ))}
            <div className="hidden flex-1 lg:block"></div>
          </div>
          <div className="flex flex-row justify-center gap-6 text-white md:items-center md:gap-12 dark:text-zinc-900">
            <div className="hidden flex-1 lg:block"></div>
            <div className="my-12 flex flex-1 items-center gap-2">
              <ArrowUp strokeWidth={1.5} className="-rotate-45" />
              My skills
            </div>
            <div className="hidden flex-1 md:block lg:hidden"></div>
            <div className="flex flex-1 items-center gap-2">
              Tech
              <ArrowDown strokeWidth={1.5} className="-rotate-45" />
            </div>
            <div className="hidden flex-1 lg:block"></div>
          </div>
          <div className="flex gap-6">
            <div className="hidden sm:block sm:flex-1 md:hidden"></div>
            <div className="flex max-w-80 flex-col items-baseline justify-end gap-12 sm:flex-1 md:mt-0 md:max-w-full md:flex-auto md:flex-row">
              <div className="hidden flex-1 lg:block"></div>
              {tech.map((t, i) => (
                <ChartItem
                  onClick={() => toggleActive(t.for)}
                  title={t.title}
                  desc={t.desc}
                  key={`skill_${i + 3}`}
                  isActive={activeItems[t.for] === true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
