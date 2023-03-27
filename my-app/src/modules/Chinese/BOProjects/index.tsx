import SingleProject from 'src/components/SingleProject'
import './index.css'

const desc = ['BO中后台是产品化钱包的配套中后台产品。运营人员可以使用BO配置钱包上的应用。BO也有独立于钱包的功能。',
'入职蚂蚁期间，我只参与了一个BO相关的开发：批量代发。']


const BOProjects = () => {
  return (
    <div className='multi-project-content'>
      <div>
        <div className='wallet-project-title'>BO中后台</div>
        {desc.map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <div className='wallet-project-list'>
        <SingleProject title={'大转盘'} desc={[        '钱包APP的大转盘抽奖功能。',
        '通过旋转的转盘随机抽取奖品。',]} link={"https://www.yuque.com/klaus-rtgrx/goy4cy/bwcv1cpokpoimopo"}/>
       
      </div>
    </div>
  )
}

export default BOProjects
