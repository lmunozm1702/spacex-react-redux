import { useSelector } from 'react-redux';

const MyMissions = () => {
  const missionList = useSelector((state) => state.missions);
  return (
    <ul className="list-group w-75">
      {missionList.map((mission) => (mission.reserved ? (
        <li className="list-group-item" key={mission.id}>
          {mission.name}
        </li>
      ) : null))}
    </ul>
  );
};

export default MyMissions;
