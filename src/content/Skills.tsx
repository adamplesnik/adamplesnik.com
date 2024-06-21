import Em from '../components/Em'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'

const Skills = () => {
  return (
    <div className="flex-1">
      <Heading size={3}>Skills</Heading>
      <Paragraph>
        I specialize in <Em>nicer parts of the front end universe</Em>. I write CSS and front end
        components for React, Vue.js, Angular and even Vaadin. My experience ranges from
        implementing Figma-based prototypes from scratch to refactoring huge projects.
      </Paragraph>
      <Paragraph>
        I have a <Em>passion for atomic components with atomic CSS</Em>, clean and meaningful UIs,
        micro interactions.
      </Paragraph>
    </div>
  )
}

export default Skills
