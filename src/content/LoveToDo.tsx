import Tile from '@/components/Tile'
import { Sparkles } from 'lucide-react'

const skills = ['React', 'Tailwind CSS', 'CSS + Sass', 'Theme refactoring', 'Figma']

const LoveToDo = () => {
  return (
    <Tile title="Tech" className="shrink-0">
      <ul className="flex flex-col gap-2">
        {skills.map((skill, i) => (
          <li key={i} className="group flex items-center gap-2">
            <Sparkles className="size-4 opacity-0 group-first:opacity-100" />
            {skill}
          </li>
        ))}
      </ul>
    </Tile>
  )
}

export default LoveToDo
