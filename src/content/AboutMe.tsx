import Paragraph from '@/components/Paragraph'
import Tile from '@/components/Tile'

const MyAge = () => {
  const myBirth = new Date('1985-06-22T12:00Z').getTime()
  const now = new Date().getTime()
  const myAge = (now - myBirth) / 1000 / 60 / 60 / 24 / 365.25
  return Math.floor(myAge)
}

const AboutMe = () => {
  return (
    <Tile title="About me">
      <Paragraph>
        Married, <MyAge /> years old, father of two girls.
      </Paragraph>
      <Paragraph>
        Spending quality time with my family is my number one priority, preferably while mountain
        biking, traveling or both. I also take lot of pictures and I love to read.
      </Paragraph>
      <Paragraph>I speak English and French fluently, and I am learning Portuguese.</Paragraph>
    </Tile>
  )
}

export default AboutMe
