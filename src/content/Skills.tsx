import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'

const Skills = () => {
  return (
    <div
      className="flex min-h-svh w-full flex-col items-stretch gap-1 pt-20 lg:flex-row"
      id="skills"
    >
      <div className="flex flex-1 items-end bg-skills-light p-6 sm:p-8 md:p-12 dark:bg-skills-dark">
        <Heading size={2}>Skills</Heading>
      </div>
      <div className="flex-1 bg-skills-light p-6 sm:p-8 md:p-12 dark:bg-skills-dark">
        <Paragraph>
          I like to paint the large picture first&mdash;mapping user journeys and prototyping
          wireframes&mdash;before diving into the designs.
        </Paragraph>
      </div>
      <div className="flex flex-1 items-end bg-skills-light p-6 sm:p-8 md:p-12 dark:bg-skills-dark">
        <Paragraph>
          Once the user experience and flow are sorted, I do my best to create clean layouts with
          strong typography, thoughtful colors, and visual clarity.
        </Paragraph>
      </div>
      <div className="group flex flex-1 items-center bg-skills-light p-6 transition-all duration-1000 ease-in-out sm:p-8 md:p-12 lg:hover:flex-[2] dark:bg-skills-dark">
        <Paragraph>And a touch of playfulness.</Paragraph>
      </div>
    </div>
  )
}

export default Skills
