import Em from '../components/Em'
import Heading from '../components/Heading'

const InfoTile = () => {
  return (
    <div className="flex items-start gap-4 p-2">
      <Heading size={1} className="text-slate-300">
        Hello there. I am Adam Plesník, front-end engineer based in Bratislava, Slovakia. I love{' '}
        <Em>creating, polishing and improving user interfaces</Em>, with a particular focus on
        Tailwind CSS and building reusable components.
      </Heading>
    </div>
  )
}

export default InfoTile
