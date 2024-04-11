import { PropsWithChildren } from 'react'

const Em = ({ children }: PropsWithChildren<EmProps>) => {
  return <span className="text-zinc-300">{children}</span>
}

export interface EmProps {
  children: PropsWithChildren
}

export default Em
