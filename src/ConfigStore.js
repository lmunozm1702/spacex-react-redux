import { configureStore } from '@reduxjs/toolkit';
import rockets from './rockets/rocketsReducer';
import missions from './missions/missionsReducer';
import MyProfile from './myprofile/MyProfile';

const store = configureStore({
  reducer: {
    rockets,
    missions,
    MyProfile,
  },
});
export default store;
