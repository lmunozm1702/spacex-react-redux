import { useSelector } from 'react-redux';

const MyRockets = () => {
  const rocketList = useSelector((state) => state.rockets);
  return rocketList.map((rocket) => (rocket.reserved
    ? <div key={rocket.id}>{rocket.name}</div>
    : null));
};

export default MyRockets;
