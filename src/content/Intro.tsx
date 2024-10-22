import Em from '@/components/Em'
import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import Tile from '@/components/Tile'

const Intro = () => {
  return (
    <Tile>
      <Paragraph>Design engineer, Bratislava, Slovakia.</Paragraph>
      <Paragraph>
        I create, polish, and improve user interfaces by clicking in <Em>Figma</Em> and coding in{' '}
        <Em>React</Em>. I have a passion for atomic components with <Em>Tailwind CSS</Em>, clean and
        meaningful UIs, and refactoring.
      </Paragraph>
      <div className="hidden gap-4 print:flex">
        <Link href="https://adamplesnik.com">adamplesnik.com</Link>
        <Link href="mailto:adam@adamplesnik.com">adam@adamplesnik.com</Link>
        <Link href="https://github.com/adamplesnik">github.com/adamplesnik</Link>
      </div>
    </Tile>
  )
}

export default Intro
