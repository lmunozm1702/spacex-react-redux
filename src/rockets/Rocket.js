import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from './rocketsReducer';

const Rocket = (props) => {
  const {
    id, name, type, images, reserved,
  } = props;

  const dispatch = useDispatch();

  const handleReserveButton = (event) => {
    event.preventDefault();
    console.log('handleReserveButton', event);
    dispatch(reserveRocket(id));
  };

  return (
    <div key={id}>
      <div>
        {reserved && (
          <span className="reserved-badge">Reserved</span>
        )}
        {name}
      </div>
      <div>{type}</div>
      <div>{images}</div>
      {reserved && (
        <button type="button" onClick={handleReserveButton}>Cancel Reservation</button>
      )}
      {!reserved && (
        <button type="button" onClick={handleReserveButton}>Reserve Rocket</button>
      )}

    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
};

export default Rocket;
