import { Flower2, HandMetal } from 'lucide-react'
import { useState } from 'react'

const FlowerAnim = () => {
  const [anim, setAnim] = useState(false)

  return (
    <span
      className="relative -mt-2 inline-block size-8 cursor-pointer"
      onClick={() => setAnim(!anim)}
    >
      <Flower2
        className={
          'ease-custom absolute left-0 top-0 size-6 text-cyan-400 transition-[transform,opacity] duration-700' +
          (anim ? ' rotate-[360deg] opacity-0' : ' delay-200')
        }
        strokeWidth={1.3}
      />
      <HandMetal
        className={
          'ease-custom absolute right-0 top-0 size-6 text-pink-600 transition-[transform,opacity] delay-100 duration-700' +
          (anim ? ' rotate-[360deg]' : ' opacity-0')
        }
        strokeWidth={1.3}
      />
    </span>
  )
}

export default FlowerAnim
