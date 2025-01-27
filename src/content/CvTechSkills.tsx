import TimelineItem from '@/components/TimelineItem'

const CvTechSkills = () => {
  return (
    <>
      <TimelineItem
        year={'Design'}
        desc="Wireframes, mockups, prototypes, design systems, typography"
      />
      <TimelineItem
        year={'Tech'}
        desc={
          'React + TSX, TypeScript, HTML, CSS & Tailwind CSS, theme development and refactoring, accessibility\u00A0(a11y)'
        }
      />
      <TimelineItem year={'Tools'} desc="Figma, Adobe CC, Git, Jira" />
      <TimelineItem year={'Languages'} desc="English, French" />
    </>
  )
}

export default CvTechSkills
