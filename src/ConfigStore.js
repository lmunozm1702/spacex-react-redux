import { configureStore } from '@reduxjs/toolkit';
import Rockets from './rockets/Rockets';
import Missions from './missions/Missions';
import MyProfile from './myprofile/MyProfile';

const store = configureStore({
  reducer: {
    Rockets,
    Missions,
    MyProfile,
  },
});
export default store;
