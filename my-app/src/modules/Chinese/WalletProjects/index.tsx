import SingleProject from 'src/components/SingleProject'
import './index.css'



const WalletProjects = () => {
  return (
    <div className='multi-project-content'>
      <div>
        <div className='wallet-project-title'>产品化钱包</div>
        {['产品化钱包是钱包科技团队对外销售的主要产品。Lazada、Kakaopay、Vodapay均为产品化钱包的落地成果。',
            '产品化钱包分为iOS版和安卓版，为hybrid应用，由H5统一进行业务开发。',
            '入职蚂蚁期间，我参与产品化钱包的开发。具有代表性的业务有：大转盘、折扣券、KYC等。'].map(item => (
          <div className='single-project-desc'>
            <div className='single-project-desc-icon'>•</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <div className='wallet-project-list'>
        <SingleProject title={'大转盘'} desc={[        '钱包APP的大转盘抽奖功能。',
        '通过旋转的转盘随机抽取奖品。',]} link={"https://www.yuque.com/klaus-rtgrx/goy4cy/bwcv1cpokpoimopo"}/>
                <SingleProject title={'折扣券'} desc={[            '钱包APP的折扣券功能',
        '在收银台页面，用户可以选择已有的折扣券来抵扣金额。',]} link={"https://www.yuque.com/klaus-rtgrx/goy4cy/nfw5d069hxk4eue7"}/>
                        <SingleProject title={'KYC'} desc={[             '钱包APP的个人信息功能',
        '用户填写个人信息来提升钱包等级从而使用更多的功能。',]} link={"https://www.yuque.com/klaus-rtgrx/goy4cy/dxu8b668qhmig92n"}/>
      </div>
    </div>
  )
}

export default WalletProjects
