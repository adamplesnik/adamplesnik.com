import { PropsWithChildren } from 'react'

const PreviewWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="mb-4 h-fit overflow-hidden rounded-md border border-zinc-400 last:mb-0 dark:border-zinc-600">
      {children}
    </div>
  )
}

export default PreviewWrapper
