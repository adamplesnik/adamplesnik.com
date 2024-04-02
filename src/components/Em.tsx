import { PropsWithChildren } from 'react'

const Em = ({ children }: PropsWithChildren<EmProps>) => {
  return <span className="font-bold">{children}</span>
}

export interface EmProps {
  children: PropsWithChildren
}

export default Em
