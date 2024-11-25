import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'

const Skills = () => {
  return (
    <div
      className="flex min-h-svh w-full flex-col items-stretch gap-1 pt-20 lg:flex-row"
      id="skills"
    >
      <div className="bg-skills-light dark:bg-skills-dark flex flex-1 items-end p-6 sm:p-8 md:p-12">
        <Heading size={2}>Skills</Heading>
      </div>
      <div className="bg-skills-light dark:bg-skills-dark flex-1 p-6 sm:p-8 md:p-12">
        <Paragraph>
          I like to paint the large picture first—mapping user journeys and prototyping
          wireframes—before diving into the designs.
        </Paragraph>
      </div>
      <div className="bg-skills-light dark:bg-skills-dark flex flex-1 items-end p-6 sm:p-8 md:p-12">
        <Paragraph>
          Once the user experience and flow are sorted, I do my best to create clean layouts with
          strong typography, thoughtful colors, and visual clarity.
        </Paragraph>
      </div>
      <div className="bg-skills-light dark:bg-skills-dark group flex flex-1 items-center p-6 transition-all duration-1000 ease-in-out sm:p-8 md:p-12 lg:hover:flex-[2]">
        <Paragraph>And a touch of playfulness.</Paragraph>
      </div>
    </div>
  )
}

export default Skills
