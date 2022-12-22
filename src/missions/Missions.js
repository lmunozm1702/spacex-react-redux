/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSelector } from 'react-redux';
import store from '../ConfigStore';
import { changeStatus } from './missionsReducer';
import './Missions.css';

const Missions = () => {
  const missionList = useSelector((state) => state.missions);
  const handleUpdate = (mission) => {
    store.dispatch(changeStatus(mission));
  };

  return (
    <>
      <table className="missions-table">
        <colgroup>
          <col className="col1" />
          <col className="col2" />
          <col className="col3" />
          <col className="col4" />
        </colgroup>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {missionList.map((mission) => (
            <tr key={mission.id}>
              <td className="fw-bold">{mission.name}</td>
              <td>{mission.description}</td>
              <td className="align-middle">
                <span
                  className={
                    mission.reserved
                      ? 'mission-reserved-badge'
                      : 'not-reserved-badge'
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
                    mission.reserved ? 'button reserved' : 'button not-reserved'
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
