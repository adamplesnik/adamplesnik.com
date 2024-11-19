import Heading from '@/components/Heading'
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
      <Heading size={3} className={clsx('relative mb-2 inline-block text-nowrap')}>
        {title}
        <div
          className={clsx(
            'absolute left-0 top-1/2 h-0.5 w-full bg-current transition-[max-width] duration-300 ease-in-out',
            isActive ? 'max-w-0' : 'max-w-full delay-500'
          )}
        />
        <div
          className={clsx(
            'absolute bottom-1 left-0 h-0.5 w-full bg-transparent transition-[max-width] duration-300 ease-in-out',
            isActive ? 'max-w-full delay-500' : 'max-w-0'
          )}
        />
      </Heading>
      <Paragraph>{desc}</Paragraph>
    </div>
  )
}

export default ChartItem
