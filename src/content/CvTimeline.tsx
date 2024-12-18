import TimelineItem from '@/components/TimelineItem'
import clsx from 'clsx'

const CvTimeline = ({ print }: { print?: boolean }) => {
  return (
    <>
      <TimelineItem
        year={'A long time ago'}
        desc="Han shot first!"
        className="mb-72"
        right
        print={print}
      />
      <TimelineItem year={1985} desc="Born" className={clsx(!print && 'mb-12')} print={print} />
      <TimelineItem
        year={1999}
        desc="Star Wars is not a trilogy anymore"
        className="mb-16"
        right
        print={print}
      />
      <TimelineItem year={'2008\u20132010'} desc="Freelance web designer" em print={print} />
      <TimelineItem year={2010} desc="Master of Architecture, Bratislava" print={print} />
      <TimelineItem year={'2011\u20132012'} desc="Web designer in Websupport" em print={print} />
      <TimelineItem
        year={'2013\u20132024'}
        desc="UI designer in Expersoft Technologies"
        em
        print={print}
      />
      <TimelineItem year={2014} desc="Married" print={print} />
      <TimelineItem year={'2015 & 2021'} desc="Kids" print={print} />
      <TimelineItem
        year={'from 2024'}
        desc="Freelance graphic designer"
        print={print}
        em
        className={clsx(!print && 'mb-80')}
      />
      <TimelineItem
        year={12067}
        desc="Hari will develop psychohistory"
        className="mb-80"
        right
        print={print}
      />
      <TimelineItem year={23354} desc="Paul will become overly sensitive" right print={print} />
    </>
  )
}

export default CvTimeline
