import {combineReducers} from '../libs/redux.js';
import auth from './auth.js'

export default (resources) => {
  
  return combineReducers({
    auth
  });
};