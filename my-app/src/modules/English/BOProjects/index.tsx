import SingleProject from 'src/components/SingleProject'
import './index.css'

const desc = [
  'The BO Middle Office is the supporting product for the productized wallet. Operators can use BO to configure applications on the wallet. BO also offer functions independent of the wallet.',
  'During my work at Ant, I was only responsible for one BO-related development: batch delivery.',
]

const BOProjects = () => {
  return (
    <div className='multi-project-content'>
      <div>
        <div className='wallet-project-title'>BO Middle Office</div>
        {desc.map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <SingleProject
        title={'Bulk Disbursement'}
        desc={['The batch delivery function. Send employee wages in batches to save enterprise management costs.']}
        link={'https://www.yuque.com/klaus-rtgrx/goy4cy/bwcv1cpokpoimopo'}
        width={'600px'}
      />
    </div>
  )
}

export default BOProjects
