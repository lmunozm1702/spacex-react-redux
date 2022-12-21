import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import getMissions from './missionsAPI';
import store from '../ConfigStore';

const Missions = () => {
  const missionList = useSelector((state) => state.missions);

  useEffect(() => {
    store.dispatch(getMissions());
  }, []);

  return missionList.map((mission) => (
    <div key={mission.id}>
      <div>{mission.id}</div>
      <div>{mission.name}</div>
      <div>{mission.description}</div>
    </div>
  ));
};

export default Missions;
