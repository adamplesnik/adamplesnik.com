import { PropsWithChildren } from 'react'

const Em = ({ children }: PropsWithChildren<EmProps>) => {
  return <span>{children}</span>
}

export interface EmProps {
  children: PropsWithChildren
}

export default Em
