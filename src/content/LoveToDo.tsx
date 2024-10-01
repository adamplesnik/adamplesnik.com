import Tile from '@/components/Tile'

const skills = [
  'React',
  'Tailwind CSS',
  'CSS + Sass',
  'Theme refactoring',
  'Figma',
  'Framer motion',
  'Vue.js',
]

const LoveToDo = () => {
  return (
    <Tile title="Tech" className="shrink-0">
      <ul className="flex flex-col gap-2">
        {skills.map((skill, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="block h-px w-6 bg-zinc-600" />
            {skill}
          </li>
        ))}
      </ul>
    </Tile>
  )
}

export default LoveToDo
