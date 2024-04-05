import { NavLink } from 'react-router-dom'
import Heading from '../components/Heading'
import Tile from '../components/Tile'
import Page from '../layouts/Page'

const Blog = () => {
  return (
    <Page>
      <Heading size={1}>Blog</Heading>
      <Tile
        title="Text Appear Animation in CSS"
        subTitle="Tackle impressive text appear animation just by CSS and teeny-tiny piece of JS code."
      >
        <NavLink to="/blog/test">test</NavLink>
      </Tile>
    </Page>
  )
}

export default Blog
