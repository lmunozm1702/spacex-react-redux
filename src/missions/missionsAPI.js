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

// const getRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
//   const response = await fetch(FETCH_ROCKETS_URL, {
//     method: 'GET',
//   });
//   const responseJSON = await response.json();

//   return responseJSON;
// });
