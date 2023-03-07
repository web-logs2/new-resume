import './index.css'
import Profile from '../../modules/Chinese/Profile'
import Education from '../../modules/Chinese/Education'
import Projects from '../../modules/Chinese/Projects'
import Skills from '../../modules/Chinese/Skills'
import Thanks from '../../modules/Chinese/Thanks'
import Work from '../../modules/Chinese/Work'


const ChineseResume = () => {
  return (
    <div className='chinese-content'>
      <div>
        <Profile />
        <Skills />
        <Education />
        <Work />
        <Projects />
      </div>
      <Thanks />
    </div>
  )
}

export default ChineseResume
