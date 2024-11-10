import Tile from '@/components/Tile'
import clsx from 'clsx'
import { ArrowRight, DraftingCompass, LucideIcon, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import TechContent from './TechContent'

export type SkillType = {
  tech: string
  description: string
  skillIcon?: LucideIcon
  link?: string
  linkIcon?: LucideIcon
}

const skills: SkillType[] = [
  {
    tech: 'Figma',
    description: 'Mockups and prototypes, design systems, modes.',
    skillIcon: DraftingCompass,
    link: '/figma',
    linkIcon: ArrowRight,
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
    <Tile title="Skills & tech" className="shrink-0 print:break-after-page">
      <ul className="grid gap-5 md:grid-flow-col-dense md:grid-rows-3">
        {skills.map((skill, i) => (
          <li key={i} className={clsx('group flex items-baseline gap-2')}>
            {skill.link ? (
              <Link to={skill.link} className="flex items-baseline gap-2">
                <TechContent skill={skill} />
              </Link>
            ) : (
              <TechContent skill={skill} />
            )}
          </li>
        ))}
      </ul>
    </Tile>
  )
}

export default Tech
