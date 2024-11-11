import clsx from 'clsx'
import Em from '../components/Em'
import Icon from '../components/Icon'
import { TechType } from './Tech'

const TechContent = ({ tech }: { tech: TechType }) => {
  return (
    <>
      <div className="w-6">{tech.techIcon && <Icon Icon={tech.techIcon} />}</div>
      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-1">
          <Em className={clsx(tech.link && 'underline decoration-1 underline-offset-2')}>
            {tech.tech}
          </Em>
          {tech.linkIcon && (
            <Icon
              Icon={tech.linkIcon}
              noTranslate
              className="-translate-x-1 opacity-0 transition-[transform,opacity] duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
            />
          )}
        </span>
        <span className="block text-sm opacity-70">{tech.description}</span>
      </div>
    </>
  )
}

export default TechContent
