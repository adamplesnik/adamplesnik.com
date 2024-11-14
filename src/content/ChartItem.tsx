import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'

const ChartItem = ({ title, desc, item }: { title: string; desc: string; item: number }) => {
  return (
    <div className="flex-1">
      <Heading size={2} className="pb-2">
        {title}
      </Heading>
      <Paragraph>{desc}</Paragraph>
    </div>
  )
}

export default ChartItem
