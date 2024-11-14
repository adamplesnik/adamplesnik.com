import Paragraph from '@/components/Paragraph'
import TimelineItem from '@/components/TimelineItem'

const AboutMe = () => {
  return (
    <div className="flex min-h-screen flex-col gap-12 bg-gradient-to-bl from-[#EBAF25] to-[#FEC84B] to-30% p-12 md:flex-row">
      <Paragraph className="h-fit flex-1 md:sticky md:top-12">
        I spend lot of quality time with my family—or alone if needed—preferably while mountain
        biking, traveling or both. I also shoot pictures and I love to read.
      </Paragraph>
      <div className="flex flex-1 flex-col">
        <TimelineItem
          year={'A long time ago'}
          desc="Han made the Kessel run in 12 parsecs."
          className="pb-72"
        />
        <TimelineItem year={1985} desc="Born" className="pb-24" />
        <TimelineItem
          year={1999}
          desc="Star Wars will never be a trilogy again."
          className="pb-24"
        />
        <TimelineItem year={2010} desc="Master of Architecture." className="pb-6" />
        <TimelineItem year={'2011–2012'} desc="Web designer in Websupport." />
        <TimelineItem year={'2013–now'} desc="Design engineer in Expersoft Technologies." />
        <TimelineItem year={2014} desc="Married." />
        <TimelineItem year={'2015 & 2021'} desc="Kids." className="pb-80" />
        <TimelineItem year={12067} desc="Hari will develop psychohistory." className="pb-80" />
        <TimelineItem year={23354} desc="Paul will become overly sensitive." />
      </div>
    </div>
  )
}

export default AboutMe
