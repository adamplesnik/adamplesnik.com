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
            x: anim ? -128 : 0,
            width: anim ? 0 : undefined,
          }}
          transition={{ duration: 0.21, delay: anim ? 0 : 0.15 }}
        >
          <Icon className="text-fuchsia-600" strokeWidth={1.5} />
        </motion.div>
      ) : (
        ''
      )}
      <motion.a
        layout
        href={href}
        target="_blank"
        className="truncate bg-gradient-to-r from-fuchsia-500 to-indigo-600 bg-clip-text font-mono text-sm text-transparent hover:to-fuchsia-700"
      >
        {children}
      </motion.a>

      <motion.div
        animate={{
          rotate: anim ? 0 : -45,
          x: anim ? 0 : 24,
          width: anim ? undefined : 0,
        }}
        transition={{ duration: 0.28 }}
      >
        <ArrowRight className="text-indigo-700" />
      </motion.div>
    </div>
  )
}

export interface LinkProps {
  href: string
  children: PropsWithChildren
  Icon?: LucideIcon | undefined
}

export default Link
