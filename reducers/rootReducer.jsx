// src/reducers/rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { userReducer } from './userReducer';
// Import other reducers...

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,

  // Add other reducers...
});

export default rootReducer;
