/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const rocketList = useSelector((state) => state.rockets);
  console.log('rocketList', rocketList);
  return (
    rocketList.map((rocket) => (
      <div key={rocket.id}>
        <Rocket
          id={rocket.id}
          name={rocket.name}
          type={rocket.type}
          images={rocket.images[0]}
          reserved={rocket.reserved}
        />
      </div>
    ))
  );
};

export default Rockets;
