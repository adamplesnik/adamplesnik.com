import Tile from '@/components/Tile'
import clsx from 'clsx'
import { DraftingCompass, LucideIcon, Sparkles } from 'lucide-react'
import TechContent from './TechContent'

export type TechType = {
  tech: string
  description: string
  techIcon?: LucideIcon
  link?: string
  linkIcon?: LucideIcon
}

const tech: TechType[] = [
  {
    tech: 'Figma',
    description: 'Mockups and prototypes, design systems, variables, modes.',
    techIcon: DraftingCompass,
  },
  {
    tech: 'React',
    description: 'TSX, state, queries, micro components, API.',
    techIcon: Sparkles,
  },
  { tech: 'HTML, CSS, Sass', description: 'Tailwind CSS, a11y, animations, transitions.' },
  { tech: '...and more', description: 'Payload CMS, Angular, Vue.js, Vaadin + Java' },
]

const Tech = () => {
  return (
    <Tile title="Tech" className="shrink-0 print:break-after-page">
      <ul className="grid gap-5 md:grid-flow-col-dense md:grid-rows-2">
        {tech.map((tx, i) => (
          <li key={i} className={clsx('group flex items-baseline gap-2')}>
            <TechContent tech={tx} />
          </li>
        ))}
      </ul>
    </Tile>
  )
}

export default Tech
