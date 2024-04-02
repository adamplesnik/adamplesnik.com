import { HandMetal } from 'lucide-react'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'

const CvTile = () => {
  return (
    <div>
      <Heading size={3}>About Me</Heading>
      <Paragraph>
        Married, 38 years old, father of two girls.{' '}
        <HandMetal
          className="inline size-6 text-cyan-400 transition-[transform,color] duration-1000 ease-in-out hover:rotate-[360deg] hover:text-pink-500"
          strokeWidth={1.5}
        />
      </Paragraph>
      <Paragraph>
        Spending quality time with my family is my number one priority, preferably while mountain
        biking, traveling or both. I speak English and French fluently, and I am learning
        Portuguese.
      </Paragraph>
    </div>
  )
}

export default CvTile
