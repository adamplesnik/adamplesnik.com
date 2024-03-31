import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

const TileWrapper = ({
  children,
  className = '',
  padding = false,
}: PropsWithChildren<TileWrapperProps>) => {
  return (
    <motion.div
      className={'overflow-hidden rounded-lg ' + className + (padding ? ' p-4 pt-6' : '')}
      layout
      whileHover={{ opacity: 0.9, scale: 1.03 }}
      transition={{
        duration: 0.37,
        ease: [0.65, 0.05, 0.17, 0.99],
      }}
    >
      {children}
    </motion.div>
  )
}

export interface TileWrapperProps {
  children: PropsWithChildren
  className?: string | '' | undefined
  padding?: boolean
}

export default TileWrapper
