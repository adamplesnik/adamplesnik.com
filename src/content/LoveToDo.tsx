import Tile from '@/components/Tile'

const skills = [
  'Tailwind CSS',
  'TSX/HTML templates',
  'CSS + Sass',
  'Theme refactoring',
  'Figma',
  'React',
  'CSS animations',
  'Framer motion',
  'Vue.js',
]

const LoveToDo = () => {
  return (
    <Tile title="What I love to do">
      <ul className="grid gap-2 sm:grid-flow-col sm:grid-rows-5">
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
