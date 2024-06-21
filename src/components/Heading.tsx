import { PropsWithChildren } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const Heading = ({
  size = 1,
  className = '',
  children,
  id = '',
}: PropsWithChildren<TitleProps>) => {
  const defaultClasses = 'relative w-full text-zinc-950' + addWithSpace(className)
  const anchor = id ? <a id={id} className={'absolute -top-32'} /> : ''
  if (size === 1) {
    return (
      <h1 className={defaultClasses + '  pb-8 text-xl font-medium leading-normal'}>
        {children}
        {anchor}
      </h1>
    )
  } else if (size === 2) {
    return (
      <h2 className={defaultClasses + '  pb-4 text-2xl font-medium opacity-90'}>
        {children}
        {anchor}
      </h2>
    )
  } else if (size === 3) {
    return (
      <h3 className={defaultClasses + ' pb-4 text-lg opacity-90'}>
        {children}
        {anchor}
      </h3>
    )
  } else {
    return (
      <h4 className={defaultClasses + ' pb-4 text-sm opacity-50'}>
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
