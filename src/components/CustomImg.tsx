import { ImgHTMLAttributes } from 'react'

const CustomImg = ({ src, alt, loading = 'lazy' }: ImageType) => {
  return <img src={src} loading={loading} alt={alt} />
}

type ImageType = {} & ImgHTMLAttributes<HTMLImageElement>

export default CustomImg
