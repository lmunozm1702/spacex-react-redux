const FETCH_ROCKETS = 'spaceTravelers/rockets/FETCH_ROCKETS';
const FETCH_ROCKETS_FULFILLED = 'spaceTravelers/rockets/FETCH_ROCKETS/fulfilled';

export function fetchRockets(rocketList) {
  console.log('fetchRockets', rocketList);
  let payload = [];
  rocketList.forEach((element) => {
    payload = [
      ...payload,
      {
        id: element.id,
        name: element.rocket_name,
        type: element.rocket_type,
        images: element.flickr_images,
      }];
  });
  console.log('payload', payload);
  return {
    type: FETCH_ROCKETS,
    payload,
  };
}

export default function reducer(state = [], action = {}) {
  console.log('***1***', action.payload);
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...state, action.payload];
    default:
      return [...state];
  }
}

export { FETCH_ROCKETS, FETCH_ROCKETS_FULFILLED };
