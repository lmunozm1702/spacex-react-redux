import MyMissions from '../missions/MyMissions';
import MyRockets from '../rockets/MyRockets';

export default function MyProfile() {
  return (
    <div>
      <div>
        <h3 id="rockets-title">My Rockets</h3>
        <MyRockets />
      </div>
      <div>
        <h3 id="missions-title">My Rockets</h3>
        <MyMissions />
      </div>
    </div>
  );
}
