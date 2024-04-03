import { motion } from 'framer-motion'

const ScratchAnim = () => {
  return (
    <motion.svg
      className="absolute -left-5 -top-1 scale-75"
      fill="none"
      width="128"
      height="39"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M3.185 9.18c35.81-3.312 108.447-9.24 112.526-6.458C119.79 5.504 40.936 13.154 1 16.632c38.358-1.16 114.638-3.478 112.89-3.478-1.748 0-74.532 6.624-110.705 9.936H113.89C75.41 26.236-.602 32.529 3.185 32.529c3.787 0 84.121 2.98 123.815 4.471"
        stroke="#f43f5e"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 4.3 }}
        strokeWidth="4"
      />
    </motion.svg>
  )
}

export default ScratchAnim
