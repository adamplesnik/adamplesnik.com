import { ImgHTMLAttributes } from 'react'

const CustomImg = ({ src, alt, loading = 'lazy', className }: ImageType) => {
  return <img src={src} loading={loading} alt={alt} className={className} />
}

type ImageType = {} & ImgHTMLAttributes<HTMLImageElement>

export default CustomImg
