import Blank from '../../components/Blank'
import University from '../../components/University'
import './index.css'

const Work = () => {
  return (
    <div className='work-content'>
      <div className='work-title'>工作经历</div>
      <div className='education-unis'>
        <University
          name={'蚂蚁集团'}
          year={'2021.10 - 至今'}
          major={'前端开发工程师'}
          level={''}
          gpa={''}
        />
        <div className='work-detail-content'>
          <div className='work-detail'>
            1. 负责前端研发工作，并编写技术文档；
          </div>
          <div className='work-detail'>2. 对海外英语客户提供技术咨询；</div>
          <div className='work-detail'>
            3. 在蚂蚁集团工作期间，参与移动端web、BO中后台、官网的开发。
          </div>
        </div>
        <Blank />
        <University
          name={'埃森哲'}
          year={'2020.5 - 2021.8'}
          major={'软件工程师'}
          level={''}
          gpa={''}
        />
        <div className='work-detail-content'>
          <div className='work-detail'>1. 负责前端研发工作；</div>
          <div className='work-detail'>2. 对新入职人员进行技术培训；</div>
          <div className='work-detail'>
            3. 在埃森哲工作期间，参与移动端web的开发。
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
