import { combineReducers } from 'redux';
import geoReducer from './geoReducer';
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  geoData: geoReducer
})