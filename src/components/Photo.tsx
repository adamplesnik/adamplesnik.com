import photo from '/assets/adam-plesnik.jpg'

const Photo = () => {
  return (
    <div className="flex size-32 flex-shrink-0 justify-center overflow-hidden rounded-full shadow-xl">
      <img src={photo} alt="Portrait photo." className="h-full max-w-fit opacity-80" />
    </div>
  )
}

export default Photo
