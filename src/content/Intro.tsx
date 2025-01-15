import Paragraph from '@/components/Paragraph'
import { catchDetail, catchPhrase } from './phrases'

const Intro = () => {
  return (
    <>
      <Paragraph big className="px-6 pb-8 sm:px-8 md:px-12 md:pb-12">
        {catchPhrase}
      </Paragraph>
      <Paragraph big className="px-6 pb-8 sm:px-8 md:px-12 md:pb-12">
        {catchDetail}
      </Paragraph>
    </>
  )
}

export default Intro
