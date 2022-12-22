import {
  GET_MISSIONS,
  GET_MISSIONS_FULFILLED,
  STATUS_UPDATED,
} from './actions';

export const fetchMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const changeStatus = (payload) => ({
  type: STATUS_UPDATED,
  payload,
});

const missionsReducer = (state = [], action = {}) => {
  let newState = [];
  switch (action.type) {
    case GET_MISSIONS_FULFILLED:
      action.payload.forEach((element) => {
        newState = [
          ...newState,
          {
            id: element.mission_id,
            name: element.mission_name,
            description: element.description,
            reserved: false,
            status: 'NOT A MEMBER',
            join: 'Join Missions',
          },
        ];
      });
      return newState;
    case STATUS_UPDATED: {
      const index = state.indexOf(action.payload);
      newState = [
        // ...state.filter((mission) => mission.id !== action.payload.id),
        ...state.slice(0, index),
        {
          ...action.payload,
          reserved: !action.payload.reserved,
          status: action.payload.reserved ? 'NOT A MEMBER' : 'Active Member',
          join: action.payload.reserved ? 'Join Missions' : 'Leave Missions',
        },
        ...state.slice(index + 1),
      ];
      return newState;
    }
    default:
      return state;
  }
};

export default missionsReducer;
