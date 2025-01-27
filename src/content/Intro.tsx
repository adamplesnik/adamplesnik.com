import Paragraph from '@/components/Paragraph'
import { Fade } from 'react-awesome-reveal'
import { catchPhrase } from './phrases'

const Intro = () => {
  return (
    <Fade triggerOnce cascade damping={0.09}>
      <Paragraph big className="px-6 pb-12 sm:px-8 md:px-12">
        {catchPhrase}
      </Paragraph>
    </Fade>
  )
}

export default Intro
