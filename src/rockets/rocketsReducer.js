const FETCH_ROCKETS = 'rockets/getRockets';
const FETCH_ROCKETS_FULFILLED = 'rockets/getRockets/fulfilled';
const RESERVE_ROCKET = 'rockets/reserveRocket';

function fetchRockets(payload) {
  return {
    type: FETCH_ROCKETS,
    payload,
  };
}

function reserveRocket(payload) {
  return {
    type: RESERVE_ROCKET,
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
            images: element.flickr_images,
            description: element.description,
            reserved: false,
          }];
      });
      return [...result];
    case RESERVE_ROCKET:
      return state.map((rocket) => (rocket.id === action.payload
        ? { ...rocket, reserved: !rocket.reserved }
        : rocket));
    default:
      return [...state];
  }
}

export {
  FETCH_ROCKETS, FETCH_ROCKETS_FULFILLED, RESERVE_ROCKET, reserveRocket, fetchRockets,
};
