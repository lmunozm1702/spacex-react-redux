import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from './rocketsReducer';

const Rocket = (props) => {
  const {
    id, name, images, reserved, description,
  } = props;

  const dispatch = useDispatch();

  const handleReserveButton = (event) => {
    event.preventDefault();
    dispatch(reserveRocket(id));
  };

  return (
    <div key={id} className="rocket-item" id="item-rocket">
      <div>
        <div><img className="rocket-list-image" alt={name} src={images} /></div>
      </div>
      <div>
        <h3>
          {name}
        </h3>
        <div>
          {reserved && (
            <span className="reserved-badge">Reserved</span>
          )}
          {description}
        </div>
        {reserved && (
          <button className="cancel-button" type="button" onClick={handleReserveButton}>Cancel Reservation</button>
        )}
        {!reserved && (
          <button className="reserve-button" type="button" name="ReserveButton" onClick={handleReserveButton}>Reserve Rocket</button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
