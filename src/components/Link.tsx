import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { PropsWithChildren, useState } from 'react'

const Link = ({
  Icon = undefined,
  href,
  children,
  target = '_blank',
}: PropsWithChildren<LinkProps>) => {
  const [anim, setAnim] = useState(false)

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setAnim(true)}
      onMouseLeave={() => setAnim(false)}
    >
      {Icon ? (
        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: anim ? 1.3 : 1,
          }}
          transition={{ duration: 0.72, type: 'spring' }}
        >
          <Icon className="size-7 pr-2 text-pink-600 opacity-70" strokeWidth={1.8} />
        </motion.div>
      ) : (
        ''
      )}
      <a
        href={href}
        target={target}
        className="text-zinc-500 hover:text-zinc-700 print:text-zinc-700"
      >
        {children}
      </a>
    </div>
  )
}

export interface LinkProps {
  children: PropsWithChildren
  href?: string
  Icon?: LucideIcon | undefined
  target?: string
}

export default Link
