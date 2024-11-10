import clsx from 'clsx'
import Em from '../components/Em'
import Icon from '../components/Icon'
import { SkillType } from './Tech'

const TechContent = ({ skill }: { skill: SkillType }) => {
  return (
    <>
      <div className="w-6">{skill.skillIcon && <Icon Icon={skill.skillIcon} />}</div>
      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-1">
          <Em className={clsx(skill.link && 'underline decoration-1 underline-offset-2')}>
            {skill.tech}
          </Em>
          {skill.linkIcon && (
            <Icon
              Icon={skill.linkIcon}
              noTranslate
              className="-translate-x-1 opacity-0 transition-[transform,opacity] duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
            />
          )}
        </span>
        <span className="block text-sm opacity-70">{skill.description}</span>
      </div>
    </>
  )
}

export default TechContent