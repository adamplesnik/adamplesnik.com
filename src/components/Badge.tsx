const Badge = ({ value }: { value: string }) => {
  return (
    <div className="group flex text-base">
      <div className="uppercase">{value}</div>
      <span className="px-2 group-last-of-type:hidden">+</span>
    </div>
  )
}

export default Badge
