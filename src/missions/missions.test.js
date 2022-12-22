import React from 'react';
import Missions from './Missions';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../ConfigStore';
import getMissions from './missionsAPI';
import { fetchMissions, changeStatus } from './missionsReducer';
import { GET_MISSIONS, STATUS_UPDATED } from './actions';

it('Testing Rockets Page', () => {
  const tree = render(
    <Provider store={store}>
      <Missions url="/missions" />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});

it('getMissions should get a data Object', () => {
  let missionList = {};
  missionList = getMissions();
  expect(typeof missionList).toBe('function');
});

it('GET_MISSIONS type should be returned', () => {
  const result = fetchMissions(1);
  expect(result.type).toBe(GET_MISSIONS);
});

it('STATUS_UPDATED type should be returned', () => {
  const result = changeStatus(1);
  expect(result.type).toBe(STATUS_UPDATED);
});
