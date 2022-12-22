import { useSelector } from 'react-redux';

const MyMissions = () => {
  const missionList = useSelector((state) => state.missions);
  return missionList.map((mission) => (mission.reserved ? (
    <div className="my-item" key={mission.id}>
      {mission.name}
    </div>
  ) : null));
};

export default MyMissions;
