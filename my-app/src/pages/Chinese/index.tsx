import "./index.css";
import Profile from "../../modules/Profile";
import Education from "../../modules/Education";
import Skills from "../../modules/Skills";

const ChineseResume = () => {
  return (
    <div className="chinese-content">
      <Profile />
      <Skills />
      <Education />
    </div>
  );
};

export default ChineseResume;
