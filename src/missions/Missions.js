/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSelector } from 'react-redux';
import store from '../ConfigStore';
import { changeStatus } from './missionsReducer';

const Missions = () => {
  const missionList = useSelector((state) => state.missions);

  const colWidth1 = { width: '11%' };
  const colWidth2 = { width: '14%' };
  const centered = { textAlign: 'center' };

  const handleUpdate = (mission) => {
    store.dispatch(changeStatus(mission));
  };

  return (
    <>
      <table className="table table-striped table-bordered mt-5">
        <thead>
          <tr>
            <th style={colWidth1}>Mission</th>
            <th>Description</th>
            <th style={colWidth2}>Status</th>
            <th style={colWidth2} />
          </tr>
        </thead>
        <tbody>
          {missionList.map((mission) => (
            <tr key={mission.id}>
              <td className="fw-bold">{mission.name}</td>
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
