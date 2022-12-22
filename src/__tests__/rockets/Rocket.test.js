import { Provider } from 'react-redux';
import {
  render,
} from '@testing-library/react';
import Rocket from '../../rockets/Rocket';
import store from '../../ConfigStore';

it('Testing Rockets Page', () => {
  render(
    <Provider store={store}>
      <Rocket id="1" name="test" images="image_01" reserved="false" description="description" />
    </Provider>,
  );
  const rocketItem = document.querySelector('#item-rocket');
  expect(rocketItem).toBeTruthy();
});
