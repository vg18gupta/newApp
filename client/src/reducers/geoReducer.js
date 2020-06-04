import { FETCH_GEODATA, FETCH_WEATHER } from '../actions/types';

const initialState = {
  items: undefined,
  weather: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GEODATA:
      console.log("COORDS DATA:", action.payload.coords);
      return {
        ...state,
        items: action.payload
      };
    case FETCH_WEATHER:
      console.log("FETCH_WEATHER", action.payload);
      return {
        ...state,
        weather: action.payload
      };
    default:
      return state;
  }
}