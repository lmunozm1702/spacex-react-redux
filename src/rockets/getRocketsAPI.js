import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRockets } from './rockets';

const FETCH_ROCKETS_URL = 'https://api.spacexdata.com/v3/rockets';
const FETCH_ROCKETS = 'rockets/getRockets';

const getRockets = createAsyncThunk(FETCH_ROCKETS, async (_, thunkAPI) => {
  const response = await fetch(FETCH_ROCKETS_URL, {
    method: 'GET',
  });
  const responseJSON = await response.json();
  await thunkAPI.dispatch(fetchRockets(responseJSON));
  return responseJSON;
});

export default getRockets;
