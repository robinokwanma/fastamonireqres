// src/actions/authActions.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT
} from '../constants/actionTypes';
import { CommonActions } from '@react-navigation/native';

// This action creator will be dispatched when the login API call is initiated
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

// This action creator will be dispatched if the login API call is successful
export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: {
    userToken: data.token,
    userId: data.id, // Assuming the login response includes an id
  },
});


// This action creator will be dispatched if the login API call fails
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Thunk action creator for login
export const login = (email, password, navigation) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('https://reqres.in/api/register', { email, password });
    await AsyncStorage.setItem('userToken', response.data.token); // Save the token
    // If login is successful, dispatch the success action
    console.log(response.data)
    dispatch(loginSuccess(response.data));
    navigation.navigate('Tabs'); 
  } catch (error) {
    // If login fails, dispatch the failure action
    dispatch(loginFailure(error.message));
  }
};

// This action creator will be dispatched when the signup API call is initiated
export const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

// This action creator will be dispatched if the signup API call is successful
export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

// This action creator will be dispatched if the signup API call fails
export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

// Thunk action creator for signup
export const signup = (email, password, navigation) => async (dispatch) => {
  dispatch(signupRequest());
  console.log(email)
  try {
    const response = await axios.post('https://reqres.in/api/register', {email, password });
    await AsyncStorage.setItem('userToken', response.data.token); // Save the token
    // If signup is successful, dispatch the success action
    console.log(response.data)
    dispatch(signupSuccess(response.data));
    navigation.navigate('Login'); 
  } catch (error) {
    // If signup fails, dispatch the failure action
    console.log(error.message)
    dispatch(signupFailure(error.message));
  }
};


export const logout = (navigation) => async (dispatch) => {
  await AsyncStorage.removeItem('userToken'); // Remove the token from storage
  dispatch({ type: LOGOUT }); // Dispatch the logout action

  // Reset the navigation state to the initial route
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    })
  );
};
