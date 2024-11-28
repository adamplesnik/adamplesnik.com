import CvTimeline from './CvTimeline'

const AboutMe = () => {
  return (
    <div className="flex min-h-svh flex-col gap-1 lg:flex-row">
      <div className="bg-cv-light p-6 sm:p-8 md:flex-[2] md:p-12 dark:bg-cv-dark">
        <div className="flex flex-col gap-2">
          <CvTimeline />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
