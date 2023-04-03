import './index.css'

export interface SingleProjectProps {
  title: string
  desc: string[]
  link?: string
  width: string
}

const EnglishSingleProject = (props: SingleProjectProps) => {
  return (
    <div className='english-single-project-content' style={{ width: props.width }}>
      <div>
        <div className='single-project-title'>{props.title}</div>
        {props.desc.map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      {props.link && (
        <div className='english-single-project-view'>
          <a
            target='_blank'
            rel='noreferrer'
            className='weblink'
            href={props.link}
          >
            view more
          </a>
        </div>
      )}
    </div>
  )
}

export default EnglishSingleProject