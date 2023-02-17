import './index.css'

export interface UniversityProps {
  name: string
  year: string
  major: string
  level: string
  gpa: string
}

const University = (props: UniversityProps) => {
  return (
    <div className='university-content'>
      <div className='university-first-line'>
        <div className='university-name'>{props.name}</div>
        <div className='unviersity-year'>{props.year}</div>
      </div>
      <div className='major'>{props.major}</div>
      <div className='degree-level'>{props.level}</div>
      <div className='gpa'>{props.gpa}</div>
    </div>
  )
}

export default University
