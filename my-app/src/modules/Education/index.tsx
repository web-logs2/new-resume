import University from '../../components/University'
import './index.css'

const Education = () => {
  return (
    <div className='education-content'>
      <div className='education-title'>教育经历</div>
      <University name={'新南威尔士大学'} year={''} major={''} level={''} gpa={''} />
    </div>
  )
}

export default Education
