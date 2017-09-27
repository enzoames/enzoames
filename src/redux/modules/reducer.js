import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import multireducer from 'multireducer';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import auth from './auth';
import homegallery from './homegallery';
import coversgallery from './coversgallery';
import {reducer as form} from 'redux-form';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  homegallery,
  coversgallery,
});


// import counter from './counter';
// multireducer: multireducer({
//   counter1: counter,
//   counter2: counter,
//   counter3: counter
// }),