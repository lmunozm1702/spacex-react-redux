import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from './rocketsReducer';

const Rocket = (props) => {
  const {
    id, name, type, images,
  } = props;

  const dispatch = useDispatch();

  const handleReserveButton = (event) => {
    event.preventDefault();
    console.log('handleReserveButton', event);
    dispatch(reserveRocket(id));
  };

  return (
    <div key={id}>
      <div>{name}</div>
      <div>{type}</div>
      <div>{images}</div>
      <button type="button" onClick={handleReserveButton}>Reserve Rocket</button>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

export default Rocket;
