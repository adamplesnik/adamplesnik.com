import Heading from '../components/Heading'

const InfoTile = () => {
  return (
    <div className="flex items-start gap-4 p-2">
      <Heading size={1} className="text-slate-300">
        Hello there. I am Adam Plesník, front-end engineer based in Bratislava, Slovakia. I love{' '}
        creating, polishing and improving user interfaces, with a particular focus on{' '}
        <span className="stroke">atomic CSS</span> Tailwind CSS and building reusable components.
      </Heading>
    </div>
  )
}

export default InfoTile
