import './index.css'

export interface SingleProjectProps {
  title: string
  desc: string[]
  link?: string
}

const SingleProject = (props: SingleProjectProps) => {
  return (
    <div className='single-project-content'>
      <div className='single-project-title'>{props.title}</div>
      {props.desc.map(item => (
        <div className='single-project-desc'>{item}</div>
      ))}
      <div className='single-project-view'>view more {props.link}</div>
    </div>
  )
}

export default SingleProject
