import { combineReducers } from 'redux';
import geoReducer from './geoReducer';

export default combineReducers({
  geoData: geoReducer
})