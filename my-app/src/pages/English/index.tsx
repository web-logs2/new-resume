import Education from "../../modules/English/Education"
import Profile from "../../modules/English/Profile"
import Projects from "../../modules/English/Projects"
import Skills from "../../modules/English/Skills"
import Thanks from "../../modules/English/Thanks"
import Work from "../../modules/English/Work"
import './index.css'

const EnglishResume = () => {
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

export default EnglishResume
