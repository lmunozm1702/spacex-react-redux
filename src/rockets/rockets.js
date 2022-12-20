const FETCH_ROCKETS = 'rockets/getRockets';
const FETCH_ROCKETS_FULFILLED = 'rockets/getRockets/fulfilled';

export function fetchRockets(payload) {
  return {
    type: FETCH_ROCKETS,
    payload,
  };
}

export default function reducer(state = [], action = {}) {
  let result = [];
  switch (action.type) {
    case FETCH_ROCKETS_FULFILLED:
      action.payload.forEach((element) => {
        result = [
          ...result,
          {
            id: element.id,
            name: element.rocket_name,
            type: element.rocket_type,
            images: element.flickr_images,
          }];
      });
      return [...result];
    default:
      return [...state];
  }
}

export { FETCH_ROCKETS, FETCH_ROCKETS_FULFILLED };
