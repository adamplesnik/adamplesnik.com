import Em from '../components/Em'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'

const WorkTile = () => {
  return (
    <div>
      <Heading size={3}>Work</Heading>
      <Paragraph>
        I specialize in <Em>nicer parts of the front end universe</Em>. I write CSS and front end
        components for React, Vue.js, Angular and even Vaadin. My experience ranges from
        implementing Figma-based prototypes from scratch to refactoring huge projects.
      </Paragraph>
      <Paragraph>
        I have a <Em>passion for atomic components with atomic CSS</Em>, clean and meaningful UIs,
        microinteractions.
      </Paragraph>
      <Paragraph>
        Majority of my work in the last 10 years is covered under the large blanket of the NDAs.
        That's why I only have two projects to showcase. One is the experimental Scroll-driven
        Animations plugin I wrote for Tailwind CSS, along with dedicated microsite; and the second
        is the showcase of my efforts to refactor the front end of a huge open-source project.
      </Paragraph>
    </div>
  )
}

export default WorkTile
