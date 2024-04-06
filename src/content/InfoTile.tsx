import { motion } from 'framer-motion'
import Heading from '../components/Heading'
import ScratchAnim from '../components/ScratchAnim'
import TextAnim from '../components/TextAnim'
import Photo from '../components/Photo'

const InfoTile = () => {
  return (
    <div className="flex flex-col items-start gap-4 p-2 sm:flex-row">
      <Photo />
      <div>
        <Heading size={1} className="text-slate-300">
          Adam Plesník, front-end engineer based in Bratislava, Slovakia.
        </Heading>
        <Heading size={1} className="text-slate-300">
          I love creating, polishing and improving user interfaces, with focus on{' '}
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
    </div>
  )
}

export default InfoTile
