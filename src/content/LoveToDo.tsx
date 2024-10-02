import Em from '@/components/Em'
import Tile from '@/components/Tile'
import { Sparkles } from 'lucide-react'

const skills: { tech: string; description: string }[] = [
  {
    tech: 'React',
    description: 'TSX, state as minimal as it gets, queries, micro components, API.',
  },
  { tech: 'Tailwind CSS', description: 'Atomic CSS everywhere.' },
  { tech: 'CSS + Sass', description: 'Where the Tailwind CSS is not enough.' },
  {
    tech: 'Theme refactoring',
    description: 'Reorganization and tuning of front-end parts of large app',
  },
  { tech: 'Figma', description: 'Mockups and prototypes.' },
  { tech: '...and more', description: 'Payload CMS, Angular, Vue.js, Vaadin + Java' },
]

const LoveToDo = () => {
  return (
    <Tile title="Tech" className="shrink-0">
      <ul className="grid gap-4 md:grid-flow-col-dense md:grid-rows-3">
        {skills.map((skill, i) => (
          <li key={i} className="group flex items-baseline gap-2">
            <Sparkles className="size-4 opacity-0 group-first:opacity-100" />
            <span className="flex flex-col gap-1">
              <Em>{skill.tech}</Em>
              <span className="block text-sm">{skill.description}</span>
            </span>
          </li>
        ))}
      </ul>
    </Tile>
  )
}

export default LoveToDo
