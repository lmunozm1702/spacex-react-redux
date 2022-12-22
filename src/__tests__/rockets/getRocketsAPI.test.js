import getRockets from '../../rockets/getRocketsAPI';

it('Expects getRockets get a data Object', () => {
  let rocketList = {};
  rocketList = getRockets();
  expect(typeof rocketList).toBe('function');
});
