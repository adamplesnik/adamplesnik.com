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
    <div className={clsx('flex-1')}>
      <div onClick={onClick} className="inline-block cursor-pointer">
        <Heading
          size={2}
          className={clsx(
            'group relative mb-2 inline-block text-nowrap transition-transform hover:scale-105 active:scale-95',
            !isActive && 'opacity-60 hover:opacity-100'
          )}
        >
          {title}
          <div
            className={clsx(
              'absolute left-0 top-1/2 h-px w-full bg-black transition-[max-width] duration-300 ease-in-out',
              isActive ? 'max-w-0' : 'max-w-full delay-500'
            )}
          />
          <div
            className={clsx(
              'absolute bottom-1 left-0 h-px w-full bg-black transition-[max-width] duration-300 ease-in-out',
              isActive ? 'max-w-full delay-500' : 'max-w-0'
            )}
          />
        </Heading>
      </div>
      <Paragraph
        className={clsx(
          'transition-opacity delay-150 duration-300',
          !isActive && 'pointer-events-none opacity-0'
        )}
      >
        {desc}
      </Paragraph>
    </div>
  )
}

export default ChartItem
