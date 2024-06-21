import { PropsWithChildren } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const Heading = ({
  size = 1,
  className = '',
  children,
  id = '',
}: PropsWithChildren<TitleProps>) => {
  const defaultClasses = 'relative w-full font-medium' + addWithSpace(className)
  const anchor = id ? <a id={id} className={'absolute -top-32'} /> : ''
  if (size === 1) {
    return (
      <h1 className={defaultClasses + ' pb-4 text-2xl leading-normal text-slate-300'}>
        {children}
        {anchor}
      </h1>
    )
  } else if (size === 2) {
    return (
      <h2 className={defaultClasses + ' py-6 text-2xl text-slate-200'}>
        {children}
        {anchor}
      </h2>
    )
  } else if (size === 3) {
    return (
      <h3 className={defaultClasses + ' pb-4 text-xl text-slate-200'}>
        {children}
        {anchor}
      </h3>
    )
  } else {
    return (
      <h4 className={defaultClasses + ' pb-6 text-sm opacity-70'}>
        {children}
        {anchor}
      </h4>
    )
  }
}

export interface TitleProps {
  children: PropsWithChildren
  size: 1 | 2 | 3 | 4
  className?: string
  id?: string
}

export default Heading
