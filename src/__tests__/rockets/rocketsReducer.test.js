import {
  fetchRockets, FETCH_ROCKETS, RESERVE_ROCKET, reserveRocket,
} from '../../rockets/rocketsReducer';

it('Expect FETCH_ROCKETS type returned', () => {
  const result = fetchRockets(1);
  expect(result.type).toBe(FETCH_ROCKETS);
});

it('Expect RESERVE_ROCKETS type returned', () => {
  const result = reserveRocket(1);
  expect(result.type).toBe(RESERVE_ROCKET);
});
