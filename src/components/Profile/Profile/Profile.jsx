import userData from "../../../userData.json";
import './style.css';

function Product() {
  return (
    <div className="user-profie-main-div">
      <div className="user-profile-second-div">
        <div className="profile-img-div">
          <img
            src={userData.avatar}
            alt="User avatar"
          />
        </div>
        <h1 className="profile-username-text">{userData.username}</h1>
        <p className="user-data">{userData.tag}</p>
        <p className="user-data">{userData.location}</p>
      </div>
      <div className="user-profile-third-div">
        <ul className="profile-ul">
          <li className="profile-li">
            <strong>Followers</strong>
            <span>{userData.stats.followers}</span>
          </li>
          <li className="profile-li">
            <strong>Views</strong>
            <span>{userData.stats.views}</span>
          </li>
          <li className="profile-li">
            <strong>Likes</strong>
            <span>{userData.stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Product;