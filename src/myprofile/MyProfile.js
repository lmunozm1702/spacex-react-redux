import MyMissions from '../missions/MyMissions';
import MyRockets from '../rockets/MyRockets';

export default function MyProfile() {
  return (
    <div className="container d-flex justify-content-around mt-5">
      <div className="w-50">
        <h3>My Missions</h3>
        <MyMissions />
      </div>
      <div className="w-50">
        <h3>My Rockets</h3>
        <MyRockets />
      </div>
    </div>
  );
}
