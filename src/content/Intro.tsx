import Paragraph from '@/components/Paragraph'
import { Fade } from 'react-awesome-reveal'
import { catchDetail, catchPhrase } from './phrases'

const Intro = () => {
  return (
    <Fade triggerOnce cascade damping={0.09}>
      <Paragraph big className="px-6 pb-12 sm:px-8 md:px-12">
        {catchPhrase}
      </Paragraph>
      <Paragraph big className="px-6 pb-8 sm:px-8 md:px-12 md:pb-12">
        {catchDetail}
      </Paragraph>
    </Fade>
  )
}

export default Intro
