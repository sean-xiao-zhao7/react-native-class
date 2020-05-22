import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':      
      return {...state, errorMessage: action.payload };
    case 'signup':
      return {errorMessage: '', token: action.payload};
    default:
      return state;
  }  
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    console.log(response.data);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signup', payload: response.data.token});
  } catch (err) {
    console.log(err.message);
    dispatch({ type: 'add_error', payload: 'Something wrong.' });
  }    
};


const signin = (dispatch) => {
  return ({ email, password }) => {

  };
};

const signout = (dispatch) => {
  return ({ email }) => {

  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: '' }
);
