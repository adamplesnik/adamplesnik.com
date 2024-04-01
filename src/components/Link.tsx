import { motion } from 'framer-motion'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { PropsWithChildren, useState } from 'react'

const Link = ({ Icon = undefined, href, children }: PropsWithChildren<LinkProps>) => {
  const [anim, setAnim] = useState(false)

  return (
    <div
      className="relative mb-2 flex gap-2"
      onMouseEnter={() => setAnim(true)}
      onMouseLeave={() => setAnim(false)}
    >
      {Icon ? (
        <motion.div
          animate={{
            scaleY: anim ? 0 : 1,
            y: anim ? 12 : 0,
            // opacity: anim ? 0 : 1,
            width: anim ? 0 : undefined,
          }}
          transition={{ duration: 0.3, delay: anim ? 0 : 0.45 }}
        >
          <Icon />
        </motion.div>
      ) : (
        ''
      )}
      <motion.div layout className="truncate">
        <a href={href} target="_blank" className="truncate">
          {children}
        </a>
      </motion.div>
      <motion.div
        animate={{
          rotate: anim ? 0 : -45,
          scale: anim ? 1 : 0,
          y: anim ? 0 : 12,
          width: anim ? undefined : 0,
        }}
        transition={{ delay: 0.48 }}
      >
        <ArrowRight />
      </motion.div>
      <motion.div
        animate={{ left: anim ? '88%' : 12, width: anim ? 128 : 0 }}
        transition={{ delay: 0.27, duration: 0.56, ease: [0, 1, 0, 1] }}
        className={
          'absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-violet-800 transition-[max-width] duration-500 '
        }
      ></motion.div>
    </div>
  )
}

export interface LinkProps {
  href: string
  children: PropsWithChildren
  Icon?: LucideIcon | undefined
}

export default Link
