import photo from '/assets/adam-plesnik.jpg'

const Photo = () => {
  return (
    <div className="flex h-[30rem] items-center justify-center overflow-hidden px-6 sm:px-8 md:px-12">
      <img src={photo} alt="Portrait photo." className="h-unset min-h-fit w-full" />
    </div>
  )
}

export default Photo
