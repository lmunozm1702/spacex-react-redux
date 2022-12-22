import { configureStore } from '@reduxjs/toolkit';
import rockets from './rockets/rocketsReducer';
import Missions from './missions/Missions';
import MyProfile from './myprofile/MyProfile';

const store = configureStore({
  reducer: {
    rockets,
    Missions,
    MyProfile,
  },
});
export default store;
