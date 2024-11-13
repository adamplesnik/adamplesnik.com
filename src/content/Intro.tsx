import Em from '@/components/Em'
import Paragraph from '@/components/Paragraph'
import Tile from '@/components/Tile'

const Intro = () => {
  return (
    <Tile>
      <Paragraph className="max-w-xl text-3xl">
        I create, polish, and improve user interfaces by clicking in <Em>Figma</Em> and coding in{' '}
        <Em>React</Em>.
      </Paragraph>
    </Tile>
  )
}

export default Intro
