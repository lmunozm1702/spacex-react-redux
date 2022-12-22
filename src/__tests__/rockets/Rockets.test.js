import { Provider } from 'react-redux';
import {
  render,
} from '@testing-library/react';
import Rockets from '../../rockets/Rockets';
import store from '../../ConfigStore';

it('Testing Rockets Page', () => {
  render(
    <Provider store={store}>
      <Rockets url="/rockets" />
    </Provider>,
  );
  const rocketsTitle = document.querySelector('#rocket-ul');
  expect(rocketsTitle).toBeTruthy();
});
