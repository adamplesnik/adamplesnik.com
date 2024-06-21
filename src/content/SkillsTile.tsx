import Em from '../components/Em'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'

const skills = [
  'Tailwind CSS',
  'TSX/HTML templates',
  'CSS + Sass',
  'Theme refactoring',
  'Figma',
  'React',
  'Framer motion',
  'Vue.js',
]

const SkillsTile = () => {
  return (
    <div>
      <Heading size={3}>Skills</Heading>
      <Paragraph>
        I specialize in <Em>nicer parts of the front end universe</Em>. I write CSS and front end
        components for React, Vue.js, Angular and even Vaadin. My experience ranges from
        implementing Figma-based prototypes from scratch to refactoring huge projects.
      </Paragraph>
      <Paragraph>
        I have a <Em>passion for atomic components with atomic CSS</Em>, clean and meaningful UIs,
        micro interactions.
      </Paragraph>
      <Heading size={4}>What I love to do, ordered by seniority</Heading>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <li key={i} className="rounded bg-gradient-to-tr from-zinc-800 to-stone-800 p-2">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsTile
