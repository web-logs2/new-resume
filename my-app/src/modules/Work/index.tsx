import Blank from '../../components/Blank'
import University from '../../components/University'
import { WorkConstant } from '../../contants/CH'
import './index.css'

const Work = () => {
  return (
    <div className='work-content'>
      <div className='work-title'>{WorkConstant.title}</div>
      <div className='work-info'>
        {WorkConstant.works.map(item => (
          <>
            <University uni={item.workInfo} />
            <div className='work-detail-content'>
              {item.workDetail.map(item => (
                <div className='work-detail'>{item}</div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Work
