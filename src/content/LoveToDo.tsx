import Heading from '@/components/Heading'

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
    <div>
      <Heading size={3}>What I love to do</Heading>
      <ul className="mb-4 grid sm:grid-flow-col gap-3 sm:grid-rows-5">
        {skills.map((skill, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="block h-px w-6 bg-zinc-600" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LoveToDo
