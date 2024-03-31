import photo from '/assets/adam-plesnik.jpg'

const Photo = () => {
  return (
    <div className="flex size-32 justify-center overflow-hidden rounded-full">
      <img src={photo} alt="" className="h-full max-w-fit opacity-80" />
    </div>
  )
}

export default Photo
