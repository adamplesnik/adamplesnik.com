import Paragraph from '@/components/Paragraph'
import clsx from 'clsx'

const ChartItem = ({
  title,
  desc,
  isActive,
  onClick,
}: {
  title: string
  desc: string
  isActive: boolean
  onClick: () => void
}) => {
  return (
    <div
      className={clsx(
        'flex-1 cursor-pointer transition-[transform,opacity] hover:scale-[1.02] active:scale-100 dark:text-white',
        !isActive && 'opacity-40 hover:opacity-80'
      )}
      onClick={onClick}
    >
      <Paragraph>
        <span className="relative mr-2.5 font-semibold">
          {title}
          <span
            className={clsx(
              'absolute left-0 top-2 h-0.5 w-full bg-current transition-[max-width] duration-300 ease-in-out',
              isActive ? 'max-w-0' : 'max-w-full delay-500'
            )}
          />
        </span>
        {desc}
      </Paragraph>
    </div>
  )
}

export default ChartItem
