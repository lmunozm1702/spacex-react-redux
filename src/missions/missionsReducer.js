import { GET_MISSIONS, GET_MISSIONS_FULFILLED } from './actions';

export const fetchMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

const missionsReducer = (state = [], action = {}) => {
  let result = [];
  switch (action.type) {
    case GET_MISSIONS_FULFILLED:
      action.payload.forEach((element) => {
        result = [
          ...result,
          {
            id: element.mission_id,
            name: element.mission_name,
            description: element.description,
          },
        ];
      });
      return result;
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
