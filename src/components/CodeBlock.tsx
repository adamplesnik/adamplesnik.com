import { Copy, LucideIcon } from 'lucide-react'
import Prism from 'prismjs'
import { PropsWithChildren, useEffect } from 'react'
import Link from './Link.tsx'
import ActionButton from './ActionButton.tsx'

function copyButtonClick(code: string) {
  navigator.clipboard.writeText(code)
}

const CodeBlock = ({
  codeToCopy = '',
  children,
  Icon = undefined,
  language = 'javascript',
  linkHref = '',
  linkText = '',
}: PropsWithChildren<CodeProps>) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className={'relative mb-4 rounded-lg border border-zinc-700 bg-slate-800 text-zinc-300'}>
      <code
        className={`language-${language} block overflow-y-auto whitespace-pre rounded-lg bg-transparent p-4 text-sm text-zinc-300`}
      >
        {children}
      </code>
      {codeToCopy && (
        <div className="absolute right-3 top-3">
          <ActionButton
            Icon={Copy}
            onClick={() => copyButtonClick(codeToCopy)}
            tooltip="Copy to Clipboard"
          />{' '}
        </div>
      )}
      {linkHref && (
        <div
          className={
            'flex items-center gap-1 border-t border-t-slate-700 bg-zinc-800/10 px-4 py-2 text-xs '
          }
        >
          {Icon && <Icon size={14} strokeWidth={2} />}
          <Link href={linkHref} target={'_blank'}>
            {linkText ? linkText : linkHref}
          </Link>
        </div>
      )}
    </div>
  )
}

export interface CodeProps {
  children: PropsWithChildren
  codeToCopy?: string | undefined
  Icon?: LucideIcon | undefined
  language?: 'javascript' | 'css' | 'html' | 'tsx'
  linkHref?: string | undefined
  linkText?: string | undefined
}

export default CodeBlock
