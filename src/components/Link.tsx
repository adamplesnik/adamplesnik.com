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
          <Icon className="size-7 pr-2 text-fuchsia-600 opacity-70" strokeWidth={1.8} />
        </motion.div>
      ) : (
        ''
      )}
      <a
        href={href}
        target={target}
        className="bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent hover:to-fuchsia-700 print:bg-transparent print:text-gray-700"
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
