import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_MISSIONS, URL } from './actions';
import { fetchMissions } from './missionsReducer';

const getMissions = createAsyncThunk(GET_MISSIONS, async (_, thunkAPI) => {
  const response = await fetch(URL);
  const data = await response.json();
  await thunkAPI.dispatch(fetchMissions(data));
  return data;
});

export default getMissions;
