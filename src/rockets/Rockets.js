/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../ConfigStore';
import getRockets from './getRocketsAPI';

const Rockets = () => {
  console.log('Hi from Rockets()');
  const rocketList = useSelector((state) => state);

  useEffect(() => {
    store.dispatch(getRockets());
  }, []);

  return (
    <div>
      Rockets!

    </div>
  );
};

export default Rockets;
