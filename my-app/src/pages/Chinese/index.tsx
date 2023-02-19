import './index.css'
import Profile from '../../modules/Profile'
import Education from '../../modules/Education'
import Skills from '../../modules/Skills'
import Work from '../../modules/Work'
import Projects from '../../modules/Projects'
import Thanks from '../../modules/Thanks'

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
