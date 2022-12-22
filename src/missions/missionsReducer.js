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
            status: 'NOT A MEMBER',
            join: 'Join Missions',
          },
        ];
      });
      return newState;
    case STATUS_UPDATED: {
      newState = [
        ...state.filter((mission) => mission.id !== action.payload.id),
        {
          ...action.payload,
          status:
            action.payload.status === 'NOT A MEMBER'
              ? 'ACTIVE MEMBER'
              : 'NOT A MEMBER',
          join:
            action.payload.status === 'NOT A MEMBER'
              ? 'Leave Missions'
              : 'Join Missions',
        },
      ];
      return newState;
    }
    default:
      return state;
  }
};

export default missionsReducer;

// case FETCH_ROCKETS_FULFILLED:
//       action.payload.forEach((element) => {
//         result = [
//           ...result,
//           {
//             id: element.id,
//             name: element.rocket_name,
//             type: element.rocket_type,
//             images: element.flickr_images,
//           }];
//       });
//       return [...result];
