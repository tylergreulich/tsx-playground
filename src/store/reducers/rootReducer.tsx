import { combineReducers } from 'redux';
import swReducer from './swReducer';

export default combineReducers({
  sw: swReducer
});
