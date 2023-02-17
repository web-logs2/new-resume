import ProfileInfo from "../../components/ProfileInfo";
import "./index.css";
import phone from "../../assets/img/phone.svg";
import email from "../../assets/img/email.svg";

const ProfileInfoList = {
  phone: "13867908869",
  email: "361206768@qq.com",
};

const Profile = () => {
  return (
    <div className="profile-content">
      <div className="name">
        <div>胡赞来</div>
        <div className="gan">&ensp;/&ensp; </div>
        <div>简历</div>
      </div>
      <div className="web">
        个人网站：
        <a
          target="_blank"
          rel="noreferrer"
          className="weblink"
          href="https://zanlaihu.github.io/blog/"
        >
          https://zanlaihu.github.io/blog/
        </a>
      </div>
      <div className="profile-contact">
        <ProfileInfo title={ProfileInfoList.phone} img={phone} />
        <ProfileInfo title={ProfileInfoList.email} img={email} />
      </div>
    </div>
  );
};

export default Profile;
