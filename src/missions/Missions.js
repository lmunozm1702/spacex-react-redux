/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import getMissions from './missionsAPI';
import store from '../ConfigStore';
import { changeStatus } from './missionsReducer';

const Missions = () => {
  const missionList = useSelector((state) => state.missions);

  const colWidth = { width: '14%' };
  const centered = { textAlign: 'center' };

  useEffect(() => {
    store.dispatch(getMissions());
  }, []);

  const handleUpdate = (mission) => {
    store.dispatch(changeStatus(mission));
  };

  return (
    <>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Discription</th>
            <th style={colWidth}>Status</th>
            <th style={colWidth} />
          </tr>
        </thead>
        <tbody>
          {missionList.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td className="align-middle" style={centered}>
                <span
                  className={
                    mission.status === 'NOT A MEMBER'
                      ? 'badge bg-secondary'
                      : 'badge bg-primary'
                  }
                >
                  {mission.status}
                </span>
              </td>
              <td className="align-middle">
                <button
                  onClick={() => handleUpdate(mission)}
                  type="button"
                  className={
                    mission.status === 'NOT A MEMBER'
                      ? 'btn btn-outline-dark'
                      : 'btn btn-outline-danger'
                  }
                >
                  {mission.join}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Missions;
