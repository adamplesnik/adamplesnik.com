import { motion } from 'framer-motion'
import Heading from '../components/Heading'
import ScratchAnim from '../components/ScratchAnim'
import TextAnim from '../components/TextAnim'

const Info = () => {
  return (
    <div>
      <Heading size={1}>Adam Plesník</Heading>
      <Heading size={2}>Design engineer based in Bratislava, Slovakia.</Heading>
      <p className="pb-4 text-2xl font-medium text-zinc-950">
        I love creating, polishing and improving user interfaces in Figma and React, with focus on{' '}
        <span className="stroke relative whitespace-nowrap">
          <ScratchAnim />
          atomic <TextAnim />{' '}
          <motion.span animate={{ color: '#ec4899' }} transition={{ delay: 4, duration: 0.23 }}>
            CSS
          </motion.span>
        </span>
        , refactoring and building reusable components.
      </p>
    </div>
  )
}

export default Info
