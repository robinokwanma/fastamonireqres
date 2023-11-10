// src/reducers/authReducer.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/actionTypes';

const initialState = {
  user: null,
  error: null,
  isLoading: false,
  userToken: null,
  userId: null,
  // other state properties...
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userToken: action.payload.userToken,
        userId: action.payload.userId,
      };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case LOGOUT:
        return {
          ...state,
          user: null,
        };
    default:
      return state;
  }
};

export default authReducer;
