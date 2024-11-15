import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import TimelineItem from '@/components/TimelineItem'

const AboutMe = () => {
  return (
    <div className="min-h-screen gap-12 bg-gradient-to-bl from-[#EBAF25] to-[#FEC84B] to-30% p-12">
      <Heading size={2} className="sticky top-8">
        CV
      </Heading>
      <Paragraph className="mb-24 mt-8">
        I spend lot of quality time with my family—or alone if needed—preferably while mountain
        biking, traveling or both. I also shoot pictures and I love to read.
      </Paragraph>
      <div className="flex flex-col">
        <TimelineItem year={'A long time ago'} desc="Han shot first!" className="mb-72" right />
        <TimelineItem year={1985} desc="Born" className="mb-12" />
        <TimelineItem
          year={1999}
          desc="Star Wars will never be a trilogy again"
          className="mb-16"
          right
        />
        <TimelineItem year={'2008\u20132010'} desc="Freelance web designer" em />
        <TimelineItem year={2010} desc="Master of Architecture" />
        <TimelineItem year={'2011\u20132012'} desc="Web designer in Websupport" em />
        <TimelineItem year={'2013\u2013now'} desc="Design engineer in Expersoft Technologies" em />
        <TimelineItem year={2014} desc="Married" />
        <TimelineItem year={'2015 & 2021'} desc="Kids" />
        <TimelineItem year={'Occasionally'} desc="Portrait photographer" className="mb-80" em />
        <TimelineItem year={12067} desc="Hari will develop psychohistory" className="mb-80" right />
        <TimelineItem year={23354} desc="Paul will become overly sensitive" right />
      </div>
    </div>
  )
}

export default AboutMe
