import { motion } from 'framer-motion'
import Heading from '../components/Heading'
import ScratchAnim from '../components/ScratchAnim'
import TextAnim from '../components/TextAnim'

const InfoTile = () => {
  return (
    <div className="flex items-start gap-4 p-2">
      <Heading size={1} className="text-slate-300">
        Hello there. I am Adam Plesník, front-end engineer based in Bratislava, Slovakia. I love{' '}
        creating, polishing and improving user interfaces, with focus on{' '}
        <span className="stroke relative whitespace-nowrap">
          <ScratchAnim />
          atomic <TextAnim />{' '}
          <motion.span animate={{ color: '#ec4899' }} transition={{ delay: 4, duration: 0.23 }}>
            CSS
          </motion.span>
        </span>{' '}
        and building reusable components.
      </Heading>
    </div>
  )
}

export default InfoTile
