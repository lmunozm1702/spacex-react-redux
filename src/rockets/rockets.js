/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Rockets = () => {
  const rocketList = useSelector((state) => state.rockets);
  return rocketList.map((rocket) => (
    <div key={rocket.id}>
      <div>{rocket.id}</div>
      <div>{rocket.name}</div>
      <div>{rocket.type}</div>
      <div>{rocket.images}</div>
    </div>
  ));
};

export default Rockets;
