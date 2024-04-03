import { motion } from 'framer-motion'

export default function TextAnim() {
  const letters = Array.from('Tailwind')

  return (
    <>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block text-pink-500"
          initial={{ opacity: 0, width: '0px' }}
          animate={{ opacity: 1, width: 'auto' }}
          transition={{ duration: 0.05, delay: 4 + index * 0.1, ease: 'easeOut' }}
        >
          {letter}
        </motion.span>
      ))}
    </>
  )
}
