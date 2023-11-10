// ... other imports
import {
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_FAILURE,
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_DETAILS_FAILURE,
  // ... other action types
} from '../constants/actionTypes';

const initialState = {
  userDetails: {
  },
  // ... other state properties
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case FETCH_USER_DETAILS_FAILURE:
    case UPDATE_USER_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_USER_DETAILS_SUCCESS:
      // Here you should merge the new data with the existing user details
      return {
        ...state,
        userDetails: { ...state.userDetails, ...action.payload },
      };
    // ... other cases
    default:
      return state;
  }
};