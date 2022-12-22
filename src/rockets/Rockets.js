/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import './Rockets.css';

const Rockets = () => {
  const rocketList = useSelector((state) => state.rockets);
  return (
    rocketList.map((rocket) => (
      <ul key={rocket.id}>
        <Rocket
          id={rocket.id}
          name={rocket.name}
          images={rocket.images[0]}
          reserved={rocket.reserved}
          description={rocket.description}
        />
      </ul>
    ))
  );
};

export default Rockets;
