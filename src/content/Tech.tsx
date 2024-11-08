import Em from '@/components/Em'
import Icon from '@/components/Icon'
import Tile from '@/components/Tile'
import { DraftingCompass, LucideIcon, Sparkles } from 'lucide-react'

const skills: { tech: string; description: string; skillIcon?: LucideIcon }[] = [
  {
    tech: 'Figma',
    description: 'Mockups and prototypes, design systems, modes.',
    skillIcon: DraftingCompass,
  },
  {
    tech: 'React',
    description: 'TSX, state, queries, micro components, API.',
    skillIcon: Sparkles,
  },
  { tech: 'Tailwind CSS', description: 'Utility first.' },
  { tech: 'HTML, CSS, Sass', description: 'SEO, a11y, animations, transitions.' },
  {
    tech: 'Theme refactoring',
    description: 'Reorganization and tuning of front-end.',
  },
  { tech: '...and more', description: 'Payload CMS, Angular, Vue.js, Vaadin + Java' },
]

const Tech = () => {
  return (
    <Tile title="Tech" className="shrink-0 print:break-after-page">
      <ul className="grid gap-5 md:grid-flow-col-dense md:grid-rows-3">
        {skills.map((skill, i) => (
          <li key={i} className="group flex items-baseline gap-2">
            <div className="w-6">{skill.skillIcon && <Icon Icon={skill.skillIcon} />}</div>
            <span className="flex flex-col gap-1">
              <Em>{skill.tech}</Em>
              <span className="block text-sm text-zinc-500">{skill.description}</span>
            </span>
          </li>
        ))}
      </ul>
    </Tile>
  )
}

export default Tech
