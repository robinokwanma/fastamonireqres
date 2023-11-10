// ... other imports
import axios from 'axios';

export const updateUserDetails = (userDetails) => async (dispatch, getState) => {
  try {
    // Get the user's token from the state
    const { userToken } = getState().auth;

    // Make the PUT request to update user details
    const response = await axios.put('https://reqres.in/api/users/2', userDetails, {
      headers: { Authorization: `Bearer ${userToken}` }
    });

    // Dispatch action to update user details in the store
    dispatch({ type: 'UPDATE_USER_DETAILS_SUCCESS', payload: response.data });
    // You may want to navigate away or show a success message
  } catch (error) {
    // Handle error
    // You may want to dispatch a failure action or show an error message
  }
};

export const fetchUserDetails = (userId) => async (dispatch, getState) => {
  
  try {
    const token = getState().auth.userToken;
    const response = await axios.get(`https://reqres.in/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('Fetched user details:', response.data); // Log the full response
    dispatch({ type: 'FETCH_USER_DETAILS_SUCCESS', payload: response.data.data });
  } catch (error) {
    console.error('Error fetching user details:', error);
    dispatch({ type: 'FETCH_USER_DETAILS_FAILURE', payload: error });
  }
};



