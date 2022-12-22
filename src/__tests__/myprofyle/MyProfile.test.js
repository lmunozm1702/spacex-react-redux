import { Provider } from 'react-redux';
import {
  render,
} from '@testing-library/react';
import store from '../../ConfigStore';
import MyProfile from '../../myprofile/MyProfile';

it('Testing My Profile Page', () => {
  render(
    <Provider store={store}>
      <MyProfile url="/myprofile" />
    </Provider>,
  );
  const rocketsTitle = document.querySelector('#rockets-title');
  expect(rocketsTitle).toBeTruthy();
});
