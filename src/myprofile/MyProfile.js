import MyMissions from '../missions/MyMissions';
import MyRockets from '../rockets/MyRockets';
import './MyProfile.css';

export default function MyProfile() {
  return (
    <div className="profile-div">
      <div className="profile-item">
        <h3 id="rockets-title">My Rockets</h3>
        <MyMissions />
      </div>
      <div className="profile-item">
        <h3 id="missions-title">My Rockets</h3>
        <MyRockets />
      </div>
    </div>
  );
}
