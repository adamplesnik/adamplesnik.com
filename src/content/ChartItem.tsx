import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'

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
    <div className="flex-1" onClick={onClick}>
      <Heading size={2} className="pb-2">
        {title}
        {isActive && '/'}
      </Heading>
      <Paragraph>{desc}</Paragraph>
    </div>
  )
}

export default ChartItem
